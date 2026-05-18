export const INSPECTION_RUNTIME_EVENT = 'bridge:inspection-runtime-change';
export const DEFECT_SELECTION_EVENT = 'bridge:defect-selection-requested';

const DEFAULT_STATE = Object.freeze({
  flightState: 'IDLE',
  position: Object.freeze({ x: 0, y: 0, z: 0 }),
  mission: Object.freeze({ phase: '待命', progress: 0, waypointIndex: 0, waypointTotal: 0 }),
  weather: Object.freeze({ windSpeed: 0, rainRate: 0, temperatureC: 0, humidity: 0, visibility: 0 }),
  telemetry: Object.freeze({ battery: 0, signalQuality: 0, rtkStatus: 'FIXED' }),
  safety: Object.freeze({ status: 'clear', alerts: [] }),
  resource: Object.freeze({ assets: [] }),
  ai: Object.freeze({ detections: [] }),
  captures: Object.freeze([]),
  selectedDefect: null,
  updatedAt: '',
});

function clone(value) {
  return JSON.parse(JSON.stringify(value, (key, nested) => {
    if (typeof nested === 'function') return undefined;
    if (nested?.isObject3D || nested?.isMaterial || nested?.isBufferGeometry) return undefined;
    if (key === 'element' || key === 'card' || key === 'object' || key === 'group' || key === 'parent') return undefined;
    return nested;
  }));
}

function getWindow() {
  return typeof window !== 'undefined' ? window : null;
}

function vectorToPlain(vector = {}) {
  return {
    x: Number(vector.x ?? 0),
    y: Number(vector.y ?? 0),
    z: Number(vector.z ?? 0),
  };
}

function normalizeWeather(input = {}) {
  return {
    condition: input.condition || 'cloudy',
    windSpeed: Number(input.windSpeed ?? input.windSpeedMps ?? 0),
    gustSpeed: Number(input.gustSpeed ?? 0),
    rainRate: Number(input.rainRate ?? input.rainfall ?? 0),
    temperatureC: Number(input.temperatureC ?? input.temperature ?? input.dock?.temperature ?? 24),
    humidity: Number(input.humidity ?? input.dockHumidity ?? input.dock?.humidity ?? 58),
    visibility: Number(input.visibility ?? input.visibilityKm ?? 8),
  };
}

function normalizeMission(input = {}) {
  return {
    id: input.id || '',
    phase: input.phase || 'IDLE',
    progress: Number(input.progress ?? 0),
    waypointIndex: Number(input.waypointIndex ?? 0),
    waypointTotal: Number(input.waypointTotal ?? 0),
    estimatedRemainingSec: Number(input.estimatedRemainingSec ?? 0),
  };
}

function normalizeTelemetry(input = {}) {
  return {
    droneId: input.droneId || 'M350-RTK-DEMO',
    battery: Number(input.battery ?? 0),
    signalQuality: Number(input.signalQuality ?? input.networkMbps ?? 0),
    signalBars: Number(input.signalBars ?? Math.max(1, Math.min(4, Math.ceil(Number(input.signalQuality ?? 88) / 25)))),
    rtkStatus: input.rtkStatus || 'FIXED',
    satellites: Number(input.satellites ?? 0),
    altitude: Number(input.altitude ?? 0),
    speed: Number(input.speed ?? 0),
    dock: input.dock || {},
  };
}

function normalizeResource(input = {}) {
  return {
    assets: Array.isArray(input.assets) ? input.assets : [],
    updatedAt: input.updatedAt || new Date().toISOString(),
  };
}

function normalizeSafety(input = {}) {
  const alerts = Array.isArray(input.alerts) ? input.alerts : [];
  return {
    ...input,
    status: input.status || input.level || 'clear',
    reason: input.reason || input.message || '',
    alerts,
  };
}

function normalizeDetections(input = {}) {
  const detections = Array.isArray(input) ? input : input.detections;
  return {
    detections: Array.isArray(detections) ? detections : [],
    defects: Array.isArray(input.defects) ? input.defects : [],
    provider: input.provider || input.source || 'runtime',
    processedAt: input.processedAt || new Date().toISOString(),
  };
}

function normalizeCapture(record = {}) {
  const id = record.id || `CAP-${Date.now()}-${Math.round(Math.random() * 999)}`;
  return {
    id,
    defectId: record.defectId || record.defect?.id || '',
    detectionId: record.detectionId || record.detection?.id || '',
    imageUrl: record.imageUrl || record.snapshot?.imageUrl || '',
    capturedAt: record.capturedAt || new Date().toISOString(),
    bbox: record.bbox || record.detection?.bbox || null,
    label: record.label || record.detection?.label || record.defect?.label || '异常',
    severity: record.severity || record.defect?.severity || record.detection?.severity || 'medium',
    telemetry: record.telemetry || {},
    weather: record.weather || {},
    safety: record.safety || {},
    defect: record.defect || null,
  };
}

export function createInspectionRuntimeStore(options = {}) {
  const win = options.window || getWindow();
  const state = clone(DEFAULT_STATE);
  const listeners = new Set();

  function publish(reason = 'update') {
    state.updatedAt = new Date().toISOString();
    const detail = store.snapshot();
    detail.reason = reason;
    if (win) {
      win.bridgeInspectionRuntime = detail;
      if (typeof win.CustomEvent === 'function') {
        win.dispatchEvent(new win.CustomEvent(INSPECTION_RUNTIME_EVENT, { detail }));
      }
    }
    listeners.forEach((listener) => listener(detail));
    return detail;
  }

  function merge(partial = {}, reason = 'merge') {
    Object.entries(partial).forEach(([key, value]) => {
      if (value !== undefined) state[key] = value;
    });
    return publish(reason);
  }

  const store = {
    subscribe(listener) {
      if (typeof listener !== 'function') return () => {};
      listeners.add(listener);
      listener(store.snapshot());
      return () => listeners.delete(listener);
    },
    snapshot() {
      return clone(state);
    },
    syncFrame({ drone, simulation, safety, resource, ai } = {}) {
      const position = drone?.mesh?.position ? vectorToPlain(drone.mesh.position) : state.position;
      const next = {
        flightState: drone?.state || state.flightState,
        position,
      };
      if (simulation?.weather) next.weather = normalizeWeather({
        ...simulation.weather,
        temperatureC: simulation.telemetry?.dock?.temperature,
        humidity: simulation.telemetry?.dock?.humidity,
      });
      if (simulation?.mission) next.mission = normalizeMission(simulation.mission);
      if (simulation?.telemetry) next.telemetry = normalizeTelemetry(simulation.telemetry);
      if (safety) next.safety = normalizeSafety(safety);
      if (resource) next.resource = normalizeResource(resource);
      if (ai) next.ai = normalizeDetections(ai);
      return merge(next, 'frame');
    },
    updateSimulation(snapshot = {}) {
      return merge({
        weather: normalizeWeather({
          ...snapshot.weather,
          temperatureC: snapshot.telemetry?.dock?.temperature,
          humidity: snapshot.telemetry?.dock?.humidity,
        }),
        telemetry: normalizeTelemetry(snapshot.telemetry),
        mission: normalizeMission(snapshot.mission),
        ai: normalizeDetections(snapshot.ai),
      }, 'simulation');
    },
    updateSafety(safety = {}) {
      return merge({ safety: normalizeSafety(safety) }, 'safety');
    },
    updateResource(resource = {}) {
      return merge({ resource: normalizeResource(resource) }, 'resource');
    },
    updateAi(ai = {}) {
      return merge({ ai: normalizeDetections(ai) }, 'ai');
    },
    addCapture(record = {}) {
      const capture = normalizeCapture(record);
      state.captures = [capture, ...state.captures.filter((item) => item.id !== capture.id)].slice(0, 80);
      publish('capture');
      return capture;
    },
    selectDefect(id, detail = {}) {
      const selected = {
        id: String(id || detail.defect?.id || '').toUpperCase(),
        ...detail,
        selectedAt: new Date().toISOString(),
      };
      state.selectedDefect = selected;
      publish('select-defect');
      if (win && typeof win.CustomEvent === 'function') {
        win.dispatchEvent(new win.CustomEvent(DEFECT_SELECTION_EVENT, { detail: selected }));
      }
      return selected;
    },
  };

  publish('init');
  return store;
}

export default createInspectionRuntimeStore;
