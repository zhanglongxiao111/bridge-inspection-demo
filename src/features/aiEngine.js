import { createDefectFromDetection, normalizeDetection } from './defectData.js';

export const AI_ENGINE_EVENT = 'bridge:ai-engine-change';
export const AI_DETECTIONS_EVENT = 'bridge:ai-detections-updated';

const noop = () => {};

function getWindow() {
  if (typeof window !== 'undefined') return window;
  return null;
}

function emit(win, name, detail) {
  if (!win || typeof win.CustomEvent !== 'function') return;
  win.dispatchEvent(new win.CustomEvent(name, { detail }));
}

function normalizeDetections(detections = []) {
  return detections.map((item, index) => normalizeDetection({
    id: item.id || `DET-${String(index + 1).padStart(3, '0')}`,
    bbox: item.bbox || { x: 0.32, y: 0.28, width: 0.2, height: 0.14 },
    ...item,
  }));
}

function createMockProvider(options = {}) {
  const labels = options.labels || ['crack', 'corrosion', 'spalling'];
  const anchors = options.anchors || [
    {
      defectId: 'DEF-AI-201',
      severity: 'high',
      localPosition: { x: 188, y: 104, z: 132 },
      geoPosition: { longitude: 113.1231, latitude: 23.5681, altitude: 136.2 },
      cameraPosition: { x: 260, y: 152, z: 230 },
    },
    {
      defectId: 'DEF-AI-202',
      severity: 'medium',
      localPosition: { x: -126, y: 92, z: -118 },
      geoPosition: { longitude: 113.1213, latitude: 23.5688, altitude: 121.4 },
      cameraPosition: { x: -220, y: 140, z: -215 },
    },
    {
      defectId: 'DEF-AI-203',
      severity: 'critical',
      localPosition: { x: 42, y: 76, z: -174 },
      geoPosition: { longitude: 113.1222, latitude: 23.5671, altitude: 109.7 },
      cameraPosition: { x: 120, y: 132, z: -265 },
    },
  ];
  let frame = 0;

  return {
    id: 'mock-detector',
    label: 'Mock Detector',
    async load() {
      return {
        provider: 'mock-detector',
        ready: true,
        modelPath: null,
      };
    },
    async detect(input, detectOptions = {}) {
      frame += 1;
      const seed = String(detectOptions.frameId || detectOptions.assetId || frame).length + frame;
      const count = detectOptions.count || 3;
      const detections = Array.from({ length: count }, (_, index) => {
        const anchor = anchors[(frame + index) % anchors.length];
        const offset = ((seed + index * 17) % 34) / 100;
        return {
          id: `MOCK-${frame}-${index + 1}`,
          defectId: anchor.defectId,
          label: labels[index % labels.length],
          confidence: Math.round((0.76 + offset) * 100) / 100,
          bbox: {
            x: Math.min(0.74, 0.18 + offset),
            y: Math.min(0.72, 0.24 + index * 0.18),
            width: 0.16 + index * 0.03,
            height: 0.11 + index * 0.02,
          },
          severity: anchor.severity,
          localPosition: anchor.localPosition,
          geoPosition: anchor.geoPosition,
          cameraPosition: anchor.cameraPosition,
          source: input ? 'mock' : 'mock-empty-input',
        };
      });

      return {
        provider: 'mock-detector',
        detections: normalizeDetections(detections),
        processedAt: new Date().toISOString(),
      };
    },
  };
}

function createOnnxProvider(options = {}) {
  if (options.enableOnnx !== true) return null;
  const runtime = options.runtime || getWindow()?.ort || globalThis.ort;
  if (!runtime || !options.modelPath) return null;

  return {
    id: 'onnx-detector',
    label: 'ONNX Detector',
    session: null,
    async load() {
      this.session = await runtime.InferenceSession.create(options.modelPath);
      return {
        provider: this.id,
        ready: Boolean(this.session),
        modelPath: options.modelPath,
      };
    },
    async detect(input, detectOptions = {}) {
      if (!this.session) await this.load();
      if (typeof options.preprocess !== 'function' || typeof options.postprocess !== 'function') {
        return {
          provider: this.id,
          detections: [],
          processedAt: new Date().toISOString(),
          warning: 'ONNX session loaded, but preprocess/postprocess hooks are not configured.',
        };
      }

      const feeds = await options.preprocess(input, detectOptions);
      const output = await this.session.run(feeds);
      const detections = await options.postprocess(output, detectOptions);
      return {
        provider: this.id,
        detections: normalizeDetections(detections),
        processedAt: new Date().toISOString(),
      };
    },
  };
}

export function createAiEngine(options = {}) {
  const win = getWindow();
  const provider = options.provider
    || createOnnxProvider(options)
    || createMockProvider(options.mock);

  const state = {
    providerId: provider.id,
    ready: false,
    modelPath: options.modelPath || null,
    lastResult: null,
    updatedAt: new Date().toISOString(),
  };
  let timer = null;

  const publish = () => {
    state.updatedAt = new Date().toISOString();
    const detail = { ...state };
    if (win) win.bridgeAiEngineState = detail;
    emit(win, AI_ENGINE_EVENT, detail);
    if (typeof options.onChange === 'function') options.onChange(detail);
  };

  const publishDetections = (result) => {
    const detections = normalizeDetections(result?.detections || []);
    const defects = detections.map((detection, index) => createDefectFromDetection(detection, index));
    const detail = {
      provider: result?.provider || state.providerId,
      detections,
      defects,
      processedAt: result?.processedAt || new Date().toISOString(),
      source: 'ai-engine',
    };

    if (win) {
      win.bridgeAiDetections = detail;
      emit(win, AI_DETECTIONS_EVENT, detail);
    }
    return detail;
  };

  return {
    provider,
    getState() {
      return { ...state };
    },
    async load() {
      const loaded = typeof provider.load === 'function' ? await provider.load() : { ready: true };
      state.ready = loaded.ready !== false;
      state.providerId = loaded.provider || provider.id;
      state.modelPath = loaded.modelPath || state.modelPath;
      publish();
      if (options.autoStartMock !== false && provider.id === 'mock-detector') this.start();
      return this.getState();
    },
    async detect(input, detectOptions = {}) {
      if (!state.ready && options.autoLoad !== false) {
        await this.load();
      }
      const result = await provider.detect(input, detectOptions);
      state.lastResult = {
        ...result,
        detections: normalizeDetections(result.detections),
      };
      publish();
      publishDetections(state.lastResult);
      return state.lastResult;
    },
    start() {
      if (!win || timer || provider.id !== 'mock-detector') return false;
      const intervalMs = Number(options.intervalMs || options.mock?.intervalMs || 4200);
      const tick = () => this.detect(null, { frameId: `auto-${Date.now()}` });
      tick();
      timer = win.setInterval(tick, intervalMs);
      return true;
    },
    stop() {
      if (!win || !timer) return;
      win.clearInterval(timer);
      timer = null;
    },
    destroy() {
      this.stop();
      noop();
    },
  };
}

export { createMockProvider };
export default createAiEngine;
