export const DEFECT_SEVERITIES = Object.freeze({
  LOW: 'low',
  MEDIUM: 'medium',
  HIGH: 'high',
  CRITICAL: 'critical',
});

export const WORKFLOW_STAGES = Object.freeze({
  DATA: 'data',
  PROCESSING: 'processing',
  VERIFICATION: 'verification',
  TICKETS: 'tickets',
});

export const DEFECT_TYPES = Object.freeze({
  CRACK: 'crack',
  CORROSION: 'corrosion',
  SPALLING: 'spalling',
});

const SEVERITY_VALUES = new Set(Object.values(DEFECT_SEVERITIES));
const STAGE_VALUES = new Set(Object.values(WORKFLOW_STAGES));

export const DEFAULT_DEFECTS = Object.freeze([
  Object.freeze({
    id: 'DEF-102',
    type: DEFECT_TYPES.CRACK,
    label: '深度裂缝',
    description: '南侧索塔混凝土表面纵向深裂缝。',
    severity: DEFECT_SEVERITIES.HIGH,
    localPosition: Object.freeze({ x: 250, y: 110, z: 140 }),
    geoPosition: Object.freeze({ longitude: 113.1234, latitude: 23.5678, altitude: 142.5 }),
    snapshot: Object.freeze({
      imageUrl: '',
      cameraId: 'M30T-ZOOM-02',
      capturedAt: '2026-05-18T00:00:00+08:00',
      missionId: 'ROUTE-B-CABLE-INSPECTION',
      telemetry: Object.freeze({
        altitude: 142.5,
        speed: 0.8,
        battery: 76,
        signal: '4/4',
      }),
    }),
    workflowStage: WORKFLOW_STAGES.VERIFICATION,
  }),
  Object.freeze({
    id: 'DEF-117',
    type: DEFECT_TYPES.SPALLING,
    label: '边缘剥落',
    description: '斜拉索锚固区附近疑似混凝土剥落。',
    severity: DEFECT_SEVERITIES.MEDIUM,
    localPosition: Object.freeze({ x: -180, y: 86, z: -95 }),
    geoPosition: Object.freeze({ longitude: 113.1218, latitude: 23.5685, altitude: 118.2 }),
    snapshot: Object.freeze({
      imageUrl: '',
      cameraId: 'M30T-WIDE-01',
      capturedAt: '2026-05-18T00:04:30+08:00',
      missionId: 'ROUTE-A-PYLON-INSPECTION',
      telemetry: Object.freeze({
        altitude: 118.2,
        speed: 1.4,
        battery: 71,
        signal: '4/4',
      }),
    }),
    workflowStage: WORKFLOW_STAGES.PROCESSING,
  }),
]);

function clone(value) {
  if (typeof structuredClone === 'function') return structuredClone(value);
  return JSON.parse(JSON.stringify(value));
}

function toNumber(value, fallback = 0) {
  const number = Number(value);
  return Number.isFinite(number) ? number : fallback;
}

function normalizeLocalPosition(position = {}) {
  return {
    x: toNumber(position.x),
    y: toNumber(position.y),
    z: toNumber(position.z),
  };
}

function normalizeGeoPosition(position = {}) {
  return {
    longitude: toNumber(position.longitude ?? position.lng),
    latitude: toNumber(position.latitude ?? position.lat),
    altitude: toNumber(position.altitude ?? position.alt),
  };
}

function normalizeSnapshot(snapshot = {}) {
  return {
    imageUrl: snapshot.imageUrl || snapshot.url || '',
    cameraId: snapshot.cameraId || snapshot.camera || '',
    capturedAt: snapshot.capturedAt || new Date().toISOString(),
    missionId: snapshot.missionId || '',
    telemetry: snapshot.telemetry ? clone(snapshot.telemetry) : {},
  };
}

function normalizeBbox(bbox = {}) {
  return {
    x: toNumber(bbox.x),
    y: toNumber(bbox.y),
    width: toNumber(bbox.width),
    height: toNumber(bbox.height),
  };
}

export function normalizeDetection(detection = {}) {
  const label = String(detection.label || detection.type || DEFECT_TYPES.CRACK).toLowerCase();
  return {
    id: String(detection.id || '').trim() || 'DET-UNKNOWN',
    defectId: String(detection.defectId || detection.anchorId || '').trim().toUpperCase(),
    label,
    type: Object.values(DEFECT_TYPES).includes(label) ? label : label.replace(/_/g, '-'),
    confidence: Math.max(0, Math.min(1, toNumber(detection.confidence, 0.72))),
    bbox: normalizeBbox(detection.bbox),
    severity: String(detection.severity || DEFECT_SEVERITIES.MEDIUM).toLowerCase(),
    localPosition: normalizeLocalPosition(detection.localPosition || detection.anchor?.localPosition),
    geoPosition: normalizeGeoPosition(detection.geoPosition || detection.anchor?.geoPosition),
    cameraPosition: detection.cameraPosition ? normalizeLocalPosition(detection.cameraPosition) : undefined,
    source: detection.source || 'mock',
    processedAt: detection.processedAt || new Date().toISOString(),
  };
}

export function normalizeDefect(defect = {}) {
  const id = String(defect.id || '').trim().toUpperCase();
  const severity = String(defect.severity || DEFECT_SEVERITIES.MEDIUM).toLowerCase();
  const workflowStage = String(defect.workflowStage || WORKFLOW_STAGES.DATA).toLowerCase();

  return {
    id: id || 'DEF-UNKNOWN',
    type: defect.type || defect.label || DEFECT_TYPES.CRACK,
    label: defect.label || defect.type || DEFECT_TYPES.CRACK,
    description: defect.description || '',
    confidence: defect.confidence === undefined ? null : Math.max(0, Math.min(1, toNumber(defect.confidence))),
    bbox: defect.bbox ? normalizeBbox(defect.bbox) : null,
    source: defect.source || 'mock',
    severity: SEVERITY_VALUES.has(severity) ? severity : DEFECT_SEVERITIES.MEDIUM,
    localPosition: normalizeLocalPosition(defect.localPosition),
    geoPosition: normalizeGeoPosition(defect.geoPosition),
    cameraPosition: defect.cameraPosition ? normalizeLocalPosition(defect.cameraPosition) : undefined,
    snapshot: normalizeSnapshot(defect.snapshot),
    workflowStage: STAGE_VALUES.has(workflowStage) ? workflowStage : WORKFLOW_STAGES.DATA,
  };
}

export function createDefect(input = {}) {
  return normalizeDefect(input);
}

export function createDefectFromDetection(detection = {}, index = 0) {
  const normalized = normalizeDetection(detection);
  const defectId = normalized.defectId || `DEF-AI-${String(index + 1).padStart(3, '0')}`;

  return normalizeDefect({
    id: defectId,
    type: normalized.type,
    label: normalized.label,
    description: `${normalized.label} 由 ${normalized.source} 检测生成`,
    confidence: normalized.confidence,
    bbox: normalized.bbox,
    source: normalized.source,
    severity: normalized.severity,
    localPosition: normalized.localPosition,
    geoPosition: normalized.geoPosition,
    cameraPosition: normalized.cameraPosition,
    snapshot: {
      imageUrl: '',
      cameraId: 'AI-MOCK-ZOOM',
      capturedAt: normalized.processedAt,
      missionId: 'MOCK-AI-CLOSED-LOOP',
      telemetry: {
        confidence: normalized.confidence,
        detectionId: normalized.id,
        bbox: normalized.bbox,
      },
    },
    workflowStage: normalized.severity === DEFECT_SEVERITIES.HIGH
      || normalized.severity === DEFECT_SEVERITIES.CRITICAL
      ? WORKFLOW_STAGES.VERIFICATION
      : WORKFLOW_STAGES.PROCESSING,
  });
}

export function getDefaultDefects() {
  return clone(DEFAULT_DEFECTS);
}

export function findDefectById(id, defects = DEFAULT_DEFECTS) {
  const normalizedId = String(id || '').trim().toUpperCase();
  const match = defects.find((defect) => defect.id === normalizedId);
  return match ? normalizeDefect(match) : null;
}

export default {
  DEFECT_SEVERITIES,
  DEFECT_TYPES,
  WORKFLOW_STAGES,
  DEFAULT_DEFECTS,
  createDefect,
  createDefectFromDetection,
  findDefectById,
  getDefaultDefects,
  normalizeDetection,
  normalizeDefect,
};
