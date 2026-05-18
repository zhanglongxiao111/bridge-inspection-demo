import { DRONE_PHOTO_FLASH_EVENT } from '../../modules/Drone.js';
import { AI_DETECTIONS_EVENT } from './aiEngine.js';

export const INSPECTION_CAPTURE_EVENT = 'bridge:inspection-capture';

const noop = () => {};

export function initFpvCaptureService(options = {}) {
  return new FpvCaptureService(options);
}

export function createFpvCaptureService(options = {}) {
  return new FpvCaptureService(options);
}

export class FpvCaptureService {
  constructor(options = {}) {
    this.window = options.window || getWindow(options.root);
    this.liveFpvPreview = options.liveFpvPreview || null;
    this.runtimeStore = options.runtimeStore || null;
    this.getTelemetrySnapshot = options.getTelemetrySnapshot || null;
    this.getDetections = options.getDetections || null;
    this.onCapture = options.onCapture || noop;
    this.captureEventName = options.captureEventName || INSPECTION_CAPTURE_EVENT;
    this.flashEventName = options.flashEventName || DRONE_PHOTO_FLASH_EVENT;
    this.latestDetections = readWindowDetections(this.window);
    this.active = Boolean(this.window);
    this.captureCount = 0;

    this.handleFlash = this.handleFlash.bind(this);
    this.handleDetections = this.handleDetections.bind(this);

    if (this.active && options.autoStart !== false) {
      this.start();
    }
  }

  start() {
    if (!this.active || this.started) return this;
    this.window.addEventListener(this.flashEventName, this.handleFlash);
    this.window.addEventListener(AI_DETECTIONS_EVENT, this.handleDetections);
    this.started = true;
    return this;
  }

  stop() {
    if (!this.active || !this.started) return this;
    this.window.removeEventListener(this.flashEventName, this.handleFlash);
    this.window.removeEventListener(AI_DETECTIONS_EVENT, this.handleDetections);
    this.started = false;
    return this;
  }

  destroy() {
    this.stop();
    this.active = false;
  }

  handleDetections(event) {
    const detections = event.detail?.detections;
    if (Array.isArray(detections)) {
      this.latestDetections = clone(detections);
    }
  }

  async handleFlash(event) {
    const flash = normalizeFlashDetail(event.detail);
    const runtimeSnapshot = this.readRuntimeSnapshot();
    const telemetry = this.readTelemetrySnapshot(runtimeSnapshot);
    const detections = this.readDetections(runtimeSnapshot);
    const frame = await this.captureFrame(detections);
    const captureRecord = this.createCaptureRecord({
      flash,
      frame,
      telemetry,
      runtimeSnapshot,
      detections
    });

    if (typeof this.runtimeStore?.addCapture === 'function') {
      this.runtimeStore.addCapture(captureRecord);
    }

    this.dispatchCapture(captureRecord);
    this.onCapture(captureRecord);
    return captureRecord;
  }

  async captureFrame(detections) {
    const captureFrame = this.liveFpvPreview?.captureFrame;
    if (typeof captureFrame !== 'function') {
      return {
        imageUrl: '',
        width: 0,
        height: 0,
        capturedAt: new Date().toISOString()
      };
    }

    try {
      return await Promise.resolve(captureFrame.call(this.liveFpvPreview, {
        overlayDetections: detections
      }));
    } catch (error) {
      console.warn('[FpvCaptureService] FPV capture failed.', error);
      return {
        imageUrl: '',
        width: 0,
        height: 0,
        capturedAt: new Date().toISOString(),
        error: error?.message || 'capture-failed'
      };
    }
  }

  readRuntimeSnapshot() {
    if (typeof this.runtimeStore?.snapshot === 'function') {
      return clone(this.runtimeStore.snapshot());
    }

    return clone(this.window?.bridgeInspectionRuntime || null);
  }

  readTelemetrySnapshot(runtimeSnapshot) {
    if (typeof this.getTelemetrySnapshot === 'function') {
      return clone(this.getTelemetrySnapshot());
    }

    if (runtimeSnapshot?.telemetry) return clone(runtimeSnapshot.telemetry);
    if (runtimeSnapshot?.resource) return clone(runtimeSnapshot.resource);
    if (this.window?.bridgeInspectionTelemetry) return clone(this.window.bridgeInspectionTelemetry);
    if (this.window?.bridgeDemoTelemetrySnapshot) return clone(this.window.bridgeDemoTelemetrySnapshot);
    return {};
  }

  readDetections(runtimeSnapshot) {
    if (typeof this.getDetections === 'function') {
      const detections = this.getDetections();
      if (Array.isArray(detections)) return clone(detections);
    }

    if (Array.isArray(runtimeSnapshot?.ai?.detections)) {
      return clone(runtimeSnapshot.ai.detections);
    }

    const windowDetections = readWindowDetections(this.window);
    if (windowDetections.length) {
      this.latestDetections = windowDetections;
      return clone(windowDetections);
    }

    return clone(this.latestDetections);
  }

  createCaptureRecord({ flash, frame, telemetry, runtimeSnapshot, detections }) {
    this.captureCount += 1;
    const capturedAt = frame?.capturedAt || flash.timestamp || new Date().toISOString();
    const primaryDetection = detections[0] || null;
    const primaryDefect = findDefect(runtimeSnapshot?.ai?.defects, primaryDetection?.defectId);
    const position = flash.position || runtimeSnapshot?.position || {};
    const state = flash.state || runtimeSnapshot?.flightState || '';
    const id = `CAP-FPV-${compactTimestamp(capturedAt)}-${String(this.captureCount).padStart(3, '0')}`;

    return {
      id,
      source: 'fpv-capture-service',
      imageUrl: frame?.imageUrl || '',
      width: Number(frame?.width || 0),
      height: Number(frame?.height || 0),
      capturedAt,
      state,
      position: vectorToPlain(position),
      flash,
      telemetry: telemetry || {},
      mission: clone(runtimeSnapshot?.mission || this.window?.bridgeMissionSnapshot || {}),
      weather: clone(runtimeSnapshot?.weather || this.window?.bridgeWeatherSnapshot || {}),
      safety: clone(runtimeSnapshot?.safety || this.window?.bridgeFlightSafetyState || {}),
      detectionId: primaryDetection?.id || '',
      defectId: primaryDetection?.defectId || primaryDetection?.anchorId || '',
      defect: primaryDefect,
      bbox: primaryDetection?.bbox || null,
      label: primaryDetection?.label || primaryDetection?.type || 'fpv-capture',
      severity: primaryDetection?.severity || 'medium',
      detection: primaryDetection,
      detections: clone(detections),
      snapshot: {
        imageUrl: frame?.imageUrl || '',
        width: Number(frame?.width || 0),
        height: Number(frame?.height || 0),
        capturedAt,
        cameraId: 'FPV-LIVE',
        telemetry: telemetry || {}
      }
    };
  }

  dispatchCapture(captureRecord) {
    if (!this.window || typeof this.window.CustomEvent !== 'function') return false;
    this.window.dispatchEvent(new this.window.CustomEvent(this.captureEventName, {
      detail: captureRecord
    }));
    return true;
  }
}

function findDefect(defects = [], id = '') {
  const target = String(id || '').toUpperCase();
  if (!target || !Array.isArray(defects)) return null;
  return clone(defects.find((defect) => String(defect.id || defect.defectId || '').toUpperCase() === target) || null);
}

function getWindow(root) {
  if (root?.defaultView) return root.defaultView;
  if (root?.ownerDocument?.defaultView) return root.ownerDocument.defaultView;
  if (typeof window !== 'undefined') return window;
  return null;
}

function readWindowDetections(win) {
  const detections = win?.bridgeAiDetections?.detections;
  return Array.isArray(detections) ? clone(detections) : [];
}

function normalizeFlashDetail(detail = {}) {
  return {
    position: detail.position ? vectorToPlain(detail.position) : null,
    state: detail.state || '',
    timestamp: detail.timestamp || new Date().toISOString()
  };
}

function vectorToPlain(vector = {}) {
  return {
    x: Number(vector.x ?? 0),
    y: Number(vector.y ?? 0),
    z: Number(vector.z ?? 0)
  };
}

function compactTimestamp(value) {
  return String(value || new Date().toISOString()).replace(/\D/g, '').slice(0, 17);
}

function clone(value) {
  if (value == null) return value;
  if (typeof structuredClone === 'function') return structuredClone(value);
  return JSON.parse(JSON.stringify(value));
}

export default initFpvCaptureService;
