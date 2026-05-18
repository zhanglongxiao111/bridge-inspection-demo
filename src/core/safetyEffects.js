import * as THREE from 'three';

const PARTICLE_COUNT = 42;
const SPLASH_DURATION_MS = 1500;

const noopController = {
    active: false,
    update: () => {},
    destroy: () => {}
};

export function createSafetyEffects({ scene, drone } = {}) {
    if (!scene) {
        return noopController;
    }

    const group = new THREE.Group();
    group.visible = false;
    scene.add(group);

    const ring = createSplashRing();
    const particles = createSplashParticles();
    const beacon = createAlertBeacon();
    group.add(ring, particles.points, beacon);

    let activeStartedAt = 0;
    let activePosition = new THREE.Vector3();

    function startSplash(state) {
        activeStartedAt = state.startedAt;
        activePosition = state.position?.clone?.() ?? new THREE.Vector3();
        activePosition.y = Math.max(activePosition.y, -14.2);
        group.position.copy(activePosition);
        group.visible = true;
        ring.scale.setScalar(0.1);
        ring.material.opacity = 0.75;
        particles.points.material.opacity = 0.95;
        beacon.material.opacity = 0.9;
    }

    function update({ now = performance.now() } = {}) {
        const splash = drone?.splashState;
        if (!splash?.active) {
            group.visible = false;
            return;
        }

        if (splash.startedAt !== activeStartedAt) {
            startSplash(splash);
        }

        const progress = Math.min(1, (now - activeStartedAt) / SPLASH_DURATION_MS);
        const eased = 1 - Math.pow(1 - progress, 2);
        ring.scale.setScalar(0.2 + eased * 4.8);
        ring.material.opacity = Math.max(0, 0.7 * (1 - progress));
        beacon.position.y = 1 + Math.sin(progress * Math.PI) * 8;
        beacon.scale.setScalar(1 + eased * 3);
        beacon.material.opacity = Math.max(0, 0.85 * (1 - progress));
        updateParticlePositions(particles, progress);

        if (progress >= 1) {
            splash.active = false;
            group.visible = false;
        }
    }

    return {
        active: true,
        update,
        destroy() {
            scene.remove(group);
            disposeObject(group);
        }
    };
}

function createSplashRing() {
    const ringGeometry = new THREE.RingGeometry(0.8, 1.1, 48);
    ringGeometry.rotateX(-Math.PI / 2);
    const ringMaterial = new THREE.MeshBasicMaterial({
        color: 0x7dd3fc,
        transparent: true,
        opacity: 0.7,
        depthWrite: false
    });
    return new THREE.Mesh(ringGeometry, ringMaterial);
}

function createSplashParticles() {
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(PARTICLE_COUNT * 3);
    const seeds = [];

    for (let i = 0; i < PARTICLE_COUNT; i += 1) {
        const angle = (i / PARTICLE_COUNT) * Math.PI * 2;
        const radius = 1.2 + (i % 7) * 0.32;
        const height = 4 + (i % 5) * 1.7;
        seeds.push({ angle, radius, height, phase: (i % 11) / 11 });
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const material = new THREE.PointsMaterial({
        color: 0xbdefff,
        size: 1.1,
        transparent: true,
        opacity: 0.95,
        depthWrite: false
    });

    return {
        points: new THREE.Points(geometry, material),
        positions,
        seeds
    };
}

function createAlertBeacon() {
    const geometry = new THREE.SphereGeometry(1, 16, 8);
    const material = new THREE.MeshBasicMaterial({
        color: 0xff334e,
        transparent: true,
        opacity: 0,
        depthWrite: false
    });
    return new THREE.Mesh(geometry, material);
}

function updateParticlePositions(particles, progress) {
    const lift = Math.sin(progress * Math.PI);

    particles.seeds.forEach((seed, index) => {
        const cursor = index * 3;
        const spread = seed.radius * (1 + progress * 4.5);
        const drift = seed.phase * progress * Math.PI;
        particles.positions[cursor] = Math.cos(seed.angle + drift) * spread;
        particles.positions[cursor + 1] = lift * seed.height - progress * 3;
        particles.positions[cursor + 2] = Math.sin(seed.angle + drift) * spread;
    });

    particles.points.geometry.attributes.position.needsUpdate = true;
    particles.points.material.opacity = Math.max(0, 0.95 * (1 - progress));
}

function disposeObject(object) {
    object.traverse((child) => {
        child.geometry?.dispose?.();
        if (Array.isArray(child.material)) {
            child.material.forEach((material) => material.dispose?.());
        } else {
            child.material?.dispose?.();
        }
    });
}

export default createSafetyEffects;
