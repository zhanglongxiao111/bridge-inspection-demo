const WORKFLOW_EVENT = 'bridge:workflow-card-moved';
const DEFECT_FOCUS_EVENT = 'bridge:defect-focus-requested';
const TELEMETRY_EVENT = 'bridge:resource-telemetry';
const SETTINGS_EVENT = 'bridge:settings-change';

const noop = () => {};

function getDocument(root) {
  if (root && root.nodeType === 9) return root;
  if (root && root.ownerDocument) return root.ownerDocument;
  if (typeof document !== 'undefined') return document;
  return null;
}

function getWindow(doc) {
  if (doc && doc.defaultView) return doc.defaultView;
  if (typeof window !== 'undefined') return window;
  return null;
}

function emit(win, name, detail) {
  if (!win || typeof win.CustomEvent !== 'function') return;
  win.dispatchEvent(new win.CustomEvent(name, { detail }));
}

function textOf(element) {
  return element ? element.textContent.trim().replace(/\s+/g, ' ') : '';
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function randomBetween(min, max, digits = 0) {
  const value = min + Math.random() * (max - min);
  const factor = 10 ** digits;
  return Math.round(value * factor) / factor;
}

function normalizeId(text, fallback) {
  const defect = text.match(/#([A-Z]+-\d+)/i);
  if (defect) return defect[1].toUpperCase();

  const serial = text.match(/\b([A-Z]{2,}-?\d{3,}|\d[A-Z0-9]{5,})\b/i);
  if (serial) return serial[1].toUpperCase();

  return fallback;
}

function findView(root, id) {
  if (!root || typeof root.querySelector !== 'function') return null;
  return root.querySelector(`#${id}`);
}

function navigateFallback(root, targetId) {
  const doc = getDocument(root);
  if (!doc) return false;

  const nav = doc.querySelector(`.nav-item[data-target="${targetId}"]`);
  if (nav) {
    nav.click();
    return true;
  }

  const view = doc.getElementById(targetId);
  if (!view) return false;

  doc.querySelectorAll('.view-container').forEach((item) => item.classList.remove('active'));
  view.classList.add('active');
  return true;
}

function createEmptyController(extra = {}) {
  return {
    active: false,
    destroy: noop,
    ...extra,
  };
}

function getWorkflowStage(column) {
  const title = textOf(column.querySelector('.kanban-title, h3'));
  if (/Data/i.test(title)) return 'data';
  if (/Processing/i.test(title)) return 'processing';
  if (/Verification/i.test(title)) return 'verification';
  if (/Tickets/i.test(title)) return 'tickets';
  return title.toLowerCase().replace(/[^a-z0-9]+/g, '-') || 'stage';
}

function getCardPayload(card, column, index) {
  const heading = textOf(card.querySelector('h4')) || textOf(card).slice(0, 48);
  const id = normalizeId(heading, `CARD-${index + 1}`);

  return {
    id,
    title: heading,
    stage: getWorkflowStage(column),
    text: textOf(card),
  };
}

function markCard(card, payload) {
  card.draggable = true;
  card.tabIndex = card.tabIndex >= 0 ? card.tabIndex : 0;
  card.setAttribute('role', card.getAttribute('role') || 'button');
  card.dataset.workflowCardId = payload.id;
  card.dataset.workflowStage = payload.stage;
}

function focusCard(card, win) {
  if (!card) return;

  card.scrollIntoView({ block: 'center', behavior: 'smooth' });
  const originalOutline = card.style.outline;
  const originalShadow = card.style.boxShadow;
  card.style.outline = '2px solid rgba(239, 68, 68, 0.9)';
  card.style.boxShadow = '0 0 0 4px rgba(239, 68, 68, 0.16)';

  const clear = () => {
    card.style.outline = originalOutline;
    card.style.boxShadow = originalShadow;
  };

  if (win) win.setTimeout(clear, 1400);
}

function showDefectDetails(options, win, payload) {
  if (typeof options.showDefectModal === 'function') {
    options.showDefectModal(payload);
    return;
  }

  if (win && typeof win.showDefectModal === 'function') {
    win.showDefectModal(payload);
  }
}

export function initWorkflowFeature(options = {}) {
  const root = options.root || getDocument();
  const doc = getDocument(root);
  const win = getWindow(doc);
  const view = findView(root, 'view-workflow');

  if (!view) {
    return createEmptyController({
      cards: new Map(),
      focusDefectCard: noop,
    });
  }

  const columns = Array.from(view.querySelectorAll('.kanban-col'));
  if (!columns.length) {
    return createEmptyController({
      cards: new Map(),
      focusDefectCard: noop,
    });
  }

  const cards = new Map();
  const disposers = [];
  let draggingId = null;

  const updateCardRegistry = () => {
    cards.clear();
    columns.forEach((column) => {
      Array.from(column.querySelectorAll('.kanban-card')).forEach((card, index) => {
        const payload = getCardPayload(card, column, index);
        markCard(card, payload);
        cards.set(payload.id, { element: card, payload });
      });
    });
  };

  const getDraggedCard = (event) => {
    const transferId = event.dataTransfer && event.dataTransfer.getData('text/plain');
    const id = transferId || draggingId;
    const record = id ? cards.get(id) : null;
    return record ? record.element : null;
  };

  const emitMove = (card, fromStage, toStage) => {
    const id = card.dataset.workflowCardId;
    const record = cards.get(id);
    if (!record) return;

    record.payload.stage = toStage;
    record.element.dataset.workflowStage = toStage;

    const detail = {
      card: { ...record.payload },
      fromStage,
      toStage,
      movedAt: new Date().toISOString(),
    };

    emit(win, WORKFLOW_EVENT, detail);
    if (typeof options.onMove === 'function') options.onMove(detail);
  };

  const handleDefectFocus = (card) => {
    const id = card.dataset.workflowCardId;
    const record = cards.get(id);
    const payload = {
      id: 'DEF-102',
      title: record ? record.payload.title : '#DEF-102',
      location: 'Pylon-2-South',
      source: 'workflow-kanban',
    };

    if (typeof options.navigateTo === 'function') {
      options.navigateTo('view-flight-control', payload);
    } else {
      navigateFallback(root, 'view-flight-control');
    }

    if (typeof options.focusDefect === 'function') {
      options.focusDefect(payload);
    }

    emit(win, DEFECT_FOCUS_EVENT, payload);
    focusCard(card, win);
  };

  updateCardRegistry();

  columns.forEach((column) => {
    const onDragOver = (event) => {
      if (!draggingId) return;
      event.preventDefault();
      if (event.dataTransfer) event.dataTransfer.dropEffect = 'move';
    };

    const onDrop = (event) => {
      const card = getDraggedCard(event);
      if (!card) return;

      event.preventDefault();
      const fromStage = card.dataset.workflowStage || '';
      const toStage = getWorkflowStage(column);
      column.appendChild(card);
      updateCardRegistry();
      emitMove(card, fromStage, toStage);
    };

    column.addEventListener('dragover', onDragOver);
    column.addEventListener('drop', onDrop);
    disposers.push(() => {
      column.removeEventListener('dragover', onDragOver);
      column.removeEventListener('drop', onDrop);
    });
  });

  cards.forEach(({ element: card }) => {
    const onDragStart = (event) => {
      draggingId = card.dataset.workflowCardId;
      if (event.dataTransfer) {
        event.dataTransfer.effectAllowed = 'move';
        event.dataTransfer.setData('text/plain', draggingId);
      }
      card.style.opacity = '0.62';
    };

    const onDragEnd = () => {
      draggingId = null;
      card.style.opacity = '';
    };

    const onClick = (event) => {
      if (!textOf(card).includes('#DEF-102')) return;
      handleDefectFocus(card);
      if (event.target.closest('button')) return;
      showDefectDetails(options, win, { id: 'DEF-102' });
    };

    const onKeyDown = (event) => {
      if (!textOf(card).includes('#DEF-102')) return;
      if (event.key !== 'Enter' && event.key !== ' ') return;
      event.preventDefault();
      handleDefectFocus(card);
      showDefectDetails(options, win, { id: 'DEF-102' });
    };

    card.addEventListener('dragstart', onDragStart);
    card.addEventListener('dragend', onDragEnd);
    card.addEventListener('click', onClick);
    card.addEventListener('keydown', onKeyDown);
    disposers.push(() => {
      card.removeEventListener('dragstart', onDragStart);
      card.removeEventListener('dragend', onDragEnd);
      card.removeEventListener('click', onClick);
      card.removeEventListener('keydown', onKeyDown);
    });
  });

  return {
    active: true,
    cards,
    focusDefectCard() {
      const record = cards.get('DEF-102');
      if (!record) return false;
      handleDefectFocus(record.element);
      return true;
    },
    destroy() {
      disposers.splice(0).forEach((dispose) => dispose());
      cards.forEach(({ element }) => {
        element.removeAttribute('draggable');
        element.removeAttribute('data-workflow-card-id');
        element.removeAttribute('data-workflow-stage');
      });
      cards.clear();
    },
  };
}

function inferAssetType(card) {
  const text = textOf(card).toLowerCase();
  const image = card.querySelector('img');
  const src = image ? image.getAttribute('src') || '' : '';

  if (text.includes('dock') || src.includes('dock')) return 'dock';
  if (text.includes('m30') || text.includes('m350') || src.includes('fleet')) return 'drone';
  return 'asset';
}

function parseAsset(card, index) {
  const titleElement = card.querySelector('.rc-title');
  const statusElement = card.querySelector('.rc-status');
  const metaElement = card.querySelector('.rc-meta');
  const title = textOf(titleElement).replace(textOf(statusElement), '').trim() || `资产 ${index + 1}`;
  const meta = textOf(metaElement);

  return {
    id: normalizeId(`${title} ${meta}`, `ASSET-${index + 1}`),
    title,
    type: inferAssetType(card),
    card,
    titleElement,
    statusElement,
    metaElement,
    baseMeta: metaElement ? metaElement.innerHTML : '',
    state: {
      battery: randomBetween(54, 94),
      temperature: randomBetween(18, 27, 1),
      humidity: randomBetween(39, 62),
      networkMbps: randomBetween(320, 480),
      signalBars: randomBetween(3, 4),
      cycles: randomBetween(10, 86),
      online: true,
      maintenance: /maintenance|保养/i.test(meta + title),
    },
  };
}

function updateTelemetryState(asset) {
  const delta = asset.type === 'drone' ? randomBetween(-2, 1) : randomBetween(-1, 1);
  asset.state.battery = clamp(asset.state.battery + delta, 12, 100);
  asset.state.temperature = clamp(asset.state.temperature + randomBetween(-0.6, 0.7, 1), 12, 38);
  asset.state.humidity = clamp(asset.state.humidity + randomBetween(-2, 2), 24, 82);
  asset.state.networkMbps = clamp(asset.state.networkMbps + randomBetween(-28, 24), 90, 520);
  asset.state.signalBars = asset.state.networkMbps > 360 ? 4 : asset.state.networkMbps > 190 ? 3 : 2;
  asset.state.online = asset.state.networkMbps > 120 && asset.state.battery > 15;
}

function getAssetStatus(asset) {
  if (asset.state.maintenance) {
    return { text: '保养中', color: '#ef4444', background: 'rgba(239, 68, 68, 0.1)' };
  }

  if (!asset.state.online) {
    return { text: '离线风险', color: '#f59e0b', background: 'rgba(245, 158, 11, 0.1)' };
  }

  if (asset.type === 'dock') {
    return { text: '在线', color: '#10b981', background: 'rgba(16, 185, 129, 0.1)' };
  }

  return { text: asset.state.battery < 28 ? '即将返航' : '待命', color: '#10b981', background: 'rgba(16, 185, 129, 0.1)' };
}

function renderAsset(asset) {
  if (!asset.metaElement) return;

  const batteryLine = asset.type === 'dock'
    ? `UPS 电量: ${asset.state.battery}%`
    : `电量: ${asset.state.battery}%`;
  const networkLine = `网络: 5G (${asset.state.networkMbps}Mbps, ${asset.state.signalBars}/4)`;
  const climateLine = `温湿度: ${asset.state.temperature.toFixed(1)}C / ${asset.state.humidity}%`;

  asset.metaElement.innerHTML = [
    `遥测编号: ${asset.id}`,
    batteryLine,
    networkLine,
    climateLine,
  ].join('<br>');

  if (asset.statusElement) {
    const status = getAssetStatus(asset);
    asset.statusElement.textContent = status.text;
    asset.statusElement.style.color = status.color;
    asset.statusElement.style.background = status.background;
  }
}

function serializeAsset(asset) {
  return {
    id: asset.id,
    title: asset.title,
    type: asset.type,
    ...asset.state,
  };
}

export function initResourceTelemetry(options = {}) {
  const root = options.root || getDocument();
  const doc = getDocument(root);
  const win = getWindow(doc);
  const view = findView(root, 'view-resource-management');

  if (!view) {
    return createEmptyController({
      start: noop,
      stop: noop,
      tick: noop,
      snapshot: () => [],
    });
  }

  const assets = Array.from(view.querySelectorAll('.resource-card')).map(parseAsset);
  if (!assets.length) {
    return createEmptyController({
      start: noop,
      stop: noop,
      tick: noop,
      snapshot: () => [],
    });
  }

  let timer = null;
  const intervalMs = Number(options.intervalMs || 2500);

  const snapshot = () => assets.map(serializeAsset);

  const publish = () => {
    const detail = {
      assets: snapshot(),
      updatedAt: new Date().toISOString(),
    };
    if (win) win.bridgeInspectionTelemetry = detail;
    emit(win, TELEMETRY_EVENT, detail);
    if (typeof options.onUpdate === 'function') options.onUpdate(detail);
  };

  const tick = () => {
    assets.forEach((asset) => {
      updateTelemetryState(asset);
      renderAsset(asset);
    });
    publish();
  };

  const start = () => {
    if (timer || !win) return;
    timer = win.setInterval(tick, intervalMs);
  };

  const stop = () => {
    if (!timer || !win) return;
    win.clearInterval(timer);
    timer = null;
  };

  assets.forEach(renderAsset);
  publish();
  if (options.autoStart !== false) start();

  return {
    active: true,
    assets,
    start,
    stop,
    tick,
    snapshot,
    destroy() {
      stop();
      assets.forEach((asset) => {
        if (asset.metaElement) asset.metaElement.innerHTML = asset.baseMeta;
      });
    },
  };
}

function settingKey(label, index) {
  const normalized = label.toLowerCase();
  if (normalized.includes('altitude') || label.includes('限高')) return 'maxAltitudeM';
  if (normalized.includes('battery') || label.includes('低电量')) return 'returnBatteryPercent';
  if (normalized.includes('radar') || label.includes('雷达')) return 'obstacleSensitivity';
  if (normalized.includes('vision') || label.includes('视觉')) return 'visionModel';
  if (normalized.includes('confidence') || label.includes('置信度')) return 'confidencePercent';
  if (normalized.includes('alert') || label.includes('告警')) return 'instantAlerts';
  return `setting${index + 1}`;
}

function unitForKey(key) {
  if (key.endsWith('M')) return 'm';
  if (key.endsWith('Percent')) return '%';
  return '';
}

function readControlValue(control) {
  if (control.type === 'checkbox') return Boolean(control.checked);
  if (control.type === 'range' || control.type === 'number') return Number(control.value);
  return control.value;
}

function writeControlValue(control, value) {
  if (control.type === 'checkbox') {
    control.checked = Boolean(value);
    return;
  }
  control.value = String(value);
}

function renderSettingValue(item, key, value) {
  const output = item.querySelector('.setting-val');
  if (!output) return;

  if (typeof value === 'boolean') {
    output.textContent = value ? 'On' : 'Off';
    return;
  }

  output.textContent = `${value}${unitForKey(key)}`;
}

function discoverSettings(view) {
  return Array.from(view.querySelectorAll('.setting-item')).map((item, index) => {
    const control = item.querySelector('input, select, textarea');
    const label = textOf(item.querySelector('label')) || `Setting ${index + 1}`;
    if (!control) return null;

    const key = settingKey(label, index);
    return {
      item,
      control,
      label,
      key,
      initialValue: readControlValue(control),
    };
  }).filter(Boolean);
}

export function initSystemSettings(options = {}) {
  const root = options.root || getDocument();
  const doc = getDocument(root);
  const win = getWindow(doc);
  const view = findView(root, 'view-system');

  if (!view) {
    return createEmptyController({
      getState: () => ({}),
      setState: noop,
    });
  }

  const controls = discoverSettings(view);
  const disposers = [];
  const state = {};

  const publish = (changedKey = null) => {
    const detail = {
      settings: { ...state },
      changedKey,
      updatedAt: new Date().toISOString(),
    };

    if (win) win.bridgeInspectionSettings = detail.settings;
    emit(win, SETTINGS_EVENT, detail);
    if (typeof options.onChange === 'function') options.onChange(detail);
  };

  const applyControl = (entry, changedKey = entry.key) => {
    const value = readControlValue(entry.control);
    state[entry.key] = value;
    renderSettingValue(entry.item, entry.key, value);
    publish(changedKey);
  };

  controls.forEach((entry) => {
    state[entry.key] = entry.initialValue;
    renderSettingValue(entry.item, entry.key, entry.initialValue);

    const onInput = () => applyControl(entry);
    const onChange = () => applyControl(entry);
    entry.control.addEventListener('input', onInput);
    entry.control.addEventListener('change', onChange);
    disposers.push(() => {
      entry.control.removeEventListener('input', onInput);
      entry.control.removeEventListener('change', onChange);
    });
  });

  publish(null);

  return {
    active: true,
    getState() {
      return { ...state };
    },
    setState(nextState = {}) {
      Object.entries(nextState).forEach(([key, value]) => {
        const entry = controls.find((item) => item.key === key);
        if (!entry) return;
        writeControlValue(entry.control, value);
        state[key] = readControlValue(entry.control);
        renderSettingValue(entry.item, entry.key, state[key]);
      });
      publish(null);
    },
    destroy() {
      disposers.splice(0).forEach((dispose) => dispose());
      controls.forEach((entry) => {
        writeControlValue(entry.control, entry.initialValue);
        renderSettingValue(entry.item, entry.key, entry.initialValue);
      });
    },
  };
}

export function initBusinessFeatures(options = {}) {
  const workflow = initWorkflowFeature(options.workflow || options);
  const telemetry = initResourceTelemetry(options.telemetry || options);
  const settings = initSystemSettings(options.settings || options);

  return {
    workflow,
    telemetry,
    settings,
    destroy() {
      workflow.destroy();
      telemetry.destroy();
      settings.destroy();
    },
  };
}

export default initBusinessFeatures;
