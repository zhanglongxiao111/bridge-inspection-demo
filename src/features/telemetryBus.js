export const RESOURCE_TELEMETRY_EVENT = 'bridge:resource-telemetry';

const noop = () => {};

function getDocument(root) {
  if (root && root.nodeType === 9) return root;
  if (root && root.ownerDocument) return root.ownerDocument;
  if (typeof document !== 'undefined') return document;
  return null;
}

function getWindow(root) {
  const doc = getDocument(root);
  if (doc && doc.defaultView) return doc.defaultView;
  if (typeof window !== 'undefined') return window;
  return null;
}

function cloneTelemetry(detail) {
  return {
    assets: Array.isArray(detail?.assets)
      ? detail.assets.map((asset) => ({ ...asset }))
      : [],
    updatedAt: detail?.updatedAt || null,
    ...Object.fromEntries(
      Object.entries(detail || {}).filter(([key]) => key !== 'assets' && key !== 'updatedAt')
    ),
  };
}

function normalizeTelemetry(detail = {}) {
  return cloneTelemetry({
    ...detail,
    assets: Array.isArray(detail.assets) ? detail.assets : [],
    updatedAt: detail.updatedAt || new Date().toISOString(),
  });
}

export class TelemetryBus {
  constructor(options = {}) {
    this.eventName = options.eventName || RESOURCE_TELEMETRY_EVENT;
    this.window = options.window || getWindow(options.root);
    this.listeners = new Set();
    this.latest = normalizeTelemetry(
      options.initialSnapshot || this.window?.bridgeInspectionTelemetry || { assets: [] }
    );
    this.handleEvent = this.handleEvent.bind(this);

    if (this.window) {
      this.window.addEventListener(this.eventName, this.handleEvent);
    }
  }

  handleEvent(event) {
    this.latest = normalizeTelemetry(event.detail || {});
    this.notify();
  }

  notify() {
    const detail = this.snapshot();
    this.listeners.forEach((listener) => listener(detail));
  }

  subscribe(listener, options = {}) {
    if (typeof listener !== 'function') return noop;

    this.listeners.add(listener);
    if (options.replay !== false) {
      listener(this.snapshot());
    }

    return () => {
      this.listeners.delete(listener);
    };
  }

  publish(detail = {}) {
    const next = normalizeTelemetry(detail);
    this.latest = next;
    if (this.window) this.window.bridgeInspectionTelemetry = this.snapshot();

    if (!this.window || typeof this.window.CustomEvent !== 'function') {
      this.notify();
      return this.snapshot();
    }

    this.window.dispatchEvent(new this.window.CustomEvent(this.eventName, { detail: next }));
    return this.snapshot();
  }

  snapshot() {
    return cloneTelemetry(this.latest);
  }

  destroy() {
    if (this.window) {
      this.window.removeEventListener(this.eventName, this.handleEvent);
    }
    this.listeners.clear();
  }
}

export function createTelemetryBus(options = {}) {
  return new TelemetryBus(options);
}

export default TelemetryBus;
