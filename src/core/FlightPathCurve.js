import { CatmullRomCurve3, Vector3 } from 'three';

const DEFAULT_OPTIONS = {
  closed: false,
  curveType: 'centripetal',
  tension: 0.45,
  arcLengthDivisions: 160,
};

export function toVector3(value, fallback = new Vector3()) {
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

export function createCatmullRomFlightPath(waypoints = [], options = {}) {
  return new FlightPathCurve(waypoints, options);
}

export function sampleFlightPath(curve, divisions = 80) {
  if (!curve || typeof curve.getPoints !== 'function') {
    return [];
  }

  return curve.getPoints(Math.max(1, Math.floor(divisions)));
}

export class FlightPathCurve {
  constructor(waypoints = [], options = {}) {
    this.options = { ...DEFAULT_OPTIONS, ...options };
    this.waypoints = [];
    this.curve = null;
    this.setWaypoints(waypoints);
  }

  setWaypoints(waypoints = []) {
    this.waypoints = waypoints.map((waypoint) => toVector3(waypoint));
    this.rebuild();
    return this;
  }

  addWaypoint(waypoint, index = this.waypoints.length) {
    const nextWaypoint = toVector3(waypoint);
    const safeIndex = Math.max(0, Math.min(index, this.waypoints.length));
    this.waypoints.splice(safeIndex, 0, nextWaypoint);
    this.rebuild();
    return this;
  }

  updateWaypoint(index, waypoint) {
    if (!this.waypoints[index]) {
      return this;
    }

    this.waypoints[index] = toVector3(waypoint);
    this.rebuild();
    return this;
  }

  removeWaypoint(index) {
    if (!this.waypoints[index]) {
      return this;
    }

    this.waypoints.splice(index, 1);
    this.rebuild();
    return this;
  }

  updateOptions(options = {}) {
    this.options = { ...this.options, ...options };
    this.rebuild();
    return this;
  }

  rebuild() {
    if (this.waypoints.length < 2) {
      this.curve = null;
      return this;
    }

    this.curve = new CatmullRomCurve3(
      this.waypoints.map((waypoint) => waypoint.clone()),
      this.options.closed,
      this.options.curveType,
      this.options.tension,
    );
    this.curve.arcLengthDivisions = this.options.arcLengthDivisions;
    this.curve.updateArcLengths();
    return this;
  }

  getCurve() {
    return this.curve;
  }

  getWaypoints() {
    return this.waypoints.map((waypoint) => waypoint.clone());
  }

  getPointAt(progress = 0) {
    if (!this.curve) {
      return this.waypoints[0]?.clone() ?? new Vector3();
    }

    return this.curve.getPointAt(clamp01(progress));
  }

  getTangentAt(progress = 0) {
    if (!this.curve) {
      return new Vector3(0, 0, -1);
    }

    return this.curve.getTangentAt(clamp01(progress)).normalize();
  }

  getPoints(divisions = 80) {
    return sampleFlightPath(this.curve, divisions);
  }

  getSpacedPoints(divisions = 80) {
    if (!this.curve) {
      return this.getWaypoints();
    }

    return this.curve.getSpacedPoints(Math.max(1, Math.floor(divisions)));
  }

  getLength() {
    return this.curve?.getLength() ?? 0;
  }

  getFrameAt(progress = 0) {
    const safeProgress = clamp01(progress);
    return {
      position: this.getPointAt(safeProgress),
      tangent: this.getTangentAt(safeProgress),
      progress: safeProgress,
      length: this.getLength(),
    };
  }

  toWaypointQueue(divisions = this.waypoints.length) {
    return this.getSpacedPoints(divisions).map((point) => ({
      x: point.x,
      y: point.y,
      z: point.z,
    }));
  }
}

function clamp01(value) {
  return Math.min(1, Math.max(0, Number.isFinite(value) ? value : 0));
}
