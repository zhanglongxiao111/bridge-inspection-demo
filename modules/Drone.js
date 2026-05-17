import * as THREE from 'three';

export class Drone {
    constructor(scene, camera, controls) {
        this.scene = scene;
        this.camera = camera;
        this.controls = controls;

        this.isFPV = false;
        this.speed = 100.0;
        this.rotSpeed = 1.5;
        
        this.waypoints = [
            new THREE.Vector3(-250, 110, 140),
            new THREE.Vector3(0, 45, 160),
            new THREE.Vector3(250, 110, 140)
        ];
        this.flightState = 'IDLE'; // IDLE, AUTO_NAV, PHOTOGRAPHING, MANUAL
        this.photoTimer = 0;

        this.keys = { w: false, a: false, s: false, d: false, space: false, shift: false, q: false, e: false };

        this.mesh = this.createModel();
        
        // Initial position (on the ground/bridge deck)
        this.position = new THREE.Vector3(0, -10, 150);
        this.mesh.position.copy(this.position);
        this.scene.add(this.mesh);

        this._initControls();
        
        // Expose a callback for UI updates
        this.onStateChange = null;
    }

    createModel() {
        const group = new THREE.Group();
        
        const bodyGeom = new THREE.BoxGeometry(4, 1.5, 5);
        const mat = new THREE.MeshStandardMaterial({ 
            color: 0x1a1a1a, roughness: 0.3, metalness: 0.8 
        });
        const body = new THREE.Mesh(bodyGeom, mat);
        group.add(body);

        this.rotors = [];
        const armDistX = 3.5, armDistZ = 3.5;
        const positions = [
            [armDistX, armDistZ], [-armDistX, armDistZ], 
            [armDistX, -armDistZ], [-armDistX, -armDistZ]
        ];
        
        positions.forEach(pos => {
            const armGeom = new THREE.CylinderGeometry(0.3, 0.3, 5);
            armGeom.rotateX(Math.PI / 2);
            const arm = new THREE.Mesh(armGeom, mat);
            arm.position.set(pos[0]/2, 0, pos[1]/2);
            arm.lookAt(pos[0], 0, pos[1]);
            group.add(arm);

            const propGeom = new THREE.CylinderGeometry(2.5, 2.5, 0.1, 16);
            const propMat = new THREE.MeshStandardMaterial({ color: 0x222222, transparent: true, opacity: 0.4 });
            const prop = new THREE.Mesh(propGeom, propMat);
            prop.position.set(pos[0], 0.5, pos[1]);
            group.add(prop);
            this.rotors.push(prop);
        });

        // Spotlight
        this.spotLight = new THREE.SpotLight(0xd4af37, 200, 300, Math.PI / 8, 0.5, 1);
        this.spotLight.position.set(0, -1, 0);
        
        this.targetObj = new THREE.Object3D();
        this.targetObj.position.set(0, -100, 0);
        group.add(this.targetObj);
        this.spotLight.target = this.targetObj;
        group.add(this.spotLight);

        // Flash Light for photographing
        this.flashLight = new THREE.PointLight(0xffffff, 0, 100);
        this.flashLight.position.set(0, -2, 0);
        group.add(this.flashLight);

        return group;
    }

    _initControls() {
        window.addEventListener('keydown', (e) => {
            const key = e.key.toLowerCase();
            if(key === ' ') { this.keys.space = true; e.preventDefault(); }
            if(key === 'shift') { this.keys.shift = true; e.preventDefault(); }
            if(this.keys.hasOwnProperty(key)) {
                this.keys[key] = true;
                // Interrupt auto-nav if in FPV
                if (this.isFPV && this.flightState === 'AUTO_NAV') {
                    this.flightState = 'MANUAL';
                    if(this.onStateChange) this.onStateChange('MANUAL');
                }
            }
        });
        window.addEventListener('keyup', (e) => {
            const key = e.key.toLowerCase();
            if(key === ' ') this.keys.space = false;
            if(key === 'shift') this.keys.shift = false;
            if(this.keys.hasOwnProperty(key)) this.keys[key] = false;
        });
    }

    toggleView() {
        this.isFPV = !this.isFPV;
        this.controls.enabled = !this.isFPV;
        return this.isFPV;
    }

    addWaypoint(vec3) {
        this.waypoints.push(vec3.clone());
        if (this.flightState === 'IDLE') {
            this.flightState = 'AUTO_NAV';
            if(this.onStateChange) this.onStateChange('AUTO_NAV');
        }
    }
    
    removeLastWaypoint() {
        if(this.waypoints.length > 0) {
            this.waypoints.pop();
        }
    }

    resumeMission() {
        if(this.waypoints.length > 0) {
            this.flightState = 'AUTO_NAV';
            if(this.onStateChange) this.onStateChange('AUTO_NAV');
        }
    }

    startMission() {
        if(this.waypoints.length > 0 && this.flightState === 'IDLE') {
            this.flightState = 'AUTO_NAV';
            if(this.onStateChange) this.onStateChange('AUTO_NAV');
        }
    }

    update(delta) {
        if (delta > 0.1) delta = 0.1;

        // Spin rotors
        const isFlying = this.position.y > -8 || this.flightState !== 'IDLE';
        if (isFlying) {
            this.rotors.forEach((r, i) => r.rotation.y += (i % 2 === 0 ? 20 : -20) * delta);
        }

        if (this.isFPV) {
            if (this.flightState === 'MANUAL') {
                const moveAmt = this.speed * delta;
                const rotAmt = this.rotSpeed * delta;
                
                if(this.keys.w) this.mesh.translateZ(-moveAmt);
                if(this.keys.s) this.mesh.translateZ(moveAmt);
                if(this.keys.a) this.mesh.translateX(-moveAmt);
                if(this.keys.d) this.mesh.translateX(moveAmt);
                if(this.keys.space) this.mesh.translateY(moveAmt);
                if(this.keys.shift) this.mesh.translateY(-moveAmt);
                if(this.keys.q) this.mesh.rotateY(rotAmt);
                if(this.keys.e) this.mesh.rotateY(-rotAmt);
            }
            
            const offset = new THREE.Vector3(0, 0.5, -2);
            offset.applyQuaternion(this.mesh.quaternion);
            this.camera.position.copy(this.mesh.position).add(offset);
            
            const lookAt = new THREE.Vector3(0, 0, -100);
            lookAt.applyQuaternion(this.mesh.quaternion);
            this.camera.lookAt(this.mesh.position.clone().add(lookAt));
        } else {
            this.controls.target.lerp(this.mesh.position, 5 * delta);
        }
        
        // Auto Nav Logic (runs regardless of FPV/TPV, unless interrupted)
        if (this.flightState === 'AUTO_NAV' && this.waypoints.length > 0) {
            const target = this.waypoints[0].clone();
            // Hover 1m away, slightly above
            const hoverPos = target.clone().add(new THREE.Vector3(15, 10, 15));
            
            this.mesh.position.lerp(hoverPos, 1.0 * delta);
            
            const targetPos2D = new THREE.Vector3(target.x, this.mesh.position.y, target.z);
            if (this.mesh.position.distanceTo(hoverPos) > 5) {
                const targetQuat = new THREE.Quaternion().setFromRotationMatrix(
                    new THREE.Matrix4().lookAt(this.mesh.position, targetPos2D, new THREE.Vector3(0,1,0))
                );
                this.mesh.quaternion.slerp(targetQuat, 2 * delta);
                // Aim spotlight at target
                this.targetObj.position.copy(this.mesh.worldToLocal(target.clone()));
            }

            if (this.mesh.position.distanceTo(hoverPos) < 2) {
                // Reached waypoint
                this.flightState = 'PHOTOGRAPHING';
                this.photoTimer = 1.5;
                if(this.onStateChange) this.onStateChange('PHOTOGRAPHING');
            }
        }
        
        if (this.flightState === 'PHOTOGRAPHING') {
            this.photoTimer -= delta;
            // Flash effect
            if (this.photoTimer > 1.2 && this.photoTimer < 1.4) {
                this.flashLight.intensity = 1000;
            } else {
                this.flashLight.intensity = 0;
            }
            
            if (this.photoTimer <= 0) {
                this.waypoints.shift(); // Remove the completed waypoint
                if (this.waypoints.length > 0) {
                    this.flightState = 'AUTO_NAV';
                    if(this.onStateChange) this.onStateChange('AUTO_NAV');
                } else {
                    this.flightState = 'IDLE';
                    if(this.onStateChange) this.onStateChange('IDLE');
                }
            }
        }
    }
}
