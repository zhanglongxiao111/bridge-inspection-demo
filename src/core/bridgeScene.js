import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { createDockStation } from './dockStation.js';
import { createSceneVisuals } from './sceneVisuals.js';
import { createWaterSurface } from './waterSurface.js';

const SCENE_CONFIG = {
    sky: 0x8ecae6,
    cloud: 0xf8fbff,
    mesh: 0xd9e1e8,
    grid: 0x9ac7d8,
    accent: 0x38bdf8,
    land: 0xe3e7eb,
    ambientIntensity: 1.05,
    directionalIntensity: 1.25,
    fogDensity: 0.00055
};

export function createBridgeScene(container) {
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(SCENE_CONFIG.sky, SCENE_CONFIG.fogDensity);

    const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 3000);
    camera.position.set(250, 150, 350);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor(SCENE_CONFIG.sky, 1);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFShadowMap;
    container.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.maxPolarAngle = Math.PI / 2 + 0.1;

    const lights = createLights(scene);
    const sky = createSky(scene);
    const materials = createMaterials();
    const terrain = createTerrain(scene, materials);
    const bridgeGroup = createBridge(scene, materials);
    const dockStation = createDockStation(scene);
    const cars = createCars(scene);
    const visuals = createSceneVisuals({ scene, camera, theme: 'dark' });

    let drone = null;
    let animationId = null;
    const frameTasks = new Set();
    const clock = new THREE.Clock();

    function applyTheme() {
        const config = SCENE_CONFIG;
        renderer.setClearColor(config.sky, 1);
        scene.fog.color.setHex(config.sky);
        scene.fog.density = config.fogDensity;
        materials.concrete.color.setHex(config.mesh);
        materials.terrain.color.setHex(config.land);
        lights.ambient.intensity = config.ambientIntensity;
        lights.directional.intensity = config.directionalIntensity;
        terrain.waterSurface.setTheme('light');
        visuals.applyTheme('light');
        sky.apply();

        scene.remove(terrain.gridHelper);
        terrain.gridHelper = createWaterGrid(config.accent, config.grid);
        scene.add(terrain.gridHelper);
    }

    function resize() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    }

    function updateFrame() {
        const dt = clock.getDelta();
        const elapsed = clock.getElapsedTime();
        const now = performance.now();

        if (drone && !drone.isFPV) {
            controls.update();
        }

        if (drone) {
            drone.update(dt);
            lights.drone.position.copy(drone.mesh.position);
        }

        updateCars(cars);
        terrain.waterSurface.update(elapsed);
        visuals.update({ dt, elapsed, now });
        frameTasks.forEach((task) => task({ dt, elapsed, now }));
        renderer.render(scene, camera);
    }

    function animate() {
        animationId = requestAnimationFrame(animate);
        updateFrame();
    }

    return {
        scene,
        camera,
        renderer,
        controls,
        bridgeGroup,
        dockStation,
        terrainGroup: terrain.group,
        water: terrain.water,
        applyTheme,
        resize,
        addDefectMarker: visuals.addDefectMarker,
        highlightDefect: visuals.highlightDefect,
        clearDefectHighlight: visuals.clearDefectHighlight,
        attachDrone(nextDrone) {
            drone = nextDrone;
        },
        addFrameTask(task) {
            frameTasks.add(task);
            return () => frameTasks.delete(task);
        },
        start() {
            if (!animationId) animate();
        }
    };
}

function createLights(scene) {
    const ambient = new THREE.AmbientLight(0xffffff, SCENE_CONFIG.ambientIntensity);
    scene.add(ambient);

    const hemi = new THREE.HemisphereLight(0xbfe7ff, 0x1b1b1b, 0.55);
    scene.add(hemi);

    const directional = new THREE.DirectionalLight(0xffffff, SCENE_CONFIG.directionalIntensity);
    directional.position.set(300, 500, 200);
    directional.castShadow = true;
    directional.shadow.mapSize.width = 2048;
    directional.shadow.mapSize.height = 2048;
    directional.shadow.camera.near = 0.5;
    directional.shadow.camera.far = 1500;
    directional.shadow.camera.left = -500;
    directional.shadow.camera.right = 500;
    directional.shadow.camera.top = 300;
    directional.shadow.camera.bottom = -300;
    scene.add(directional);

    const drone = new THREE.PointLight(0xef4444, 2.5, 150);
    scene.add(drone);

    window.ambientLight = ambient;
    window.directionalLight = directional;

    return { ambient, hemi, directional, drone };
}

function createSky(scene) {
    const group = new THREE.Group();
    group.name = 'blue-sky-and-clouds';

    const sky = new THREE.Mesh(
        new THREE.SphereGeometry(1400, 32, 16),
        new THREE.MeshBasicMaterial({
            color: SCENE_CONFIG.sky,
            side: THREE.BackSide,
            depthWrite: false
        })
    );
    sky.position.y = 220;
    group.add(sky);

    const cloudMaterial = new THREE.MeshBasicMaterial({
        color: SCENE_CONFIG.cloud,
        transparent: true,
        opacity: 0.82,
        depthWrite: false
    });
    [
        [-520, 330, -380, 80, 18],
        [-120, 380, -520, 110, 24],
        [360, 340, -420, 92, 20],
        [620, 300, 120, 118, 26],
        [-660, 280, 220, 96, 22],
        [120, 420, 360, 130, 28]
    ].forEach(([x, y, z, width, height], index) => {
        const cloud = new THREE.Mesh(new THREE.PlaneGeometry(width, height), cloudMaterial.clone());
        cloud.name = `soft-cloud-${index + 1}`;
        cloud.position.set(x, y, z);
        cloud.rotation.set(-0.18, 0.12 + index * 0.18, 0);
        group.add(cloud);
    });

    scene.add(group);
    return {
        group,
        apply() {
            sky.material.color.setHex(SCENE_CONFIG.sky);
            group.children.forEach((child) => {
                if (child !== sky && child.material?.color) {
                    child.material.color.setHex(SCENE_CONFIG.cloud);
                }
            });
        }
    };
}

function createMaterials() {
    return {
        concrete: new THREE.MeshStandardMaterial({ color: SCENE_CONFIG.mesh, roughness: 0.9, metalness: 0.1 }),
        road: new THREE.MeshStandardMaterial({ color: 0xb7c1cb, roughness: 0.95 }),
        cable: new THREE.LineBasicMaterial({ color: 0x94a3b8, transparent: true, opacity: 0.82 }),
        highlight: new THREE.MeshStandardMaterial({ color: 0xd4af37, emissive: 0xd4af37, emissiveIntensity: 0.4 }),
        metal: new THREE.MeshStandardMaterial({ color: 0x94a3b8, roughness: 0.42, metalness: 0.55 }),
        terrain: new THREE.MeshStandardMaterial({ color: SCENE_CONFIG.land, roughness: 1.0, flatShading: true })
    };
}

function createTerrain(scene, materials) {
    const group = new THREE.Group();
    const terrainGeom = new THREE.PlaneGeometry(3000, 3000, 80, 80);
    terrainGeom.rotateX(-Math.PI / 2);

    const positions = terrainGeom.attributes.position;
    for (let i = 0; i < positions.count; i++) {
        const x = positions.getX(i);
        const z = positions.getZ(i);
        const distFromRiver = Math.abs(x);
        let y = -20;

        if (distFromRiver > 280) {
            y = (distFromRiver - 280) * 0.15 +
                Math.sin(x * 0.01) * Math.cos(z * 0.01) * 30 +
                Math.random() * 5;
        } else if (distFromRiver > 200) {
            y = -20 + (distFromRiver - 200) * 0.2 + Math.random() * 2;
        } else {
            y = -35 + Math.random() * 3;
        }

        positions.setY(i, y);
    }

    terrainGeom.computeVertexNormals();
    const terrain = new THREE.Mesh(terrainGeom, materials.terrain);
    terrain.receiveShadow = true;
    group.add(terrain);

    const waterSurface = createWaterSurface({ size: 3000, segments: 128, y: -15, theme: 'light' });
    const water = waterSurface.mesh;
    group.add(water);

    const gridHelper = createWaterGrid(SCENE_CONFIG.accent, SCENE_CONFIG.grid);
    scene.add(group, gridHelper);

    return { group, water, waterSurface, gridHelper };
}

function createWaterGrid(primaryColor, secondaryColor) {
    const gridHelper = new THREE.GridHelper(3000, 150, primaryColor, secondaryColor);
    gridHelper.position.y = -14.5;
    gridHelper.material.transparent = true;
    gridHelper.material.opacity = 0.2;
    return gridHelper;
}

function createBridge(scene, materials) {
    const bridgeGroup = new THREE.Group();

    const deck = new THREE.Mesh(new THREE.BoxGeometry(1600, 4, 40), materials.concrete);
    deck.position.y = 50;
    deck.receiveShadow = true;
    deck.castShadow = true;
    bridgeGroup.add(deck);

    const road = new THREE.Mesh(new THREE.BoxGeometry(1600, 0.5, 30), materials.road);
    road.position.y = 52;
    road.receiveShadow = true;
    bridgeGroup.add(road);

    const divider = new THREE.Mesh(new THREE.BoxGeometry(1600, 1.2, 1.5), materials.concrete);
    divider.position.y = 52.6;
    divider.castShadow = true;
    bridgeGroup.add(divider);

    bridgeGroup.add(createRail(19, materials.metal), createRail(-19, materials.metal));
    addStreetlights(bridgeGroup, materials.metal);
    bridgeGroup.add(createPylon(-250, materials), createPylon(250, materials));
    addCables(bridgeGroup, -250, materials.cable);
    addCables(bridgeGroup, 250, materials.cable);

    scene.add(bridgeGroup);
    return bridgeGroup;
}

function createRail(zOffset, material) {
    const railGroup = new THREE.Group();
    const railLine = new THREE.Mesh(new THREE.BoxGeometry(1600, 0.5, 0.5), material);
    railLine.position.set(0, 54, zOffset);

    const railLine2 = new THREE.Mesh(new THREE.BoxGeometry(1600, 0.5, 0.5), material);
    railLine2.position.set(0, 53, zOffset);
    railGroup.add(railLine, railLine2);

    for (let i = -800; i <= 800; i += 10) {
        const post = new THREE.Mesh(new THREE.BoxGeometry(0.5, 2.5, 0.5), material);
        post.position.set(i, 53.25, zOffset);
        railGroup.add(post);
    }

    return railGroup;
}

function addStreetlights(bridgeGroup, metalMaterial) {
    const lightGeom = new THREE.CylinderGeometry(0.3, 0.5, 12);
    const bulbGeom = new THREE.SphereGeometry(1.5);
    const bulbMat = new THREE.MeshBasicMaterial({ color: 0xffffff });

    for (let i = -750; i <= 750; i += 60) {
        const pole = new THREE.Mesh(lightGeom, metalMaterial);
        pole.position.set(i, 58, 0);

        const bulb = new THREE.Mesh(bulbGeom, bulbMat);
        bulb.position.set(0, 6, 0);
        pole.add(bulb);

        const pointLight = new THREE.PointLight(0xfff0dd, 0.8, 100);
        pointLight.position.set(i, 65, 0);
        bridgeGroup.add(pole, pointLight);
    }
}

function createPylon(xPos, materials) {
    const group = new THREE.Group();
    const baseGeom = new THREE.CylinderGeometry(14, 18, 80, 16);

    const pierLeft = new THREE.Mesh(baseGeom, materials.concrete);
    pierLeft.position.set(0, 0, 18);
    const pierRight = new THREE.Mesh(baseGeom, materials.concrete);
    pierRight.position.set(0, 0, -18);

    const baseCap = new THREE.Mesh(new THREE.BoxGeometry(32, 10, 56), materials.concrete);
    baseCap.position.set(0, 42, 0);

    const pillarGeom = new THREE.BoxGeometry(10, 180, 10);
    const leftPillar = new THREE.Mesh(pillarGeom, materials.concrete);
    leftPillar.position.set(0, 130, 18);
    leftPillar.castShadow = true;

    const rightPillar = new THREE.Mesh(pillarGeom, materials.concrete);
    rightPillar.position.set(0, 130, -18);
    rightPillar.castShadow = true;

    const cross1 = new THREE.Mesh(new THREE.BoxGeometry(8, 10, 36), materials.concrete);
    cross1.position.set(0, 80, 0);
    const cross2 = new THREE.Mesh(new THREE.BoxGeometry(8, 10, 36), materials.concrete);
    cross2.position.set(0, 180, 0);

    const cap = new THREE.Mesh(new THREE.BoxGeometry(12, 6, 40), materials.highlight);
    cap.position.set(0, 223, 0);

    group.add(pierLeft, pierRight, baseCap, leftPillar, rightPillar, cross1, cross2, cap);
    group.position.set(xPos, 0, 0);
    return group;
}

function addCables(bridgeGroup, pylonX, material) {
    for (let i = 1; i <= 18; i++) {
        const spread = 25 * i;
        const topY = 215 - i * 3;
        const top = new THREE.Vector3(pylonX, topY, 0);

        bridgeGroup.add(new THREE.Line(
            new THREE.BufferGeometry().setFromPoints([top, new THREE.Vector3(pylonX - spread, 52, 19)]),
            material
        ));
        bridgeGroup.add(new THREE.Line(
            new THREE.BufferGeometry().setFromPoints([top, new THREE.Vector3(pylonX - spread, 52, -19)]),
            material
        ));
        bridgeGroup.add(new THREE.Line(
            new THREE.BufferGeometry().setFromPoints([top, new THREE.Vector3(pylonX + spread, 52, 19)]),
            material
        ));
        bridgeGroup.add(new THREE.Line(
            new THREE.BufferGeometry().setFromPoints([top, new THREE.Vector3(pylonX + spread, 52, -19)]),
            material
        ));
    }
}

function createCars(scene) {
    const cars = [];
    for (let i = 0; i < 30; i++) {
        cars.push(createCar(scene, i % 2 === 0));
    }
    return cars;
}

function createCar(scene, isOpposite) {
    const carGroup = new THREE.Group();
    const carMat = new THREE.MeshStandardMaterial({
        color: new THREE.Color().setHSL(Math.random(), 0.7, 0.5),
        roughness: 0.3,
        metalness: 0.6
    });
    const glassMat = new THREE.MeshStandardMaterial({ color: 0x111111, roughness: 0.1 });

    const base = new THREE.Mesh(new THREE.BoxGeometry(8, 2.5, 4), carMat);
    base.position.y = 1.25;
    base.castShadow = true;
    const top = new THREE.Mesh(new THREE.BoxGeometry(4, 2, 3.5), glassMat);
    top.position.set(-0.5, 3.25, 0);
    carGroup.add(base, top);

    const headlight = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.5, 3), new THREE.MeshBasicMaterial({ color: 0xffffff }));
    headlight.position.set(4, 1.5, 0);
    const taillight = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.5, 3), new THREE.MeshBasicMaterial({ color: 0xff0000 }));
    taillight.position.set(-4, 1.5, 0);
    carGroup.add(headlight, taillight);

    const startX = (Math.random() - 0.5) * 1600;
    const zOffset = isOpposite ? -8 - Math.random() * 4 : 8 + Math.random() * 4;
    carGroup.position.set(startX, 52.2, zOffset);
    if (isOpposite) carGroup.rotation.y = Math.PI;

    scene.add(carGroup);
    return {
        model: carGroup,
        speed: (1.2 + Math.random() * 0.8) * (isOpposite ? -1 : 1)
    };
}

function updateCars(cars) {
    cars.forEach((car) => {
        car.model.position.x += car.speed;
        if (car.model.position.x > 800) car.model.position.x = -800;
        if (car.model.position.x < -800) car.model.position.x = 800;
    });
}
