import * as THREE from 'three';

const SEVERITY_COLORS = {
    critical: 0xef4444,
    high: 0xf97316,
    warning: 0xf59e0b,
    medium: 0xf59e0b,
    low: 0x22c55e,
    info: 0x38bdf8
};

const THEME_OPACITY = {
    dark: 0.92,
    light: 0.78
};

export function createDefectHighlightMaterial({
    color = 0xf59e0b,
    opacity = 0.86
} = {}) {
    return new THREE.MeshStandardMaterial({
        color,
        emissive: color,
        emissiveIntensity: 0.75,
        roughness: 0.34,
        metalness: 0.08,
        transparent: true,
        opacity,
        depthWrite: false
    });
}

export function createTargetRing({
    radius = 9,
    color = 0xf59e0b,
    opacity = 0.82
} = {}) {
    const group = new THREE.Group();
    group.name = 'DefectTargetRing';

    const ringMaterial = new THREE.MeshBasicMaterial({
        color,
        transparent: true,
        opacity,
        depthWrite: false,
        side: THREE.DoubleSide
    });
    const outer = new THREE.Mesh(new THREE.TorusGeometry(radius, 0.22, 8, 96), ringMaterial);
    const inner = new THREE.Mesh(new THREE.TorusGeometry(radius * 0.62, 0.14, 8, 72), ringMaterial.clone());
    const crossMaterial = ringMaterial.clone();
    crossMaterial.opacity = opacity * 0.7;

    const crossA = new THREE.Mesh(new THREE.BoxGeometry(radius * 2.2, 0.08, 0.08), crossMaterial);
    const crossB = new THREE.Mesh(new THREE.BoxGeometry(0.08, radius * 2.2, 0.08), crossMaterial.clone());

    group.add(outer, inner, crossA, crossB);
    return group;
}

export function createAlertMarker({
    color = 0xf59e0b,
    height = 15
} = {}) {
    const group = new THREE.Group();
    group.name = 'DefectAlertMarker';

    const markerMaterial = new THREE.MeshBasicMaterial({
        color,
        transparent: true,
        opacity: 0.95,
        depthWrite: false
    });
    const stemMaterial = markerMaterial.clone();
    stemMaterial.opacity = 0.5;

    const stem = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.16, height, 12), stemMaterial);
    stem.position.y = height * 0.5;

    const head = new THREE.Mesh(new THREE.ConeGeometry(2.2, 5, 24), markerMaterial);
    head.position.y = height + 2.5;
    head.rotation.x = Math.PI;

    const glow = new THREE.PointLight(color, 1.2, 55);
    glow.position.y = height + 2;

    group.add(stem, head, glow);
    return group;
}

export function createDefectMarkerSystem(scene, {
    camera = null,
    theme = 'dark'
} = {}) {
    const group = new THREE.Group();
    group.name = 'DefectMarkerSystem';
    scene.add(group);

    const markers = new Map();
    let activeId = null;
    let currentTheme = theme;

    function addDefectMarker(defect = {}) {
        const id = normalizeId(defect);
        const existing = markers.get(id);
        if (existing) {
            existing.group.position.copy(normalizePosition(defect.position, existing.group.position));
            return existing.group;
        }

        const color = getSeverityColor(defect.severity);
        const markerGroup = new THREE.Group();
        markerGroup.name = `DefectMarker:${id}`;
        markerGroup.position.copy(normalizePosition(defect.position));
        markerGroup.userData.defect = { ...defect, id };

        const ring = createTargetRing({
            radius: defect.radius ?? 10,
            color,
            opacity: THEME_OPACITY[currentTheme] ?? THEME_OPACITY.dark
        });
        const alert = createAlertMarker({ color, height: defect.height ?? 14 });
        alert.position.y = 2;

        markerGroup.add(ring, alert);
        group.add(markerGroup);

        const entry = {
            id,
            group: markerGroup,
            ring,
            alert,
            color,
            materialTargets: collectTransparentMaterials(markerGroup),
            pulseOffset: markers.size * 0.63
        };
        markers.set(id, entry);
        return markerGroup;
    }

    function highlightDefect(defectOrId, options = {}) {
        const id = normalizeId(defectOrId);
        if (!markers.has(id) && typeof defectOrId === 'object') {
            addDefectMarker({ ...defectOrId, id });
        }

        activeId = id;
        markers.forEach((entry) => {
            const isActive = entry.id === activeId;
            entry.group.visible = options.hideInactive ? isActive : true;
            entry.group.userData.highlighted = isActive;
            entry.materialTargets.forEach((material) => {
                material.opacity = isActive ? 1 : (THEME_OPACITY[currentTheme] ?? THEME_OPACITY.dark) * 0.55;
            });
        });

        return markers.get(id)?.group ?? null;
    }

    function clearDefectHighlight() {
        activeId = null;
        markers.forEach((entry) => {
            entry.group.visible = true;
            entry.group.userData.highlighted = false;
            entry.materialTargets.forEach((material) => {
                material.opacity = THEME_OPACITY[currentTheme] ?? THEME_OPACITY.dark;
            });
        });
    }

    function removeDefectMarker(defectOrId) {
        const id = normalizeId(defectOrId);
        const entry = markers.get(id);
        if (!entry) return false;
        group.remove(entry.group);
        disposeObject(entry.group);
        markers.delete(id);
        if (activeId === id) activeId = null;
        return true;
    }

    function applyTheme(mode = 'dark') {
        currentTheme = mode;
        const opacity = THEME_OPACITY[mode] ?? THEME_OPACITY.dark;
        markers.forEach((entry) => {
            entry.materialTargets.forEach((material) => {
                material.opacity = entry.id === activeId ? 1 : opacity;
            });
        });
    }

    function update({ elapsed = 0 } = {}) {
        markers.forEach((entry) => {
            const isActive = entry.id === activeId;
            const pulse = Math.sin(elapsed * (isActive ? 4.4 : 2.5) + entry.pulseOffset) * 0.5 + 0.5;
            const scale = isActive ? 1.15 + pulse * 0.22 : 0.95 + pulse * 0.08;
            entry.ring.scale.setScalar(scale);
            entry.alert.scale.setScalar(isActive ? 1.05 + pulse * 0.16 : 1);

            if (camera) {
                entry.ring.lookAt(camera.position);
            }
        });
    }

    function dispose() {
        scene.remove(group);
        disposeObject(group);
        markers.clear();
    }

    return {
        group,
        addDefectMarker,
        highlightDefect,
        clearDefectHighlight,
        removeDefectMarker,
        applyTheme,
        update,
        dispose
    };
}

function normalizeId(defectOrId = {}) {
    if (typeof defectOrId === 'string') return defectOrId;
    return defectOrId.id ?? defectOrId.code ?? `defect-${cryptoRandomId()}`;
}

function normalizePosition(position, fallback = new THREE.Vector3()) {
    if (position instanceof THREE.Vector3) return position.clone();
    if (Array.isArray(position)) return new THREE.Vector3(position[0] ?? 0, position[1] ?? 0, position[2] ?? 0);
    if (position && typeof position === 'object') {
        return new THREE.Vector3(position.x ?? 0, position.y ?? 0, position.z ?? 0);
    }
    return fallback.clone();
}

function getSeverityColor(severity = 'warning') {
    return SEVERITY_COLORS[String(severity).toLowerCase()] ?? SEVERITY_COLORS.warning;
}

function collectTransparentMaterials(object) {
    const materials = [];
    object.traverse((child) => {
        const childMaterials = Array.isArray(child.material) ? child.material : [child.material];
        childMaterials.filter(Boolean).forEach((material) => {
            if (material.transparent) materials.push(material);
        });
    });
    return materials;
}

function disposeObject(object) {
    object.traverse((child) => {
        child.geometry?.dispose?.();
        const materials = Array.isArray(child.material) ? child.material : [child.material];
        materials.filter(Boolean).forEach((material) => material.dispose?.());
    });
}

function cryptoRandomId() {
    if (globalThis.crypto?.randomUUID) return globalThis.crypto.randomUUID();
    return Math.random().toString(36).slice(2, 10);
}
