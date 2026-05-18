import * as THREE from 'three';
import * as CANNON from 'cannon-es';

const UP = new THREE.Vector3(0, 1, 0);

function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
}

function shortestAngleDelta(current, target) {
    return Math.atan2(Math.sin(target - current), Math.cos(target - current));
}

function toCannonVec3(vector) {
    return new CANNON.Vec3(vector.x, vector.y, vector.z);
}

export class DroneMotionController {
    constructor({
        position = new THREE.Vector3(),
        mass = 4,
        maxSpeed = 95,
        manualAcceleration = 160,
        autoAcceleration = 130
    } = {}) {
        this.world = new CANNON.World({
            gravity: new CANNON.Vec3(0, 0, 0)
        });
        this.world.allowSleep = false;

        this.body = new CANNON.Body({
            mass,
            shape: new CANNON.Sphere(2.5),
            position: toCannonVec3(position),
            linearDamping: 0.32,
            angularDamping: 0.72
        });
        this.world.addBody(this.body);

        this.maxSpeed = maxSpeed;
        this.manualAcceleration = manualAcceleration;
        this.autoAcceleration = autoAcceleration;
        this.maxYawSpeed = 1.8;
        this.yawAcceleration = 4.5;
        this.yaw = 0;
        this.yawVelocity = 0;
        this.tmpForward = new THREE.Vector3();
        this.tmpRight = new THREE.Vector3();
        this.tmpForce = new THREE.Vector3();
        this.tmpQuaternion = new THREE.Quaternion();
    }

    syncToMesh(mesh) {
        this.body.position.set(mesh.position.x, mesh.position.y, mesh.position.z);
        this.yaw = new THREE.Euler().setFromQuaternion(mesh.quaternion, 'YXZ').y;
        this.body.quaternion.setFromEuler(0, this.yaw, 0, 'XYZ');
    }

    syncMesh(mesh) {
        mesh.position.set(this.body.position.x, this.body.position.y, this.body.position.z);
        mesh.quaternion.copy(this.tmpQuaternion.setFromAxisAngle(UP, this.yaw));
    }

    applyManualInput(keys, delta) {
        const force = this.tmpForce.set(0, 0, 0);
        const yawQuat = new THREE.Quaternion().setFromAxisAngle(UP, this.yaw);
        const forward = this.tmpForward.set(0, 0, -1).applyQuaternion(yawQuat);
        const right = this.tmpRight.set(1, 0, 0).applyQuaternion(yawQuat);

        if (keys.w) force.add(forward);
        if (keys.s) force.sub(forward);
        if (keys.d) force.add(right);
        if (keys.a) force.sub(right);
        if (keys.space) force.y += 1;
        if (keys.shift) force.y -= 1;

        if (force.lengthSq() > 0) {
            force.normalize().multiplyScalar(this.manualAcceleration * this.body.mass);
            this.body.applyForce(toCannonVec3(force), this.body.position);
        }

        const yawInput = (keys.q ? 1 : 0) + (keys.e ? -1 : 0);
        if (yawInput !== 0) {
            this.yawVelocity = clamp(
                this.yawVelocity + yawInput * this.yawAcceleration * delta,
                -this.maxYawSpeed,
                this.maxYawSpeed
            );
        }
    }

    applyAutoNavigation(target, delta) {
        const position = this.getPosition();
        const toTarget = target.clone().sub(position);
        const distance = toTarget.length();

        if (distance === 0) {
            return;
        }

        const cruiseSpeed = this.maxSpeed * 0.8;
        const desiredSpeed = distance > 6
            ? clamp(distance * 1.35, 8, cruiseSpeed)
            : Math.min(distance * 1.2, cruiseSpeed);
        const desiredVelocity = toTarget.normalize().multiplyScalar(desiredSpeed);
        const currentVelocity = this.getVelocity();
        const velocityError = desiredVelocity.sub(currentVelocity);
        const force = velocityError.multiplyScalar(this.autoAcceleration * this.body.mass * delta);

        this.body.applyForce(toCannonVec3(force), this.body.position);
    }

    facePoint(target, delta) {
        const dx = target.x - this.body.position.x;
        const dz = target.z - this.body.position.z;

        if (Math.abs(dx) + Math.abs(dz) < 0.001) {
            return;
        }

        const desiredYaw = Math.atan2(-dx, -dz);
        const yawError = shortestAngleDelta(this.yaw, desiredYaw);
        const desiredYawVelocity = clamp(yawError * 4, -this.maxYawSpeed, this.maxYawSpeed);
        const blend = clamp(delta * 8, 0, 1);
        this.yawVelocity = THREE.MathUtils.lerp(this.yawVelocity, desiredYawVelocity, blend);
    }

    holdAt(target, delta) {
        this.applyAutoNavigation(target, delta);
    }

    stop() {
        this.body.velocity.scale(0.15, this.body.velocity);
        this.body.angularVelocity.set(0, 0, 0);
        this.yawVelocity *= 0.15;
    }

    setPosition(position) {
        this.body.position.set(position.x, position.y, position.z);
        this.body.velocity.set(0, 0, 0);
        this.body.angularVelocity.set(0, 0, 0);
        return this;
    }

    step(delta) {
        this.world.step(1 / 60, delta, 3);
        this.limitVelocity();
        this.yaw += this.yawVelocity * delta;
        this.yaw = Math.atan2(Math.sin(this.yaw), Math.cos(this.yaw));
        this.yawVelocity *= Math.exp(-delta * 1.8);

        this.body.angularVelocity.set(0, 0, 0);
        this.body.quaternion.setFromEuler(0, this.yaw, 0, 'XYZ');
    }

    getPosition() {
        return new THREE.Vector3(this.body.position.x, this.body.position.y, this.body.position.z);
    }

    getVelocity() {
        return new THREE.Vector3(this.body.velocity.x, this.body.velocity.y, this.body.velocity.z);
    }

    limitVelocity() {
        const velocity = this.body.velocity;
        const speed = velocity.length();

        if (speed > this.maxSpeed) {
            velocity.scale(this.maxSpeed / speed, velocity);
        }
    }
}
