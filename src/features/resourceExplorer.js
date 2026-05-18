import * as THREE from 'three';
import { createTelemetryBus } from './telemetryBus.js';

const DRAWER_ID = 'resource-explorer-drawer';
const VIEW_ID = 'view-resource-management';

const noop = () => {};

function getDocument(root) {
  if (root && root.nodeType === 9) return root;
  if (root && root.ownerDocument) return root.ownerDocument;
  if (typeof document !== 'undefined') return document;
  return null;
}

function textOf(element) {
  return element ? element.textContent.trim().replace(/\s+/g, ' ') : '';
}

function normalizeId(text, fallback) {
  const serial = text.match(/\b([A-Z]{2,}-?\d{3,}|\d[A-Z0-9]{5,})\b/i);
  return serial ? serial[1].toUpperCase() : fallback;
}

function inferAssetType(card) {
  const text = textOf(card).toLowerCase();
  const image = card.querySelector('img');
  const src = image ? image.getAttribute('src') || '' : '';

  if (text.includes('dock') || src.includes('dock')) return 'dock';
  if (text.includes('m30') || text.includes('m350') || src.includes('fleet')) return 'drone';
  return 'asset';
}

function parseCard(card, index) {
  const titleElement = card.querySelector('.rc-title');
  const statusElement = card.querySelector('.rc-status');
  const metaElement = card.querySelector('.rc-meta');
  const image = card.querySelector('img');
  const title = textOf(titleElement).replace(textOf(statusElement), '').trim() || `资产 ${index + 1}`;
  const meta = textOf(metaElement);
  const id = card.dataset.resourceAssetId || normalizeId(`${title} ${meta}`, `ASSET-${index + 1}`);

  card.dataset.resourceAssetId = id;
  card.dataset.resourceAssetType = card.dataset.resourceAssetType || inferAssetType(card);

  return {
    id,
    title,
    type: card.dataset.resourceAssetType,
    status: textOf(statusElement) || 'Unknown',
    meta,
    imageUrl: image ? image.getAttribute('src') : '',
    modelUrl: card.dataset.modelUrl || '',
    card,
  };
}

function mergeAsset(cardAsset, telemetryAsset) {
  return {
    ...cardAsset,
    ...(telemetryAsset || {}),
    title: telemetryAsset?.title || cardAsset.title,
    type: telemetryAsset?.type || cardAsset.type,
    modelUrl: telemetryAsset?.modelUrl || cardAsset.modelUrl,
  };
}

function statValue(asset, key, fallback = '--') {
  const value = asset?.[key];
  return value === undefined || value === null || value === '' ? fallback : value;
}

function statNumber(asset, key, digits = 0, fallback = '--') {
  const value = Number(asset?.[key]);
  if (!Number.isFinite(value)) return fallback;
  return value.toFixed(digits);
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function hashNumber(text = '') {
  return String(text).split('').reduce((sum, char) => sum + char.charCodeAt(0), 0);
}

function enrichAssetTelemetry(asset = {}, index = 0) {
  const seed = hashNumber(asset.id || asset.title || index);
  const isDock = asset.type === 'dock';
  const battery = Number(asset.battery ?? (72 + (seed % 22)));
  const network = Number(asset.networkMbps ?? (260 + (seed % 180)));
  const temperature = Number(asset.temperature ?? (20 + (seed % 8)));
  const humidity = Number(asset.humidity ?? (44 + (seed % 18)));
  const cycles = Number(asset.cycles ?? (18 + (seed % 80)));
  const offlineRisk = clamp(
    Math.round((100 - battery) * 0.32 + Math.max(0, 220 - network) * 0.16 + (asset.online === false ? 35 : 0)),
    4,
    96,
  );

  return {
    ...asset,
    battery,
    networkMbps: network,
    temperature,
    humidity,
    offlineRisk,
    droneHealth: isDock ? undefined : clamp(96 - Math.round(cycles * 0.18) - Math.round(offlineRisk * 0.12), 58, 99),
    batteryLife: clamp(100 - Math.round(cycles * 0.34), 42, 98),
    propellerStatus: isDock || seed % 5 ? '正常' : '需检查',
    dockClimateHistory: Array.from({ length: 8 }, (_, point) => ({
      t: point,
      temperature: Math.round((temperature + Math.sin(point + seed) * 1.8) * 10) / 10,
      humidity: clamp(Math.round(humidity + Math.cos(point + seed) * 5), 24, 86),
    })),
  };
}

function climateBars(history = []) {
  return history.map((point) => {
    const height = clamp(Math.round((point.temperature - 12) * 3), 16, 74);
    return `<span style="height:${height}px" title="${Number(point.temperature).toFixed(1)}°C / ${point.humidity}%"></span>`;
  }).join('');
}

function createElement(doc, tag, className, text = '') {
  const element = doc.createElement(tag);
  if (className) element.className = className;
  if (text) element.textContent = text;
  return element;
}

class ExplodedView {
  constructor(canvas, options = {}) {
    this.canvas = canvas;
    this.window = options.window || canvas.ownerDocument.defaultView;
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100);
    this.camera.position.set(5.5, 3.8, 7);
    this.renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    this.renderer.setPixelRatio(Math.min(this.window.devicePixelRatio || 1, 2));
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.group = new THREE.Group();
    this.scene.add(this.group);
    this.scene.add(new THREE.AmbientLight(0xffffff, 1.6));
    const key = new THREE.DirectionalLight(0xf6d47b, 2.2);
    key.position.set(4, 8, 5);
    this.scene.add(key);
    const rim = new THREE.DirectionalLight(0x5fc7ff, 1.3);
    rim.position.set(-4, 2, -4);
    this.scene.add(rim);
    this.scene.add(new THREE.GridHelper(9, 18, 0x4b5563, 0x1f2937));
    this.resize = this.resize.bind(this);
    this.animate = this.animate.bind(this);
    this.disposed = false;
    this.resizeObserver = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(this.resize) : null;
    if (this.resizeObserver) this.resizeObserver.observe(canvas.parentElement || canvas);
    this.window.addEventListener('resize', this.resize);
    this.resize();
    this.frame = this.window.requestAnimationFrame(this.animate);
  }

  resize() {
    const box = (this.canvas.parentElement || this.canvas).getBoundingClientRect();
    const width = Math.max(1, Math.floor(box.width));
    const height = Math.max(1, Math.floor(box.height));
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height, false);
  }

  clearGroup() {
    while (this.group.children.length) {
      const child = this.group.children.pop();
      child.traverse((node) => {
        if (node.geometry) node.geometry.dispose();
        if (node.material) {
          if (Array.isArray(node.material)) node.material.forEach((material) => material.dispose());
          else node.material.dispose();
        }
      });
    }
  }

  async renderAsset(asset) {
    this.clearGroup();
    this.group.rotation.set(0.15, -0.55, 0);

    if (asset.modelUrl) {
      const loaded = await this.loadModel(asset.modelUrl);
      if (loaded) return;
    }

    if (asset.type === 'dock') this.createDock();
    else this.createDrone();
  }

  async loadModel(modelUrl) {
    try {
      const { GLTFLoader } = await import('three/examples/jsm/loaders/GLTFLoader.js');
      const loader = new GLTFLoader();
      const gltf = await loader.loadAsync(modelUrl);
      gltf.scene.scale.setScalar(1.5);
      this.group.add(gltf.scene);
      return true;
    } catch (error) {
      console.warn('[ResourceExplorer] GLB load failed, falling back to procedural view:', error);
      this.clearGroup();
      return false;
    }
  }

  addPart(mesh, target, label = '') {
    const holder = new THREE.Group();
    holder.add(mesh);
    holder.position.copy(target).multiplyScalar(0.35);
    holder.userData.target = target.clone();
    holder.userData.label = label;
    this.group.add(holder);
    return holder;
  }

  createBox(size, color, roughness = 0.55) {
    return new THREE.Mesh(
      new THREE.BoxGeometry(size.x, size.y, size.z),
      new THREE.MeshStandardMaterial({ color, roughness, metalness: 0.35 })
    );
  }

  createRotor(position) {
    const material = new THREE.MeshStandardMaterial({ color: 0xd4af37, roughness: 0.38, metalness: 0.55 });
    const ring = new THREE.Mesh(new THREE.TorusGeometry(0.42, 0.025, 10, 40), material);
    ring.rotation.x = Math.PI / 2;
    const blade = new THREE.Mesh(new THREE.BoxGeometry(0.78, 0.025, 0.09), material);
    const group = new THREE.Group();
    group.add(ring, blade);
    this.addPart(group, position, 'rotor');
  }

  createDrone() {
    const graphite = 0x303641;
    const accent = 0xd4af37;
    this.addPart(this.createBox(new THREE.Vector3(1.55, 0.38, 1.0), graphite), new THREE.Vector3(0, 0.2, 0), 'airframe');
    this.addPart(this.createBox(new THREE.Vector3(0.84, 0.22, 0.56), 0x111827), new THREE.Vector3(0, -0.35, 0.95), 'gimbal');
    this.addPart(this.createBox(new THREE.Vector3(1.05, 0.2, 0.62), accent), new THREE.Vector3(0, 0.72, -0.1), 'battery');

    [
      [-1.65, 0.12, -1.22, -0.65],
      [1.65, 0.12, 1.22, 0.65],
      [-1.65, 0.12, 1.22, 0.65],
      [1.65, 0.12, -1.22, -0.65],
    ].forEach(([x, y, z, rotation]) => {
      const arm = this.createBox(new THREE.Vector3(1.6, 0.12, 0.12), graphite, 0.48);
      arm.rotation.y = rotation;
      this.addPart(arm, new THREE.Vector3(x * 0.48, y, z * 0.48), 'arm');
      this.createRotor(new THREE.Vector3(x, y + 0.2, z));
    });
  }

  createDock() {
    const shell = 0x28313f;
    const panel = 0x111827;
    const accent = 0xd4af37;
    this.addPart(this.createBox(new THREE.Vector3(1.9, 1.5, 1.35), shell), new THREE.Vector3(0, 0.1, 0), 'dock-shell');
    this.addPart(this.createBox(new THREE.Vector3(2.25, 0.18, 1.65), accent), new THREE.Vector3(0, 1.12, 0), 'sliding-roof');
    this.addPart(this.createBox(new THREE.Vector3(1.5, 0.09, 1.1), 0x0f172a), new THREE.Vector3(0, 1.42, 0), 'landing-pad');
    this.addPart(this.createBox(new THREE.Vector3(0.24, 1.1, 0.2), panel), new THREE.Vector3(-1.38, 0.02, 0.0), 'power-module');
    this.addPart(this.createBox(new THREE.Vector3(0.24, 1.1, 0.2), panel), new THREE.Vector3(1.38, 0.02, 0.0), 'network-module');

    const mastMaterial = new THREE.MeshStandardMaterial({ color: 0xd4af37, roughness: 0.4, metalness: 0.5 });
    [-0.82, 0.82].forEach((x) => {
      const mast = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.025, 1.05, 12), mastMaterial);
      mast.position.y = 0.5;
      this.addPart(mast, new THREE.Vector3(x, 1.05, -0.95), 'antenna');
    });
  }

  animate(now) {
    if (this.disposed) return;
    const time = now * 0.001;
    this.group.rotation.y += 0.003;
    this.group.children.forEach((child, index) => {
      if (!child.userData.target) return;
      child.position.lerp(child.userData.target, 0.055);
      child.rotation.y = Math.sin(time + index) * 0.04;
    });
    this.renderer.render(this.scene, this.camera);
    this.frame = this.window.requestAnimationFrame(this.animate);
  }

  dispose() {
    this.disposed = true;
    this.window.cancelAnimationFrame(this.frame);
    this.window.removeEventListener('resize', this.resize);
    if (this.resizeObserver) this.resizeObserver.disconnect();
    this.clearGroup();
    this.renderer.dispose();
  }
}

function createDrawer(doc) {
  const drawer = createElement(doc, 'aside', 'resource-explorer-drawer');
  drawer.id = DRAWER_ID;
  drawer.setAttribute('aria-hidden', 'true');
  drawer.innerHTML = `
    <div class="resource-explorer-head">
      <div>
        <div class="resource-explorer-kicker">资产三维拆解视图</div>
        <h3 data-re-title>资源详情</h3>
      </div>
      <button class="resource-explorer-close" type="button" aria-label="关闭资源详情">&times;</button>
    </div>
    <div class="resource-explorer-stage">
      <canvas data-re-canvas></canvas>
      <div class="resource-explorer-scanline"></div>
    </div>
    <div class="resource-explorer-body">
      <div class="resource-explorer-status" data-re-status>等待遥测</div>
      <div class="resource-explorer-stats">
        <div><span>电量</span><strong data-re-battery>--</strong></div>
        <div><span>网络</span><strong data-re-network>--</strong></div>
        <div><span>温度</span><strong data-re-temp>--</strong></div>
        <div><span>信号</span><strong data-re-signal>--</strong></div>
        <div><span>健康度</span><strong data-re-health>--</strong></div>
        <div><span>电池寿命</span><strong data-re-life>--</strong></div>
        <div><span>桨叶状态</span><strong data-re-propeller>--</strong></div>
        <div><span>离线风险</span><strong data-re-risk>--</strong></div>
      </div>
      <div class="resource-explorer-chart" data-re-climate></div>
      <div class="resource-explorer-meta" data-re-meta></div>
      <div class="resource-explorer-note" data-re-model>正在使用程序化拆解模型；配置模型地址后可加载 GLB。</div>
    </div>
  `;
  doc.body.appendChild(drawer);
  return drawer;
}

function renderDrawer(drawer, asset) {
  drawer.querySelector('[data-re-title]').textContent = asset.title;
  drawer.querySelector('[data-re-status]').textContent = asset.online === false || asset.offlineRisk > 68
    ? '离线风险'
    : asset.status || '在线';
  drawer.querySelector('[data-re-battery]').textContent = `${statNumber(asset, 'battery', 0)}%`;
  drawer.querySelector('[data-re-network]').textContent = `${statNumber(asset, 'networkMbps', 0)} Mbps`;
  drawer.querySelector('[data-re-temp]').textContent = `${statNumber(asset, 'temperature', 1)}°C`;
  drawer.querySelector('[data-re-signal]').textContent = `${statValue(asset, 'signalBars')}/4`;
  drawer.querySelector('[data-re-health]').textContent = asset.type === 'dock' ? '机巢' : `${statValue(asset, 'droneHealth')}%`;
  drawer.querySelector('[data-re-life]').textContent = `${statValue(asset, 'batteryLife')}%`;
  drawer.querySelector('[data-re-propeller]').textContent = statValue(asset, 'propellerStatus');
  drawer.querySelector('[data-re-risk]').textContent = `${statValue(asset, 'offlineRisk')}%`;
  drawer.querySelector('[data-re-climate]').innerHTML = climateBars(asset.dockClimateHistory);
  drawer.querySelector('[data-re-meta]').textContent = [
    asset.meta || `遥测编号: ${asset.id}`,
    `机巢温湿度曲线点: ${(asset.dockClimateHistory || []).length}`,
  ].join('\n');
  drawer.querySelector('[data-re-model]').textContent = asset.modelUrl
    ? `GLB 来源: ${asset.modelUrl}`
    : '正在使用程序化拆解模型；设置 data-model-url 或 modelUrl 可加载 GLB。';
}

export function initResourceExplorer(options = {}) {
  const root = options.root || getDocument();
  const doc = getDocument(root);
  const view = doc?.getElementById(VIEW_ID);

  if (!doc || !view) {
    return { active: false, open: noop, close: noop, snapshot: () => [], destroy: noop };
  }

  const cards = Array.from(view.querySelectorAll('.resource-card')).map(parseCard);
  if (!cards.length) {
    return { active: false, open: noop, close: noop, snapshot: () => [], destroy: noop };
  }

  const win = doc.defaultView;
  const bus = options.telemetryBus || createTelemetryBus({ root: doc });
  const disposers = [];
  const telemetryById = new Map();
  let drawer = null;
  let explodedView = null;
  let activeId = null;
  let republishingTelemetry = false;

  const findAsset = (id) => {
    const cardAsset = cards.find((asset) => asset.id === id) || cards[0];
    return enrichAssetTelemetry(mergeAsset(cardAsset, telemetryById.get(cardAsset.id)));
  };

  const updateActiveTelemetry = () => {
    if (!drawer || !activeId) return;
    const asset = findAsset(activeId);
    renderDrawer(drawer, asset);
  };

  const unsubscribe = bus.subscribe((detail) => {
    telemetryById.clear();
    const assets = detail.assets.map(enrichAssetTelemetry);
    assets.forEach((asset) => telemetryById.set(asset.id, asset));
    if (!detail.extendedResourceTelemetry && !republishingTelemetry) {
      republishingTelemetry = true;
      bus.publish({
        ...detail,
        assets,
        extendedResourceTelemetry: true,
        updatedAt: new Date().toISOString(),
      });
      republishingTelemetry = false;
    }
    updateActiveTelemetry();
  });
  disposers.push(unsubscribe);

  const ensureDrawer = () => {
    if (drawer) return drawer;
    drawer = doc.getElementById(DRAWER_ID) || createDrawer(doc);
    const closeButton = drawer.querySelector('.resource-explorer-close');
    closeButton.addEventListener('click', close);
    disposers.push(() => closeButton.removeEventListener('click', close));
    explodedView = new ExplodedView(drawer.querySelector('[data-re-canvas]'), { window: win });
    return drawer;
  };

  function open(assetOrId) {
    const id = typeof assetOrId === 'string'
      ? assetOrId
      : assetOrId?.dataset?.resourceAssetId;
    if (!id) return false;

    activeId = id;
    const panel = ensureDrawer();
    const asset = findAsset(id);
    renderDrawer(panel, asset);
    explodedView.renderAsset(asset);
    panel.classList.add('is-open');
    panel.setAttribute('aria-hidden', 'false');
    return true;
  }

  function close() {
    if (!drawer) return;
    drawer.classList.remove('is-open');
    drawer.setAttribute('aria-hidden', 'true');
    activeId = null;
  }

  cards.forEach((asset) => {
    const onClick = () => open(asset.id);
    const onKeyDown = (event) => {
      if (event.key !== 'Enter' && event.key !== ' ') return;
      event.preventDefault();
      open(asset.id);
    };
    asset.card.tabIndex = asset.card.tabIndex >= 0 ? asset.card.tabIndex : 0;
    asset.card.setAttribute('role', asset.card.getAttribute('role') || 'button');
    asset.card.addEventListener('click', onClick);
    asset.card.addEventListener('keydown', onKeyDown);
    disposers.push(() => {
      asset.card.removeEventListener('click', onClick);
      asset.card.removeEventListener('keydown', onKeyDown);
    });
  });

  const onEscape = (event) => {
    if (event.key === 'Escape') close();
  };
  win.addEventListener('keydown', onEscape);
  disposers.push(() => win.removeEventListener('keydown', onEscape));

  const onViewChange = (event) => {
    if (event.detail?.targetId !== VIEW_ID) close();
  };
  win.addEventListener('bridge:view-change', onViewChange);
  disposers.push(() => win.removeEventListener('bridge:view-change', onViewChange));

  return {
    active: true,
    bus,
    open,
    close,
    snapshot: () => cards.map((asset) => mergeAsset(asset, telemetryById.get(asset.id))),
    destroy() {
      close();
      disposers.splice(0).forEach((dispose) => dispose());
      if (explodedView) explodedView.dispose();
      if (!options.telemetryBus) bus.destroy();
      if (drawer?.parentNode) drawer.parentNode.removeChild(drawer);
      cards.forEach((asset) => {
        asset.card.removeAttribute('data-resource-asset-id');
        asset.card.removeAttribute('data-resource-asset-type');
      });
    },
  };
}

export default initResourceExplorer;
