import * as THREE from 'three';
import { createDroneMaterials } from './droneMaterials.js';

function defaultDroneModelUrl() {
    const baseUrl = import.meta.env?.BASE_URL ?? '/';
    return `${baseUrl}models/drone.glb`;
}

function chamferedPrism(width, height, depth, bevel) {
    const shape = new THREE.Shape();
    const x = width / 2;
    const z = depth / 2;
    shape.moveTo(-x + bevel, -z);
    shape.lineTo(x - bevel, -z);
    shape.lineTo(x, -z + bevel);
    shape.lineTo(x, z - bevel);
    shape.lineTo(x - bevel, z);
    shape.lineTo(-x + bevel, z);
    shape.lineTo(-x, z - bevel);
    shape.lineTo(-x, -z + bevel);
    shape.closePath();

    const geometry = new THREE.ExtrudeGeometry(shape, {
        depth: height,
        bevelEnabled: true,
        bevelSize: bevel * 0.12,
        bevelThickness: bevel * 0.08,
        bevelSegments: 1
    });
    geometry.rotateX(Math.PI / 2);
    geometry.center();
    return geometry;
}

function bladeGeometry(length = 2.55, width = 0.34, thickness = 0.035) {
    const shape = new THREE.Shape();
    shape.moveTo(0.08, -width * 0.34);
    shape.bezierCurveTo(length * 0.34, -width * 0.72, length * 0.82, -width * 0.5, length, -width * 0.08);
    shape.bezierCurveTo(length * 1.04, 0, length * 1.04, width * 0.12, length, width * 0.19);
    shape.bezierCurveTo(length * 0.76, width * 0.48, length * 0.3, width * 0.52, 0.08, width * 0.28);
    shape.bezierCurveTo(-0.03, width * 0.13, -0.03, -width * 0.15, 0.08, -width * 0.34);

    const geometry = new THREE.ExtrudeGeometry(shape, {
        depth: thickness,
        bevelEnabled: true,
        bevelSize: thickness * 0.6,
        bevelThickness: thickness * 0.25,
        bevelSegments: 1
    });
    geometry.rotateX(-Math.PI / 2);
    geometry.translate(0.18, 0, 0);
    return geometry;
}

export class DroneVisual {
    constructor({ modelUrl = defaultDroneModelUrl() } = {}) {
        this.group = new THREE.Group();
        this.rotors = [];
        this.rotorThrottle = 0;
        this.rotorThrottleTarget = 0;
        this.rotorRampRate = 1.65;
        this.materials = createDroneMaterials();
        this.modelRoot = this.createProceduralModel();
        this.group.add(this.modelRoot);
        this.addLights();
        this.modelLoadPromise = typeof document === 'undefined'
            ? Promise.resolve(false)
            : this.loadHighPrecisionModel(modelUrl);
    }

    createProceduralModel() {
        const root = new THREE.Group();
        root.name = 'procedural-m350-industrial-drone';

        this.addFuselage(root);
        this.addCarbonArmSystem(root);
        this.addLandingGear(root);
        this.addGimbalPayload(root);
        this.addSensorSuite(root);
        this.addAntennasAndDetails(root);
        return root;
    }

    addMesh(parent, geometry, material, position = [0, 0, 0], rotation = [0, 0, 0], name = '') {
        const mesh = new THREE.Mesh(geometry, material);
        mesh.position.set(...position);
        mesh.rotation.set(...rotation);
        mesh.name = name;
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        parent.add(mesh);
        return mesh;
    }

    addBox(parent, size, material, position, rotation = [0, 0, 0], name = '') {
        return this.addMesh(parent, new THREE.BoxGeometry(...size), material, position, rotation, name);
    }

    addCylinder(parent, radiusTop, radiusBottom, height, material, position, rotation = [0, 0, 0], segments = 32, name = '') {
        return this.addMesh(
            parent,
            new THREE.CylinderGeometry(radiusTop, radiusBottom, height, segments),
            material,
            position,
            rotation,
            name
        );
    }

    addSphere(parent, radius, material, position, segments = 24, name = '') {
        return this.addMesh(parent, new THREE.SphereGeometry(radius, segments, Math.max(12, segments / 2)), material, position, [0, 0, 0], name);
    }

    addTorus(parent, radius, tube, material, position, rotation = [0, 0, 0], name = '') {
        return this.addMesh(parent, new THREE.TorusGeometry(radius, tube, 12, 48), material, position, rotation, name);
    }

    addCylinderBetween(parent, start, end, radius, material, segments = 24, name = '') {
        const from = new THREE.Vector3(...start);
        const to = new THREE.Vector3(...end);
        const midpoint = from.clone().add(to).multiplyScalar(0.5);
        const direction = to.clone().sub(from);
        const mesh = this.addCylinder(parent, radius, radius, direction.length(), material, midpoint.toArray(), [0, 0, 0], segments, name);
        mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), direction.normalize());
        return mesh;
    }

    addFuselage(root) {
        const { shell, ceramic, lightGray, panelLine, matteBlack, gold, warning, rubber } = this.materials;

        this.addMesh(root, chamferedPrism(3.25, 0.72, 4.4, 0.34), shell, [0, 0.02, 0], [0, 0, 0], 'ceramic-white-main-fuselage');
        this.addMesh(root, chamferedPrism(2.25, 0.48, 2.8, 0.22), ceramic, [0, 0.52, -0.1], [0, 0, 0], 'raised-avionics-shell');
        this.addMesh(root, chamferedPrism(2.72, 0.34, 1.22, 0.14), lightGray, [0, 0.88, 0.86], [0, 0, 0], 'dual-battery-left');
        this.addMesh(root, chamferedPrism(2.72, 0.34, 1.22, 0.14), lightGray, [0, 0.88, -0.74], [0, 0, 0], 'dual-battery-right');

        [-0.78, 0.78].forEach((x) => {
            this.addBox(root, [0.06, 0.07, 1.0], gold, [x, 1.08, 0.86], [0, 0, 0], 'battery-release-rail');
            this.addBox(root, [0.06, 0.07, 1.0], gold, [x, 1.08, -0.74], [0, 0, 0], 'battery-release-rail');
            this.addBox(root, [0.34, 0.04, 0.08], matteBlack, [x, 1.11, 0.18], [0, 0, 0], 'battery-lift-handle');
        });

        for (let i = 0; i < 5; i += 1) {
            const z = -1.05 + i * 0.28;
            this.addBox(root, [1.9, 0.03, 0.035], rubber, [0, 1.075, z], [0, 0, 0], 'battery-cooling-slot');
        }

        this.addBox(root, [0.9, 0.035, 0.42], gold, [0, 0.42, -2.24], [-0.2, 0, 0], 'front-brass-nameplate');
        this.addBox(root, [0.7, 0.03, 0.08], warning, [0, 0.48, -2.5], [-0.23, 0, 0], 'industrial-warning-strip');
        this.addBox(root, [0.12, 0.025, 0.55], gold, [-1.67, 0.18, 0.55], [0, 0, -0.1], 'left-shell-accent');
        this.addBox(root, [0.12, 0.025, 0.55], gold, [1.67, 0.18, 0.55], [0, 0, 0.1], 'right-shell-accent');
        this.addBox(root, [2.2, 0.018, 0.045], panelLine, [0, 0.74, -1.55], [0, 0, 0], 'top-panel-seam');
        this.addBox(root, [0.045, 0.018, 2.75], panelLine, [-1.16, 0.74, -0.05], [0, 0, 0], 'left-top-panel-seam');
        this.addBox(root, [0.045, 0.018, 2.75], panelLine, [1.16, 0.74, -0.05], [0, 0, 0], 'right-top-panel-seam');

        [-1.74, 1.74].forEach((x) => {
            this.addBox(root, [0.08, 0.42, 1.48], lightGray, [x, -0.08, -0.18], [0, 0, 0], 'reinforced-side-fairing');
            this.addBox(root, [0.06, 0.28, 0.86], matteBlack, [x * 1.01, -0.13, 1.05], [0, 0, 0], 'side-service-panel');
            this.addBox(root, [0.08, 0.025, 0.46], warning, [x, 0.17, -1.78], [0, 0, 0], 'side-safety-decal');
        });

        [-1.05, 1.05].forEach((x) => {
            [-1.7, -0.35, 0.95, 1.72].forEach((z) => {
                this.addCylinder(root, 0.035, 0.035, 0.012, panelLine, [x, 0.39, z], [0, 0, 0], 14, 'flush-panel-fastener');
            });
        });
    }

    addCarbonArmSystem(root) {
        const { carbon, graphite, shell, lightGray, matteBlack, gold, warning, blade, blur } = this.materials;
        const motorPositions = [
            [3.65, 0.23, -3.18, 1],
            [-3.65, 0.23, -3.18, -1],
            [3.65, 0.23, 3.18, -1],
            [-3.65, 0.23, 3.18, 1]
        ];

        motorPositions.forEach(([x, y, z, spin], index) => {
            const armYaw = Math.atan2(x, z);
            this.addCylinderBetween(root, [0.72 * Math.sign(x), 0.18, 0.64 * Math.sign(z)], [x * 0.88, y, z * 0.88], 0.105, carbon, 32, 'carbon-fiber-arm');
            this.addCylinderBetween(root, [0.38 * Math.sign(x), -0.03, 0.35 * Math.sign(z)], [x * 0.75, y - 0.06, z * 0.75], 0.045, carbon, 16, 'lower-tension-strut');
            this.addMesh(root, chamferedPrism(0.54, 0.22, 0.92, 0.08), shell, [x * 0.42, y + 0.03, z * 0.42], [0, armYaw, 0], 'white-arm-root-fairing');
            this.addMesh(root, chamferedPrism(0.48, 0.18, 0.78, 0.07), lightGray, [x * 0.78, y - 0.01, z * 0.78], [0, armYaw, 0], 'light-gray-arm-end-sleeve');
            this.addMotorAssembly(root, x, y, z, index, spin);
        });

        const bladeGeo = bladeGeometry();
        motorPositions.forEach(([x, y, z, spin], index) => {
            const rotor = new THREE.Group();
            rotor.name = `rotor-assembly-${index + 1}`;
            rotor.position.set(x, y + 0.55, z);
            rotor.userData.spin = spin;

            const hub = this.addCylinder(rotor, 0.24, 0.28, 0.16, graphite, [0, 0, 0], [0, 0, 0], 32, 'quick-release-hub');
            hub.castShadow = true;
            this.addCylinder(rotor, 0.13, 0.13, 0.23, gold, [0, 0.11, 0], [0, 0, 0], 24, 'gold-hub-cap');

            [0, Math.PI].forEach((angle) => {
                const bladeMesh = this.addMesh(rotor, bladeGeo.clone(), blade, [0.13, 0.02, 0], [0, angle, 0], 'folding-carbon-propeller-blade');
                bladeMesh.scale.z = index % 2 === 0 ? 1 : -1;
                const bladeTipX = angle === 0 ? 2.42 : -2.42;
                const tipStripe = this.addBox(rotor, [0.42, 0.014, 0.055], warning, [bladeTipX, 0.062, 0], [0, angle, 0], 'yellow-propeller-tip-stripe');
                rotor.userData.blades = [...(rotor.userData.blades ?? []), bladeMesh, tipStripe];
            });

            const disc = this.addCylinder(rotor, 2.55, 2.55, 0.018, blur, [0, 0.025, 0], [0, 0, 0], 64, 'transparent-rotor-motion-disc');
            disc.userData.isBlurDisc = true;
            rotor.userData.blurDisc = disc;
            root.add(rotor);
            this.rotors.push(rotor);
        });
    }

    addMotorAssembly(root, x, y, z, index, spin) {
        const { ceramic, shell, lightGray, matteBlack, panelLine, gold, carbon, redLed, greenLed } = this.materials;
        const signX = Math.sign(x);
        const signZ = Math.sign(z);
        const ledMaterial = index < 2 ? redLed : greenLed;

        this.addCylinder(root, 0.54, 0.46, 0.42, ceramic, [x, y + 0.18, z], [0, 0, 0], 40, 'white-sealed-brushless-motor-bell');
        this.addCylinder(root, 0.44, 0.5, 0.18, shell, [x, y - 0.16, z], [0, 0, 0], 40, 'white-motor-esc-pod');
        this.addCylinder(root, 0.48, 0.48, 0.05, matteBlack, [x, y + 0.02, z], [0, 0, 0], 40, 'black-motor-separator-ring');
        this.addCylinder(root, 0.57, 0.57, 0.045, gold, [x, y + 0.42, z], [0, 0, 0], 40, 'motor-retaining-ring');
        this.addTorus(root, 0.39, 0.018, panelLine, [x, y + 0.32, z], [Math.PI / 2, 0, 0], 'machined-motor-panel-line');

        for (let i = 0; i < 8; i += 1) {
            const angle = (i / 8) * Math.PI * 2;
            this.addBox(root, [0.035, 0.14, 0.26], carbon, [
                x + Math.cos(angle) * 0.48,
                y + 0.05,
                z + Math.sin(angle) * 0.48
            ], [0, angle, 0], 'motor-cooling-fin');
        }

        const escPosition = [x - signX * 0.48, y - 0.07, z - signZ * 0.48];
        this.addMesh(root, chamferedPrism(0.72, 0.22, 0.44, 0.08), lightGray, escPosition, [0, Math.atan2(signX, signZ), 0], 'light-gray-arm-end-esc-fairing');
        this.addBox(root, [0.42, 0.035, 0.05], matteBlack, [x - signX * 0.45, y + 0.03, z - signZ * 0.45], [0, Math.atan2(signX, signZ), 0], 'esc-cooling-slot');
        this.addCylinder(root, 0.11, 0.11, 0.04, ledMaterial, [x - signX * 0.38, y + 0.03, z - signZ * 0.62], [Math.PI / 2, 0, 0], 18, 'navigation-status-light');
        this.addBox(root, [0.08, 0.025, 0.34], gold, [x - signX * 0.12, y + 0.41, z], [0, spin * 0.2, 0], 'prop-lock-direction-mark');
    }

    addLandingGear(root) {
        const { carbon, shell, matteBlack, rubber, gold } = this.materials;

        [-1.32, 1.32].forEach((x) => {
            this.addMesh(root, chamferedPrism(0.42, 0.2, 0.5, 0.07), shell, [x, -0.36, -1.48], [0, 0, 0], 'white-front-gear-mount');
            this.addMesh(root, chamferedPrism(0.42, 0.2, 0.5, 0.07), shell, [x, -0.36, 1.38], [0, 0, 0], 'white-rear-gear-mount');
            this.addCylinderBetween(root, [x, -0.42, -1.58], [x, -2.0, -1.92], 0.075, carbon, 20, 'front-landing-leg');
            this.addCylinderBetween(root, [x, -0.42, 1.48], [x, -2.0, 1.92], 0.075, carbon, 20, 'rear-landing-leg');
            this.addCylinderBetween(root, [x, -2.02, -2.18], [x, -2.02, 2.18], 0.095, rubber, 24, 'rubberized-landing-skid');
            this.addCylinderBetween(root, [x, -1.25, -1.64], [x, -1.25, 1.64], 0.035, carbon, 14, 'landing-gear-cross-brace');
            this.addCylinderBetween(root, [x, -0.65, -0.9], [0.44 * Math.sign(x), -0.18, -0.28], 0.035, carbon, 14, 'gear-diagonal-brace');
            this.addCylinderBetween(root, [x, -0.65, 0.9], [0.44 * Math.sign(x), -0.18, 0.28], 0.035, carbon, 14, 'gear-diagonal-brace');
            this.addCylinder(root, 0.12, 0.12, 0.1, gold, [x, -1.98, -2.18], [Math.PI / 2, 0, 0], 20, 'skid-front-end-cap');
            this.addCylinder(root, 0.12, 0.12, 0.1, gold, [x, -1.98, 2.18], [Math.PI / 2, 0, 0], 20, 'skid-rear-end-cap');
            this.addBox(root, [0.34, 0.045, 0.68], matteBlack, [x, -2.1, -1.58], [0, 0, 0], 'front-skid-grip-pad');
            this.addBox(root, [0.34, 0.045, 0.68], matteBlack, [x, -2.1, 1.58], [0, 0, 0], 'rear-skid-grip-pad');
        });
    }

    addGimbalPayload(root) {
        const { shell, lightGray, matteBlack, carbon, lens, glass, gold, warning } = this.materials;
        const gimbal = new THREE.Group();
        gimbal.name = 'three-axis-gimbal-camera-payload';
        gimbal.position.set(0, -0.92, -1.05);

        this.addCylinder(gimbal, 0.32, 0.32, 0.18, carbon, [0, 0.24, 0], [Math.PI / 2, 0, 0], 32, 'gimbal-damper-plate');
        this.addCylinder(gimbal, 0.08, 0.08, 0.42, gold, [-0.32, 0.06, 0], [0, 0, Math.PI / 2], 16, 'gimbal-left-yoke');
        this.addCylinder(gimbal, 0.08, 0.08, 0.42, gold, [0.32, 0.06, 0], [0, 0, Math.PI / 2], 16, 'gimbal-right-yoke');
        this.addCylinder(gimbal, 0.24, 0.24, 0.14, lightGray, [0, 0.08, 0], [0, 0, Math.PI / 2], 32, 'gimbal-roll-axis-motor');
        this.addMesh(gimbal, chamferedPrism(0.78, 0.52, 0.64, 0.12), shell, [0, -0.12, -0.04], [0.08, 0, 0], 'white-stabilized-camera-housing');
        this.addTorus(gimbal, 0.28, 0.018, gold, [0, -0.12, -0.43], [0, 0, 0], 'gold-optics-retaining-ring');
        this.addCylinder(gimbal, 0.28, 0.24, 0.18, lens, [0, -0.12, -0.43], [Math.PI / 2, 0, 0], 40, 'large-optical-zoom-lens');
        this.addCylinder(gimbal, 0.13, 0.13, 0.04, glass, [-0.24, -0.05, -0.42], [Math.PI / 2, 0, 0], 28, 'thermal-camera-window');
        this.addCylinder(gimbal, 0.07, 0.07, 0.035, lens, [0.25, -0.05, -0.43], [Math.PI / 2, 0, 0], 22, 'laser-rangefinder-aperture');
        this.addBox(gimbal, [0.22, 0.035, 0.075], warning, [0.25, -0.23, -0.36], [0, 0, 0], 'payload-warning-decal');
        this.addBox(gimbal, [0.52, 0.05, 0.08], matteBlack, [0, 0.22, -0.34], [0, 0, 0], 'gimbal-status-display');
        root.add(gimbal);
    }

    addSensorSuite(root) {
        const { shell, lightGray, glass, lens, matteBlack, gold, warning } = this.materials;
        const sensorPairs = [
            [-0.42, 0.2, -2.34],
            [0.42, 0.2, -2.34],
            [-1.66, 0.1, -0.74],
            [1.66, 0.1, -0.74],
            [-1.66, 0.1, 0.86],
            [1.66, 0.1, 0.86],
            [-0.52, 0.18, 2.22],
            [0.52, 0.18, 2.22]
        ];

        sensorPairs.forEach(([x, y, z]) => {
            const sideRotation = Math.abs(x) > 1.5 ? [0, 0, Math.PI / 2] : [Math.PI / 2, 0, 0];
            this.addCylinder(root, 0.18, 0.18, 0.025, shell, [x, y - 0.015, z], sideRotation, 24, 'white-sensor-carrier');
            this.addCylinder(root, 0.115, 0.115, 0.035, lens, [x, y, z], sideRotation, 24, 'stereo-obstacle-avoidance-lens');
            this.addCylinder(root, 0.15, 0.15, 0.02, matteBlack, [x, y - 0.005, z], sideRotation, 24, 'sensor-bezel');
        });

        this.addBox(root, [0.9, 0.035, 0.28], glass, [0, 0.08, -2.45], [-0.12, 0, 0], 'forward-vision-sensor-window');
        this.addBox(root, [0.56, 0.03, 0.18], glass, [0, -0.22, 2.32], [0.12, 0, 0], 'rear-ranging-sensor-window');
        this.addBox(root, [0.36, 0.025, 0.1], gold, [0, 0.35, -2.58], [-0.24, 0, 0], 'rtk-lock-indicator-strip');
        this.addCylinder(root, 0.3, 0.3, 0.08, lightGray, [0, -0.39, -0.22], [0, 0, 0], 32, 'downward-lidar-puck');
        this.addCylinder(root, 0.18, 0.18, 0.045, glass, [0, -0.44, -0.22], [0, 0, 0], 32, 'downward-optical-flow-window');
        this.addBox(root, [0.22, 0.025, 0.52], warning, [-0.58, -0.34, -0.88], [0, 0, 0.08], 'belly-warning-stripe-left');
        this.addBox(root, [0.22, 0.025, 0.52], warning, [0.58, -0.34, -0.88], [0, 0, -0.08], 'belly-warning-stripe-right');
    }

    addAntennasAndDetails(root) {
        const { shell, ceramic, lightGray, matteBlack, carbon, gold, panelLine } = this.materials;

        [-0.98, 0.98].forEach((x) => {
            this.addCylinder(root, 0.26, 0.28, 0.14, lightGray, [x, 1.22, 1.24], [0, 0, 0], 32, 'gnss-antenna-base');
            this.addCylinder(root, 0.2, 0.24, 0.1, ceramic, [x, 1.34, 1.24], [0, 0, 0], 32, 'white-gnss-rtk-dome');
            this.addSphere(root, 0.16, shell, [x, 1.41, 1.24], 24, 'rounded-rtk-cap');
            this.addCylinderBetween(root, [x, 1.18, -1.42], [x + Math.sign(x) * 0.48, 1.58, -1.74], 0.025, carbon, 10, 'angled-telemetry-antenna');
            this.addCylinder(root, 0.045, 0.045, 0.06, gold, [x + Math.sign(x) * 0.5, 1.6, -1.75], [0, 0, 0], 12, 'antenna-gold-tip');
        });

        this.addCylinder(root, 0.12, 0.12, 0.46, matteBlack, [0, 1.46, -0.95], [0, 0, 0], 16, 'short-rtk-mast');
        this.addCylinder(root, 0.28, 0.2, 0.12, ceramic, [0, 1.73, -0.95], [0, 0, 0], 32, 'central-rtk-mushroom-antenna');

        for (let i = 0; i < 7; i += 1) {
            const offset = -0.54 + i * 0.18;
            this.addBox(root, [0.55, 0.028, 0.032], matteBlack, [-1.72, 0.38, offset], [0, 0, 0.05], 'left-thermal-vent');
            this.addBox(root, [0.55, 0.028, 0.032], matteBlack, [1.72, 0.38, offset], [0, 0, -0.05], 'right-thermal-vent');
            this.addBox(root, [0.42, 0.024, 0.028], panelLine, [-0.42, 0.78, offset - 0.06], [0, 0, 0], 'top-avionics-vent');
            this.addBox(root, [0.42, 0.024, 0.028], panelLine, [0.42, 0.78, offset - 0.06], [0, 0, 0], 'top-avionics-vent');
        }

        this.addBox(root, [0.22, 0.02, 0.82], gold, [-0.62, 1.1, 0.06], [0, 0, 0], 'top-service-label-line');
        this.addBox(root, [0.22, 0.02, 0.82], gold, [0.62, 1.1, 0.06], [0, 0, 0], 'top-service-label-line');
        this.addBox(root, [1.38, 0.018, 0.08], gold, [0, 1.11, 0.1], [0, 0, 0], 'm350-style-top-nameplate');
        this.addBox(root, [0.44, 0.026, 0.06], matteBlack, [0, 1.11, -1.42], [0, 0, 0], 'top-maintenance-qr-plate');
    }

    addLights() {
        this.spotLight = new THREE.SpotLight(0xd4af37, 200, 300, Math.PI / 8, 0.5, 1);
        this.spotLight.position.set(0, -1, 0);

        this.targetObj = new THREE.Object3D();
        this.targetObj.position.set(0, -100, 0);
        this.group.add(this.targetObj);
        this.spotLight.target = this.targetObj;
        this.group.add(this.spotLight);

        this.flashLight = new THREE.PointLight(0xffffff, 0, 100);
        this.flashLight.position.set(0, -2, 0);
        this.group.add(this.flashLight);
    }

    async loadHighPrecisionModel(modelUrl) {
        if (!modelUrl) {
            return false;
        }

        try {
            const { GLTFLoader } = await import('three/addons/loaders/GLTFLoader.js');
            const loader = new GLTFLoader();
            const gltf = await new Promise((resolve, reject) => {
                loader.load(modelUrl, resolve, undefined, reject);
            });

            const model = gltf.scene;
            model.traverse((child) => {
                if (child.isMesh) {
                    child.castShadow = true;
                    child.receiveShadow = true;
                }
            });

            this.group.remove(this.modelRoot);
            this.modelRoot = model;
            this.rotors.length = 0;
            this.group.add(model);
            return true;
        } catch (error) {
            console.info('Drone GLB unavailable, using procedural fallback.', error?.message ?? error);
            return false;
        }
    }

    setRotorThrottle(value = 0, immediate = false) {
        this.rotorThrottleTarget = THREE.MathUtils.clamp(Number(value) || 0, 0, 1);
        if (immediate) {
            this.rotorThrottle = this.rotorThrottleTarget;
        }
        return this;
    }

    getRotorThrottle() {
        return this.rotorThrottle;
    }

    updateRotors(delta, isFlying) {
        const targetThrottle = Math.max(this.rotorThrottleTarget, isFlying ? 1 : 0);
        const step = Math.max(0.02, this.rotorRampRate * delta);
        this.rotorThrottle = THREE.MathUtils.damp(this.rotorThrottle, targetThrottle, this.rotorRampRate, delta);
        if (Math.abs(this.rotorThrottle - targetThrottle) < step * 0.05) {
            this.rotorThrottle = targetThrottle;
        }

        this.rotors.forEach((rotor, index) => {
            const blurDisc = rotor.userData.blurDisc;
            const blades = rotor.userData.blades ?? [];
            const spin = rotor.userData.spin ?? (index % 2 === 0 ? 1 : -1);
            const throttle = this.rotorThrottle;

            if (throttle > 0.02) {
                rotor.rotation.y += spin * THREE.MathUtils.lerp(3.5, 54, throttle) * delta;
                if (blurDisc) {
                    blurDisc.material.opacity = THREE.MathUtils.lerp(0, 0.28, throttle);
                }
                blades.forEach((blade) => {
                    blade.visible = throttle < 0.36;
                });
                return;
            }

            if (blurDisc) {
                blurDisc.material.opacity = 0;
            }
            blades.forEach((blade) => {
                blade.visible = true;
            });
        });
    }

    getFpvCameraPose() {
        return {
            offset: new THREE.Vector3(0, -1.08, -1.78),
            lookAt: new THREE.Vector3(0, -1.1, -36)
        };
    }

    aimSpotlightAt(worldTarget) {
        this.targetObj.position.copy(this.group.worldToLocal(worldTarget.clone()));
    }

    setFlash(active) {
        this.flashLight.intensity = active ? 1000 : 0;
    }
}
