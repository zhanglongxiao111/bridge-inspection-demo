import * as THREE from 'three';

const DEFAULT_LIMITS = Object.freeze({
    minDistance: 2.5,
    maxDistance: 320,
    minBoxSize: 0.035,
    maxBoxSize: 0.34,
    padding: 0.012
});

export function createDefectProjectionService(options = {}) {
    return new DefectProjectionService(options);
}

export function projectDefectsToDetections(options = {}) {
    return createDefectProjectionService(options).project(options);
}

export class DefectProjectionService {
    constructor({
        camera = null,
        defects = [],
        visuals = [],
        source = 'fpv-defect-projection',
        minDistance = DEFAULT_LIMITS.minDistance,
        maxDistance = DEFAULT_LIMITS.maxDistance,
        minBoxSize = DEFAULT_LIMITS.minBoxSize,
        maxBoxSize = DEFAULT_LIMITS.maxBoxSize,
        padding = DEFAULT_LIMITS.padding
    } = {}) {
        this.provider = source;
        this.camera = camera;
        this.defects = defects;
        this.visuals = visuals;
        this.limits = { minDistance, maxDistance, minBoxSize, maxBoxSize, padding };
    }

    setCamera(camera) {
        this.camera = camera;
        return this;
    }

    setDefects(defects = [], visuals = this.visuals) {
        this.defects = defects;
        this.visuals = visuals;
        return this;
    }

    project(options = {}) {
        const camera = options.camera || this.camera;
        if (!isPerspectiveCamera(camera)) return [];

        const limits = { ...this.limits, ...pickLimits(options) };
        const entries = createProjectionEntries(
            options.defects || this.defects,
            options.visuals || this.visuals
        );
        const frustum = createCameraFrustum(camera);
        const processedAt = options.processedAt || new Date().toISOString();
        const viewport = normalizeViewport(options.viewport);

        return entries.reduce((detections, entry, index) => {
            const projected = projectEntry({
                entry,
                camera,
                frustum,
                limits,
                viewport,
                index,
                processedAt,
                source: options.source || this.provider,
                frameId: options.frameId
            });
            if (projected) detections.push(projected);
            return detections;
        }, []);
    }

    createPayload(options = {}) {
        const detections = this.project(options);
        const visibleIds = new Set(detections.map((item) => item.defectId));
        const defects = (options.defects || this.defects)
            .filter((defect) => visibleIds.has(String(defect.id || defect.defectId || '').toUpperCase()))
            .map((defect) => ({ ...defect }));

        return {
            provider: options.source || this.provider,
            detections,
            defects,
            processedAt: options.processedAt || new Date().toISOString(),
            source: 'defect-projection-service',
            camera: cameraSnapshot(options.camera || this.camera)
        };
    }
}

function projectEntry({
    entry,
    camera,
    frustum,
    limits,
    viewport,
    index,
    processedAt,
    source,
    frameId
}) {
    const object = entry.visual?.object || entry.visual?.group || entry.defect.object3D || null;
    const center = getWorldCenter(entry.defect, object);
    const distance = camera.position.distanceTo(center);
    if (distance < limits.minDistance || distance > limits.maxDistance) return null;

    const bounds = getWorldBounds(object);
    const inView = bounds ? frustum.intersectsBox(bounds) : frustum.containsPoint(center);
    if (!inView) return null;

    const bbox = bounds
        ? bboxFromBounds(bounds, camera, limits)
        : bboxFromRadius(center, entry.projectionRadius, camera, limits);
    if (!bbox) return null;

    const centerNdc = center.clone().project(camera);
    const screenCenter = {
        x: round((centerNdc.x + 1) / 2, 4),
        y: round((1 - centerNdc.y) / 2, 4)
    };
    const baseConfidence = Number(entry.defect.confidence ?? 0.86);
    const distanceScore = 1 - clamp((distance - limits.minDistance) / (limits.maxDistance - limits.minDistance), 0, 1) * 0.28;
    const centerScore = 1 - clamp(Math.hypot(screenCenter.x - 0.5, screenCenter.y - 0.5), 0, 0.72) * 0.18;

    return {
        id: `${source.toUpperCase()}-${String(index + 1).padStart(3, '0')}`,
        defectId: String(entry.defect.id || entry.defect.defectId || `DEF-${index + 1}`).toUpperCase(),
        label: entry.defect.type || entry.defect.label || 'defect',
        type: entry.defect.type || entry.defect.label || 'defect',
        confidence: round(clamp(baseConfidence * distanceScore * centerScore, 0.35, 0.99), 2),
        severity: entry.defect.severity || 'medium',
        bbox,
        bboxPx: viewport ? bboxToPixels(bbox, viewport) : null,
        distance: round(distance, 2),
        localPosition: plainPosition(entry.defect.localPosition || entry.defect.position || center),
        worldPosition: vectorToObject(center),
        cameraPosition: vectorToObject(camera.position),
        screenCenter,
        visualId: entry.visual?.metadata?.id || entry.defect.visual?.id || null,
        source,
        frameId: frameId || null,
        processedAt,
        capture: {
            reusable: true,
            projection: 'fpv-camera',
            objectName: object?.name || entry.defect.visual?.objectName || null
        }
    };
}

function createProjectionEntries(defects = [], visuals = []) {
    const visualMap = new Map();
    visuals.forEach((visual) => {
        const key = String(visual.defectId || visual.metadata?.defectId || '').toUpperCase();
        if (key) visualMap.set(key, visual);
    });

    return defects.map((defect) => {
        const key = String(defect.id || defect.defectId || '').toUpperCase();
        const visual = visualMap.get(key) || null;
        return {
            defect,
            visual,
            projectionRadius: Number(
                visual?.metadata?.projectionRadius
                || defect.visual?.projectionRadius
                || defect.projectionRadius
                || 6
            )
        };
    });
}

function createCameraFrustum(camera) {
    camera.updateProjectionMatrix?.();
    camera.updateMatrixWorld?.(true);
    camera.matrixWorldInverse.copy(camera.matrixWorld).invert();
    const projection = new THREE.Matrix4().multiplyMatrices(camera.projectionMatrix, camera.matrixWorldInverse);
    return new THREE.Frustum().setFromProjectionMatrix(projection);
}

function getWorldCenter(defect, object) {
    if (object?.isObject3D) {
        object.updateMatrixWorld(true);
        return object.getWorldPosition(new THREE.Vector3());
    }
    return toVector3(defect.worldPosition || defect.localPosition || defect.position);
}

function getWorldBounds(object) {
    if (!object?.isObject3D) return null;
    object.updateMatrixWorld(true);
    const bounds = new THREE.Box3().setFromObject(object);
    return bounds.isEmpty() ? null : bounds;
}

function bboxFromBounds(bounds, camera, limits) {
    const corners = getBoxCorners(bounds)
        .map((corner) => corner.project(camera))
        .filter((point) => Number.isFinite(point.x) && Number.isFinite(point.y) && point.z >= -1.15 && point.z <= 1.15);
    if (corners.length < 2) {
        return bboxFromRadius(bounds.getCenter(new THREE.Vector3()), bounds.getSize(new THREE.Vector3()).length() * 0.5, camera, limits);
    }

    let minX = Infinity;
    let minY = Infinity;
    let maxX = -Infinity;
    let maxY = -Infinity;
    corners.forEach((point) => {
        const x = (point.x + 1) / 2;
        const y = (1 - point.y) / 2;
        minX = Math.min(minX, x);
        minY = Math.min(minY, y);
        maxX = Math.max(maxX, x);
        maxY = Math.max(maxY, y);
    });

    return normalizeBbox({
        x: minX - limits.padding,
        y: minY - limits.padding,
        width: maxX - minX + limits.padding * 2,
        height: maxY - minY + limits.padding * 2
    }, limits);
}

function bboxFromRadius(center, radius, camera, limits) {
    const ndc = center.clone().project(camera);
    if (ndc.z < -1 || ndc.z > 1) return null;

    const distance = Math.max(camera.position.distanceTo(center), 0.001);
    const halfScreenHeight = Math.tan(THREE.MathUtils.degToRad(camera.fov) * 0.5) * distance;
    const sizeY = clamp((radius / halfScreenHeight) * 0.62, limits.minBoxSize, limits.maxBoxSize);
    const sizeX = clamp(sizeY / Math.max(camera.aspect || 1, 0.1), limits.minBoxSize, limits.maxBoxSize);

    return normalizeBbox({
        x: (ndc.x + 1) / 2 - sizeX * 0.5,
        y: (1 - ndc.y) / 2 - sizeY * 0.5,
        width: sizeX,
        height: sizeY
    }, limits);
}

function normalizeBbox(raw, limits) {
    const x = clamp(raw.x, 0, 1);
    const y = clamp(raw.y, 0, 1);
    const right = clamp(raw.x + raw.width, 0, 1);
    const bottom = clamp(raw.y + raw.height, 0, 1);
    let width = right - x;
    let height = bottom - y;
    if (width <= 0 || height <= 0) return null;

    const centerX = x + width * 0.5;
    const centerY = y + height * 0.5;
    width = clamp(width, limits.minBoxSize, limits.maxBoxSize);
    height = clamp(height, limits.minBoxSize, limits.maxBoxSize);

    return {
        x: round(clamp(centerX - width * 0.5, 0, 1 - width), 4),
        y: round(clamp(centerY - height * 0.5, 0, 1 - height), 4),
        width: round(width, 4),
        height: round(height, 4)
    };
}

function getBoxCorners(box) {
    const { min, max } = box;
    return [
        new THREE.Vector3(min.x, min.y, min.z),
        new THREE.Vector3(min.x, min.y, max.z),
        new THREE.Vector3(min.x, max.y, min.z),
        new THREE.Vector3(min.x, max.y, max.z),
        new THREE.Vector3(max.x, min.y, min.z),
        new THREE.Vector3(max.x, min.y, max.z),
        new THREE.Vector3(max.x, max.y, min.z),
        new THREE.Vector3(max.x, max.y, max.z)
    ];
}

function bboxToPixels(bbox, viewport) {
    return {
        x: Math.round(bbox.x * viewport.width),
        y: Math.round(bbox.y * viewport.height),
        width: Math.round(bbox.width * viewport.width),
        height: Math.round(bbox.height * viewport.height)
    };
}

function normalizeViewport(viewport) {
    if (!viewport) return null;
    const width = Number(viewport.width);
    const height = Number(viewport.height);
    if (!Number.isFinite(width) || !Number.isFinite(height) || width <= 0 || height <= 0) return null;
    return { width, height };
}

function cameraSnapshot(camera) {
    if (!isPerspectiveCamera(camera)) return null;
    return {
        name: camera.name || 'fpv-camera',
        position: vectorToObject(camera.position),
        fov: round(camera.fov, 2),
        aspect: round(camera.aspect, 4)
    };
}

function pickLimits(options) {
    return Object.fromEntries(
        ['minDistance', 'maxDistance', 'minBoxSize', 'maxBoxSize', 'padding']
            .filter((key) => Number.isFinite(Number(options[key])))
            .map((key) => [key, Number(options[key])])
    );
}

function isPerspectiveCamera(camera) {
    return Boolean(camera?.isPerspectiveCamera && camera.position && camera.projectionMatrix);
}

function plainPosition(value) {
    return vectorToObject(toVector3(value));
}

function toVector3(value) {
    if (value instanceof THREE.Vector3) return value.clone();
    if (Array.isArray(value)) return new THREE.Vector3(value[0] ?? 0, value[1] ?? 0, value[2] ?? 0);
    if (value && typeof value === 'object') {
        return new THREE.Vector3(Number(value.x ?? 0), Number(value.y ?? 0), Number(value.z ?? 0));
    }
    return new THREE.Vector3();
}

function vectorToObject(vector) {
    return {
        x: round(vector.x, 3),
        y: round(vector.y, 3),
        z: round(vector.z, 3)
    };
}

function clamp(value, min, max) {
    return Math.max(min, Math.min(max, Number(value)));
}

function round(value, digits = 3) {
    const factor = 10 ** digits;
    return Math.round(Number(value) * factor) / factor;
}

export default DefectProjectionService;
