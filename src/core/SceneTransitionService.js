import * as THREE from 'three';

const DEFAULT_FINAL_CAMERA = {
    position: new THREE.Vector3(330, 170, 330),
    target: new THREE.Vector3(40, 72, 20)
};

export function createSceneTransitionService(options = {}) {
    return new SceneTransitionService(options);
}

export class SceneTransitionService {
    constructor({
        camera,
        controls,
        cameraAnimator,
        navigateToView,
        getCesiumViewer,
        overlayRoot = document.body
    } = {}) {
        this.camera = camera;
        this.controls = controls;
        this.cameraAnimator = cameraAnimator;
        this.navigateToView = navigateToView;
        this.getCesiumViewer = getCesiumViewer;
        this.overlay = createOverlay(overlayRoot);
        this.active = false;
    }

    async startFromCesium(detail = {}) {
        if (this.active) return false;
        this.active = true;

        const asset = detail.asset || detail;
        const viewer = detail.viewer || this.getCesiumViewer?.();
        const localTarget = vectorFrom(detail.localPosition || asset.localPosition, DEFAULT_FINAL_CAMERA.target);

        this.setOverlay('锁定桥梁资产', true);
        await this.flyCesium(viewer, asset, { destinationHeight: 180000, duration: 1.35, pitchDegrees: -65 });
        this.setOverlay('下降至桥梁上空', true);
        await this.flyCesium(viewer, asset, { destinationHeight: 5200, duration: 1.55, pitchDegrees: -72 });
        this.setOverlay('切换局部数字孪生场景', true);
        await delay(360);

        this.navigateToView?.('view-flight-control');
        this.setThreeTopView(localTarget);
        await delay(120);

        this.setOverlay('进入巡检固定镜头', true);
        await this.animateThreeCamera({
            position: DEFAULT_FINAL_CAMERA.position,
            target: localTarget,
            duration: 1700
        });

        this.controls?.target?.copy?.(localTarget);
        this.setOverlay('过渡完成', false);
        await delay(260);
        this.overlay.classList.remove('is-active');
        this.active = false;
        return true;
    }

    setThreeTopView(target) {
        if (!this.camera) return;
        const topPosition = target.clone().add(new THREE.Vector3(0, 760, 0.01));
        this.camera.position.copy(topPosition);
        this.camera.lookAt(target);
        this.controls?.target?.copy?.(target);
    }

    animateThreeCamera({ position, target, duration }) {
        if (!this.cameraAnimator) return Promise.resolve(false);

        return new Promise((resolve) => {
            this.cameraAnimator.animateTo({
                position,
                target,
                duration,
                easing: 'easeInOutCubic',
                onComplete: () => resolve(true)
            }, performance.now());
        });
    }

    flyCesium(viewer, asset = {}, options = {}) {
        const Cesium = globalThis.Cesium || window.Cesium;
        if (!viewer?.camera?.flyTo || !Cesium?.Cartesian3 || asset.lng == null || asset.lat == null) {
            return delay(Number(options.duration ?? 1) * 1000);
        }

        return new Promise((resolve) => {
            viewer.camera.flyTo({
                destination: Cesium.Cartesian3.fromDegrees(
                    Number(asset.lng),
                    Number(asset.lat),
                    Number(options.destinationHeight ?? 6000)
                ),
                duration: Number(options.duration ?? 1.2),
                orientation: {
                    heading: THREE.MathUtils.degToRad(options.headingDegrees ?? 0),
                    pitch: THREE.MathUtils.degToRad(options.pitchDegrees ?? -65),
                    roll: 0
                },
                complete: resolve,
                cancel: resolve
            });
        });
    }

    setOverlay(text, active) {
        this.overlay.classList.toggle('is-active', active);
        this.overlay.querySelector('[data-transition-text]').textContent = text;
    }
}

function createOverlay(root) {
    const existing = document.querySelector('.scene-transition-overlay');
    if (existing) return existing;

    const overlay = document.createElement('div');
    overlay.className = 'scene-transition-overlay';
    overlay.innerHTML = `
        <div class="scene-transition-panel">
            <span data-transition-text>准备切换场景</span>
        </div>
    `;
    root?.appendChild?.(overlay);
    return overlay;
}

function delay(ms) {
    return new Promise((resolve) => window.setTimeout(resolve, ms));
}

function vectorFrom(value, fallback) {
    if (value instanceof THREE.Vector3) return value.clone();
    if (Array.isArray(value)) return new THREE.Vector3(value[0] ?? fallback.x, value[1] ?? fallback.y, value[2] ?? fallback.z);
    if (value && typeof value === 'object') {
        return new THREE.Vector3(
            Number(value.x ?? fallback.x),
            Number(value.y ?? fallback.y),
            Number(value.z ?? fallback.z)
        );
    }
    return fallback.clone();
}
