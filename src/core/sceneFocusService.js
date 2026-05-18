import * as THREE from 'three';

const DEFAULT_CAMERA_OFFSET = new THREE.Vector3(95, 68, 135);
const DEFAULT_MARKER_COLOR = 0xef4444;
const DEFAULT_RING_COLOR = 0xd4af37;

export function createSceneFocusService(options = {}) {
    return new SceneFocusService(options);
}

export class SceneFocusService {
    constructor({
        scene,
        camera,
        controls,
        cameraAnimator,
        defaultOffset = DEFAULT_CAMERA_OFFSET,
        getNow = () => performance.now()
    } = {}) {
        this.scene = scene;
        this.camera = camera;
        this.controls = controls;
        this.cameraAnimator = cameraAnimator;
        this.defaultOffset = toVector3(defaultOffset, DEFAULT_CAMERA_OFFSET);
        this.getNow = getNow;
        this.highlightGroup = null;
        this.currentFocusTarget = null;
    }

    focusTarget(target, options = {}) {
        const focus = resolveTargetVector(target);
        if (!focus) {
            return false;
        }

        const offset = toVector3(options.offset, this.defaultOffset);
        const position = options.cameraPosition
            ? toVector3(options.cameraPosition)
            : focus.clone().add(offset);

        this.currentFocusTarget = focus.clone();
        this.controls?.target?.copy?.(focus);
        this.controls?.update?.();

        if (this.cameraAnimator?.animateTo) {
            this.cameraAnimator.animateTo({
                position,
                target: focus,
                duration: options.duration,
                easing: options.easing,
                onComplete: options.onComplete
            }, this.getNow());
            return true;
        }

        if (this.camera) {
            this.camera.position.copy(position);
            this.camera.lookAt(focus);
            options.onComplete?.({ camera: this.camera });
            return true;
        }

        return false;
    }

    highlightDefect(defect, options = {}) {
        const target = resolveTargetVector(defect);
        if (!target || !this.scene) {
            return null;
        }

        this.clearHighlight();

        const size = Number(options.size ?? defect?.size ?? 7);
        const color = Number(options.color ?? defect?.color ?? DEFAULT_MARKER_COLOR);
        const ringColor = Number(options.ringColor ?? DEFAULT_RING_COLOR);
        const group = new THREE.Group();
        group.name = options.name ?? `defect-highlight-${defect?.id ?? 'active'}`;
        group.position.copy(target);

        const marker = new THREE.Mesh(
            new THREE.SphereGeometry(size, 24, 16),
            new THREE.MeshBasicMaterial({
                color,
                transparent: true,
                opacity: 0.86,
                depthTest: false
            })
        );
        marker.name = 'defect-highlight-marker';
        marker.renderOrder = 40;

        const ring = new THREE.Mesh(
            new THREE.RingGeometry(size * 1.45, size * 2.1, 40),
            new THREE.MeshBasicMaterial({
                color: ringColor,
                transparent: true,
                opacity: 0.72,
                side: THREE.DoubleSide,
                depthTest: false
            })
        );
        ring.name = 'defect-highlight-ring';
        ring.rotation.x = Math.PI / 2;
        ring.renderOrder = 39;

        const vertical = new THREE.Line(
            new THREE.BufferGeometry().setFromPoints([
                new THREE.Vector3(0, -size * 3, 0),
                new THREE.Vector3(0, size * 3, 0)
            ]),
            new THREE.LineBasicMaterial({
                color: ringColor,
                transparent: true,
                opacity: 0.65,
                depthTest: false
            })
        );
        vertical.name = 'defect-highlight-axis';
        vertical.renderOrder = 38;

        group.add(marker, ring, vertical);
        group.userData.defect = defect ?? null;
        this.scene.add(group);
        this.highlightGroup = group;

        if (options.focus !== false) {
            this.focusTarget(target, {
                cameraPosition: options.cameraPosition,
                offset: options.offset,
                duration: options.duration,
                easing: options.easing
            });
        }

        return group;
    }

    clearHighlight() {
        if (!this.highlightGroup) {
            return false;
        }

        this.highlightGroup.removeFromParent();
        disposeObject(this.highlightGroup);
        this.highlightGroup = null;
        return true;
    }

    update() {
        if (!this.highlightGroup) {
            return;
        }

        const ring = this.highlightGroup.getObjectByName('defect-highlight-ring');
        if (ring) {
            ring.rotation.z += 0.018;
        }
    }

    destroy() {
        this.clearHighlight();
        this.scene = null;
        this.camera = null;
        this.controls = null;
        this.cameraAnimator = null;
    }
}

function resolveTargetVector(target) {
    if (!target) {
        return null;
    }

    if (target instanceof THREE.Vector3 || Array.isArray(target)) {
        return toVector3(target);
    }

    if (target.position) {
        return toVector3(target.position);
    }

    if (target.localPosition) {
        return toVector3(target.localPosition);
    }

    if (target.waypoint) {
        return toVector3(target.waypoint);
    }

    if (typeof target.x !== 'undefined' || typeof target.y !== 'undefined' || typeof target.z !== 'undefined') {
        return toVector3(target);
    }

    return null;
}

function toVector3(value, fallback = new THREE.Vector3()) {
    if (value instanceof THREE.Vector3) {
        return value.clone();
    }

    if (Array.isArray(value)) {
        return new THREE.Vector3(
            Number(value[0] ?? fallback.x),
            Number(value[1] ?? fallback.y),
            Number(value[2] ?? fallback.z)
        );
    }

    if (value && typeof value === 'object') {
        return new THREE.Vector3(
            Number(value.x ?? fallback.x),
            Number(value.y ?? fallback.y),
            Number(value.z ?? fallback.z)
        );
    }

    return fallback.clone();
}

function disposeObject(object) {
    object.traverse((node) => {
        node.geometry?.dispose?.();

        if (Array.isArray(node.material)) {
            node.material.forEach((material) => material.dispose?.());
            return;
        }

        node.material?.dispose?.();
    });
}
