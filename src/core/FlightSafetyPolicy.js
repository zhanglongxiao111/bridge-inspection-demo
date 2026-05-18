import { SENSOR_STATUS } from './EnvironmentSensors.js';

const DEFAULT_CONFIG = {
  warningDistance: 12,
  blockedDistance: 4,
  waterWarningDistance: 8,
  waterImpactDistance: 2.2,
  geofenceWarningMargin: 18,
};

const ALL_INPUTS_ALLOWED = Object.freeze({
  w: true,
  a: true,
  s: true,
  d: true,
  space: true,
  shift: true,
  q: true,
  e: true,
});

export function createFlightSafetyPolicy(config = {}) {
  return new FlightSafetyPolicy(config);
}

export function evaluateFlightSafety(drone, sensors, config = {}) {
  return new FlightSafetyPolicy(config).evaluate(drone, sensors);
}

export class FlightSafetyPolicy {
  constructor(config = {}) {
    this.config = { ...DEFAULT_CONFIG, ...config };
  }

  updateConfig(config = {}) {
    this.config = { ...this.config, ...config };
    return this;
  }

  evaluate(drone, sensors, config = {}) {
    const options = { ...this.config, ...config };
    const snapshot = resolveSensorSnapshot(drone, sensors);
    const directions = snapshot.directions ?? {};
    const waterDistance = snapshot.water?.distance ?? snapshot.waterHit?.distance ?? Infinity;
    const nearestObstacle = snapshot.nearestObstacle ?? snapshot.hits?.[0] ?? null;
    const obstacleDistance = nearestObstacle?.distance ?? snapshot.distance ?? Infinity;
    const blockedDirections = resolveBlockedDirections(directions, options);
    const warningDirections = resolveWarningDirections(directions, options);
    const inputMask = createInputMask(blockedDirections, snapshot.hits ?? [], options);
    const geofence = resolveGeofenceState(drone, options.geofence);

    if (waterDistance <= options.waterImpactDistance || snapshot.status === SENSOR_STATUS.WATER_IMPACT) {
      return createSafetyState({
        status: SENSOR_STATUS.WATER_IMPACT,
        reason: 'water-impact',
        distance: waterDistance,
        obstacleDistance,
        waterDistance,
        snapshot,
        blockedDirections,
        warningDirections,
        inputMask: disableTranslationalInput(inputMask),
        action: 'water-impact',
        alertLevel: 'critical',
        geofence,
      });
    }

    if (geofence.violation) {
      return createSafetyState({
        status: SENSOR_STATUS.BLOCKED,
        reason: 'geofence-exit',
        distance: geofence.distance,
        obstacleDistance,
        waterDistance,
        snapshot,
        blockedDirections: ['geofence'],
        warningDirections,
        inputMask: disableTranslationalInput(inputMask),
        action: 'geofence-hold',
        alertLevel: 'danger',
        geofence,
      });
    }

    if (blockedDirections.length > 0 || obstacleDistance <= options.blockedDistance) {
      return createSafetyState({
        status: SENSOR_STATUS.BLOCKED,
        reason: blockedDirections.length > 0 ? `obstacle-${blockedDirections[0]}` : 'obstacle-near',
        distance: obstacleDistance,
        obstacleDistance,
        waterDistance,
        snapshot,
        blockedDirections,
        warningDirections,
        inputMask,
        action: 'limit-input',
        alertLevel: 'danger',
        avoidanceVector: createAvoidanceVector(blockedDirections),
        geofence,
      });
    }

    if (
      warningDirections.length > 0 ||
      obstacleDistance <= options.warningDistance ||
      waterDistance <= options.waterWarningDistance ||
      geofence.warning ||
      snapshot.status === SENSOR_STATUS.WARNING
    ) {
      const waterIsClosest = waterDistance <= obstacleDistance && waterDistance <= options.waterWarningDistance;

      return createSafetyState({
        status: SENSOR_STATUS.WARNING,
        reason: geofence.warning ? 'geofence-boundary' : waterIsClosest ? 'water-proximity' : `obstacle-${warningDirections[0] ?? 'near'}`,
        distance: Math.min(obstacleDistance, waterDistance, geofence.distance),
        obstacleDistance,
        waterDistance,
        snapshot,
        blockedDirections,
        warningDirections,
        inputMask,
        action: 'warn',
        alertLevel: 'warning',
        geofence,
      });
    }

    return createSafetyState({
      status: SENSOR_STATUS.CLEAR,
      reason: 'clear',
      distance: Math.min(obstacleDistance, waterDistance),
      obstacleDistance,
      waterDistance,
      snapshot,
      blockedDirections,
      warningDirections,
      inputMask,
      action: 'none',
      alertLevel: 'info',
      geofence,
    });
  }
}

function resolveSensorSnapshot(drone, sensors) {
  if (sensors && typeof sensors.scan === 'function') {
    return sensors.scan({ object: drone?.mesh ?? drone });
  }

  return sensors ?? {};
}

function resolveBlockedDirections(directions, options) {
  return Object.entries(directions)
    .filter(([, reading]) => reading?.distance <= options.blockedDistance)
    .map(([directionId]) => directionId);
}

function resolveWarningDirections(directions, options) {
  return Object.entries(directions)
    .filter(([, reading]) => reading?.distance <= options.warningDistance)
    .map(([directionId]) => directionId);
}

function createInputMask(blockedDirections, hits, options) {
  const inputMask = { ...ALL_INPUTS_ALLOWED };
  const blockedHitIds = hits
    .filter((hit) => hit.distance <= options.blockedDistance)
    .map((hit) => hit.sensorId);

  if (blockedDirections.includes('front')) inputMask.w = false;
  if (blockedDirections.includes('back')) inputMask.s = false;
  if (blockedDirections.includes('left')) inputMask.a = false;
  if (blockedDirections.includes('right')) inputMask.d = false;
  if (blockedDirections.includes('up')) inputMask.space = false;
  if (blockedDirections.includes('down')) inputMask.shift = false;
  if (blockedHitIds.includes('left')) inputMask.a = false;
  if (blockedHitIds.includes('right')) inputMask.d = false;

  return inputMask;
}

function disableTranslationalInput(inputMask) {
  return {
    ...inputMask,
    w: false,
    a: false,
    s: false,
    d: false,
    space: false,
    shift: false,
  };
}

function createSafetyState({
  status,
  reason,
  distance,
  obstacleDistance,
  waterDistance,
  snapshot,
  blockedDirections,
  warningDirections,
  inputMask,
  action,
  alertLevel,
  avoidanceVector,
  geofence = { enabled: false, warning: false, violation: false, distance: Infinity },
}) {
  return {
    status,
    clear: status === SENSOR_STATUS.CLEAR,
    warning: status === SENSOR_STATUS.WARNING,
    blocked: status === SENSOR_STATUS.BLOCKED,
    waterImpact: status === SENSOR_STATUS.WATER_IMPACT,
    reason,
    distance,
    obstacleDistance,
    waterDistance,
    blockedDirections,
    warningDirections,
    inputMask,
    action,
    avoidanceVector: avoidanceVector ?? null,
    geofence,
    alert: {
      active: status !== SENSOR_STATUS.CLEAR,
      level: alertLevel,
      message: createAlertMessage(status, reason),
    },
    sensorSnapshot: snapshot,
  };
}

function createAlertMessage(status, reason) {
  if (status === SENSOR_STATUS.WATER_IMPACT) {
    return '检测到坠水风险，无人机已悬停并暂停任务。';
  }

  if (status === SENSOR_STATUS.BLOCKED) {
    if (reason === 'geofence-exit') {
      return '已越过电子围栏边界，无人机保持悬停。';
    }

    return `飞行路径受阻：${translateReason(reason)}。`;
  }

  if (status === SENSOR_STATUS.WARNING) {
    if (reason === 'geofence-boundary') {
      return '正在接近电子围栏边界。';
    }

    return `飞行安全告警：${translateReason(reason)}。`;
  }

  return '飞行路径正常。';
}

function translateReason(reason) {
  const labels = {
    clear: '正常',
    'water-impact': '坠水风险',
    'water-proximity': '接近水面',
    'geofence-exit': '越过电子围栏',
    'geofence-boundary': '接近电子围栏',
    'obstacle-near': '障碍物过近',
    'obstacle-front': '前方障碍',
    'obstacle-back': '后方障碍',
    'obstacle-left': '左侧障碍',
    'obstacle-right': '右侧障碍',
    'obstacle-up': '上方障碍',
    'obstacle-down': '下方障碍'
  };
  return labels[reason] || reason || '未知风险';
}

function createAvoidanceVector(blockedDirections = []) {
  if (blockedDirections.includes('front')) return { x: 1, y: 0.18, z: 0 };
  if (blockedDirections.includes('left')) return { x: 1, y: 0.08, z: 0 };
  if (blockedDirections.includes('right')) return { x: -1, y: 0.08, z: 0 };
  if (blockedDirections.includes('back')) return { x: 0, y: 0.1, z: -1 };
  if (blockedDirections.includes('down')) return { x: 0, y: 1, z: 0 };
  if (blockedDirections.includes('up')) return { x: 1, y: 0, z: 0 };
  return { x: 1, y: 0.1, z: 0 };
}

function resolveGeofenceState(drone, geofence) {
  const empty = { enabled: false, warning: false, violation: false, distance: Infinity, point: null };
  if (!geofence?.enabled || !Array.isArray(geofence.polygon) || geofence.polygon.length < 3) {
    return empty;
  }

  const position = drone?.mesh?.position ?? drone?.position ?? {};
  const point = {
    x: Number(position.x ?? 0),
    y: Number(position.z ?? 0),
  };
  const polygon = geofence.polygon.map((item) => ({
    x: Number(item.x),
    y: Number(item.y),
  })).filter((item) => Number.isFinite(item.x) && Number.isFinite(item.y));

  if (polygon.length < 3) return empty;

  const inside = pointInPolygon(point, polygon);
  const distance = distanceToPolygon(point, polygon);

  return {
    enabled: true,
    warning: inside && distance <= (geofence.warningMargin ?? DEFAULT_CONFIG.geofenceWarningMargin),
    violation: !inside,
    distance,
    point,
    polygon,
    updatedAt: geofence.updatedAt,
  };
}

function pointInPolygon(point, polygon) {
  let inside = false;

  for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i, i += 1) {
    const a = polygon[i];
    const b = polygon[j];
    const intersects = ((a.y > point.y) !== (b.y > point.y)) &&
      (point.x < ((b.x - a.x) * (point.y - a.y)) / ((b.y - a.y) || 1e-6) + a.x);
    if (intersects) inside = !inside;
  }

  return inside;
}

function distanceToPolygon(point, polygon) {
  let minDistance = Infinity;

  for (let i = 0; i < polygon.length; i += 1) {
    const a = polygon[i];
    const b = polygon[(i + 1) % polygon.length];
    minDistance = Math.min(minDistance, distanceToSegment(point, a, b));
  }

  return minDistance;
}

function distanceToSegment(point, a, b) {
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  const lengthSq = dx * dx + dy * dy;
  const t = lengthSq === 0 ? 0 : Math.max(0, Math.min(1, ((point.x - a.x) * dx + (point.y - a.y) * dy) / lengthSq));
  const x = a.x + t * dx;
  const y = a.y + t * dy;
  return Math.hypot(point.x - x, point.y - y);
}
