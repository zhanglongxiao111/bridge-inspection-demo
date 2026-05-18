import * as THREE from 'three';

const DEFAULT_SEQUENCE = 'tactical';
const PROJECTILE_RANGE = 420;
const PROJECTILE_TTL = 900;
const PARTICLE_TTL = 650;
const MAX_EFFECTS = 18;
const PROJECTILE_SPEED = 520;

const NOOP_CONTROLLER = Object.freeze({
  enabled: false,
  isAiming: false,
  enable: () => false,
  disable: () => false,
  destroy: () => false,
  fire: () => false
});

export function initTacticalPayload({ scene, camera, drone } = {}) {
  if (!isRenderableScene(scene) || !isCamera(camera) || !drone) {
    return NOOP_CONTROLLER;
  }

  const win = getWindow();
  if (!win) {
    return NOOP_CONTROLLER;
  }

  const state = {
    scene,
    camera,
    drone,
    win,
    enabled: false,
    isAiming: false,
    sequenceBuffer: '',
    effects: [],
    rafId: null,
    hud: null,
    destroyed: false
  };

  const controller = {
    get enabled() {
      return state.enabled;
    },
    get isAiming() {
      return state.isAiming;
    },
    enable() {
      return enablePayload(state);
    },
    disable() {
      return disablePayload(state);
    },
    destroy() {
      return destroyPayload(state);
    },
    fire() {
      return firePayload(state);
    }
  };

  state.onViewChange = (event) => {
    if (event.detail?.targetId !== 'view-flight-control') {
      disablePayload(state);
    }
  };
  win.addEventListener('bridge:view-change', state.onViewChange);

  if (isDeveloperGateOpen(win)) {
    state.onKeydown = (event) => handleSequence(event, state);
    win.addEventListener('keydown', state.onKeydown, { passive: true });
  }

  if (win.bridgeDeveloperMode === true && isDeveloperGateOpen(win)) {
    enablePayload(state);
  }

  return controller;
}

function handleSequence(event, state) {
  if (state.destroyed || state.enabled || event.defaultPrevented || isEditableTarget(event.target)) {
    return;
  }

  const key = String(event.key || '').toLowerCase();
  if (key.length !== 1 || event.altKey || event.ctrlKey || event.metaKey) {
    return;
  }

  const sequence = getActivationSequence(state.win);
  state.sequenceBuffer = `${state.sequenceBuffer}${key}`.slice(-sequence.length);

  if (state.sequenceBuffer === sequence) {
    state.win.bridgeDeveloperMode = true;
    enablePayload(state);
  }
}

function enablePayload(state) {
  if (state.destroyed || state.enabled) {
    return false;
  }

  state.enabled = true;
  state.win.document.body.classList.add('tactical-payload-enabled');
  state.hud = createHud(state.win.document);

  state.onContextMenu = (event) => {
    if (!canUsePayload(state)) return;
    event.preventDefault();
  };

  state.onMouseDown = (event) => {
    if (!canUsePayload(state)) return;

    if (event.button === 2) {
      event.preventDefault();
      setAiming(state, true);
      return;
    }

    if (event.button === 0 && state.isAiming) {
      event.preventDefault();
      firePayload(state);
    }
  };

  state.onMouseUp = (event) => {
    if (event.button === 2) {
      setAiming(state, false);
    }
  };

  state.onBlur = () => setAiming(state, false);

  state.win.addEventListener('contextmenu', state.onContextMenu);
  state.win.addEventListener('mousedown', state.onMouseDown);
  state.win.addEventListener('mouseup', state.onMouseUp);
  state.win.addEventListener('blur', state.onBlur);
  scheduleUpdate(state);
  return true;
}

function disablePayload(state) {
  if (!state.enabled) {
    return false;
  }

  setAiming(state, false);
  state.enabled = false;
  state.win.document.body.classList.remove('tactical-payload-enabled');
  state.win.removeEventListener('contextmenu', state.onContextMenu);
  state.win.removeEventListener('mousedown', state.onMouseDown);
  state.win.removeEventListener('mouseup', state.onMouseUp);
  state.win.removeEventListener('blur', state.onBlur);
  removeHud(state);
  clearEffects(state);
  cancelUpdate(state);
  return true;
}

function destroyPayload(state) {
  if (state.destroyed) {
    return false;
  }

  disablePayload(state);
  state.destroyed = true;
  if (state.onKeydown) state.win.removeEventListener('keydown', state.onKeydown);
  state.win.removeEventListener('bridge:view-change', state.onViewChange);
  return true;
}

function firePayload(state) {
  if (!canUsePayload(state)) {
    return false;
  }

  const origin = getMuzzleOrigin(state.camera, state.drone);
  const direction = new THREE.Vector3();
  state.camera.getWorldDirection(direction).normalize();
  addProjectileEffect(state, origin, direction);
  pulseHud(state);
  trimEffects(state);
  scheduleUpdate(state);
  return true;
}

function addProjectileEffect(state, origin, direction) {
  const bodyMaterial = new THREE.MeshStandardMaterial({
    color: 0xffe4b8,
    emissive: 0xff5c2e,
    emissiveIntensity: 1.4,
    roughness: 0.38,
    metalness: 0.2
  });
  const projectile = new THREE.Mesh(new THREE.CapsuleGeometry(0.42, 2.4, 4, 10), bodyMaterial);
  projectile.name = 'DevEffectProjectile';
  projectile.userData.devEffect = true;
  projectile.position.copy(origin);
  projectile.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), direction.clone().normalize());

  const glow = new THREE.PointLight(0xff6b2c, 1.5, 38);
  glow.position.set(0, -1.2, 0);
  projectile.add(glow);
  state.scene.add(projectile);
  pushEffect(state, {
    object: projectile,
    material: bodyMaterial,
    geometry: projectile.geometry,
    direction: direction.clone(),
    origin: origin.clone(),
    bornAt: now(state),
    ttl: PROJECTILE_TTL,
    projectile: true
  });
}

function addTrajectoryEffect(state, origin, endpoint) {
  const geometry = new THREE.BufferGeometry().setFromPoints([origin, endpoint]);
  const material = new THREE.LineBasicMaterial({
    color: 0xff4d2e,
    transparent: true,
    opacity: 0.9,
    depthWrite: false
  });
  const line = new THREE.Line(geometry, material);
  line.name = 'DevEffectTrajectory';
  line.userData.devEffect = true;
  state.scene.add(line);
  pushEffect(state, { object: line, material, geometry, bornAt: now(state), ttl: PROJECTILE_TTL });
}

function addParticleEffect(state, endpoint, direction) {
  const particleCount = 26;
  const positions = new Float32Array(particleCount * 3);
  const velocities = [];
  const spreadBasis = getSpreadBasis(direction);

  for (let index = 0; index < particleCount; index += 1) {
    const offset = randomSpread(spreadBasis, 1.7);
    positions[index * 3] = endpoint.x + offset.x;
    positions[index * 3 + 1] = endpoint.y + offset.y;
    positions[index * 3 + 2] = endpoint.z + offset.z;
    velocities.push(offset.multiplyScalar(10 + Math.random() * 18).addScaledVector(direction, -14));
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  const material = new THREE.PointsMaterial({
    color: 0xffb347,
    size: 4,
    transparent: true,
    opacity: 0.85,
    depthWrite: false,
    blending: THREE.AdditiveBlending
  });
  const particles = new THREE.Points(geometry, material);
  particles.name = 'DevEffectParticles';
  particles.userData.devEffect = true;
  state.scene.add(particles);
  pushEffect(state, { object: particles, material, geometry, velocities, bornAt: now(state), ttl: PARTICLE_TTL });
}

function updateEffects(state) {
  if (!state.enabled && state.effects.length === 0) {
    cancelUpdate(state);
    return;
  }

  const current = now(state);
  state.pendingEffects = [];
  state.updatingEffects = true;
  state.effects = state.effects.filter((effect) => {
    const age = current - effect.bornAt;
    const progress = Math.min(1, age / effect.ttl);

    if (effect.projectile) {
      const distance = Math.min(PROJECTILE_RANGE, (age / 1000) * PROJECTILE_SPEED);
      effect.object.position.copy(effect.origin).addScaledVector(effect.direction, distance);
      if (!effect.trailAt || age - effect.trailAt > 70) {
        const start = effect.object.position.clone().addScaledVector(effect.direction, -8);
        addTrajectoryEffect(state, start, effect.object.position.clone());
        effect.trailAt = age;
      }
    }

    if (progress >= 1) {
      if (effect.projectile) {
        addParticleEffect(state, effect.object.position.clone(), effect.direction);
      }
      disposeEffect(state, effect);
      return false;
    }

    effect.material.opacity = 1 - progress;
    if (effect.velocities) {
      moveParticles(effect, age / 1000);
    }
    return true;
  });
  state.updatingEffects = false;
  if (state.pendingEffects.length) {
    state.effects.push(...state.pendingEffects);
    state.pendingEffects = [];
  }

  state.rafId = state.win.requestAnimationFrame(() => updateEffects(state));
}

function pushEffect(state, effect) {
  if (state.updatingEffects) {
    state.pendingEffects.push(effect);
  } else {
    state.effects.push(effect);
  }
}

function moveParticles(effect, seconds) {
  const position = effect.geometry.getAttribute('position');
  effect.velocities.forEach((velocity, index) => {
    position.setXYZ(
      index,
      position.getX(index) + velocity.x * seconds * 0.04,
      position.getY(index) + velocity.y * seconds * 0.04,
      position.getZ(index) + velocity.z * seconds * 0.04
    );
  });
  position.needsUpdate = true;
}

function scheduleUpdate(state) {
  if (state.rafId !== null) {
    return;
  }
  state.rafId = state.win.requestAnimationFrame(() => updateEffects(state));
}

function cancelUpdate(state) {
  if (state.rafId === null) {
    return;
  }
  state.win.cancelAnimationFrame(state.rafId);
  state.rafId = null;
}

function trimEffects(state) {
  while (state.effects.length > MAX_EFFECTS) {
    disposeEffect(state, state.effects.shift());
  }
}

function clearEffects(state) {
  state.effects.forEach((effect) => disposeEffect(state, effect));
  state.effects = [];
}

function disposeEffect(state, effect) {
  if (!effect) {
    return;
  }
  state.scene.remove(effect.object);
  effect.geometry?.dispose?.();
  effect.material?.dispose?.();
}

function setAiming(state, isAiming) {
  if (state.isAiming === isAiming) {
    return;
  }

  state.isAiming = isAiming;
  state.win.document.body.classList.toggle('tactical-payload-aiming', isAiming);
}

function canUsePayload(state) {
  return state.enabled && Boolean(state.drone?.isFPV) && isRenderableScene(state.scene) && isCamera(state.camera);
}

function createHud(documentRef) {
  const hud = documentRef.createElement('div');
  hud.className = 'tactical-payload-hud';
  hud.setAttribute('aria-hidden', 'true');
  hud.innerHTML = [
    '<div class="tactical-payload-reticle">',
    '  <span></span><span></span><span></span><span></span>',
    '</div>',
    '<div class="tactical-payload-status">DEV EFFECT</div>'
  ].join('');
  documentRef.body.appendChild(hud);
  return hud;
}

function removeHud(state) {
  state.hud?.remove?.();
  state.hud = null;
}

function pulseHud(state) {
  if (!state.hud) {
    return;
  }
  state.hud.classList.remove('is-firing');
  state.hud.offsetWidth;
  state.hud.classList.add('is-firing');
}

function getMuzzleOrigin(camera, drone) {
  const origin = new THREE.Vector3();
  const dronePosition = drone?.mesh?.position;

  if (dronePosition) {
    origin.copy(dronePosition);
  } else {
    origin.copy(camera.position);
  }

  const forward = new THREE.Vector3();
  camera.getWorldDirection(forward).normalize();
  return origin.addScaledVector(forward, 5);
}

function getSpreadBasis(direction) {
  const up = Math.abs(direction.y) > 0.9 ? new THREE.Vector3(1, 0, 0) : new THREE.Vector3(0, 1, 0);
  const right = new THREE.Vector3().crossVectors(direction, up).normalize();
  const vertical = new THREE.Vector3().crossVectors(right, direction).normalize();
  return { right, vertical };
}

function randomSpread({ right, vertical }, radius) {
  const angle = Math.random() * Math.PI * 2;
  const distance = Math.random() * radius;
  return right.clone()
    .multiplyScalar(Math.cos(angle) * distance)
    .addScaledVector(vertical, Math.sin(angle) * distance);
}

function getActivationSequence(win) {
  return String(win.bridgeTacticalSequence || DEFAULT_SEQUENCE).toLowerCase();
}

function isDeveloperGateOpen(win) {
  const query = new URLSearchParams(win.location?.search || '');
  if (query.get('devEffects') === '1') {
    win.sessionStorage?.setItem?.('bridge-dev-effects', '1');
    return true;
  }
  return win.bridgeDeveloperMode === true
    || win.sessionStorage?.getItem?.('bridge-dev-effects') === '1'
    || win.localStorage?.getItem?.('bridge-dev-effects') === '1';
}

function isRenderableScene(scene) {
  return Boolean(scene?.add && scene?.remove);
}

function isCamera(camera) {
  return Boolean(camera?.position && camera?.getWorldDirection);
}

function isEditableTarget(target) {
  const tagName = String(target?.tagName || '').toLowerCase();
  return Boolean(target?.isContentEditable || tagName === 'input' || tagName === 'textarea' || tagName === 'select');
}

function getWindow() {
  if (typeof window === 'undefined') {
    return null;
  }
  return window;
}

function now(state) {
  return state.win.performance?.now?.() ?? Date.now();
}
