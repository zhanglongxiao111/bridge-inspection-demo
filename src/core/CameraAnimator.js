import { Object3D, Quaternion, Vector3 } from 'three';

export const cameraEasings = {
  linear: (t) => t,
  easeInQuad: (t) => t * t,
  easeOutQuad: (t) => t * (2 - t),
  easeInOutCubic: (t) => (t < 0.5 ? 4 * t * t * t : 1 - ((-2 * t + 2) ** 3) / 2),
  easeOutExpo: (t) => (t === 1 ? 1 : 1 - 2 ** (-10 * t)),
};

const DEFAULT_ANIMATION = {
  duration: 900,
  easing: 'easeInOutCubic',
};

export function createCameraAnimator(camera, options = {}) {
  return new CameraAnimator(camera, options);
}

export class CameraAnimator {
  constructor(camera, options = {}) {
    this.camera = camera;
    this.options = { ...DEFAULT_ANIMATION, ...options };
    this.active = false;
    this.finished = true;
    this.animation = null;
  }

  animateTo(config = {}, nowMs = 0) {
    if (!this.camera) {
      return this;
    }

    const duration = Math.max(0, Number(config.duration ?? this.options.duration));
    const easing = resolveEasing(config.easing ?? this.options.easing);
    const targetQuaternion = resolveTargetQuaternion(this.camera, config);

    this.animation = {
      startedAt: nowMs,
      duration,
      easing,
      fromPosition: this.camera.position.clone(),
      toPosition: toVector3(config.position, this.camera.position),
      fromQuaternion: this.camera.quaternion.clone(),
      toQuaternion: targetQuaternion,
      fromZoom: Number(this.camera.zoom ?? 1),
      toZoom: Number(config.zoom ?? this.camera.zoom ?? 1),
      onUpdate: config.onUpdate,
      onComplete: config.onComplete,
    };

    this.active = true;
    this.finished = false;

    if (duration === 0) {
      this.update(nowMs);
    }

    return this;
  }

  update(nowMs = 0) {
    if (!this.active || !this.animation || !this.camera) {
      return false;
    }

    const elapsed = Math.max(0, nowMs - this.animation.startedAt);
    const progress = this.animation.duration === 0 ? 1 : clamp01(elapsed / this.animation.duration);
    const eased = this.animation.easing(progress);

    this.camera.position.lerpVectors(
      this.animation.fromPosition,
      this.animation.toPosition,
      eased,
    );
    this.camera.quaternion.copy(this.animation.fromQuaternion).slerp(this.animation.toQuaternion, eased);

    if ('zoom' in this.camera) {
      this.camera.zoom = lerp(this.animation.fromZoom, this.animation.toZoom, eased);
      this.camera.updateProjectionMatrix?.();
    }

    this.animation.onUpdate?.({
      progress,
      eased,
      camera: this.camera,
      active: progress < 1,
    });

    if (progress >= 1) {
      const completed = this.animation.onComplete;
      this.active = false;
      this.finished = true;
      this.animation = null;
      completed?.({ camera: this.camera });
    }

    return this.active;
  }

  stop({ snapToEnd = false } = {}) {
    if (snapToEnd && this.animation) {
      this.update(this.animation.startedAt + this.animation.duration);
      return this;
    }

    this.active = false;
    this.finished = true;
    this.animation = null;
    return this;
  }

  isActive() {
    return this.active;
  }
}

export function getLookAtQuaternion(camera, position, target, up = camera?.up) {
  const probe = new Object3D();
  probe.position.copy(toVector3(position, camera?.position));
  probe.up.copy(toVector3(up, camera?.up ?? new Vector3(0, 1, 0)));
  probe.lookAt(toVector3(target, new Vector3()));
  return probe.quaternion.clone();
}

function resolveTargetQuaternion(camera, config) {
  if (config.quaternion instanceof Quaternion) {
    return config.quaternion.clone();
  }

  if (config.quaternion && typeof config.quaternion === 'object') {
    return new Quaternion(
      Number(config.quaternion.x ?? 0),
      Number(config.quaternion.y ?? 0),
      Number(config.quaternion.z ?? 0),
      Number(config.quaternion.w ?? 1),
    ).normalize();
  }

  if (config.target) {
    return getLookAtQuaternion(
      camera,
      toVector3(config.position, camera.position),
      config.target,
      config.up,
    );
  }

  return camera.quaternion.clone();
}

function resolveEasing(easing) {
  if (typeof easing === 'function') {
    return (t) => clamp01(easing(clamp01(t)));
  }

  return cameraEasings[easing] ?? cameraEasings.easeInOutCubic;
}

function toVector3(value, fallback = new Vector3()) {
  if (value instanceof Vector3) {
    return value.clone();
  }

  if (Array.isArray(value)) {
    return new Vector3(
      Number(value[0] ?? fallback.x),
      Number(value[1] ?? fallback.y),
      Number(value[2] ?? fallback.z),
    );
  }

  if (value && typeof value === 'object') {
    return new Vector3(
      Number(value.x ?? fallback.x),
      Number(value.y ?? fallback.y),
      Number(value.z ?? fallback.z),
    );
  }

  return fallback.clone();
}

function clamp01(value) {
  return Math.min(1, Math.max(0, Number.isFinite(value) ? value : 0));
}

function lerp(from, to, progress) {
  return from + (to - from) * progress;
}
