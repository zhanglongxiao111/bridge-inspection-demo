import * as THREE from 'three';

const WATER_THEMES = {
    dark: {
        deepColor: 0x06131c,
        surfaceColor: 0x123047,
        accentColor: 0x38bdf8,
        opacity: 0.72,
        waveStrength: 1.7,
        foamStrength: 0.28
    },
    light: {
        deepColor: 0x8ecae6,
        surfaceColor: 0xc7e8f3,
        accentColor: 0x0ea5e9,
        opacity: 0.62,
        waveStrength: 1.25,
        foamStrength: 0.18
    }
};

const VERTEX_SHADER = `
    uniform float uTime;
    uniform float uWaveStrength;

    varying vec2 vUv;
    varying float vWave;

    void main() {
        vUv = uv;
        vec3 transformed = position;
        float waveA = sin(position.x * 0.034 + uTime * 0.85);
        float waveB = cos(position.z * 0.045 - uTime * 0.62);
        float ripple = sin((position.x + position.z) * 0.018 + uTime * 1.35);
        float wave = (waveA * waveB + ripple * 0.35) * uWaveStrength;
        transformed.y += wave;
        vWave = wave;

        gl_Position = projectionMatrix * modelViewMatrix * vec4(transformed, 1.0);
    }
`;

const FRAGMENT_SHADER = `
    uniform vec3 uDeepColor;
    uniform vec3 uSurfaceColor;
    uniform vec3 uAccentColor;
    uniform float uOpacity;
    uniform float uFoamStrength;
    uniform float uTime;

    varying vec2 vUv;
    varying float vWave;

    void main() {
        float flow = sin((vUv.x * 32.0) + (vUv.y * 18.0) + uTime * 0.8) * 0.5 + 0.5;
        float crossFlow = cos((vUv.x - vUv.y) * 42.0 - uTime * 0.55) * 0.5 + 0.5;
        float crest = smoothstep(0.55, 1.0, abs(vWave));
        float current = smoothstep(0.72, 1.0, flow * crossFlow);
        vec3 base = mix(uDeepColor, uSurfaceColor, flow * 0.45 + 0.25);
        vec3 color = mix(base, uAccentColor, current * 0.15 + crest * uFoamStrength);
        float alpha = uOpacity + crest * 0.08;

        gl_FragColor = vec4(color, alpha);
    }
`;

export function createWaterSurface({
    size = 3000,
    segments = 128,
    y = -15,
    theme = 'dark'
} = {}) {
    const geometry = new THREE.PlaneGeometry(size, size, segments, segments);
    geometry.rotateX(-Math.PI / 2);

    const material = new THREE.ShaderMaterial({
        uniforms: {
            uTime: { value: 0 },
            uDeepColor: { value: new THREE.Color() },
            uSurfaceColor: { value: new THREE.Color() },
            uAccentColor: { value: new THREE.Color() },
            uOpacity: { value: 0.7 },
            uWaveStrength: { value: 1.5 },
            uFoamStrength: { value: 0.22 }
        },
        vertexShader: VERTEX_SHADER,
        fragmentShader: FRAGMENT_SHADER,
        transparent: true,
        depthWrite: false,
        side: THREE.DoubleSide
    });

    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.y = y;
    mesh.receiveShadow = true;
    mesh.name = 'ThemedWaterSurface';

    function setTheme(mode = 'dark') {
        const config = WATER_THEMES[mode] ?? WATER_THEMES.dark;
        material.uniforms.uDeepColor.value.setHex(config.deepColor);
        material.uniforms.uSurfaceColor.value.setHex(config.surfaceColor);
        material.uniforms.uAccentColor.value.setHex(config.accentColor);
        material.uniforms.uOpacity.value = config.opacity;
        material.uniforms.uWaveStrength.value = config.waveStrength;
        material.uniforms.uFoamStrength.value = config.foamStrength;
    }

    function update(elapsed) {
        material.uniforms.uTime.value = elapsed;
    }

    function dispose() {
        geometry.dispose();
        material.dispose();
    }

    setTheme(theme);

    return {
        mesh,
        material,
        setTheme,
        update,
        dispose
    };
}

