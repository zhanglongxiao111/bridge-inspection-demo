import * as THREE from 'three';

const DEFAULT_OPTIONS = {
  rainDropCount: 220,
  rainArea: 820,
  rainHeight: 360,
  seed: 2147,
};

const noop = () => {};

export function createWeatherEffects(options = {}) {
  const state = {
    options: { ...DEFAULT_OPTIONS, ...options },
    scene: options.scene || null,
    ambientLight: options.ambientLight || getGlobalLight('ambientLight'),
    directionalLight: options.directionalLight || getGlobalLight('directionalLight'),
    water: options.water || null,
    rain: null,
    rainPositions: null,
    originalFog: null,
    originalAmbientIntensity: null,
    originalDirectionalIntensity: null,
    originalWaveStrength: null,
    latest: null,
    disposed: false,
  };

  captureOriginals(state);
  if (isScene(state.scene)) {
    state.rain = createRainLayer(state.options);
    state.rainPositions = state.rain.geometry.attributes.position;
    state.scene.add(state.rain);
  }

  return {
    get active() {
      return Boolean(state.scene && !state.disposed);
    },
    get supported() {
      return isScene(state.scene);
    },
    get snapshot() {
      return state.latest ? { ...state.latest } : null;
    },
    setScene(scene, nextOptions = {}) {
      if (state.scene && state.rain) state.scene.remove(state.rain);
      state.scene = scene || null;
      state.ambientLight = nextOptions.ambientLight || state.ambientLight || getGlobalLight('ambientLight');
      state.directionalLight = nextOptions.directionalLight || state.directionalLight || getGlobalLight('directionalLight');
      state.water = nextOptions.water || state.water;
      captureOriginals(state);

      if (isScene(state.scene) && !state.rain) {
        state.rain = createRainLayer(state.options);
        state.rainPositions = state.rain.geometry.attributes.position;
      }
      if (isScene(state.scene) && state.rain) state.scene.add(state.rain);
      if (state.latest) applyWeather(state, state.latest);
      return this;
    },
    apply(snapshot = {}) {
      state.latest = normalizeWeather(snapshot.weather || snapshot);
      applyWeather(state, state.latest);
      return this.snapshot;
    },
    update(deltaSeconds = 0.016) {
      updateRain(state, deltaSeconds);
    },
    destroy() {
      if (state.disposed) return;
      restoreOriginals(state);
      if (state.scene && state.rain) state.scene.remove(state.rain);
      if (state.rain) {
        state.rain.geometry.dispose();
        state.rain.material.dispose();
      }
      state.rain = null;
      state.rainPositions = null;
      state.disposed = true;
    },
  };
}

function normalizeWeather(weather = {}) {
  const rainRate = clampNumber(weather.rainRate ?? weather.rain ?? 0, 0, 30);
  const visibility = clampNumber(weather.visibility ?? 8, 0.6, 12);
  const windSpeed = clampNumber(weather.windSpeed ?? 0, 0, 24);
  const gustSpeed = clampNumber(weather.gustSpeed ?? windSpeed, windSpeed, 32);

  return {
    windSpeed,
    gustSpeed,
    rainRate,
    visibility,
    fogDensity: clampNumber(weather.fogDensity ?? (0.0008 + (12 - visibility) * 0.00028), 0.0005, 0.006),
    waterDisturbance: clampNumber(weather.waterDisturbance ?? (rainRate / 30 + gustSpeed / 64), 0, 1),
    lightFactor: clampNumber(weather.lightFactor ?? (1 - rainRate / 90 - (12 - visibility) / 42), 0.45, 1.08),
  };
}

function applyWeather(state, weather) {
  applyRain(state, weather);
  applyFog(state, weather);
  applyLights(state, weather);
  applyWater(state, weather);
}

function applyRain(state, weather) {
  if (!state.rain) return;
  const strength = clampNumber(weather.rainRate / 18, 0, 1);
  state.rain.visible = strength > 0.03;
  state.rain.material.opacity = 0.12 + strength * 0.42;
  state.rain.userData.speed = 80 + strength * 260 + weather.gustSpeed * 5;
  state.rain.userData.windDrift = weather.windSpeed * 0.08;
}

function applyFog(state, weather) {
  if (!isScene(state.scene)) return;

  if (!state.scene.fog) {
    state.scene.fog = new THREE.FogExp2(0x080808, weather.fogDensity);
    return;
  }

  if ('density' in state.scene.fog) {
    state.scene.fog.density = weather.fogDensity;
  }
}

function applyLights(state, weather) {
  const ambientBase = state.originalAmbientIntensity ?? state.ambientLight?.intensity;
  const directionalBase = state.originalDirectionalIntensity ?? state.directionalLight?.intensity;

  if (state.ambientLight && Number.isFinite(ambientBase)) {
    state.ambientLight.intensity = ambientBase * weather.lightFactor;
  }
  if (state.directionalLight && Number.isFinite(directionalBase)) {
    state.directionalLight.intensity = directionalBase * (0.82 + weather.lightFactor * 0.18);
  }
}

function applyWater(state, weather) {
  const material = state.water?.material || state.water?.mesh?.material;
  const uniforms = material?.uniforms;
  const waveUniform = uniforms?.uWaveStrength;
  if (!waveUniform) return;

  const base = state.originalWaveStrength ?? Number(waveUniform.value) ?? 1;
  waveUniform.value = base * (1 + weather.waterDisturbance * 0.8);
}

function updateRain(state, deltaSeconds) {
  if (!state.rain || !state.rain.visible || !state.rainPositions) return;

  const speed = state.rain.userData.speed || 160;
  const drift = state.rain.userData.windDrift || 0;
  const area = state.options.rainArea;
  const height = state.options.rainHeight;

  for (let i = 0; i < state.rainPositions.count; i += 2) {
    const y = state.rainPositions.getY(i) - speed * deltaSeconds;
    const x = state.rainPositions.getX(i) + drift * deltaSeconds;
    const reset = y < 0;
    const nextY = reset ? height : y;
    const nextX = wrap(reset ? x + 19 : x, -area / 2, area / 2);

    state.rainPositions.setXYZ(i, nextX, nextY, state.rainPositions.getZ(i));
    state.rainPositions.setXYZ(i + 1, nextX + drift * 0.14, nextY - 16, state.rainPositions.getZ(i + 1));
  }

  state.rainPositions.needsUpdate = true;
}

function createRainLayer(options) {
  const rng = seededRandom(options.seed);
  const vertices = [];
  const area = options.rainArea;
  const height = options.rainHeight;

  for (let i = 0; i < options.rainDropCount; i += 1) {
    const x = (rng() - 0.5) * area;
    const y = rng() * height;
    const z = (rng() - 0.5) * area;
    vertices.push(x, y, z, x + 2.5, y - 16, z);
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
  geometry.attributes.position.setUsage(THREE.DynamicDrawUsage);

  const material = new THREE.LineBasicMaterial({
    color: 0x8fd3ff,
    transparent: true,
    opacity: 0.22,
    depthWrite: false,
  });

  const rain = new THREE.LineSegments(geometry, material);
  rain.name = 'DemoWeatherRain';
  rain.visible = false;
  rain.frustumCulled = false;
  rain.position.set(0, -20, 0);
  rain.userData.speed = 160;
  rain.userData.windDrift = 0;
  return rain;
}

function captureOriginals(state) {
  if (state.originalFog === null && state.scene) {
    state.originalFog = state.scene.fog ? state.scene.fog.clone() : null;
  }
  if (state.originalAmbientIntensity === null && state.ambientLight) {
    state.originalAmbientIntensity = state.ambientLight.intensity;
  }
  if (state.originalDirectionalIntensity === null && state.directionalLight) {
    state.originalDirectionalIntensity = state.directionalLight.intensity;
  }

  const waveUniform = (state.water?.material || state.water?.mesh?.material)?.uniforms?.uWaveStrength;
  if (state.originalWaveStrength === null && waveUniform) {
    state.originalWaveStrength = Number(waveUniform.value);
  }
}

function restoreOriginals(state) {
  if (state.scene) state.scene.fog = state.originalFog ? state.originalFog.clone() : null;
  if (state.ambientLight && state.originalAmbientIntensity !== null) {
    state.ambientLight.intensity = state.originalAmbientIntensity;
  }
  if (state.directionalLight && state.originalDirectionalIntensity !== null) {
    state.directionalLight.intensity = state.originalDirectionalIntensity;
  }

  const waveUniform = (state.water?.material || state.water?.mesh?.material)?.uniforms?.uWaveStrength;
  if (waveUniform && state.originalWaveStrength !== null) {
    waveUniform.value = state.originalWaveStrength;
  }
}

function seededRandom(seed) {
  let value = Math.max(1, Math.floor(seed)) % 2147483647;
  return () => {
    value = (value * 16807) % 2147483647;
    return (value - 1) / 2147483646;
  };
}

function getGlobalLight(name) {
  if (typeof window === 'undefined') return null;
  return window[name] || null;
}

function isScene(scene) {
  return Boolean(scene && typeof scene.add === 'function' && typeof scene.remove === 'function');
}

function clampNumber(value, min, max) {
  const number = Number(value);
  if (!Number.isFinite(number)) return min;
  return Math.min(max, Math.max(min, number));
}

function wrap(value, min, max) {
  const span = max - min;
  if (span <= 0) return value;
  return ((((value - min) % span) + span) % span) + min;
}

export default createWeatherEffects;
