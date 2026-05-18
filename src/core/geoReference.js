import { Vector3 } from 'three';

export const BRIDGE_REFERENCE_ORIGIN = Object.freeze({
    id: 'bridge-demo-origin',
    name: '示范桥梁巡检原点',
    lng: 116.391,
    lat: 39.904,
    height: 0,
    headingDegrees: 0
});

const WGS84_A = 6378137;
const WGS84_E2 = 0.00669437999014;
const DEG_TO_RAD = Math.PI / 180;
const RAD_TO_DEG = 180 / Math.PI;

export function createGeoReference(origin = BRIDGE_REFERENCE_ORIGIN) {
    return new GeoReference(origin);
}

export class GeoReference {
    constructor(origin = BRIDGE_REFERENCE_ORIGIN) {
        this.origin = normalizeOrigin(origin);
        this._metrics = getOriginMetrics(this.origin.lat);
        this._headingRad = Number(this.origin.headingDegrees ?? 0) * DEG_TO_RAD;
        this._cosHeading = Math.cos(this._headingRad);
        this._sinHeading = Math.sin(this._headingRad);
    }

    geoToLocal(lng, lat, height = this.origin.height) {
        const east = (Number(lng) - this.origin.lng) * this._metrics.metersPerDegreeLng;
        const north = (Number(lat) - this.origin.lat) * this._metrics.metersPerDegreeLat;
        const up = Number(height) - this.origin.height;

        return new Vector3(
            east * this._cosHeading + north * this._sinHeading,
            up,
            -east * this._sinHeading + north * this._cosHeading
        );
    }

    localToGeo(vector3 = new Vector3()) {
        const local = toVector3(vector3);
        const east = local.x * this._cosHeading - local.z * this._sinHeading;
        const north = local.x * this._sinHeading + local.z * this._cosHeading;

        return {
            lng: this.origin.lng + east / this._metrics.metersPerDegreeLng,
            lat: this.origin.lat + north / this._metrics.metersPerDegreeLat,
            height: this.origin.height + local.y
        };
    }

    localToCesiumCartesian(vector3, Cesium = getCesium()) {
        if (!Cesium?.Cartesian3?.fromDegrees) {
            return null;
        }

        const geo = this.localToGeo(vector3);
        return Cesium.Cartesian3.fromDegrees(geo.lng, geo.lat, geo.height);
    }

    localFromCesiumCartesian(cartesian, Cesium = getCesium()) {
        if (!cartesian || !Cesium?.Cartographic?.fromCartesian) {
            return null;
        }

        const cartographic = Cesium.Cartographic.fromCartesian(cartesian);
        if (!cartographic) {
            return null;
        }

        return this.geoToLocal(
            cartographic.longitude * RAD_TO_DEG,
            cartographic.latitude * RAD_TO_DEG,
            cartographic.height
        );
    }
}

export const defaultGeoReference = createGeoReference();

export function geoToLocal(lng, lat, height, origin = BRIDGE_REFERENCE_ORIGIN) {
    return createGeoReference(origin).geoToLocal(lng, lat, height);
}

export function localToGeo(vector3, origin = BRIDGE_REFERENCE_ORIGIN) {
    return createGeoReference(origin).localToGeo(vector3);
}

export function localToCesiumCartesian(vector3, Cesium = getCesium(), origin = BRIDGE_REFERENCE_ORIGIN) {
    return createGeoReference(origin).localToCesiumCartesian(vector3, Cesium);
}

export function localFromCesiumCartesian(cartesian, Cesium = getCesium(), origin = BRIDGE_REFERENCE_ORIGIN) {
    return createGeoReference(origin).localFromCesiumCartesian(cartesian, Cesium);
}

function normalizeOrigin(origin) {
    return {
        id: origin.id ?? BRIDGE_REFERENCE_ORIGIN.id,
        name: origin.name ?? BRIDGE_REFERENCE_ORIGIN.name,
        lng: Number(origin.lng ?? BRIDGE_REFERENCE_ORIGIN.lng),
        lat: Number(origin.lat ?? BRIDGE_REFERENCE_ORIGIN.lat),
        height: Number(origin.height ?? BRIDGE_REFERENCE_ORIGIN.height),
        headingDegrees: Number(origin.headingDegrees ?? BRIDGE_REFERENCE_ORIGIN.headingDegrees)
    };
}

function getOriginMetrics(latDegrees) {
    const lat = latDegrees * DEG_TO_RAD;
    const sinLat = Math.sin(lat);
    const denom = Math.sqrt(1 - WGS84_E2 * sinLat * sinLat);
    const primeVerticalRadius = WGS84_A / denom;
    const meridianRadius = (WGS84_A * (1 - WGS84_E2)) / (denom ** 3);

    return {
        metersPerDegreeLat: meridianRadius * DEG_TO_RAD,
        metersPerDegreeLng: primeVerticalRadius * Math.cos(lat) * DEG_TO_RAD
    };
}

function toVector3(value) {
    if (value instanceof Vector3) {
        return value;
    }

    if (Array.isArray(value)) {
        return new Vector3(Number(value[0] ?? 0), Number(value[1] ?? 0), Number(value[2] ?? 0));
    }

    if (value && typeof value === 'object') {
        return new Vector3(Number(value.x ?? 0), Number(value.y ?? 0), Number(value.z ?? 0));
    }

    return new Vector3();
}

function getCesium() {
    return globalThis?.Cesium;
}
