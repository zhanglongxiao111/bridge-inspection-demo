import { BRIDGE_REFERENCE_ORIGIN, createGeoReference } from './geoReference.js';

export const CESIUM_BRIDGE_SELECTED_EVENT = 'bridge:cesium-bridge-selected';

export const DEFAULT_BRIDGE_ASSET = Object.freeze({
    id: 'demo-bridge-main',
    name: '示范桥梁资产',
    lng: BRIDGE_REFERENCE_ORIGIN.lng,
    lat: BRIDGE_REFERENCE_ORIGIN.lat,
    height: 180,
    localPosition: { x: 0, y: 60, z: 0 }
});

export function createCesiumBridgeLink(options = {}) {
    return new CesiumBridgeLink(options);
}

export class CesiumBridgeLink {
    constructor({
        viewer,
        Cesium = getCesium(),
        geoReference = createGeoReference(),
        bridgeAssets = [DEFAULT_BRIDGE_ASSET],
        eventTarget = globalThis,
        flyToOnSelect = false
    } = {}) {
        this.viewer = viewer;
        this.Cesium = Cesium;
        this.geoReference = geoReference;
        this.eventTarget = eventTarget;
        this.entities = new Map();
        this.handler = null;
        this.isReady = Boolean(viewer && Cesium?.Cartesian3 && viewer.entities);

        if (!this.isReady) {
            return;
        }

        bridgeAssets.forEach((asset) => this.addBridgeAsset(asset));
        this.bindSelection(flyToOnSelect);
    }

    addBridgeAsset(asset = DEFAULT_BRIDGE_ASSET) {
        if (!this.isReady) {
            return null;
        }

        const normalized = normalizeAsset(asset, this.geoReference);
        const existing = this.entities.get(normalized.id);
        if (existing) {
            this.viewer.entities.remove(existing);
        }

        const entity = this.viewer.entities.add({
            id: `bridge-asset-${normalized.id}`,
            name: normalized.name,
            position: this.Cesium.Cartesian3.fromDegrees(normalized.lng, normalized.lat, normalized.height),
            point: {
                pixelSize: 13,
                color: this.Cesium.Color.fromCssColorString('#d4af37'),
                outlineColor: this.Cesium.Color.fromCssColorString('#101014'),
                outlineWidth: 2,
                heightReference: this.resolveHeightReference()
            },
            label: {
                text: normalized.name,
                font: '13px sans-serif',
                fillColor: this.Cesium.Color.WHITE,
                outlineColor: this.Cesium.Color.BLACK,
                outlineWidth: 3,
                style: this.Cesium.LabelStyle.FILL_AND_OUTLINE,
                pixelOffset: new this.Cesium.Cartesian2(0, -22),
                verticalOrigin: this.Cesium.VerticalOrigin.BOTTOM,
                heightReference: this.resolveHeightReference()
            },
            properties: {
                bridgeLinkId: normalized.id,
                bridgeAsset: normalized
            }
        });

        entity.bridgeAsset = normalized;
        this.entities.set(normalized.id, entity);
        return entity;
    }

    flyToAsset(assetOrId = DEFAULT_BRIDGE_ASSET.id, options = {}) {
        if (!this.isReady) {
            return false;
        }

        const asset = typeof assetOrId === 'string'
            ? this.entities.get(assetOrId)?.bridgeAsset
            : normalizeAsset(assetOrId, this.geoReference);

        if (!asset) {
            return false;
        }

        return this.flyToPoint(asset.lng, asset.lat, asset.height, options);
    }

    flyToPoint(lng, lat, height = 450, options = {}) {
        if (!this.isReady || !this.viewer.camera?.flyTo) {
            return false;
        }

        const range = Number(options.range ?? 1800);
        const destinationHeight = Number(options.destinationHeight ?? (Number(height) + range));

        this.viewer.camera.flyTo({
            destination: this.Cesium.Cartesian3.fromDegrees(Number(lng), Number(lat), destinationHeight),
            duration: Number(options.duration ?? 1.2),
            orientation: {
                heading: toRadians(options.headingDegrees ?? 0),
                pitch: toRadians(options.pitchDegrees ?? -55),
                roll: toRadians(options.rollDegrees ?? 0)
            }
        });

        return true;
    }

    bindSelection(flyToOnSelect = false) {
        if (!this.isReady || !this.Cesium.ScreenSpaceEventHandler || !this.viewer.scene?.canvas) {
            return false;
        }

        this.handler?.destroy?.();
        this.handler = new this.Cesium.ScreenSpaceEventHandler(this.viewer.scene.canvas);
        this.handler.setInputAction((movement) => {
            const picked = this.viewer.scene.pick(movement.position);
            const entity = picked?.id;
            const asset = entity?.bridgeAsset;

            if (!asset) {
                return;
            }

            this.dispatchSelection(asset, entity);

            if (flyToOnSelect) {
                this.flyToAsset(asset.id);
            }
        }, this.Cesium.ScreenSpaceEventType.LEFT_CLICK);

        return true;
    }

    dispatchSelection(asset, entity) {
        const detail = {
            asset,
            entity,
            viewer: this.viewer,
            localPosition: this.geoReference.geoToLocal(asset.lng, asset.lat, asset.height)
        };

        const event = typeof CustomEvent === 'function'
            ? new CustomEvent(CESIUM_BRIDGE_SELECTED_EVENT, { detail })
            : { type: CESIUM_BRIDGE_SELECTED_EVENT, detail };

        this.eventTarget?.dispatchEvent?.(event);
        return detail;
    }

    destroy() {
        this.handler?.destroy?.();
        this.handler = null;

        if (this.viewer?.entities) {
            this.entities.forEach((entity) => this.viewer.entities.remove(entity));
        }

        this.entities.clear();
        this.isReady = false;
    }

    resolveHeightReference() {
        return this.Cesium.HeightReference?.CLAMP_TO_GROUND ?? this.Cesium.HeightReference?.NONE;
    }
}

function normalizeAsset(asset, geoReference) {
    const localGeo = asset.localPosition && (asset.lng == null || asset.lat == null)
        ? geoReference.localToGeo(asset.localPosition)
        : null;

    return {
        id: String(asset.id ?? DEFAULT_BRIDGE_ASSET.id),
        name: String(asset.name ?? DEFAULT_BRIDGE_ASSET.name),
        lng: Number(asset.lng ?? localGeo?.lng ?? DEFAULT_BRIDGE_ASSET.lng),
        lat: Number(asset.lat ?? localGeo?.lat ?? DEFAULT_BRIDGE_ASSET.lat),
        height: Number(asset.height ?? localGeo?.height ?? DEFAULT_BRIDGE_ASSET.height),
        localPosition: asset.localPosition ?? null,
        metadata: asset.metadata ?? {}
    };
}

function toRadians(degrees) {
    return Number(degrees) * Math.PI / 180;
}

function getCesium() {
    return globalThis?.Cesium;
}
