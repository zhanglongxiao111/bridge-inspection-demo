import * as THREE from 'three';

const DEFAULT_SIZE = Object.freeze({ width: 12, height: 8 });
const X_AXIS = new THREE.Vector3(1, 0, 0);
const Y_AXIS = new THREE.Vector3(0, 1, 0);
const Z_AXIS = new THREE.Vector3(0, 0, 1);

const SEVERITY_SCALE = {
    low: 0.82,
    medium: 1,
    high: 1.18,
    critical: 1.36
};

export function createDefectVisualFactory(defaultOptions = {}) {
    return {
        create(defect, options = {}) {
            return createDefectVisual(defect, { ...defaultOptions, ...options });
        }
    };
}

export function createDefectVisual(defect = {}, options = {}) {
    const rng = typeof options.rng === 'function' ? options.rng : seededRandom(options.seed || 20260518);
    const type = String(defect.type || defect.label || 'crack').toLowerCase();
    const severity = String(defect.severity || 'medium').toLowerCase();
    const size = normalizeSize(options.size || defect.visual?.size || DEFAULT_SIZE);
    const scale = (SEVERITY_SCALE[severity] || 1) * Number(options.scale || 1);
    const attachment = normalizeAttachment(options.attachment || defect.attachment || defect.visual?.attachment);
    const position = toVector3(options.position || defect.worldPosition || defect.position || defect.localPosition);
    const id = String(defect.id || defect.defectId || `DEFECT-${Math.round(rng() * 9999)}`).toUpperCase();

    const group = new THREE.Group();
    group.name = `DefectVisual:${id}`;
    group.position.copy(position).add(attachment.normal.clone().multiplyScalar(0.08));
    applySurfaceFrame(group, attachment);
    group.userData.defectId = id;
    group.userData.defectType = type;

    const context = { group, rng, severity, size, scale, type };
    if (type === 'corrosion') createCorrosionVisual(context);
    else if (type === 'spalling') createSpallingVisual(context);
    else if (type === 'debris') createDebrisVisual(context);
    else createCrackVisual(context);

    const radius = Math.max(size.width, size.height) * scale * 0.62;
    const metadata = {
        id: `VIS-${id}`,
        defectId: id,
        type,
        severity,
        objectName: group.name,
        localPosition: vectorToObject(position),
        worldPosition: vectorToObject(position),
        projectionRadius: radius,
        size: {
            width: round(size.width * scale, 2),
            height: round(size.height * scale, 2)
        },
        attachment: {
            surface: attachment.surface,
            normal: vectorToObject(attachment.normal),
            tangentU: vectorToObject(attachment.tangentU),
            tangentV: vectorToObject(attachment.tangentV)
        }
    };
    group.userData.defectVisual = metadata;
    group.userData.projectionRadius = radius;
    group.traverse((child) => {
        child.frustumCulled = false;
        if (child.isMesh) {
            child.castShadow = false;
            child.receiveShadow = true;
        }
    });

    return {
        object: group,
        group,
        metadata,
        dispose() {
            disposeObject(group);
        }
    };
}

function createCrackVisual({ group, rng, severity, size, scale }) {
    const length = size.width * scale;
    const height = size.height * scale;
    const segmentCount = severity === 'critical' ? 9 : 7;
    const points = [];
    for (let i = 0; i <= segmentCount; i += 1) {
        const t = i / segmentCount;
        const x = -length * 0.5 + length * t;
        const wave = Math.sin(t * Math.PI * 2.4) * height * 0.12;
        const jitter = (rng() - 0.5) * height * 0.34;
        points.push(new THREE.Vector3(x, wave + jitter, 0.07));
    }

    const groove = material({
        color: 0x0b0f14,
        roughness: 0.96,
        metalness: 0,
        opacity: 0.96
    });
    const freshEdge = material({
        color: 0x334155,
        roughness: 0.9,
        metalness: 0.02,
        opacity: 0.72
    });

    for (let i = 0; i < points.length - 1; i += 1) {
        const width = (0.28 + rng() * 0.22) * scale;
        addFlatSegment(group, points[i], points[i + 1], width * 1.9, freshEdge.clone(), 0.035, 'crack-broken-edge');
        addFlatSegment(group, points[i], points[i + 1], width, groove.clone(), 0.09, 'crack-open-gap');
    }

    const branchCount = severity === 'critical' ? 5 : 3;
    for (let i = 0; i < branchCount; i += 1) {
        const root = points[1 + Math.floor(rng() * (points.length - 2))].clone();
        const angle = (rng() > 0.5 ? 1 : -1) * (0.55 + rng() * 0.7);
        const lengthBranch = (height * 0.28 + rng() * height * 0.38) * scale;
        const end = root.clone().add(new THREE.Vector3(
            Math.cos(angle) * lengthBranch,
            Math.sin(angle) * lengthBranch,
            0
        ));
        addFlatSegment(group, root, end, (0.13 + rng() * 0.09) * scale, groove.clone(), 0.1, 'crack-branch');
    }

    const hairline = new THREE.Line(
        new THREE.BufferGeometry().setFromPoints(points),
        new THREE.LineBasicMaterial({ color: 0x020617, transparent: true, opacity: 0.92 })
    );
    hairline.name = 'crack-hairline-polyline';
    group.add(hairline);
}

function createCorrosionVisual({ group, rng, severity, size, scale }) {
    const width = size.width * scale;
    const height = size.height * scale;
    const base = material({
        color: severity === 'low' ? 0xb45309 : 0x9a3412,
        roughness: 1,
        metalness: 0,
        opacity: 0.72
    });
    const darkRust = material({ color: 0x5f1f0c, roughness: 1, opacity: 0.84 });
    const freshRust = material({ color: 0xe07924, roughness: 0.95, opacity: 0.64 });

    addPatch(group, width, height, 15, base, rng, 0.04, 'corrosion-main-stain');

    const islands = severity === 'low' ? 7 : 12;
    for (let i = 0; i < islands; i += 1) {
        const radius = (0.5 + rng() * 1.6) * scale;
        const mesh = new THREE.Mesh(
            new THREE.CircleGeometry(radius, 18),
            (rng() > 0.42 ? freshRust : darkRust).clone()
        );
        mesh.name = 'corrosion-oxidation-island';
        mesh.position.set((rng() - 0.5) * width * 0.78, (rng() - 0.5) * height * 0.72, 0.08 + rng() * 0.04);
        mesh.scale.set(1 + rng() * 1.8, 0.45 + rng() * 1.2, 1);
        mesh.rotation.z = rng() * Math.PI;
        group.add(mesh);
    }

    const streaks = severity === 'low' ? 3 : 6;
    for (let i = 0; i < streaks; i += 1) {
        const x = (rng() - 0.5) * width * 0.72;
        const top = new THREE.Vector3(x, (rng() - 0.1) * height * 0.22, 0.12);
        const bottom = top.clone().add(new THREE.Vector3((rng() - 0.5) * 0.9, -height * (0.32 + rng() * 0.42), 0));
        addFlatSegment(group, top, bottom, (0.28 + rng() * 0.24) * scale, darkRust.clone(), 0.1, 'corrosion-runoff-streak');
    }
}

function createSpallingVisual({ group, rng, severity, size, scale }) {
    const width = size.width * scale;
    const height = size.height * scale;
    const cavity = material({ color: 0x475569, roughness: 1, metalness: 0.02, opacity: 0.94 });
    const aggregate = material({ color: 0xa8a29e, roughness: 0.92, metalness: 0.04, opacity: 0.9 });
    const rim = material({ color: 0xe2e8f0, roughness: 0.88, metalness: 0.04, opacity: 0.7 });
    const shadow = material({ color: 0x111827, roughness: 1, opacity: 0.52 });

    addPatch(group, width * 1.06, height * 1.06, 14, shadow, rng, 0.025, 'spalling-cavity-shadow');
    addPatch(group, width, height, 13, cavity, rng, 0.08, 'spalling-exposed-concrete');

    const chipCount = severity === 'high' || severity === 'critical' ? 17 : 11;
    for (let i = 0; i < chipCount; i += 1) {
        const angle = rng() * Math.PI * 2;
        const radiusX = width * (0.18 + rng() * 0.31);
        const radiusY = height * (0.16 + rng() * 0.3);
        const chip = new THREE.Mesh(
            new THREE.CircleGeometry((0.22 + rng() * 0.45) * scale, 9),
            (rng() > 0.45 ? aggregate : rim).clone()
        );
        chip.name = 'spalling-aggregate-chip';
        chip.position.set(Math.cos(angle) * radiusX, Math.sin(angle) * radiusY, 0.12 + rng() * 0.04);
        chip.scale.set(1 + rng() * 1.5, 0.55 + rng(), 1);
        chip.rotation.z = rng() * Math.PI;
        group.add(chip);
    }

    for (let i = 0; i < 5; i += 1) {
        const start = new THREE.Vector3((rng() - 0.5) * width * 0.7, (rng() - 0.5) * height * 0.7, 0.13);
        const end = start.clone().add(new THREE.Vector3((rng() - 0.5) * width * 0.42, (rng() - 0.5) * height * 0.42, 0));
        addFlatSegment(group, start, end, (0.09 + rng() * 0.08) * scale, shadow.clone(), 0.14, 'spalling-radial-fracture');
    }
}

function createDebrisVisual({ group, rng, severity, size, scale }) {
    const width = size.width * scale;
    const height = size.height * scale;
    const dust = material({ color: 0x78716c, roughness: 1, metalness: 0, opacity: 0.38 });
    const concrete = material({ color: 0xb7c1cb, roughness: 0.9, metalness: 0.05, opacity: 1 });
    const asphalt = material({ color: 0x27272a, roughness: 0.88, metalness: 0.03, opacity: 1 });
    const metal = material({ color: 0x64748b, roughness: 0.5, metalness: 0.62, opacity: 1 });

    addPatch(group, width, height, 18, dust, rng, 0.015, 'debris-dust-scatter');

    const count = severity === 'high' || severity === 'critical' ? 13 : 8;
    for (let i = 0; i < count; i += 1) {
        const sx = (0.45 + rng() * 1.45) * scale;
        const sy = (0.28 + rng() * 1.1) * scale;
        const sz = (0.12 + rng() * 0.55) * scale;
        const geom = rng() > 0.72
            ? new THREE.CylinderGeometry(sx * 0.45, sx * 0.5, sz, 8)
            : new THREE.BoxGeometry(sx, sy, sz);
        const mesh = new THREE.Mesh(geom, pick([concrete, asphalt, metal], rng).clone());
        mesh.name = 'debris-physical-fragment';
        mesh.position.set((rng() - 0.5) * width * 0.76, (rng() - 0.5) * height * 0.78, sz * 0.5 + 0.04);
        mesh.rotation.set((rng() - 0.5) * 0.28, (rng() - 0.5) * 0.28, rng() * Math.PI);
        group.add(mesh);
    }

    const warningTint = material({ color: 0xf97316, roughness: 0.8, metalness: 0, opacity: 0.5 });
    addFlatSegment(
        group,
        new THREE.Vector3(-width * 0.4, -height * 0.38, 0.04),
        new THREE.Vector3(width * 0.4, height * 0.32, 0.04),
        0.28 * scale,
        warningTint,
        0.05,
        'debris-scrape-mark'
    );
}

function addPatch(group, width, height, points, mat, rng, z, name) {
    const shape = new THREE.Shape();
    for (let i = 0; i < points; i += 1) {
        const angle = (i / points) * Math.PI * 2;
        const radius = 0.62 + rng() * 0.44;
        const x = Math.cos(angle) * width * 0.5 * radius;
        const y = Math.sin(angle) * height * 0.5 * radius;
        if (i === 0) shape.moveTo(x, y);
        else shape.lineTo(x, y);
    }
    shape.closePath();

    const mesh = new THREE.Mesh(new THREE.ShapeGeometry(shape), mat.clone());
    mesh.name = name;
    mesh.position.z = z;
    mesh.rotation.z = (rng() - 0.5) * 0.35;
    group.add(mesh);
    return mesh;
}

function addFlatSegment(group, start, end, width, mat, z, name) {
    const delta = end.clone().sub(start);
    const length = Math.max(0.01, Math.hypot(delta.x, delta.y));
    const mesh = new THREE.Mesh(new THREE.BoxGeometry(length, width, 0.055), mat);
    mesh.name = name;
    mesh.position.copy(start).add(end).multiplyScalar(0.5);
    mesh.position.z = z;
    mesh.rotation.z = Math.atan2(delta.y, delta.x);
    group.add(mesh);
    return mesh;
}

function material({ color, roughness = 0.9, metalness = 0.02, opacity = 1 }) {
    return new THREE.MeshStandardMaterial({
        color,
        roughness,
        metalness,
        transparent: opacity < 1,
        opacity,
        depthWrite: opacity >= 0.85,
        polygonOffset: true,
        polygonOffsetFactor: -1,
        polygonOffsetUnits: -1,
        side: THREE.DoubleSide
    });
}

function normalizeAttachment(attachment = {}) {
    const normal = toVector3(attachment.normal, Z_AXIS).normalize();
    let tangentV = toVector3(attachment.tangentV, null);
    let tangentU = toVector3(attachment.tangentU, null);

    if (tangentV) {
        tangentV.projectOnPlane(normal).normalize();
    }
    if (tangentU) {
        tangentU.projectOnPlane(normal).normalize();
    }
    if (!tangentV && !tangentU) {
        tangentV = Math.abs(normal.dot(Y_AXIS)) < 0.92 ? Y_AXIS.clone() : Z_AXIS.clone();
        tangentV.projectOnPlane(normal).normalize();
    }
    if (!tangentU) {
        tangentU = tangentV.clone().cross(normal).normalize();
    }
    if (!tangentV) {
        tangentV = normal.clone().cross(tangentU).normalize();
    }
    if (tangentU.clone().cross(tangentV).dot(normal) < 0) {
        tangentU.negate();
    }

    return {
        surface: attachment.surface || 'bridge-surface',
        normal,
        tangentU,
        tangentV
    };
}

function applySurfaceFrame(group, attachment) {
    const matrix = new THREE.Matrix4().makeBasis(
        attachment.tangentU,
        attachment.tangentV,
        attachment.normal
    );
    group.quaternion.setFromRotationMatrix(matrix);
}

function normalizeSize(size = DEFAULT_SIZE) {
    return {
        width: Math.max(1, Number(size.width || DEFAULT_SIZE.width)),
        height: Math.max(1, Number(size.height || DEFAULT_SIZE.height))
    };
}

function toVector3(value, fallback = new THREE.Vector3()) {
    if (value instanceof THREE.Vector3) return value.clone();
    if (Array.isArray(value)) return new THREE.Vector3(value[0] ?? 0, value[1] ?? 0, value[2] ?? 0);
    if (value && typeof value === 'object') {
        return new THREE.Vector3(Number(value.x ?? 0), Number(value.y ?? 0), Number(value.z ?? 0));
    }
    return fallback ? fallback.clone() : null;
}

function vectorToObject(vector) {
    return {
        x: round(vector.x, 3),
        y: round(vector.y, 3),
        z: round(vector.z, 3)
    };
}

function pick(items, rng) {
    return items[Math.min(items.length - 1, Math.floor(rng() * items.length))];
}

function round(value, digits = 3) {
    const factor = 10 ** digits;
    return Math.round(Number(value) * factor) / factor;
}

function disposeObject(object) {
    object.traverse((child) => {
        child.geometry?.dispose?.();
        const materials = Array.isArray(child.material) ? child.material : [child.material];
        materials.filter(Boolean).forEach((mat) => mat.dispose?.());
    });
}

function seededRandom(seed) {
    let value = Math.max(1, Math.floor(seed)) % 2147483647;
    return () => {
        value = (value * 16807) % 2147483647;
        return (value - 1) / 2147483646;
    };
}
