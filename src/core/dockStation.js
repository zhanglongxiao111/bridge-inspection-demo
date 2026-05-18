import * as THREE from 'three';

export const WATER_LEVEL = -15;
export const DOCK_POSITION = new THREE.Vector3(-430, 28, 175);

const CABINET_WIDTH = 30;
const CABINET_DEPTH = 22;
const CABINET_HEIGHT = 11;
const CABINET_BOTTOM_Y = 2.6;
const CABINET_TOP_Y = CABINET_BOTTOM_Y + CABINET_HEIGHT;
const HATCH_Y = CABINET_TOP_Y + 0.75;
const HATCH_THICKNESS = 0.45;
const PLATFORM_LOW_Y = CABINET_TOP_Y - 3.0;
const PLATFORM_HIGH_Y = CABINET_TOP_Y + 0.95;
const PLATFORM_THICKNESS = 0.6;
const DRONE_SKID_CLEARANCE = 1.45;
const PARK_LOCAL_Y = PLATFORM_LOW_Y + PLATFORM_THICKNESS / 2 + DRONE_SKID_CLEARANCE;
const LAUNCH_LOCAL_Y = PLATFORM_HIGH_Y + PLATFORM_THICKNESS / 2 + DRONE_SKID_CLEARANCE;

export const PARK_POSITION = DOCK_POSITION.clone().add(new THREE.Vector3(0, PARK_LOCAL_Y, 0));
export const LAUNCH_POSITION = DOCK_POSITION.clone().add(new THREE.Vector3(0, LAUNCH_LOCAL_Y, 0));
export const EXIT_POSITION = new THREE.Vector3(-315, 88, 150);

export function createDockStation(scene, options = {}) {
    const station = new DockStation(options);
    scene?.add?.(station.group);
    return station;
}

export class DockStation {
    constructor({
        position = DOCK_POSITION,
        parkPosition,
        launchPosition,
        exitPosition = EXIT_POSITION
    } = {}) {
        this.position = vectorFrom(position, DOCK_POSITION);
        this.parkPosition = vectorFrom(parkPosition, this.position.clone().add(new THREE.Vector3(0, PARK_LOCAL_Y, 0)));
        this.launchPosition = vectorFrom(launchPosition, this.position.clone().add(new THREE.Vector3(0, LAUNCH_LOCAL_Y, 0)));
        this.exitPosition = vectorFrom(exitPosition, EXIT_POSITION);
        this.group = new THREE.Group();
        this.group.name = 'IndustrialBoxDockStation';
        this.group.position.copy(this.position);
        this.hatchProgress = 0;
        this.platformProgress = 0;
        this.lockProgress = 1;
        this.status = 'closed';
        this.hatchLeft = null;
        this.hatchRight = null;
        this.platformGroup = null;
        this.lockPins = [];
        this.statusLight = null;
        this.statusLenses = [];
        this.createModel();
    }

    createModel() {
        const materials = createMaterials();
        this.materials = materials;
        const g = this.group;

        addBox(g, [38, 0.8, 28], materials.concrete, [0, 0.4, 0], 'raised-concrete-service-pad');
        addBox(g, [34, 0.35, 24], materials.blackSeal, [0, 0.98, 0], 'black-pad-drainage-seal');
        createFeet(g, materials);

        addBox(g, [CABINET_WIDTH, CABINET_HEIGHT, CABINET_DEPTH], materials.cabinet, [0, CABINET_BOTTOM_Y + CABINET_HEIGHT / 2, 0], 'white-weatherproof-cabinet');
        addBox(g, [CABINET_WIDTH + 1, 1.2, CABINET_DEPTH + 1], materials.blackSeal, [0, CABINET_TOP_Y + 0.25, 0], 'continuous-black-top-gasket');
        addBox(g, [CABINET_WIDTH + 1.4, 1.2, 1.1], materials.blackSeal, [0, CABINET_BOTTOM_Y + 0.7, CABINET_DEPTH / 2 + 0.25], 'front-lower-rubber-seal');
        addBox(g, [CABINET_WIDTH + 1.4, 1.2, 1.1], materials.blackSeal, [0, CABINET_BOTTOM_Y + 0.7, -CABINET_DEPTH / 2 - 0.25], 'rear-lower-rubber-seal');
        createServiceDoors(g, materials);
        createTopFrame(g, materials);

        this.platformGroup = createLiftPlatform(materials);
        g.add(this.platformGroup);
        createGuideRails(g, materials);

        this.hatchLeft = createHatch(-1, materials);
        this.hatchRight = createHatch(1, materials);
        g.add(this.hatchLeft, this.hatchRight);

        this.lockPins = createLockPins(g, materials);
        this.statusLenses = createStatusLights(g, materials);
        this.statusLight = new THREE.PointLight(0x38bdf8, 1.6, 80);
        this.statusLight.position.set(-CABINET_WIDTH / 2 + 5, CABINET_TOP_Y + 5, CABINET_DEPTH / 2 + 4);
        g.add(this.statusLight);

        createWeatherMast(g, materials);
        this.setHatchProgress(0);
        this.setPlatformProgress(0);
        this.setLockProgress(1);
        this.setStatus('closed');
    }

    setHatchProgress(progress = 0) {
        this.hatchProgress = clamp01(progress);
        const angle = this.hatchProgress * Math.PI * 0.39;
        if (this.hatchLeft) this.hatchLeft.rotation.z = angle;
        if (this.hatchRight) this.hatchRight.rotation.z = -angle;
        return this;
    }

    setPlatformProgress(progress = 0) {
        this.platformProgress = clamp01(progress);
        if (this.platformGroup) {
            this.platformGroup.position.y = THREE.MathUtils.lerp(PLATFORM_LOW_Y, PLATFORM_HIGH_Y, smooth(this.platformProgress));
        }
        return this;
    }

    setLockProgress(progress = 1) {
        this.lockProgress = clamp01(progress);
        this.lockPins.forEach((pin) => {
            const side = pin.userData.side ?? 1;
            pin.position.x = side * (1.4 + this.lockProgress * 3.5);
        });
        return this;
    }

    setStatus(status = 'closed') {
        this.status = status;
        const color = statusColor(status);
        this.statusLight?.color.setHex(color);
        this.statusLenses.forEach((lens) => {
            lens.material.color.setHex(color);
            lens.material.emissive?.setHex(color);
        });
        return this;
    }

    getParkPosition() {
        return this.parkPosition.clone();
    }

    getLaunchPosition() {
        return this.launchPosition.clone();
    }

    getExitPosition() {
        return this.exitPosition.clone();
    }

    getPlatformTopWorldY(progress = this.platformProgress) {
        const centerY = THREE.MathUtils.lerp(PLATFORM_LOW_Y, PLATFORM_HIGH_Y, smooth(clamp01(progress)));
        return this.position.y + centerY + PLATFORM_THICKNESS / 2;
    }

    getDockTopWorldY() {
        return this.position.y + HATCH_Y + HATCH_THICKNESS / 2;
    }

    getWaterLevel() {
        return WATER_LEVEL;
    }
}

function createFeet(group, materials) {
    const xs = [-CABINET_WIDTH / 2 + 6, CABINET_WIDTH / 2 - 6];
    const zs = [-CABINET_DEPTH / 2 + 5, CABINET_DEPTH / 2 - 5];
    xs.forEach((x) => {
        zs.forEach((z) => {
            addCylinder(group, 0.34, 0.44, 2.2, materials.leg, [x, 1.95, z], [0, 0, 0], 18, 'galvanized-support-leg');
            addCylinder(group, 0.62, 0.62, 0.35, materials.rubber, [x, 0.8, z], [Math.PI / 2, 0, 0], 24, 'small-locking-caster-wheel');
        });
    });
}

function createServiceDoors(group, materials) {
    [-7.2, 7.2].forEach((x) => {
        addBox(group, [9.6, 6.2, 0.24], materials.panel, [x, 8.6, CABINET_DEPTH / 2 + 0.16], 'front-service-door');
        addBox(group, [0.26, 6.6, 0.36], materials.blackSeal, [x - 4.9, 8.6, CABINET_DEPTH / 2 + 0.28], 'front-door-hinge-strip');
        addCylinder(group, 0.26, 0.26, 0.11, materials.blackSeal, [x + 3.6, 8.6, CABINET_DEPTH / 2 + 0.34], [Math.PI / 2, 0, 0], 18, 'flush-round-door-lock');
    });

    [-4.8, 4.8].forEach((z) => {
        addBox(group, [0.24, 5.6, 6.8], materials.panel, [-CABINET_WIDTH / 2 - 0.14, 8.2, z], 'left-side-service-panel');
        addBox(group, [0.24, 5.2, 5.8], materials.panel, [CABINET_WIDTH / 2 + 0.14, 8.4, z], 'right-side-vented-panel');
    });

    for (let i = 0; i < 6; i += 1) {
        addBox(group, [0.24, 0.14, 4.2], materials.blackSeal, [CABINET_WIDTH / 2 + 0.29, 6.6 + i * 0.55, 0], 'side-cooling-louver');
    }
}

function createTopFrame(group, materials) {
    const y = CABINET_TOP_Y + 0.55;
    addBox(group, [CABINET_WIDTH + 1, 0.78, 0.72], materials.blackSeal, [0, y, CABINET_DEPTH / 2 - 0.5], 'front-top-weather-gasket');
    addBox(group, [CABINET_WIDTH + 1, 0.78, 0.72], materials.blackSeal, [0, y, -CABINET_DEPTH / 2 + 0.5], 'rear-top-weather-gasket');
    addBox(group, [0.72, 0.78, CABINET_DEPTH - 1], materials.blackSeal, [-CABINET_WIDTH / 2 + 0.5, y, 0], 'left-top-weather-gasket');
    addBox(group, [0.72, 0.78, CABINET_DEPTH - 1], materials.blackSeal, [CABINET_WIDTH / 2 - 0.5, y, 0], 'right-top-weather-gasket');
    addBox(group, [0.46, 0.58, CABINET_DEPTH - 2.2], materials.blackSeal, [0, HATCH_Y + 0.02, 0], 'center-hatch-seal-line');
}

function createLiftPlatform(materials) {
    const group = new THREE.Group();
    group.name = 'elevating-slide-rail-platform';
    group.position.y = PLATFORM_LOW_Y;
    addBox(group, [19, PLATFORM_THICKNESS, 14], materials.platform, [0, 0, 0], 'lift-table');
    addBox(group, [16, 0.2, 1.0], materials.rail, [0, 0.48, 5.0], 'front-slide-rail');
    addBox(group, [16, 0.2, 1.0], materials.rail, [0, 0.48, -5.0], 'rear-slide-rail');
    addCylinder(group, 4.8, 4.8, 0.18, materials.pad, [0, 0.58, 0], [0, 0, 0], 48, 'center-landing-pad');
    addTorus(group, 5.25, 0.09, materials.marker, [0, 0.7, 0], [Math.PI / 2, 0, 0], 'yellow-landing-ring');
    addBox(group, [1.8, 0.14, 11.2], materials.blackSeal, [-7.2, 0.66, 0], 'left-platform-track');
    addBox(group, [1.8, 0.14, 11.2], materials.blackSeal, [7.2, 0.66, 0], 'right-platform-track');
    return group;
}

function createGuideRails(group, materials) {
    [-8.3, 8.3].forEach((x) => {
        addCylinder(group, 0.2, 0.2, 5.1, materials.rail, [x, CABINET_TOP_Y - 1.0, 6.2], [0, 0, 0], 14, 'front-vertical-lift-guide');
        addCylinder(group, 0.2, 0.2, 5.1, materials.rail, [x, CABINET_TOP_Y - 1.0, -6.2], [0, 0, 0], 14, 'rear-vertical-lift-guide');
    });
}

function createHatch(side, materials) {
    const width = CABINET_WIDTH / 2 - 0.9;
    const group = new THREE.Group();
    group.name = side < 0 ? 'left-flip-hatch-panel' : 'right-flip-hatch-panel';
    group.position.set(side * (CABINET_WIDTH / 2 - 0.42), HATCH_Y, 0);

    const inward = -side;
    const panel = addBox(group, [width, HATCH_THICKNESS, CABINET_DEPTH - 1.8], materials.hatch, [inward * (width / 2 + 0.08), 0, 0], 'ceramic-white-roof-cover');
    panel.castShadow = true;
    addBox(group, [width - 1.8, 0.11, 1.0], materials.hatchInner, [inward * (width / 2 + 0.08), -0.28, 5.8], 'inner-hatch-reinforcement-rib');
    addBox(group, [width - 1.8, 0.11, 1.0], materials.hatchInner, [inward * (width / 2 + 0.08), -0.28, -5.8], 'inner-hatch-reinforcement-rib');
    addBox(group, [1.0, 0.12, CABINET_DEPTH - 5.2], materials.hatchInner, [inward * 0.9, -0.28, 0], 'outer-hatch-stiffener-strip');
    addBox(group, [0.36, 0.58, CABINET_DEPTH - 1.4], materials.blackSeal, [inward * (width - 0.16), -0.01, 0], 'center-free-edge-rubber-lip');
    addCylinder(group, 0.28, 0.28, CABINET_DEPTH - 1.8, materials.rail, [0, -0.28, 0], [Math.PI / 2, 0, 0], 18, 'outer-side-hinge-bar');
    return group;
}

function createLockPins(group, materials) {
    return [-1, 1].map((side) => {
        const pin = addBox(group, [1.8, 0.32, 0.45], materials.warning, [side * 2.2, CABINET_TOP_Y + 0.32, CABINET_DEPTH / 2 - 2.4], 'hatch-electromagnetic-lock-pin');
        pin.userData.side = side;
        return pin;
    });
}

function createStatusLights(group, materials) {
    return [-1.6, 0, 1.6].map((offset, index) => addCylinder(
        group,
        0.34,
        0.34,
        0.11,
        index === 1 ? materials.status : materials.darkLens,
        [-CABINET_WIDTH / 2 + 2.6 + offset * 0.62, 9.8, CABINET_DEPTH / 2 + 0.38],
        [Math.PI / 2, 0, 0],
        18,
        'front-stack-status-light'
    ));
}

function createWeatherMast(group, materials) {
    const x = CABINET_WIDTH / 2 - 3.5;
    const z = -CABINET_DEPTH / 2 + 3.2;
    addCylinder(group, 0.16, 0.22, 7.8, materials.rail, [x, CABINET_TOP_Y + 4.2, z], [0, 0, 0], 14, 'weather-station-mast');
    addCylinder(group, 0.08, 0.08, 3.8, materials.rail, [x, CABINET_TOP_Y + 8.35, z], [0, 0, Math.PI / 2], 10, 'anemometer-crossbar-x');
    addCylinder(group, 0.08, 0.08, 3.8, materials.rail, [x, CABINET_TOP_Y + 8.35, z], [Math.PI / 2, 0, 0], 10, 'anemometer-crossbar-z');
    [[2.1, 0], [-2.1, 0], [0, 2.1], [0, -2.1]].forEach(([dx, dz]) => {
        addCylinder(group, 0.32, 0.16, 0.4, materials.blackSeal, [x + dx, CABINET_TOP_Y + 8.35, z + dz], [0, 0, 0], 14, 'anemometer-wind-cup');
    });
    addCylinder(group, 0.42, 0.32, 0.55, materials.hatch, [x, CABINET_TOP_Y + 9.45, z], [0, 0, 0], 18, 'compact-weather-sensor-head');
}

function addBox(parent, size, material, position, name, rotation = [0, 0, 0]) {
    const mesh = new THREE.Mesh(new THREE.BoxGeometry(...size), material);
    mesh.position.set(...position);
    mesh.rotation.set(...rotation);
    mesh.name = name;
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    parent.add(mesh);
    return mesh;
}

function addCylinder(parent, radiusTop, radiusBottom, height, material, position, rotation, segments, name) {
    const mesh = new THREE.Mesh(new THREE.CylinderGeometry(radiusTop, radiusBottom, height, segments), material);
    mesh.position.set(...position);
    mesh.rotation.set(...rotation);
    mesh.name = name;
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    parent.add(mesh);
    return mesh;
}

function addTorus(parent, radius, tube, material, position, rotation, name) {
    const mesh = new THREE.Mesh(new THREE.TorusGeometry(radius, tube, 12, 72), material);
    mesh.position.set(...position);
    mesh.rotation.set(...rotation);
    mesh.name = name;
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    parent.add(mesh);
    return mesh;
}

function createMaterials() {
    const status = new THREE.MeshStandardMaterial({ color: 0x38bdf8, emissive: 0x38bdf8, emissiveIntensity: 0.8, roughness: 0.35 });
    return {
        concrete: new THREE.MeshStandardMaterial({ color: 0x4b5563, roughness: 0.85, metalness: 0.08 }),
        cabinet: new THREE.MeshStandardMaterial({ color: 0xe8edf0, roughness: 0.42, metalness: 0.18 }),
        panel: new THREE.MeshStandardMaterial({ color: 0xd7dde1, roughness: 0.5, metalness: 0.2 }),
        hatch: new THREE.MeshStandardMaterial({ color: 0xf4f7f8, roughness: 0.36, metalness: 0.22 }),
        hatchInner: new THREE.MeshStandardMaterial({ color: 0xb9c2c9, roughness: 0.45, metalness: 0.32 }),
        platform: new THREE.MeshStandardMaterial({ color: 0x2f3a43, roughness: 0.52, metalness: 0.55 }),
        pad: new THREE.MeshStandardMaterial({ color: 0x0b1117, roughness: 0.72, metalness: 0.16 }),
        marker: new THREE.MeshBasicMaterial({ color: 0xd4af37, transparent: true, opacity: 0.9, side: THREE.DoubleSide }),
        blackSeal: new THREE.MeshStandardMaterial({ color: 0x111827, roughness: 0.76, metalness: 0.15 }),
        rubber: new THREE.MeshStandardMaterial({ color: 0x05070a, roughness: 0.9, metalness: 0.04 }),
        leg: new THREE.MeshStandardMaterial({ color: 0x8b949e, roughness: 0.38, metalness: 0.8 }),
        rail: new THREE.MeshStandardMaterial({ color: 0x64748b, roughness: 0.36, metalness: 0.72 }),
        warning: new THREE.MeshStandardMaterial({ color: 0xf59e0b, roughness: 0.5, metalness: 0.18 }),
        darkLens: new THREE.MeshStandardMaterial({ color: 0x0f172a, emissive: 0x0f172a, emissiveIntensity: 0.25, roughness: 0.45 }),
        status
    };
}

function statusColor(status) {
    if (status === 'unlocking' || status === 'opening' || status === 'spoolup') return 0xf59e0b;
    if (status === 'ready' || status === 'departed' || status === 'open') return 0x22c55e;
    if (status === 'launching') return 0xef4444;
    return 0x38bdf8;
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

function clamp01(value) {
    return THREE.MathUtils.clamp(Number(value), 0, 1);
}

function smooth(t) {
    return t * t * (3 - 2 * t);
}
