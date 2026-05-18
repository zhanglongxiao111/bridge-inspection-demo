const PUBLIC_BASE = import.meta.env?.BASE_URL ?? '/';

export function assetUrl(path = '') {
  const normalizedPath = String(path).replace(/^\/+/, '');
  const normalizedBase = PUBLIC_BASE.endsWith('/') ? PUBLIC_BASE : `${PUBLIC_BASE}/`;

  return `${normalizedBase}${normalizedPath}`;
}

export const ASSETS = {
  textures: {
    crack: assetUrl('textures/crack.png'),
  },
  ui: {
    dock: assetUrl('ui/dock.png'),
    drone: assetUrl('ui/drone.png'),
    fleet: assetUrl('ui/fleet.png'),
    fpv: assetUrl('ui/fpv.png'),
    liveFeed: assetUrl('ui/live-feed.png'),
    map: assetUrl('ui/map.png'),
  },
  icons: {
    favicon: assetUrl('icons/favicon.svg'),
    sprite: assetUrl('icons/icons.svg'),
  },
};

export const MODEL_ASSETS = {
  bridge: assetUrl('models/bridge.glb'),
  drone: assetUrl('models/drone.glb'),
  dock: assetUrl('models/dock.glb'),
};

export const AI_MODEL_ASSETS = {
  crackDetector: assetUrl('models/ai/crack-detector.onnx'),
  corrosionSegmenter: assetUrl('models/ai/corrosion-segmenter.onnx'),
  spallingClassifier: assetUrl('models/ai/spalling-classifier.onnx'),
};

// Legacy root files remain as transitional aliases while index.html still references /file.png.
export const LEGACY_PUBLIC_ALIASES = {
  crack: assetUrl('crack.png'),
  dock: assetUrl('dock.png'),
  drone: assetUrl('drone.png'),
  favicon: assetUrl('favicon.svg'),
  fleet: assetUrl('fleet.png'),
  fpv: assetUrl('fpv.png'),
  icons: assetUrl('icons.svg'),
  liveFeed: assetUrl('live_feed.png'),
  map: assetUrl('map.png'),
};
