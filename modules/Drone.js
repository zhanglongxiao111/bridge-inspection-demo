import * as THREE from 'three';
import { DroneMotionController } from '../src/core/drone/DroneMotionController.js';
import { DRONE_STATES, DroneStateMachine } from '../src/core/drone/DroneStateMachine.js';
import { DroneVisual } from '../src/core/drone/DroneVisual.js';

const DEFAULT_WAYPOINTS = [
    new THREE.Vector3(-250, 110, 140),
    new THREE.Vector3(0, 45, 160),
    new THREE.Vector3(250, 110, 140)
];
const INITIAL_POSITION = new THREE.Vector3(0, -10, 150);
const HOVER_OFFSET = new THREE.Vector3(15, 10, 15);
const MANUAL_KEYS = new Set(['w', 'a', 's', 'd', ' ', 'shift', 'q', 'e']);
export const DRONE_PHOTO_FLASH_EVENT = 'bridge:drone-photo-flash';
const DEFAULT_FPV_CAMERA_POSE = Object.freeze({
    offset: new THREE.Vector3(0, -1.05, -3.2),
    lookAt: new THREE.Vector3(0, -1.12, -120)
});

export class Drone {
    constructor(scene, camera, controls, options = {}) {
        this.scene = scene;
        this.camera = camera;
        this.controls = controls;
        this.isFPV = false;
        this.photoTimer = 0;
        this.photoFlashDispatched = false;
        this.holdPosition = null;
        this.safetyHoldPosition = null;
        this.safetyState = null;
        this.safetyAlert = null;
        this.waterImpactState = { active: false, mode: 'clear', position: null };
        this.splashState = { active: false, startedAt: 0, position: null };
        this.keys = { w: false, a: false, s: false, d: false, space: false, shift: false, q: false, e: false };
        this.waypoints = DEFAULT_WAYPOINTS.map((waypoint) => waypoint.clone());

        this.visual = new DroneVisual();
        this.mesh = this.visual.group;
        const initialPosition = toVector3(options.initialPosition, INITIAL_POSITION);
        this.homePosition = initialPosition.clone();
        this.mesh.position.copy(initialPosition);
        this.scene.add(this.mesh);

        this.motion = new DroneMotionController({ position: initialPosition });
        this.motion.syncToMesh(this.mesh);
        this.stateMachine = new DroneStateMachine(DRONE_STATES.IDLE);
        this.stateMachine.onChange = (state) => this.onStateChange?.(state);

        this.position = this.mesh.position;
        this.onStateChange = null;
        this._initControls();
    }

    get flightState() {
        return this.stateMachine.state;
    }

    set flightState(nextState) {
        this.stateMachine.setState(nextState);
    }

    _initControls() {
        window.addEventListener('keydown', (event) => {
            const key = event.key.toLowerCase();
            const mappedKey = key === ' ' ? 'space' : key;

            if (!MANUAL_KEYS.has(key)) {
                return;
            }

            event.preventDefault();

            if (Object.prototype.hasOwnProperty.call(this.keys, mappedKey)) {
                this.keys[mappedKey] = true;
            }

            if (this.isFPV && this.stateMachine.canKeyboardInterrupt()) {
                this.flightState = DRONE_STATES.MANUAL;
                this.motion.stop();
            }
        });

        window.addEventListener('keyup', (event) => {
            const key = event.key.toLowerCase();
            const mappedKey = key === ' ' ? 'space' : key;

            if (Object.prototype.hasOwnProperty.call(this.keys, mappedKey)) {
                this.keys[mappedKey] = false;
            }
        });
    }

    toggleView() {
        this.isFPV = !this.isFPV;
        this.controls.enabled = !this.isFPV;
        return this.isFPV;
    }

    addWaypoint(vec3) {
        this.waypoints.push(vec3.clone());

        if (this.flightState === DRONE_STATES.IDLE) {
            this.flightState = DRONE_STATES.AUTO_NAV;
        }
    }

    removeLastWaypoint() {
        if (this.waypoints.length > 0) {
            this.waypoints.pop();
        }
    }

    resumeMission() {
        if (this.waypoints.length > 0) {
            this.flightState = DRONE_STATES.AUTO_NAV;
        }
    }

    startMission() {
        if (this.waypoints.length > 0 && this.flightState === DRONE_STATES.IDLE) {
            this.flightState = DRONE_STATES.AUTO_NAV;
        }
    }

    update(delta) {
        const dt = Math.min(delta, 0.1);
        const isAirborne = this.mesh.position.y > this.homePosition.y + 8;
        const isFlying = isAirborne || this.flightState !== DRONE_STATES.IDLE;

        this.visual.updateRotors(dt, isFlying);
        this.updateFlightMode(dt);
        this.motion.step(dt);
        this.motion.syncMesh(this.mesh);
        this.updateCamera(dt);
    }

    updateFlightMode(delta) {
        if (this.flightState === DRONE_STATES.MANUAL && this.isFPV) {
            this.motion.applyManualInput(this.getSafetyFilteredKeys(), delta);
            return;
        }

        if (this.flightState === DRONE_STATES.AUTO_NAV) {
            this.updateAutoNavigation(delta);
            return;
        }

        if (this.flightState === DRONE_STATES.PHOTOGRAPHING) {
            this.updatePhotography(delta);
        }
    }

    updateAutoNavigation(delta) {
        if (this.safetyState?.waterImpact) {
            this.motion.stop();
            return;
        }

        if (this.safetyState?.blocked && this.safetyState.reason === 'geofence-exit') {
            this.updateSafetyHold(delta);
            return;
        }

        if (this.safetyState?.blocked) {
            this.updateAutoAvoidance(delta);
            return;
        }

        this.safetyHoldPosition = null;

        if (this.waypoints.length === 0) {
            this.flightState = DRONE_STATES.IDLE;
            return;
        }

        const target = this.waypoints[0].clone();
        const hoverPosition = target.clone().add(HOVER_OFFSET);

        this.motion.applyAutoNavigation(hoverPosition, delta);
        this.motion.facePoint(new THREE.Vector3(target.x, this.mesh.position.y, target.z), delta);
        this.visual.aimSpotlightAt(target);

        if (this.motion.getPosition().distanceTo(hoverPosition) < 2.5 && this.motion.getVelocity().length() < 12) {
            this.holdPosition = hoverPosition;
            this.motion.stop();
            this.flightState = DRONE_STATES.PHOTOGRAPHING;
            this.photoTimer = 1.5;
            this.photoFlashDispatched = false;
        }
    }

    updateAutoAvoidance(delta) {
        const localAvoidance = toVector3(
            this.safetyState?.avoidanceVector,
            new THREE.Vector3(1, 0.12, 0)
        );
        const worldAvoidance = localAvoidance.applyQuaternion(this.mesh.quaternion);

        if (worldAvoidance.lengthSq() === 0) {
            worldAvoidance.set(1, 0.12, 0);
        }

        const target = this.motion.getPosition().add(worldAvoidance.normalize().multiplyScalar(18));
        this.motion.applyAutoNavigation(target, delta);
        this.motion.facePoint(target, delta);
    }

    updateSafetyHold(delta) {
        if (!this.safetyHoldPosition) {
            this.safetyHoldPosition = this.motion.getPosition();
        }

        this.motion.holdAt(this.safetyHoldPosition, delta);
        this.motion.stop();
    }

    updatePhotography(delta) {
        this.photoTimer -= delta;
        const flashActive = this.photoTimer > 1.2 && this.photoTimer < 1.4;
        this.visual.setFlash(flashActive);

        if (flashActive && !this.photoFlashDispatched) {
            this.photoFlashDispatched = true;
            this.dispatchPhotoFlashEvent();
        }

        if (this.holdPosition) {
            this.motion.holdAt(this.holdPosition, delta);
        }

        if (this.photoTimer > 0) {
            return;
        }

        this.visual.setFlash(false);
        this.waypoints.shift();
        this.holdPosition = null;
        this.photoFlashDispatched = false;
        this.flightState = this.waypoints.length > 0 ? DRONE_STATES.AUTO_NAV : DRONE_STATES.IDLE;
    }

    dispatchPhotoFlashEvent() {
        if (typeof window === 'undefined' || typeof window.CustomEvent !== 'function') {
            return;
        }

        window.dispatchEvent(new window.CustomEvent(DRONE_PHOTO_FLASH_EVENT, {
            detail: {
                position: vectorToPlain(this.motion.getPosition()),
                state: this.flightState,
                timestamp: new Date().toISOString()
            }
        }));
    }

    updateCamera(delta) {
        if (this.isFPV) {
            const pose = this.getFpvCameraPose();
            const offset = pose.offset.clone().applyQuaternion(this.mesh.quaternion);
            const lookAt = pose.lookAt.clone().applyQuaternion(this.mesh.quaternion);

            this.camera.position.copy(this.mesh.position).add(offset);
            this.camera.lookAt(this.mesh.position.clone().add(lookAt));
            return;
        }

        this.controls.target.lerp(this.mesh.position, 5 * delta);
    }

    getFpvCameraPose() {
        const visualPose = typeof this.visual.getFpvCameraPose === 'function'
            ? this.visual.getFpvCameraPose()
            : null;

        return {
            offset: toVector3(visualPose?.offset, DEFAULT_FPV_CAMERA_POSE.offset),
            lookAt: toVector3(visualPose?.lookAt, DEFAULT_FPV_CAMERA_POSE.lookAt)
        };
    }

    applySafetyPolicyState(safetyState) {
        this.safetyState = safetyState ?? null;
        this.safetyAlert = safetyState?.alert ?? null;

        if (!safetyState?.waterImpact) {
            if (safetyState?.reason !== 'geofence-exit') {
                this.safetyHoldPosition = null;
            }
            return;
        }

        this.motion.stop();
        this.holdPosition = this.motion.getPosition();
        this.safetyHoldPosition = this.holdPosition.clone();
        this.splashState = {
            active: true,
            startedAt: performance.now(),
            position: this.holdPosition.clone()
        };
        this.waterImpactState = {
            active: true,
            mode: 'hover',
            position: this.holdPosition.clone(),
            alert: this.safetyAlert
        };

        if (this.flightState !== DRONE_STATES.IDLE) {
            this.flightState = DRONE_STATES.IDLE;
        }
    }

    getSafetyFilteredKeys(keys = this.keys) {
        const filteredKeys = { ...keys };
        const inputMask = this.safetyState?.inputMask;

        if (!inputMask) {
            return filteredKeys;
        }

        Object.entries(inputMask).forEach(([key, allowed]) => {
            if (!allowed && Object.prototype.hasOwnProperty.call(filteredKeys, key)) {
                filteredKeys[key] = false;
            }
        });

        return filteredKeys;
    }
}

function toVector3(value, fallback) {
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

function vectorToPlain(vector = {}) {
    return {
        x: Number(vector.x ?? 0),
        y: Number(vector.y ?? 0),
        z: Number(vector.z ?? 0)
    };
}
