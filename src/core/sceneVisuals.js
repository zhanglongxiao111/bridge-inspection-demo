import * as THREE from 'three';
import {
    createDefectHighlightMaterial,
    createDefectMarkerSystem
} from './defectMarkers.js';

export function createSceneVisuals({
    scene,
    camera,
    theme = 'dark'
} = {}) {
    if (!scene) {
        throw new Error('createSceneVisuals requires a Three.js scene');
    }

    const defectMarkers = createDefectMarkerSystem(scene, { camera, theme });
    const highlightMaterial = createDefectHighlightMaterial();
    const highlightedObjects = new Map();

    function addDefectMarker(defect) {
        return defectMarkers.addDefectMarker(prepareDefect(defect));
    }

    function highlightDefect(defectOrId, options = {}) {
        const marker = defectMarkers.highlightDefect(prepareDefect(defectOrId), options);
        if (options.object) {
            setObjectHighlight(options.object, true);
        }
        return marker;
    }

    function clearDefectHighlight() {
        defectMarkers.clearDefectHighlight();
        highlightedObjects.forEach((entry, object) => {
            object.material = entry.originalMaterial;
        });
        highlightedObjects.clear();
    }

    function applyTheme(mode) {
        defectMarkers.applyTheme(mode);
    }

    function update(frameState) {
        defectMarkers.update(frameState);
    }

    function dispose() {
        clearDefectHighlight();
        defectMarkers.dispose();
        highlightMaterial.dispose();
    }

    function setObjectHighlight(object, enabled) {
        if (!object?.material) return;
        if (!enabled) {
            const entry = highlightedObjects.get(object);
            if (entry) object.material = entry.originalMaterial;
            highlightedObjects.delete(object);
            return;
        }
        if (!highlightedObjects.has(object)) {
            highlightedObjects.set(object, { originalMaterial: object.material });
        }
        object.material = highlightMaterial;
    }

    return {
        defectMarkers,
        addDefectMarker,
        highlightDefect,
        clearDefectHighlight,
        applyTheme,
        update,
        dispose
    };
}

function prepareDefect(defectOrId = {}) {
    if (typeof defectOrId === 'string') return defectOrId;
    return {
        ...defectOrId,
        position: normalizePosition(defectOrId.position ?? defectOrId.worldPosition ?? defectOrId.target)
    };
}

function normalizePosition(position) {
    if (position instanceof THREE.Vector3) return position;
    if (Array.isArray(position)) return new THREE.Vector3(position[0] ?? 0, position[1] ?? 0, position[2] ?? 0);
    if (position && typeof position === 'object') {
        return new THREE.Vector3(position.x ?? 0, position.y ?? 0, position.z ?? 0);
    }
    return new THREE.Vector3(250, 105, 20);
}

