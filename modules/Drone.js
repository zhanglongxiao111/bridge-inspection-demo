import * as THREE from 'three';

export class Drone {
    constructor(scene, camera, controls) {
        this.scene = scene;
        this.camera = camera;
        this.controls = controls;

        this.isFPV = false;
        this.speed = 100.0;
        this.rotSpeed = 1.5;
        this.targetPosition = null;

        // Key states
        this.keys = { w: false, a: false, s: false, d: false, space: false, shift: false, q: false, e: false };

        this.mesh = this.createModel();
        
        // Initial takeoff position
        this.position = new THREE.Vector3(-100, 100, 100);
        this.mesh.position.copy(this.position);
        this.scene.add(this.mesh);

        this._initControls();
    }

    createModel() {
        const group = new THREE.Group();
        
        // Drone Body (Carbon Fiber Look)
        const bodyGeom = new THREE.BoxGeometry(4, 1.5, 5);
        const mat = new THREE.MeshStandardMaterial({ 
            color: 0x1a1a1a, 
            roughness: 0.3, 
            metalness: 0.8 
        });
        const body = new THREE.Mesh(bodyGeom, mat);
        group.add(body);

        // Arms & Rotors
        this.rotors = [];
        const armDistX = 3.5;
        const armDistZ = 3.5;
        const positions = [
            [armDistX, armDistZ], [-armDistX, armDistZ], 
            [armDistX, -armDistZ], [-armDistX, -armDistZ]
        ];
        
        positions.forEach(pos => {
            // Arm
            const armGeom = new THREE.CylinderGeometry(0.3, 0.3, 5);
            armGeom.rotateX(Math.PI / 2);
            const arm = new THREE.Mesh(armGeom, mat);
            // Angle arms towards corners
            arm.position.set(pos[0]/2, 0, pos[1]/2);
            arm.lookAt(pos[0], 0, pos[1]);
            group.add(arm);

            // Rotor Disc
            const propGeom = new THREE.CylinderGeometry(2.5, 2.5, 0.1, 16);
            const propMat = new THREE.MeshStandardMaterial({ 
                color: 0x222222, 
                transparent: true, 
                opacity: 0.4 
            });
            const prop = new THREE.Mesh(propGeom, propMat);
            prop.position.set(pos[0], 0.5, pos[1]);
            group.add(prop);
            this.rotors.push(prop);
        });

        // Searchlight (Amber)
        const spotLight = new THREE.SpotLight(0xd4af37, 200, 300, Math.PI / 8, 0.5, 1);
        spotLight.position.set(0, -1, 0);
        
        const targetObj = new THREE.Object3D();
        targetObj.position.set(0, -100, 0);
        group.add(targetObj);
        spotLight.target = targetObj;
        
        group.add(spotLight);

        // Indicator Light (Red tail)
        const lightMat = new THREE.MeshBasicMaterial({ color: 0xff0000 });
        const tailLight = new THREE.Mesh(new THREE.SphereGeometry(0.3), lightMat);
        tailLight.position.set(0, 0, 2.5);
        group.add(tailLight);

        return group;
    }

    _initControls() {
        window.addEventListener('keydown', (e) => {
            const key = e.key.toLowerCase();
            if(key === ' ') { this.keys.space = true; e.preventDefault(); }
            if(key === 'shift') { this.keys.shift = true; e.preventDefault(); }
            if(this.keys.hasOwnProperty(key)) this.keys[key] = true;
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
        if(this.isFPV) {
            this.controls.enabled = false;
            // Snap camera to front of drone
        } else {
            this.controls.enabled = true;
            // OrbitControls will target the drone in update()
        }
        return this.isFPV;
    }

    flyTo(targetVec3) {
        if (this.isFPV) return; // Only allow auto-nav in TPV
        this.targetPosition = targetVec3.clone();
        this.targetPosition.y = Math.max(this.targetPosition.y + 40, 80); // Hover 40m above target
    }

    update(delta) {
        if (delta > 0.1) delta = 0.1; // Cap delta to prevent huge jumps

        // Spin rotors
        this.rotors.forEach((r, i) => {
            // Alternate rotation direction
            r.rotation.y += (i % 2 === 0 ? 20 : -20) * delta;
        });

        if (this.isFPV) {
            // Manual FPV Physics
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

            // Update Camera to stick to drone's nose
            const offset = new THREE.Vector3(0, 0.5, -2); // Front camera
            offset.applyQuaternion(this.mesh.quaternion);
            this.camera.position.copy(this.mesh.position).add(offset);
            
            // Camera looks forward along drone's local Z
            const lookAt = new THREE.Vector3(0, 0, -100);
            lookAt.applyQuaternion(this.mesh.quaternion);
            this.camera.lookAt(this.mesh.position.clone().add(lookAt));
            
        } else {
            // Auto Nav (TPV)
            if (this.targetPosition) {
                // Lerp position
                this.mesh.position.lerp(this.targetPosition, 1.5 * delta);
                
                // Look towards target horizontally
                const targetPos2D = new THREE.Vector3(this.targetPosition.x, this.mesh.position.y, this.targetPosition.z);
                
                // Only look at if we are far enough (prevent spinning at destination)
                if (this.mesh.position.distanceTo(targetPos2D) > 2) {
                    const targetQuat = new THREE.Quaternion().setFromRotationMatrix(
                        new THREE.Matrix4().lookAt(this.mesh.position, targetPos2D, new THREE.Vector3(0,1,0))
                    );
                    this.mesh.quaternion.slerp(targetQuat, 2 * delta);
                }

                if (this.mesh.position.distanceTo(this.targetPosition) < 2) {
                    this.targetPosition = null; // Reached
                }
            }
            
            // TPV Camera Logic: OrbitControls target follows drone smoothly
            this.controls.target.lerp(this.mesh.position, 5 * delta);
        }
    }
}
