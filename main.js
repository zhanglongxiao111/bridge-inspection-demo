import './style.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { Drone } from './modules/Drone.js';

// --- Theme Management ---
const themeBtn = document.getElementById('theme-toggle');
const sunIcon = document.querySelector('.sun-icon');
const moonIcon = document.querySelector('.moon-icon');

let isLightMode = false;
themeBtn.addEventListener('click', () => {
    isLightMode = !isLightMode;
    if(isLightMode) {
        document.documentElement.setAttribute('data-theme', 'light');
        sunIcon.style.display = 'none';
        moonIcon.style.display = 'block';
        updateSceneTheme(0xe5e5e5, 0xcbd5e1, 0xa1a1aa, 0xb8860b, 0xd4d4d8);
    } else {
        document.documentElement.removeAttribute('data-theme');
        sunIcon.style.display = 'block';
        moonIcon.style.display = 'none';
        updateSceneTheme(0x080808, 0x18181b, 0x27272a, 0xd4af37, 0x0a0a0a);
    }
});

// --- Scene Setup ---
const container = document.getElementById('canvas-container');
const scene = new THREE.Scene();
scene.fog = new THREE.FogExp2(0x080808, 0.0015);

const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 3000);
camera.position.set(250, 150, 350);

const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setClearColor(0x080808, 1);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFShadowMap;
container.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;
controls.maxPolarAngle = Math.PI / 2 + 0.1;

// --- Lighting ---
const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1.2);
directionalLight.position.set(300, 500, 200);
directionalLight.castShadow = true;
directionalLight.shadow.mapSize.width = 2048;
directionalLight.shadow.mapSize.height = 2048;
directionalLight.shadow.camera.near = 0.5;
directionalLight.shadow.camera.far = 1500;
directionalLight.shadow.camera.left = -500;
directionalLight.shadow.camera.right = 500;
directionalLight.shadow.camera.top = 300;
directionalLight.shadow.camera.bottom = -300;
scene.add(directionalLight);

const droneLight = new THREE.PointLight(0xef4444, 2.5, 150);
scene.add(droneLight);

// --- Materials ---
const concreteMat = new THREE.MeshStandardMaterial({ color: 0x18181b, roughness: 0.9, metalness: 0.1 });
const roadMat = new THREE.MeshStandardMaterial({ color: 0x0f0f11, roughness: 0.95 });
const cableMat = new THREE.LineBasicMaterial({ color: 0x52525b, transparent: true, opacity: 0.8 });
const highlightMat = new THREE.MeshStandardMaterial({ color: 0xd4af37, emissive: 0xd4af37, emissiveIntensity: 0.4 });
const metalMat = new THREE.MeshStandardMaterial({ color: 0x3f3f46, roughness: 0.4, metalness: 0.8 });
const terrainMat = new THREE.MeshStandardMaterial({ color: 0x0a0a0a, roughness: 1.0, flatShading: true });
const waterMat = new THREE.MeshStandardMaterial({ color: 0x1f1f22, transparent: true, opacity: 0.9, roughness: 0.1, metalness: 0.9, flatShading: true });

// --- Environment: Terrain & River ---
const terrainGroup = new THREE.Group();
const terrainGeom = new THREE.PlaneGeometry(3000, 3000, 80, 80);
terrainGeom.rotateX(-Math.PI / 2);
const pos = terrainGeom.attributes.position;
for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i);
    const z = pos.getZ(i);
    let y = -20;
    // River runs along Z axis (x = 0), Bridge spans X axis
    const distFromRiver = Math.abs(x); 
    if (distFromRiver > 280) {
        // Banks rising up
        y = (distFromRiver - 280) * 0.15 + (Math.sin(x*0.01) * Math.cos(z*0.01)) * 30 + (Math.random() * 5);
    } else if (distFromRiver > 200) {
        // River banks transitioning
        y = -20 + (distFromRiver - 200) * 0.2 + (Math.random() * 2);
    } else {
        // River bed
        y = -35 + (Math.random() * 3);
    }
    pos.setY(i, y);
}
terrainGeom.computeVertexNormals();
const terrain = new THREE.Mesh(terrainGeom, terrainMat);
terrain.receiveShadow = true;
terrainGroup.add(terrain);

// Animated Water Surface
const waterGeom = new THREE.PlaneGeometry(3000, 3000, 100, 100);
waterGeom.rotateX(-Math.PI / 2);
const water = new THREE.Mesh(waterGeom, waterMat);
water.position.y = -15;
water.receiveShadow = true;
terrainGroup.add(water);
scene.add(terrainGroup);

// Keep a subtle grid on the water for the tech feel
let gridHelper = new THREE.GridHelper(3000, 150, 0x0ea5e9, 0x1e293b);
gridHelper.position.y = -14.5;
gridHelper.material.transparent = true;
gridHelper.material.opacity = 0.2;
scene.add(gridHelper);


// --- Bridge Model Generation (Ultra Detailed) ---
const bridgeGroup = new THREE.Group();

// 1. Deck
const deckGeom = new THREE.BoxGeometry(1600, 4, 40);
const deck = new THREE.Mesh(deckGeom, concreteMat);
deck.position.y = 50;
deck.receiveShadow = true;
deck.castShadow = true;
bridgeGroup.add(deck);

// Asphalt Road
const roadGeom = new THREE.BoxGeometry(1600, 0.5, 30);
const road = new THREE.Mesh(roadGeom, roadMat);
road.position.y = 52;
road.receiveShadow = true;
bridgeGroup.add(road);

// Center Divider
const dividerGeom = new THREE.BoxGeometry(1600, 1.2, 1.5);
const divider = new THREE.Mesh(dividerGeom, concreteMat);
divider.position.y = 52.6;
divider.castShadow = true;
bridgeGroup.add(divider);

// Guardrails
const createRail = (zOffset) => {
    const railGrp = new THREE.Group();
    const railLine = new THREE.Mesh(new THREE.BoxGeometry(1600, 0.5, 0.5), metalMat);
    railLine.position.set(0, 54, zOffset);
    const railLine2 = new THREE.Mesh(new THREE.BoxGeometry(1600, 0.5, 0.5), metalMat);
    railLine2.position.set(0, 53, zOffset);
    railGrp.add(railLine, railLine2);
    
    for(let i=-800; i<=800; i+=10) {
        const post = new THREE.Mesh(new THREE.BoxGeometry(0.5, 2.5, 0.5), metalMat);
        post.position.set(i, 53.25, zOffset);
        railGrp.add(post);
    }
    return railGrp;
};
bridgeGroup.add(createRail(19), createRail(-19));

// Streetlights
const lightGeom = new THREE.CylinderGeometry(0.3, 0.5, 12);
const bulbGeom = new THREE.SphereGeometry(1.5);
const bulbMat = new THREE.MeshBasicMaterial({color: 0xffffff});
for(let i=-750; i<=750; i+=60) {
    const pole = new THREE.Mesh(lightGeom, metalMat);
    pole.position.set(i, 58, 0);
    const bulb = new THREE.Mesh(bulbGeom, bulbMat);
    bulb.position.set(0, 6, 0);
    pole.add(bulb);
    
    const pLight = new THREE.PointLight(0xfff0dd, 0.8, 100);
    pLight.position.set(i, 65, 0);
    bridgeGroup.add(pole, pLight);
}

// 2. Main Pylons & Pier Foundations
const createPylon = (xPos) => {
    const pylonGrp = new THREE.Group();
    // Foundation going into water
    const baseGeom = new THREE.CylinderGeometry(14, 18, 80, 16);
    const pierL = new THREE.Mesh(baseGeom, concreteMat);
    pierL.position.set(0, 0, 18);
    const pierR = new THREE.Mesh(baseGeom, concreteMat);
    pierR.position.set(0, 0, -18);
    
    const baseCap = new THREE.Mesh(new THREE.BoxGeometry(32, 10, 56), concreteMat);
    baseCap.position.set(0, 42, 0);
    
    // Towers
    const pillarGeom = new THREE.BoxGeometry(10, 180, 10);
    const leftP = new THREE.Mesh(pillarGeom, concreteMat);
    leftP.position.set(0, 130, 18);
    leftP.castShadow = true;
    const rightP = new THREE.Mesh(pillarGeom, concreteMat);
    rightP.position.set(0, 130, -18);
    rightP.castShadow = true;
    
    // Cross beams
    const crossGeom = new THREE.BoxGeometry(8, 10, 36);
    const cross1 = new THREE.Mesh(crossGeom, concreteMat);
    cross1.position.set(0, 80, 0);
    const cross2 = new THREE.Mesh(crossGeom, concreteMat);
    cross2.position.set(0, 180, 0);
    
    // Pylon cap
    const cap = new THREE.Mesh(new THREE.BoxGeometry(12, 6, 40), highlightMat);
    cap.position.set(0, 223, 0);
    
    pylonGrp.add(pierL, pierR, baseCap, leftP, rightP, cross1, cross2, cap);
    pylonGrp.position.set(xPos, 0, 0);
    return pylonGrp;
};

const pylon1 = createPylon(-250);
const pylon2 = createPylon(250);
bridgeGroup.add(pylon1, pylon2);

// 3. Cables (Dense Cable-stayed Fan)
const createCables = (pylonX) => {
    for(let i=1; i<=18; i++) {
        const spread = 25 * i;
        const topY = 215 - (i*3);
        const pTop = new THREE.Vector3(pylonX, topY, 0);
        
        // Left Fan
        bridgeGroup.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints([pTop, new THREE.Vector3(pylonX - spread, 52, 19)]), cableMat));
        bridgeGroup.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints([pTop, new THREE.Vector3(pylonX - spread, 52, -19)]), cableMat));
        // Right Fan
        bridgeGroup.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints([pTop, new THREE.Vector3(pylonX + spread, 52, 19)]), cableMat));
        bridgeGroup.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints([pTop, new THREE.Vector3(pylonX + spread, 52, -19)]), cableMat));
    }
}
createCables(-250);
createCables(250);
scene.add(bridgeGroup);

// --- Moving Cars ---
const cars = [];
function createCar(isOpposite) {
    const carGrp = new THREE.Group();
    const cMat = new THREE.MeshStandardMaterial({ color: new THREE.Color().setHSL(Math.random(), 0.7, 0.5), roughness: 0.3, metalness: 0.6 });
    const gMat = new THREE.MeshStandardMaterial({ color: 0x111111, roughness: 0.1 });
    
    const base = new THREE.Mesh(new THREE.BoxGeometry(8, 2.5, 4), cMat);
    base.position.y = 1.25;
    base.castShadow = true;
    const top = new THREE.Mesh(new THREE.BoxGeometry(4, 2, 3.5), gMat);
    top.position.set(-0.5, 3.25, 0);
    carGrp.add(base, top);
    
    // Headlights & Taillights
    const hl = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.5, 3), new THREE.MeshBasicMaterial({color: 0xffffff}));
    hl.position.set(4, 1.5, 0);
    const tl = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.5, 3), new THREE.MeshBasicMaterial({color: 0xff0000}));
    tl.position.set(-4, 1.5, 0);
    carGrp.add(hl, tl);

    const startX = (Math.random() - 0.5) * 1600;
    const zOffset = isOpposite ? -8 - Math.random()*4 : 8 + Math.random()*4;
    carGrp.position.set(startX, 52.2, zOffset);
    if(isOpposite) carGrp.rotation.y = Math.PI;
    
    scene.add(carGrp);
    cars.push({ model: carGrp, speed: (1.2 + Math.random() * 0.8) * (isOpposite ? -1 : 1) });
}

for(let i=0; i<30; i++) {
    createCar(i%2===0);
}

// --- Procedural Drone Model ---
function updateSceneTheme(bgColor, meshColor, gridColor, lightColor, landColor) {
    renderer.setClearColor(bgColor, 1);
    scene.fog.color.setHex(bgColor);
    concreteMat.color.setHex(meshColor);
    terrainMat.color.setHex(landColor);
    
    scene.remove(gridHelper);
    gridHelper = new THREE.GridHelper(3000, 150, lightColor, gridColor);
    gridHelper.position.y = -14.5;
    gridHelper.material.transparent = true;
    gridHelper.material.opacity = 0.2;
    scene.add(gridHelper);
}

// --- Animation Loop ---
let fraction = 0;
const clock = new THREE.Clock();

const myDrone = window.myDrone = new Drone(scene, camera, controls);

function animate() {
    requestAnimationFrame(animate);
    const dt = clock.getDelta();
    if (!myDrone.isFPV) controls.update();
    myDrone.update(dt);
    
    
    
    // Animate cars
    cars.forEach(car => {
        car.model.position.x += car.speed;
        if(car.model.position.x > 800) car.model.position.x = -800;
        if(car.model.position.x < -800) car.model.position.x = 800;
    });

    // Animate water surface
    const time = clock.getElapsedTime();
    const waterPos = water.geometry.attributes.position;
    for(let i=0; i<waterPos.count; i++) {
        const x = waterPos.getX(i);
        const z = waterPos.getZ(i);
        waterPos.setY(i, Math.sin(x*0.05 + time) * Math.cos(z*0.05 + time) * 1.5);
    }
    water.geometry.attributes.position.needsUpdate = true;
    water.geometry.computeVertexNormals();

    
    
    renderer.render(scene, camera);
}
animate();

// --- Resize Handler ---
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

// --- UI Interaction & Path Visualization ---
const targetMap = {
    'pylon-1': new THREE.Vector3(-250, 110, 140),
    'pylon-2': new THREE.Vector3(250, 110, 140),
    'cable-left': new THREE.Vector3(-150, 85, 110),
    'pier-3': new THREE.Vector3(0, 45, 160)
};

const pathMaterial = new THREE.LineBasicMaterial({ color: 0xd4af37, opacity: 0.8, transparent: true });
let pathLine = null;
const waypointMarkers = [];

window.updatePathVisualization = function() {
    if(pathLine) {
        scene.remove(pathLine);
        pathLine.geometry.dispose();
    }
    waypointMarkers.forEach(m => scene.remove(m));
    waypointMarkers.length = 0;
    
    if(myDrone.waypoints.length > 0) {
        const points = [myDrone.mesh.position.clone(), ...myDrone.waypoints];
        const geometry = new THREE.BufferGeometry().setFromPoints(points);
        pathLine = new THREE.Line(geometry, pathMaterial);
        scene.add(pathLine);
        
        myDrone.waypoints.forEach((wp, idx) => {
            const marker = new THREE.Mesh(
                new THREE.SphereGeometry(1.5),
                new THREE.MeshBasicMaterial({ color: idx === 0 ? 0xff0000 : 0xd4af37 })
            );
            marker.position.copy(wp);
            scene.add(marker);
            waypointMarkers.push(marker);
        });
    }
};
setTimeout(window.updatePathVisualization, 500);

document.querySelectorAll('.node-item').forEach(item => {
    item.addEventListener('click', (e) => {
        const targetId = e.target.getAttribute('data-target');
        if(targetMap[targetId]) {
            myDrone.addWaypoint(targetMap[targetId]);
            window.updatePathVisualization();
        }
    });
});

myDrone.onStateChange = (state) => {
    const btnResume = document.getElementById('btn-resume-mission');
    const btnStart = document.getElementById('btn-start-mission');
    if(state === 'MANUAL' && myDrone.waypoints.length > 0) {
        btnResume.classList.remove('hidden');
    } else {
        btnResume.classList.add('hidden');
    }
    
    if(state !== 'IDLE') {
        btnStart.classList.add('hidden');
    } else if (myDrone.waypoints.length > 0) {
        btnStart.classList.remove('hidden');
    }
    window.updatePathVisualization();
};

const btnStart = document.getElementById('btn-start-mission');
if(btnStart) btnStart.addEventListener('click', () => myDrone.startMission());

const btnResume = document.getElementById('btn-resume-mission');
if(btnResume) btnResume.addEventListener('click', () => myDrone.resumeMission());

// FPV Toggle Button
const btnFpv = document.getElementById('btn-toggle-fpv');
const fpvInstructions = document.getElementById('fpv-instructions');
if(btnFpv) {
    btnFpv.addEventListener('click', () => {
        const isFpv = myDrone.toggleView();
        if(isFpv) {
            btnFpv.textContent = "💻 退出 FPV";
            btnFpv.classList.replace('secondary-btn', 'danger-btn');
            fpvInstructions.classList.remove('hidden');
        } else {
            btnFpv.textContent = "💻 切换第一人称 (FPV)";
            btnFpv.classList.replace('danger-btn', 'secondary-btn');
            fpvInstructions.classList.add('hidden');
        }
    });
}

// Double Click Raycaster for TPV AutoNav
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

window.addEventListener('dblclick', (e) => {
    if(document.getElementById('view-flight-control').classList.contains('active') && !myDrone.isFPV) {
        mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
        
        raycaster.setFromCamera(mouse, camera);
        const intersects = raycaster.intersectObjects([bridgeGroup, terrainGroup], true);
        
        if(intersects.length > 0) {
            const hitPoint = intersects[0].point;
            if (e.shiftKey) {
                myDrone.removeLastWaypoint();
            } else {
                myDrone.addWaypoint(hitPoint);
            }
            window.updatePathVisualization();
        }
    }
});

// --- Navigation Routing ---
document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = item.getAttribute('data-target');
        if(!targetId) return;
        
        document.querySelectorAll('.nav-item').forEach(nav => nav.classList.remove('active'));
        item.classList.add('active');
        
        document.querySelectorAll('.view-container').forEach(view => view.classList.remove('active'));
        const targetView = document.getElementById(targetId);
        if(targetView) targetView.classList.add('active');
        
        // Hide 3D Canvas if not in flight control (optional, for performance and aesthetics)
        if(targetId === 'view-command-center' && window.cesiumViewer) { 
            window.cesiumViewer.resize();
        }
        if(targetId !== 'view-flight-control') {
            document.getElementById('canvas-container').style.opacity = '0';
            document.getElementById('canvas-container').style.pointerEvents = 'none';
        } else {
            document.getElementById('canvas-container').style.opacity = '1';
            document.getElementById('canvas-container').style.pointerEvents = 'auto';
        }
    });
});


// --- CesiumJS Setup ---
const cesiumContainer = document.getElementById('cesium-container');
if (cesiumContainer && typeof Cesium !== 'undefined') {
    Cesium.Ion.defaultAccessToken = '';
    
    const viewer = new Cesium.Viewer('cesium-container', {
        timeline: false,
        animation: false,
        geocoder: false,
        homeButton: false,
        baseLayerPicker: false,
        navigationHelpButton: false,
        sceneModePicker: false,
        fullscreenButton: false,
        infoBox: false,
        selectionIndicator: false,
        baseLayer: false
    });

    viewer.scene.skyBox.show = false;
    viewer.scene.backgroundColor = Cesium.Color.fromCssColorString('#080808');

    const googleApiKey = import.meta.env.VITE_GOOGLE_MAP_TILES_API_KEY;
    
    async function loadGoogleTiles() {
        try {
            const tileset = await Cesium.createGooglePhotorealistic3DTileset(googleApiKey);
            viewer.scene.primitives.add(tileset);
            
            tileset.colorBlendMode = Cesium.Cesium3DTileColorBlendMode.MIX;
            tileset.colorBlendAmount = 0.5;
            tileset.style = new Cesium.Cesium3DTileStyle({
                color: "color('#444444')"
            });
        } catch (error) {
            console.error('Error loading Google 3D Tiles:', error);
        }
    }
    
    if (googleApiKey) {
        loadGoogleTiles();
    }

    viewer.camera.flyTo({
        destination: Cesium.Cartesian3.fromDegrees(116.391, 39.904, 15000000),
        duration: 0
    });

    const arcs = [
      { start: [116.4074, 39.9042], end: [-74.0060, 40.7128] },
      { start: [-0.1278, 51.5074], end: [-74.0060, 40.7128] },
      { start: [116.4074, 39.9042], end: [139.6503, 35.6762] }
    ];

    arcs.forEach(arc => {
        viewer.entities.add({
            polyline: {
                positions: Cesium.Cartesian3.fromDegreesArray([
                    arc.start[0], arc.start[1], 
                    arc.end[0], arc.end[1]
                ]),
                width: 3,
                arcType: Cesium.ArcType.GEODESIC,
                material: new Cesium.PolylineGlowMaterialProperty({
                    glowPower: 0.3,
                    color: Cesium.Color.fromCssColorString('#d4af37')
                })
            }
        });
    });

    window.cesiumViewer = viewer;
}






