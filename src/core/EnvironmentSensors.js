import { Matrix4, Quaternion, Raycaster, Vector3 } from 'three';

export const SENSOR_STATUS = {
  CLEAR: 'clear',
  WARNING: 'warning',
  BLOCKED: 'blocked',
  WATER_IMPACT: 'waterImpact',
};

const DEFAULT_OPTIONS = {
  maxDistance: 24,
  warningDistance: 12,
  blockedDistance: 4,
  waterCheckDistance: 18,
  waterImpactDistance: 2.2,
  waterLevel: null,
  lateralSpread: 0.45,
  verticalSpread: 0.22,
};

const SENSOR_RAYS_BY_DIRECTION = {
  front: [
    { id: 'center', offset: new Vector3(0, 0, 0), direction: new Vector3(0, 0, -1) },
    { id: 'left', offset: new Vector3(-0.45, 0, 0), direction: new Vector3(-0.18, 0, -1) },
    { id: 'right', offset: new Vector3(0.45, 0, 0), direction: new Vector3(0.18, 0, -1) },
    { id: 'upper-front', offset: new Vector3(0, 0.22, 0), direction: new Vector3(0, 0.12, -1) },
    { id: 'lower-front', offset: new Vector3(0, -0.22, 0), direction: new Vector3(0, -0.16, -1) },
  ],
  back: [
    { id: 'back', offset: new Vector3(0, 0, 0), direction: new Vector3(0, 0, 1) },
  ],
  left: [
    { id: 'left', offset: new Vector3(-0.5, 0, 0), direction: new Vector3(-1, 0, 0) },
  ],
  right: [
    { id: 'right', offset: new Vector3(0.5, 0, 0), direction: new Vector3(1, 0, 0) },
  ],
  up: [
    { id: 'up', offset: new Vector3(0, 0.5, 0), direction: new Vector3(0, 1, 0) },
  ],
  down: [
    { id: 'down', offset: new Vector3(0, -0.5, 0), direction: new Vector3(0, -1, 0) },
  ],
};

export function createEnvironmentSensors(options = {}) {
  return new EnvironmentSensors(options);
}

export class EnvironmentSensors {
  constructor(options = {}) {
    this.options = { ...DEFAULT_OPTIONS, ...options };
    this.obstacles = [...(options.obstacles ?? [])];
    this.waterObjects = [...(options.waterObjects ?? [])];
    this.raycaster = new Raycaster();
    this.waterRaycaster = new Raycaster();
  }

  setObstacles(objects = []) {
    this.obstacles = [...objects];
    return this;
  }

  setWaterObjects(objects = []) {
    this.waterObjects = [...objects];
    return this;
  }

  updateOptions(options = {}) {
    this.options = { ...this.options, ...options };
    return this;
  }

  scan(input = {}) {
    const origin = resolveOrigin(input);
    const orientation = resolveOrientation(input);
    const forward = resolveForward(input, orientation);
    const directionalHits = this.scanDirectionalRays(origin, orientation, forward);
    const hits = flattenHits(directionalHits);
    const nearestObstacle = hits[0] ?? null;
    const waterHit = this.scanWater(origin);
    const status = resolveStatus(nearestObstacle, waterHit, this.options);
    const directions = createDirectionReadings(directionalHits, this.options);
    const water = createWaterReading(waterHit, this.options);

    return {
      status,
      clear: status === SENSOR_STATUS.CLEAR,
      distance: nearestObstacle?.distance ?? Infinity,
      forward,
      origin,
      nearestObstacle,
      waterHit,
      water,
      hits,
      directionalHits,
      directions,
      zones: {
        warningDistance: this.options.warningDistance,
        blockedDistance: this.options.blockedDistance,
        waterImpactDistance: this.options.waterImpactDistance,
      },
    };
  }

  scanObstacleRays(origin, orientation, fallbackForward) {
    return flattenHits(this.scanDirectionalRays(origin, orientation, fallbackForward));
  }

  scanDirectionalRays(origin, orientation, fallbackForward) {
    const empty = Object.fromEntries(Object.keys(SENSOR_RAYS_BY_DIRECTION).map((key) => [key, []]));

    if (this.obstacles.length === 0) {
      return empty;
    }

    const results = { ...empty };

    Object.entries(SENSOR_RAYS_BY_DIRECTION).forEach(([directionId, rays]) => {
      rays.forEach((ray) => {
        const scaledOffset = new Vector3(
          ray.offset.x * this.options.lateralSpread,
          ray.offset.y * this.options.verticalSpread,
          ray.offset.z,
        ).applyQuaternion(orientation);
        const rayOrigin = origin.clone().add(scaledOffset);
        const rayDirection = ray.direction.clone().applyQuaternion(orientation).normalize();

        this.raycaster.set(rayOrigin, rayDirection.lengthSq() > 0 ? rayDirection : fallbackForward);
        this.raycaster.far = this.options.maxDistance;

        const hit = this.raycaster.intersectObjects(this.obstacles, true)[0];
        if (hit) {
          results[directionId].push({ ...hit, sensorId: ray.id, directionId });
        }
      });

      results[directionId].sort((a, b) => a.distance - b.distance);
    });

    return results;
  }

  scanWater(origin) {
    const configuredWaterLevel = this.options.waterLevel == null ? NaN : Number(this.options.waterLevel);

    if (this.waterObjects.length === 0 && !Number.isFinite(configuredWaterLevel)) {
      return null;
    }

    const down = new Vector3(0, -1, 0);
    this.waterRaycaster.set(origin, down);
    this.waterRaycaster.far = this.options.waterCheckDistance;

    const objectHit = this.waterRaycaster.intersectObjects(this.waterObjects, true)[0] ?? null;
    if (objectHit) {
      return objectHit;
    }

    if (!Number.isFinite(configuredWaterLevel) || origin.y < configuredWaterLevel) {
      return null;
    }

    const distance = origin.y - configuredWaterLevel;
    if (distance > this.options.waterCheckDistance) {
      return null;
    }

    return {
      distance,
      point: new Vector3(origin.x, configuredWaterLevel, origin.z),
      object: null,
      sensorId: 'water-level',
      directionId: 'down',
    };
  }
}

export function classifySensorStatus({ obstacleDistance = Infinity, waterDistance = Infinity } = {}, options = {}) {
  const config = { ...DEFAULT_OPTIONS, ...options };

  if (waterDistance <= config.waterImpactDistance) {
    return SENSOR_STATUS.WATER_IMPACT;
  }

  if (obstacleDistance <= config.blockedDistance) {
    return SENSOR_STATUS.BLOCKED;
  }

  if (obstacleDistance <= config.warningDistance) {
    return SENSOR_STATUS.WARNING;
  }

  return SENSOR_STATUS.CLEAR;
}

function resolveStatus(nearestObstacle, waterHit, options) {
  return classifySensorStatus({
    obstacleDistance: nearestObstacle?.distance ?? Infinity,
    waterDistance: waterHit?.distance ?? Infinity,
  }, options);
}

function flattenHits(directionalHits = {}) {
  return Object.values(directionalHits)
    .flat()
    .sort((a, b) => a.distance - b.distance);
}

function createDirectionReadings(directionalHits, options) {
  return Object.fromEntries(
    Object.entries(directionalHits).map(([directionId, hits]) => {
      const nearest = hits[0] ?? null;

      return [directionId, {
        status: classifySensorStatus({ obstacleDistance: nearest?.distance ?? Infinity }, options),
        clear: !nearest || nearest.distance > options.warningDistance,
        distance: nearest?.distance ?? Infinity,
        hit: nearest,
        hits,
      }];
    }),
  );
}

function createWaterReading(waterHit, options) {
  const distance = waterHit?.distance ?? Infinity;
  const status = classifySensorStatus({ waterDistance: distance }, options);

  return {
    status,
    clear: status === SENSOR_STATUS.CLEAR,
    distance,
    hit: waterHit,
    impact: status === SENSOR_STATUS.WATER_IMPACT,
  };
}

function resolveOrigin(input) {
  if (input.origin) {
    return toVector3(input.origin);
  }

  if (input.object?.position) {
    return input.object.position.clone();
  }

  return new Vector3();
}

function resolveOrientation(input) {
  if (input.quaternion instanceof Quaternion) {
    return input.quaternion.clone();
  }

  if (input.object?.quaternion instanceof Quaternion) {
    return input.object.quaternion.clone();
  }

  if (input.direction) {
    const direction = toVector3(input.direction, new Vector3(0, 0, -1)).normalize();
    return new Quaternion().setFromRotationMatrix(
      new Matrix4().lookAt(new Vector3(), direction, new Vector3(0, 1, 0)),
    );
  }

  return new Quaternion();
}

function resolveForward(input, orientation) {
  if (input.direction) {
    return toVector3(input.direction, new Vector3(0, 0, -1)).normalize();
  }

  return new Vector3(0, 0, -1).applyQuaternion(orientation).normalize();
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
