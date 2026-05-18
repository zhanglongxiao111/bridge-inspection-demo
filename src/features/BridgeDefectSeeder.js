import { AI_DETECTIONS_EVENT } from './aiEngine.js';
import { createDefectFromDetection, DEFECT_SEVERITIES, DEFECT_TYPES } from './defectData.js';
import { createDefectProjectionService } from './DefectProjectionService.js';
import { createDefectVisualFactory } from './DefectVisualFactory.js';

const DEBRIS_TYPE = 'debris';
const DEFECT_KINDS = Object.freeze({
    ...DEFECT_TYPES,
    DEBRIS: DEBRIS_TYPE
});

const DEFECT_LABELS = {
    [DEFECT_KINDS.CRACK]: '裂缝',
    [DEFECT_KINDS.CORROSION]: '锈蚀',
    [DEFECT_KINDS.SPALLING]: '剥落',
    [DEFECT_KINDS.DEBRIS]: '抛洒物'
};

const ANCHORS = [
    sideAnchor(-255, 142, 23.4, DEFECT_KINDS.CRACK, DEFECT_SEVERITIES.HIGH, 'pylon-front', 15, 9),
    sideAnchor(248, 118, -23.4, DEFECT_KINDS.CORROSION, DEFECT_SEVERITIES.MEDIUM, 'pylon-rear', 18, 11),
    sideAnchor(-116, 58, 20.8, DEFECT_KINDS.SPALLING, DEFECT_SEVERITIES.MEDIUM, 'deck-fascia', 13, 8),
    topAnchor(96, 52.8, 8, DEFECT_KINDS.DEBRIS, DEFECT_SEVERITIES.HIGH, 'deck-lane', 12, 7),
    sideAnchor(145, 54, -20.8, DEFECT_KINDS.CRACK, DEFECT_SEVERITIES.CRITICAL, 'deck-fascia', 18, 10),
    sideAnchor(-340, 68, -20.8, DEFECT_KINDS.CORROSION, DEFECT_SEVERITIES.LOW, 'deck-fascia', 15, 9),
    sideAnchor(355, 72, 20.8, DEFECT_KINDS.SPALLING, DEFECT_SEVERITIES.HIGH, 'deck-fascia', 17, 11),
    topAnchor(0, 52.8, -9, DEFECT_KINDS.DEBRIS, DEFECT_SEVERITIES.MEDIUM, 'deck-shoulder', 10, 6),
    sideAnchor(210, 165, 23.4, DEFECT_KINDS.CORROSION, DEFECT_SEVERITIES.HIGH, 'pylon-front', 20, 12)
];

export function seedBridgeDefects({
    bridgeScene,
    seed = 20260518,
    count = 7,
    publish = false
} = {}) {
    const rng = seededRandom(seed);
    const selectedAnchors = ANCHORS.slice(0, Math.max(0, Math.min(count, ANCHORS.length)));
    const detections = selectedAnchors.map((anchor, index) => createSeedDetection(anchor, index, rng));
    const defects = detections.map((detection, index) => createSeedDefect(detection, index));
    const visualFactory = createDefectVisualFactory({ seed });
    const visualParent = bridgeScene?.bridgeGroup ?? bridgeScene?.scene ?? null;
    const visuals = defects.map((defect, index) => {
        const detection = detections[index];
        const visual = visualFactory.create(defect, {
            attachment: detection.attachment,
            position: detection.localPosition,
            rng,
            size: detection.visual.size
        });

        visualParent?.add?.(visual.object);
        defect.visual = visual.metadata;
        detection.visual = visual.metadata;
        detection.visualId = visual.metadata.id;
        detection.worldPosition = visual.metadata.worldPosition;

        return {
            defectId: defect.id,
            detectionId: detection.id,
            object: visual.object,
            metadata: visual.metadata,
            dispose: visual.dispose
        };
    });

    defects.forEach((defect) => {
        bridgeScene?.addDefectMarker?.({
            ...defect,
            position: defect.localPosition,
            radius: defect.severity === DEFECT_SEVERITIES.CRITICAL ? 12 : 9,
            height: defect.type === DEFECT_KINDS.DEBRIS ? 9 : 14
        });
    });

    const projectionService = createDefectProjectionService({
        camera: bridgeScene?.camera,
        defects,
        visuals,
        maxDistance: 340,
        source: 'seeded-fpv-projection'
    });
    const seeded = {
        detections,
        defects,
        visuals,
        projectionService,
        projectDetections(cameraOrOptions, options = {}) {
            const projectOptions = cameraOrOptions?.isCamera
                ? { ...options, camera: cameraOrOptions }
                : { ...(cameraOrOptions || {}) };
            return projectionService.project(projectOptions);
        },
        createProjectionPayload(options = {}) {
            return projectionService.createPayload(options);
        }
    };

    if (publish) {
        publishSeededDefects(seeded);
    }

    return seeded;
}

export function publishSeededDefects({
    detections = [],
    defects = [],
    projectionService = null
} = {}) {
    if (typeof window === 'undefined' || typeof window.CustomEvent !== 'function') return false;

    const detail = {
        provider: 'seeded-demo-defects',
        detections: detections.map(toSerializable),
        defects: defects.map(toSerializable),
        processedAt: new Date().toISOString(),
        source: 'bridge-defect-seeder',
        projection: {
            provider: projectionService?.provider || 'seeded-fpv-projection',
            available: Boolean(projectionService)
        }
    };

    window.bridgeAiDetections = detail;
    if (projectionService) window.bridgeDefectProjectionService = projectionService;
    window.dispatchEvent(new CustomEvent(AI_DETECTIONS_EVENT, { detail }));
    return true;
}

function createSeedDetection(anchor, index, rng) {
    const localPosition = jitterOnSurface(anchor, rng);
    const confidence = Math.round((0.78 + rng() * 0.18) * 100) / 100;
    const attachment = {
        surface: anchor.surface,
        normal: anchor.attachment.normal,
        tangentU: anchor.attachment.tangentU,
        tangentV: anchor.attachment.tangentV
    };

    return {
        id: `SEED-DET-${String(index + 1).padStart(3, '0')}`,
        defectId: `DEF-SEED-${String(index + 1).padStart(3, '0')}`,
        label: anchor.type,
        type: anchor.type,
        confidence,
        severity: anchor.severity,
        bbox: fallbackBbox(index, anchor),
        localPosition,
        worldPosition: localPosition,
        cameraPosition: estimateCameraPosition(localPosition, anchor.attachment.normal),
        geoPosition: {
            longitude: 113.122 + index * 0.00022,
            latitude: 23.567 + index * 0.00018,
            altitude: localPosition.y
        },
        attachment,
        visual: {
            kind: 'procedural-bridge-defect',
            size: anchor.size,
            surface: anchor.surface
        },
        source: 'seeded-demo-visual'
    };
}

function createSeedDefect(detection, index) {
    const base = createDefectFromDetection(detection, index);
    return {
        ...base,
        type: detection.type,
        label: DEFECT_LABELS[detection.type] || detection.type,
        description: `${DEFECT_LABELS[detection.type] || detection.type}可视化演示瑕疵`,
        bbox: detection.bbox,
        localPosition: detection.localPosition,
        worldPosition: detection.worldPosition,
        position: detection.localPosition,
        cameraPosition: detection.cameraPosition,
        attachment: detection.attachment,
        visual: detection.visual,
        snapshot: {
            ...base.snapshot,
            telemetry: {
                ...base.snapshot.telemetry,
                visualType: detection.type,
                visualSurface: detection.attachment.surface,
                seededDetectionId: detection.id
            }
        }
    };
}

function sideAnchor(x, y, z, type, severity, surface, width, height) {
    const side = z >= 0 ? 1 : -1;
    return {
        x,
        y,
        z,
        type,
        severity,
        surface,
        size: { width, height },
        jitter: { u: 11, v: 7 },
        attachment: {
            normal: { x: 0, y: 0, z: side },
            tangentU: { x: side, y: 0, z: 0 },
            tangentV: { x: 0, y: 1, z: 0 }
        }
    };
}

function topAnchor(x, y, z, type, severity, surface, width, height) {
    return {
        x,
        y,
        z,
        type,
        severity,
        surface,
        size: { width, height },
        jitter: { u: 13, v: 8 },
        attachment: {
            normal: { x: 0, y: 1, z: 0 },
            tangentU: { x: 1, y: 0, z: 0 },
            tangentV: { x: 0, y: 0, z: 1 }
        }
    };
}

function jitterOnSurface(anchor, rng) {
    const u = Math.round((rng() - 0.5) * anchor.jitter.u);
    const v = Math.round((rng() - 0.5) * anchor.jitter.v);
    const tangentU = anchor.attachment.tangentU;
    const tangentV = anchor.attachment.tangentV;

    return {
        x: anchor.x + tangentU.x * u + tangentV.x * v,
        y: anchor.y + tangentU.y * u + tangentV.y * v,
        z: anchor.z + tangentU.z * u + tangentV.z * v
    };
}

function estimateCameraPosition(position, normal) {
    const normalScale = 105;
    return {
        x: position.x + normal.x * normalScale + 55,
        y: position.y + normal.y * 70 + 34,
        z: position.z + normal.z * normalScale + 45
    };
}

function fallbackBbox(index, anchor) {
    const width = anchor.type === DEFECT_KINDS.DEBRIS ? 0.18 : 0.15 + (anchor.size.width > 16 ? 0.03 : 0);
    const height = anchor.type === DEFECT_KINDS.CORROSION ? 0.14 : 0.11;
    return {
        x: Math.round((0.16 + (index % 3) * 0.22) * 100) / 100,
        y: Math.round((0.2 + (index % 2) * 0.2) * 100) / 100,
        width,
        height
    };
}

function toSerializable(value) {
    return JSON.parse(JSON.stringify(value, (key, nested) => {
        if (typeof nested === 'function') return undefined;
        if (nested?.isObject3D || nested?.isMaterial || nested?.isBufferGeometry) return undefined;
        if (key === 'object' || key === 'group' || key === 'parent') return undefined;
        return nested;
    }));
}

function seededRandom(seed) {
    let value = Math.max(1, Math.floor(seed)) % 2147483647;
    return () => {
        value = (value * 16807) % 2147483647;
        return (value - 1) / 2147483646;
    };
}
