import { createCesiumBridgeLink } from './cesiumBridgeLink.js';

export { createCesiumBridgeLink } from './cesiumBridgeLink.js';

const DEFAULT_ARCS = [
    { start: [116.4074, 39.9042], end: [-74.0060, 40.7128] },
    { start: [-0.1278, 51.5074], end: [-74.0060, 40.7128] },
    { start: [116.4074, 39.9042], end: [139.6503, 35.6762] }
];

export function initCesiumCommandCenter({
    containerId = 'cesium-container',
    googleApiKey,
    bridgeAssets,
    enableBridgeLink = true,
    onBridgeLinkReady
} = {}) {
    const container = document.getElementById(containerId);
    const Cesium = window.Cesium;

    if (!container || typeof Cesium === 'undefined') {
        return null;
    }

    Cesium.Ion.defaultAccessToken = '';

    const viewer = new Cesium.Viewer(containerId, {
        timeline: false,
        animation: false,
        geocoder: false,
        homeButton: false,
        baseLayerPicker: false,
        navigationHelpButton: false,
        sceneModePicker: false,
        fullscreenButton: false,
        infoBox: false,
        selectionIndicator: false,
        baseLayer: false
    });

    viewer.scene.skyBox.show = false;
    viewer.scene.backgroundColor = Cesium.Color.fromCssColorString('#080808');

    if (googleApiKey) {
        loadGoogleTiles(viewer, Cesium, googleApiKey);
    }

    viewer.camera.flyTo({
        destination: Cesium.Cartesian3.fromDegrees(116.391, 39.904, 15000000),
        duration: 0
    });

    addCommandArcs(viewer, Cesium, DEFAULT_ARCS);

    if (enableBridgeLink) {
        viewer.bridgeLink = createCesiumBridgeLink({
            viewer,
            Cesium,
            bridgeAssets
        });
        onBridgeLinkReady?.(viewer.bridgeLink);
    }

    window.cesiumViewer = viewer;
    return viewer;
}

async function loadGoogleTiles(viewer, Cesium, googleApiKey) {
    try {
        const tileset = await Cesium.createGooglePhotorealistic3DTileset(googleApiKey);
        viewer.scene.primitives.add(tileset);

        tileset.colorBlendMode = Cesium.Cesium3DTileColorBlendMode.MIX;
        tileset.colorBlendAmount = 0.5;
        tileset.style = new Cesium.Cesium3DTileStyle({
            color: "color('#444444')"
        });
    } catch (error) {
        console.error('Error loading Google 3D Tiles:', error);
    }
}

function addCommandArcs(viewer, Cesium, arcs) {
    arcs.forEach((arc) => {
        viewer.entities.add({
            polyline: {
                positions: Cesium.Cartesian3.fromDegreesArray([
                    arc.start[0],
                    arc.start[1],
                    arc.end[0],
                    arc.end[1]
                ]),
                width: 3,
                arcType: Cesium.ArcType.GEODESIC,
                material: new Cesium.PolylineGlowMaterialProperty({
                    glowPower: 0.3,
                    color: Cesium.Color.fromCssColorString('#d4af37')
                })
            }
        });
    });
}
