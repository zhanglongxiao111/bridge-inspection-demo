import { createWeatherEffects } from '../core/weatherEffects.js';

export const DEMO_SIMULATION_EVENT = 'bridge:demo-simulation-change';

const DEFAULT_OPTIONS = {
  seed: 8231,
  intervalMs: 1000,
  autoStart: true,
  initialBattery: 88,
  returnHomeThreshold: 25,
  dockId: 'NEST-BR-01',
  missionId: 'MIS-DEMO-2026-001',
  baseTime: '2026-05-18T00:00:00.000Z',
};

const noop = () => {};

export function initDemoSimulation(options = {}) {
  const config = { ...DEFAULT_OPTIONS, ...options };
  const win = config.window || getWindow();
  const effects = config.weatherEffects || createWeatherEffects({
    scene: config.scene,
    ambientLight: config.ambientLight,
    directionalLight: config.directionalLight,
    water: config.water,
    seed: config.seed,
  });

  const state = {
    config,
    win,
    effects,
    active: false,
    destroyed: false,
    step: 0,
    timerId: null,
    snapshot: createSnapshot(config, 0, resolveExternalSafety(win, config)),
  };

  const controller = {
    get active() {
      return state.active;
    },
    get snapshot() {
      return clone(state.snapshot);
    },
    start() {
      return startSimulation(state, controller);
    },
    stop() {
      return stopSimulation(state, controller);
    },
    destroy() {
      stopSimulation(state, controller);
      state.destroyed = true;
      if (state.effects && typeof state.effects.destroy === 'function' && !config.weatherEffects) {
        state.effects.destroy();
      }
      if (state.win?.bridgeDemoSimulation === controller) {
        delete state.win.bridgeDemoSimulation;
      }
      return controller;
    },
  };

  if (win) win.bridgeDemoSimulation = controller;
  publish(state);
  if (config.autoStart !== false) controller.start();
  return controller;
}

function startSimulation(state, controller) {
  if (state.destroyed || state.active) return controller;

  state.active = true;
  tick(state);
  state.timerId = setInterval(() => tick(state), state.config.intervalMs);
  return controller;
}

function stopSimulation(state, controller) {
  if (state.timerId) clearInterval(state.timerId);
  state.timerId = null;
  state.active = false;
  return controller;
}

function tick(state) {
  if (state.destroyed) return;
  state.step += 1;
  state.snapshot = createSnapshot(state.config, state.step, resolveExternalSafety(state.win, state.config));
  state.effects?.apply?.(state.snapshot);
  state.effects?.update?.(state.config.intervalMs / 1000);
  publish(state);
}

function publish(state) {
  const detail = clone(state.snapshot);
  if (state.win) state.win.bridgeDemoSimulationSnapshot = detail;
  if (state.win && typeof state.win.CustomEvent === 'function') {
    state.win.dispatchEvent(new state.win.CustomEvent(DEMO_SIMULATION_EVENT, { detail }));
  }
  if (typeof state.config.onChange === 'function') state.config.onChange(detail);
  return detail;
}

function createSnapshot(config, step, externalSafety = {}) {
  const t = step + (config.seed % 97);
  const weather = createWeather(config, t);
  const telemetry = createTelemetry(config, t, weather);
  const mission = createMission(config, t, telemetry);
  const ai = createAiState(t, weather, mission);
  const safety = createSafetyAlerts({
    telemetry,
    mission,
    weather,
    externalSafety,
  });

  return {
    weather,
    telemetry,
    mission,
    ai,
    safety,
    meta: {
      source: 'deterministic-demo-simulation',
      seed: config.seed,
      step,
      updatedAt: simulatedIso(config, step),
    },
  };
}

function createWeather(config, t) {
  const windBase = wave(t, 0.11, 4.6, 3.1) + wave(t, 0.031, 0.9, 0.4);
  const rainPulse = Math.max(0, wave(t, 0.047, 1, -0.35));
  const rainRate = round(rainPulse * rainPulse * 18, 1);
  const windSpeed = round(windBase + rainRate * 0.08, 1);
  const gustSpeed = round(windSpeed + 1.2 + wave(t, 0.19, 2.2, 1.7), 1);
  const visibility = round(clamp(10.5 - rainRate * 0.28 - windSpeed * 0.08, 2.1, 12), 1);

  return {
    condition: rainRate > 8 ? 'moderate-rain' : rainRate > 1.6 ? 'light-rain' : 'cloudy',
    windSpeed,
    gustSpeed,
    windDirection: Math.round((config.seed * 13 + t * 7) % 360),
    rainRate,
    visibility,
    fogDensity: round(0.0008 + (12 - visibility) * 0.00026, 5),
    waterDisturbance: round(clamp(rainRate / 24 + gustSpeed / 58, 0, 1), 2),
    lightFactor: round(clamp(1 - rainRate / 85 - (12 - visibility) / 40, 0.48, 1), 2),
  };
}

function createTelemetry(config, t, weather) {
  const consumed = t * 0.115 + weather.windSpeed * 0.025 + weather.rainRate * 0.018;
  const battery = round(clamp(config.initialBattery - consumed, 8, 100), 1);
  const signalQuality = Math.round(clamp(
    94 - weather.rainRate * 1.5 - weather.gustSpeed * 0.55 + wave(t, 0.17, 6, 0),
    18,
    100,
  ));
  const rtkFixed = signalQuality >= 58 && weather.visibility >= 3.5;
  const dockHumidity = Math.round(clamp(54 + weather.rainRate * 1.7 + wave(t, 0.05, 7, 2), 36, 91));

  return {
    droneId: 'M350-RTK-DEMO',
    battery,
    batteryDrainPerMinute: round(0.8 + weather.windSpeed * 0.03 + weather.rainRate * 0.02, 2),
    signalQuality,
    rtkStatus: rtkFixed ? 'FIXED' : signalQuality >= 42 ? 'FLOAT' : 'LOST',
    satellites: Math.round(clamp(28 - weather.rainRate * 0.35 - (rtkFixed ? 0 : 5), 8, 31)),
    altitude: round(72 + wave(t, 0.07, 18, 0), 1),
    speed: round(8.2 + weather.windSpeed * 0.08 + wave(t, 0.13, 1.1, 0), 1),
    dock: {
      id: config.dockId,
      hatch: resolveDockHatch(t),
      temperature: round(23.5 + weather.lightFactor * 3 + wave(t, 0.04, 1.8, 0), 1),
      humidity: dockHumidity,
      charging: battery <= config.returnHomeThreshold + 3,
    },
  };
}

function createMission(config, t, telemetry) {
  const progress = round(clamp((t * 0.82) % 118, 0, 100), 1);
  const returning = telemetry.battery <= config.returnHomeThreshold || progress >= 100;
  const phase = returning ? 'RETURN_HOME' : progress < 8 ? 'TAKEOFF' : 'INSPECTION';

  return {
    id: config.missionId,
    phase,
    progress,
    waypointIndex: Math.min(12, Math.floor(progress / 8.4) + 1),
    waypointTotal: 12,
    returnHomeThreshold: config.returnHomeThreshold,
    estimatedRemainingSec: Math.max(0, Math.round((100 - progress) * 5.8)),
    autoReturnRequired: telemetry.battery <= config.returnHomeThreshold,
  };
}

function createAiState(t, weather, mission) {
  const defectConfidence = round(clamp(0.62 + mission.progress / 360 + wave(t, 0.09, 0.08, 0), 0.58, 0.96), 2);
  const backlog = Math.max(0, Math.round(weather.rainRate / 3 + wave(t, 0.1, 2, 0)));

  return {
    pipeline: 'edge-mock-analysis',
    status: weather.visibility < 3 ? 'degraded' : 'nominal',
    framesProcessed: 420 + Math.floor(t * 14),
    defectCandidates: Math.floor(mission.progress / 28) + backlog,
    lastDetection: {
      id: `SIM-DEF-${String((Math.floor(t / 9) % 12) + 1).padStart(3, '0')}`,
      type: mission.progress > 35 ? 'crack' : 'surface-stain',
      confidence: defectConfidence,
      severity: defectConfidence > 0.86 ? 'high' : 'medium',
    },
  };
}

function createSafetyAlerts({ telemetry, mission, weather, externalSafety }) {
  const alerts = [];
  const obstacleDistance = finiteOr(externalSafety.obstacleDistance, Infinity);
  const waterDistance = finiteOr(externalSafety.waterDistance, Infinity);

  addAlert(alerts, telemetry.battery <= mission.returnHomeThreshold, {
    code: 'LOW_BATTERY',
    level: telemetry.battery <= mission.returnHomeThreshold - 7 ? 'critical' : 'warning',
    message: '电量低于返航安全阈值。',
    value: telemetry.battery,
    threshold: mission.returnHomeThreshold,
  });
  addAlert(alerts, telemetry.signalQuality < 45, {
    code: 'WEAK_SIGNAL',
    level: telemetry.signalQuality < 30 ? 'critical' : 'warning',
    message: '指令链路质量下降。',
    value: telemetry.signalQuality,
    threshold: 45,
  });
  addAlert(alerts, obstacleDistance < 14, {
    code: 'OBSTACLE_PROXIMITY',
    level: obstacleDistance < 5 ? 'critical' : 'warning',
    message: '环境传感器检测到障碍接近。',
    value: round(obstacleDistance, 1),
    threshold: 14,
  });
  addAlert(alerts, waterDistance < 9, {
    code: 'WATER_PROXIMITY',
    level: waterDistance < 2.5 ? 'critical' : 'warning',
    message: '无人机接近水面。',
    value: round(waterDistance, 1),
    threshold: 9,
  });
  addAlert(alerts, weather.gustSpeed >= 14, {
    code: 'GUST_LIMIT',
    level: weather.gustSpeed >= 19 ? 'critical' : 'advisory',
    message: '阵风可能影响云台稳定性。',
    value: weather.gustSpeed,
    threshold: 14,
  });

  const highest = alerts.reduce((current, alert) => (
    severityRank(alert.level) > severityRank(current.level) ? alert : current
  ), { active: false, level: 'normal', code: 'CLEAR', message: '当前无演示安全告警。' });

  return {
    status: alerts.length ? highest.level : 'normal',
    clear: alerts.length === 0,
    alert: {
      active: alerts.length > 0,
      level: highest.level,
      code: highest.code,
      message: highest.message,
    },
    alerts,
    obstacleDistance,
    waterDistance,
    source: externalSafety.source || 'demo-simulation',
  };
}

function resolveExternalSafety(win, config) {
  if (typeof config.getSafetyState === 'function') {
    return normalizeSafetyInput(config.getSafetyState());
  }

  const flightState = win?.bridgeFlightSafetyState || {};
  const environment = win?.bridgeEnvironmentStatus || flightState.sensorSnapshot || {};
  return normalizeSafetyInput({
    source: environment.status ? 'environment-sensors' : 'demo-simulation',
    obstacleDistance: environment.obstacleDistance ?? environment.distance ?? flightState.obstacleDistance,
    waterDistance: environment.water?.distance ?? environment.waterDistance ?? flightState.waterDistance,
  });
}

function normalizeSafetyInput(input = {}) {
  return {
    source: input.source || 'demo-simulation',
    obstacleDistance: finiteOr(input.obstacleDistance, Infinity),
    waterDistance: finiteOr(input.waterDistance, Infinity),
  };
}

function addAlert(alerts, condition, alert) {
  if (condition) alerts.push(alert);
}

function resolveDockHatch(t) {
  const cycle = t % 120;
  if (cycle < 6) return 'OPENING';
  if (cycle < 96) return 'OPEN';
  if (cycle < 102) return 'CLOSING';
  return 'CLOSED';
}

function simulatedIso(config, step) {
  const base = Date.parse(config.baseTime);
  const time = Number.isFinite(base) ? base : 0;
  return new Date(time + step * config.intervalMs).toISOString();
}

function wave(t, frequency, amplitude, offset) {
  return offset + (Math.sin(t * frequency) * 0.5 + 0.5) * amplitude;
}

function severityRank(level) {
  return { normal: 0, advisory: 1, warning: 2, critical: 3 }[level] ?? 0;
}

function finiteOr(value, fallback) {
  const number = Number(value);
  return Number.isFinite(number) ? number : fallback;
}

function round(value, decimals = 0) {
  const scale = 10 ** decimals;
  return Math.round(value * scale) / scale;
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, Number(value)));
}

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

function getWindow() {
  if (typeof window !== 'undefined') return window;
  return null;
}

export default initDemoSimulation;
