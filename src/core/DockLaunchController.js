import * as THREE from 'three';

export const LAUNCH_PHASES = [
    { id: 'standby', label: '待命关闭', duration: 260 },
    { id: 'unlock', label: '舱门解锁', duration: 620 },
    { id: 'opening', label: '左右盖板打开', duration: 1200 },
    { id: 'platformReady', label: '平台升起', duration: 900 },
    { id: 'rotorIdle', label: '旋翼怠速', duration: 850 },
    { id: 'spoolUp', label: '旋翼加速', duration: 1150 },
    { id: 'rise', label: '垂直升空', duration: 1550 },
    { id: 'depart', label: '离巢巡检', duration: 1500 }
];

const ROTOR_IDLE_THROTTLE = 0.28;
const FULL_THROTTLE = 1;

export function createDockLaunchController(options = {}) {
    return new DockLaunchController(options);
}

export class DockLaunchController {
    constructor({ drone, dockStation, documentRef = document } = {}) {
        this.drone = drone;
        this.dockStation = dockStation;
        this.document = documentRef;
        this.active = false;
        this.completed = false;
        this.startedAt = 0;
        this.phase = 'standby';
        this.promise = null;
        this.resolve = null;
        this.parkPosition = new THREE.Vector3();
        this.launchPosition = new THREE.Vector3();
        this.risePosition = new THREE.Vector3();
        this.exitPosition = new THREE.Vector3();
        this.refreshPositions();
        this.resetDroneToDock();
        this.updateDockPanel({
            status: '待命关闭',
            hatch: '关闭',
            pusher: '锁止',
            platform: '收纳',
            rotor: '停止'
        });
    }

    refreshPositions() {
        this.parkPosition = this.dockStation?.getParkPosition?.()
            ?? this.dockStation?.getLaunchPosition?.()
            ?? new THREE.Vector3();
        this.launchPosition = this.dockStation?.getLaunchPosition?.() ?? this.parkPosition.clone();
        this.risePosition = this.launchPosition.clone().add(new THREE.Vector3(0, 54, 0));
        this.exitPosition = this.dockStation?.getExitPosition?.() ?? new THREE.Vector3(-315, 96, 150);
    }

    resetDroneToDock() {
        if (!this.drone) return;
        this.refreshPositions();
        this.dockStation?.setStatus?.('closed')?.setHatchProgress?.(0)?.setPlatformProgress?.(0)?.setLockProgress?.(1);
        this.drone.visual?.setRotorThrottle?.(0, true);
        this.setDronePosition(this.parkPosition);
    }

    startLaunch() {
        if (this.completed) return Promise.resolve(true);
        if (this.active) return this.promise;
        if (!this.drone || !this.dockStation) return Promise.resolve(false);

        this.refreshPositions();
        this.active = true;
        this.startedAt = performance.now();
        this.phase = 'standby';
        this.dockStation.setStatus('unlocking').setHatchProgress(0).setPlatformProgress(0).setLockProgress(1);
        this.drone.visual?.setRotorThrottle?.(0);
        this.setDronePosition(this.parkPosition);
        this.updateDockPanel({
            status: '起飞准备',
            hatch: '关闭',
            pusher: '解锁中',
            platform: '收纳',
            rotor: '停止'
        });
        this.promise = new Promise((resolve) => {
            this.resolve = resolve;
        });
        return this.promise;
    }

    update(now = performance.now()) {
        if (!this.active) return;

        const elapsed = now - this.startedAt;
        const timeline = resolveLaunchTimeline(elapsed);
        this.phase = timeline.phase.id;
        this.updatePhase(timeline);

        if (timeline.done) {
            this.active = false;
            this.completed = true;
            this.dockStation.setStatus('departed').setHatchProgress(1).setPlatformProgress(1).setLockProgress(0);
            this.drone.visual?.setRotorThrottle?.(FULL_THROTTLE);
            this.setDronePosition(this.exitPosition);
            this.updateDockPanel({
                status: '已离巢',
                hatch: '开启',
                pusher: '释放',
                platform: '升起',
                rotor: '高速'
            });
            this.resolve?.(true);
            this.resolve = null;
        }
    }

    updatePhase({ phase, localProgress }) {
        const p = smooth(localProgress);

        if (phase.id === 'standby') {
            this.dockStation.setStatus('closed').setHatchProgress(0).setPlatformProgress(0).setLockProgress(1);
            this.drone.visual?.setRotorThrottle?.(0);
            this.setDronePosition(this.parkPosition);
            return;
        }

        if (phase.id === 'unlock') {
            this.dockStation.setStatus('unlocking').setHatchProgress(0).setPlatformProgress(0).setLockProgress(1 - p);
            this.setDronePosition(this.parkPosition);
            this.updateDockPanel({ status: '舱门解锁', hatch: '关闭', pusher: '解锁中', platform: '收纳', rotor: '停止' });
            return;
        }

        if (phase.id === 'opening') {
            this.dockStation.setStatus('opening').setHatchProgress(p).setPlatformProgress(0).setLockProgress(0);
            this.setDronePosition(this.parkPosition);
            this.updateDockPanel({ status: '左右开盖', hatch: `${Math.round(p * 100)}%`, pusher: '已解锁', platform: '收纳', rotor: '停止' });
            return;
        }

        if (phase.id === 'platformReady') {
            this.dockStation.setStatus('ready').setHatchProgress(1).setPlatformProgress(p).setLockProgress(0);
            this.setDronePosition(interpolate(this.parkPosition, this.launchPosition, p));
            this.updateDockPanel({ status: '平台就绪', hatch: '开启', pusher: '释放', platform: `${Math.round(p * 100)}%`, rotor: '停止' });
            return;
        }

        if (phase.id === 'rotorIdle') {
            this.dockStation.setStatus('ready').setHatchProgress(1).setPlatformProgress(1).setLockProgress(0);
            this.setDronePosition(this.launchPosition);
            this.drone.visual?.setRotorThrottle?.(THREE.MathUtils.lerp(0, ROTOR_IDLE_THROTTLE, p));
            this.updateDockPanel({ status: '旋翼怠速', hatch: '开启', pusher: '释放', platform: '升起', rotor: `${Math.round(ROTOR_IDLE_THROTTLE * p * 100)}%` });
            return;
        }

        if (phase.id === 'spoolUp') {
            const throttle = THREE.MathUtils.lerp(ROTOR_IDLE_THROTTLE, FULL_THROTTLE, p);
            this.dockStation.setStatus('spoolup').setHatchProgress(1).setPlatformProgress(1).setLockProgress(0);
            this.setDronePosition(this.launchPosition);
            this.drone.visual?.setRotorThrottle?.(throttle);
            this.updateDockPanel({ status: '旋翼加速', hatch: '开启', pusher: '释放', platform: '升起', rotor: `${Math.round(throttle * 100)}%` });
            return;
        }

        if (phase.id === 'rise') {
            this.dockStation.setStatus('launching').setHatchProgress(1).setPlatformProgress(1).setLockProgress(0);
            this.drone.visual?.setRotorThrottle?.(FULL_THROTTLE);
            this.setDronePosition(interpolate(this.launchPosition, this.risePosition, p));
            this.updateDockPanel({ status: '垂直升空', hatch: '开启', pusher: '释放', platform: '升起', rotor: '高速' });
            return;
        }

        if (phase.id === 'depart') {
            this.dockStation.setStatus('launching').setHatchProgress(1).setPlatformProgress(1).setLockProgress(0);
            this.drone.visual?.setRotorThrottle?.(FULL_THROTTLE);
            this.setDronePosition(interpolate(this.risePosition, this.exitPosition, p));
            this.updateDockPanel({ status: '离巢中', hatch: '开启', pusher: '释放', platform: '升起', rotor: '高速' });
        }
    }

    setDronePosition(position) {
        this.drone.motion?.setPosition?.(position);
        this.drone.mesh?.position.copy(position);
    }

    updateDockPanel({ status, hatch, pusher, platform, rotor }) {
        setText(this.document, '[data-dock-status]', status);
        setText(this.document, '[data-dock-hatch]', hatch);
        setText(this.document, '[data-dock-pusher]', pusher);
        setText(this.document, '[data-dock-platform]', platform);
        setText(this.document, '[data-dock-rotor]', rotor);
    }
}

export function resolveLaunchTimeline(elapsed) {
    let cursor = 0;
    for (const phase of LAUNCH_PHASES) {
        const end = cursor + phase.duration;
        if (elapsed <= end) {
            return {
                phase,
                localProgress: Math.max(0, Math.min(1, (elapsed - cursor) / phase.duration)),
                done: false
            };
        }
        cursor = end;
    }
    return { phase: LAUNCH_PHASES[LAUNCH_PHASES.length - 1], localProgress: 1, done: true };
}

function interpolate(from, to, progress) {
    return from.clone().lerp(to, progress);
}

function smooth(t) {
    return t * t * (3 - 2 * t);
}

function setText(doc, selector, text) {
    const element = doc?.querySelector?.(selector);
    if (element) element.textContent = text;
}
