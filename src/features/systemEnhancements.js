import { initAccessControl } from './accessControl.js';
import { createAiEngine } from './aiEngine.js';
import { initGeofenceEditor } from './geofenceEditor.js';

const noop = () => {};

function getDocument(root) {
  if (root && root.nodeType === 9) return root;
  if (root && root.ownerDocument) return root.ownerDocument;
  if (typeof document !== 'undefined') return document;
  return null;
}

function createEmptyController() {
  return {
    active: false,
    accessControl: { active: false, destroy: noop },
    geofenceEditor: { active: false, destroy: noop },
    aiEngine: { destroy: noop },
    destroy: noop,
  };
}

export function initSystemEnhancements(options = {}) {
  const root = options.root || getDocument();
  const doc = getDocument(root);

  if (!doc) {
    return createEmptyController();
  }

  const accessControl = initAccessControl({
    root,
    ...(options.accessControl || {}),
  });

  const geofenceEditor = initGeofenceEditor({
    root,
    ...(options.geofence || {}),
  });

  const aiEngine = createAiEngine(options.aiEngine || {});
  const aiEngineReady = options.loadAiEngine === false
    ? Promise.resolve(aiEngine.getState())
    : aiEngine.load();

  return {
    active: accessControl.active || geofenceEditor.active,
    accessControl,
    geofenceEditor,
    aiEngine,
    aiEngineReady,
    destroy() {
      accessControl.destroy();
      geofenceEditor.destroy();
      aiEngine.destroy();
    },
  };
}

export default initSystemEnhancements;
