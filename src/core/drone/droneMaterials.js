import * as THREE from 'three';

export function createDroneMaterials() {
    const carbon = new THREE.MeshStandardMaterial({
        color: 0x050607,
        roughness: 0.4,
        metalness: 0.78
    });
    const graphite = new THREE.MeshStandardMaterial({
        color: 0x17191b,
        roughness: 0.38,
        metalness: 0.62
    });
    const shell = new THREE.MeshStandardMaterial({
        color: 0xf2f4f1,
        roughness: 0.34,
        metalness: 0.22
    });
    const ceramic = new THREE.MeshStandardMaterial({
        color: 0xffffff,
        roughness: 0.28,
        metalness: 0.18
    });
    const lightGray = new THREE.MeshStandardMaterial({
        color: 0xbfc5c7,
        roughness: 0.48,
        metalness: 0.36
    });
    const panelLine = new THREE.MeshStandardMaterial({
        color: 0x8a9295,
        roughness: 0.62,
        metalness: 0.18
    });
    const matteBlack = new THREE.MeshStandardMaterial({
        color: 0x0b0c0e,
        roughness: 0.78,
        metalness: 0.22
    });
    const rubber = new THREE.MeshStandardMaterial({
        color: 0x030303,
        roughness: 0.92,
        metalness: 0.04
    });
    const glass = new THREE.MeshStandardMaterial({
        color: 0x0a1720,
        roughness: 0.18,
        metalness: 0.22,
        transparent: true,
        opacity: 0.78,
        emissive: 0x07131a,
        emissiveIntensity: 0.45
    });
    const lens = new THREE.MeshStandardMaterial({
        color: 0x02070b,
        roughness: 0.05,
        metalness: 0.35,
        transparent: true,
        opacity: 0.86,
        emissive: 0x061f2d,
        emissiveIntensity: 0.35
    });
    const gold = new THREE.MeshStandardMaterial({
        color: 0xd4af37,
        roughness: 0.32,
        metalness: 0.86
    });
    const warning = new THREE.MeshStandardMaterial({
        color: 0xffb83d,
        roughness: 0.28,
        metalness: 0.45,
        emissive: 0xff9d00,
        emissiveIntensity: 0.45
    });
    const redLed = new THREE.MeshStandardMaterial({
        color: 0xff263f,
        roughness: 0.2,
        metalness: 0.15,
        emissive: 0xff1028,
        emissiveIntensity: 1.4
    });
    const greenLed = new THREE.MeshStandardMaterial({
        color: 0x35ff8a,
        roughness: 0.2,
        metalness: 0.15,
        emissive: 0x18ff6d,
        emissiveIntensity: 1.15
    });
    const blade = new THREE.MeshStandardMaterial({
        color: 0x090a0b,
        roughness: 0.58,
        metalness: 0.18
    });
    const blur = new THREE.MeshBasicMaterial({
        color: 0xdbe7e9,
        transparent: true,
        opacity: 0,
        depthWrite: false,
        side: THREE.DoubleSide
    });

    return {
        carbon,
        graphite,
        shell,
        ceramic,
        lightGray,
        panelLine,
        matteBlack,
        rubber,
        glass,
        lens,
        gold,
        warning,
        redLed,
        greenLed,
        blade,
        blur
    };
}
