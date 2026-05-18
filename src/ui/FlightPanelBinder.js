import { INSPECTION_RUNTIME_EVENT } from '../features/InspectionRuntimeStore.js';

const noop = () => {};

function getDocument(root) {
  if (root && root.nodeType === 9) return root;
  if (root?.ownerDocument) return root.ownerDocument;
  return typeof document !== 'undefined' ? document : null;
}

function getWindow(doc) {
  return doc?.defaultView || (typeof window !== 'undefined' ? window : null);
}

function number(value, digits = 0, fallback = '--') {
  const parsed = Number(value);
  if (!Number.isFinite(parsed)) return fallback;
  return parsed.toFixed(digits);
}

function percent(value, digits = 0) {
  return `${number(value, digits)}%`;
}

function signalBars(value) {
  const quality = Number(value);
  if (!Number.isFinite(quality)) return '4/4';
  return `${Math.max(1, Math.min(4, Math.ceil(quality / 25)))}/4`;
}

function formatTime(seconds) {
  const safe = Math.max(0, Math.floor(Number(seconds) || 0));
  const mm = String(Math.floor(safe / 60)).padStart(2, '0');
  const ss = String(safe % 60).padStart(2, '0');
  return `00:${mm}:${ss}`;
}

function labelPhase(phase = '') {
  return {
    IDLE: '待命',
    TAKEOFF: '起飞',
    INSPECTION: '巡检中',
    RETURN_HOME: '返航',
    AUTO_NAV: '自动巡检',
    MANUAL: '手动接管',
    PHOTOGRAPHING: '拍照中',
  }[phase] || phase || '待命';
}

function labelDefect(value = '') {
  return {
    crack: '裂缝',
    corrosion: '锈蚀',
    spalling: '剥落',
    debris: '抛洒物',
    'fpv-capture': 'FPV 抓拍',
    defect: '异常',
  }[String(value).toLowerCase()] || value || '异常抓拍';
}

function setText(root, selector, value) {
  const element = root.querySelector(selector);
  if (element) element.textContent = value;
}

function renderCaptureList(root, captures = [], onSelect = noop) {
  const list = root.querySelector('[data-ai-feed-list]');
  if (!list) return;
  if (!captures.length) {
    list.innerHTML = '<div class="ai-feed-empty">等待无人机发现异常并抓拍</div>';
    return;
  }

  list.innerHTML = captures.slice(0, 8).map((capture) => `
    <button type="button" class="ai-feed-card" data-capture-id="${capture.id}">
      ${capture.imageUrl ? `<img src="${capture.imageUrl}" class="ai-thumb" alt="${capture.label}">` : '<span class="ai-thumb ai-thumb-empty"></span>'}
      <div class="ai-feed-info">
        <div class="ai-feed-title">${labelDefect(capture.label)}</div>
        <div class="ai-feed-meta">${new Date(capture.capturedAt).toLocaleString('zh-CN', { hour12: false })}</div>
      </div>
    </button>
  `).join('');

  list.querySelectorAll('[data-capture-id]').forEach((button) => {
    button.addEventListener('click', () => {
      const capture = captures.find((item) => item.id === button.dataset.captureId);
      if (capture) onSelect(capture);
    }, { once: true });
  });
}

export function initFlightPanelBinder(options = {}) {
  const doc = getDocument(options.root);
  const win = getWindow(doc);
  const root = doc?.getElementById('view-flight-control');
  if (!doc || !win || !root) return { active: false, render: noop, destroy: noop };

  const startedAt = win.performance?.now?.() ?? Date.now();

  const render = (snapshot = {}) => {
    const runtime = snapshot || {};
    const telemetry = runtime.resource?.assets?.find?.((asset) => asset.type === 'drone') || {};
    const sim = runtime.telemetry || {};
    const battery = sim.battery ?? telemetry.battery;
    const signal = sim.signalQuality ?? telemetry.signalQuality ?? telemetry.networkMbps;
    const mission = runtime.mission || {};
    const weather = runtime.weather || {};
    const position = runtime.position || {};
    const captures = runtime.captures || [];
    const elapsed = ((win.performance?.now?.() ?? Date.now()) - startedAt) / 1000;

    setText(root, '[data-fpv-record-time]', `录制 ${formatTime(elapsed)}`);
    setText(root, '[data-fpv-z]', `Z: ${number(position.y, 1)}m`);
    setText(root, '[data-telemetry-altitude]', number(position.y, 1));
    setText(root, '[data-telemetry-distance]', number(runtime.safety?.distance ?? mission.distanceM ?? 0, 1));
    setText(root, '[data-telemetry-battery]', number(battery ?? 68, 0));
    setText(root, '[data-telemetry-signal]', signalBars(signal ?? 88));
    setText(root, '[data-dock-wind]', `${number(weather.windSpeed, 1)} m/s`);
    setText(root, '[data-dock-rain]', `${number(weather.rainRate, 1)} mm`);
    setText(root, '[data-dock-temp]', `${number(weather.temperatureC, 1)}°C`);
    setText(root, '[data-dock-humidity]', `${number(weather.humidity, 0)}%`);
    setText(root, '[data-mission-time]', `已飞行: ${formatTime(elapsed)} (${labelPhase(mission.phase || runtime.flightState)})`);
    setText(root, '[data-mission-percent]', percent(mission.progress ?? 0, 0));
    const progress = root.querySelector('[data-timeline-progress]');
    if (progress) progress.style.width = `${Math.max(0, Math.min(100, Number(mission.progress || 0)))}%`;
    setText(root, '[data-ai-capture-count]', `异常抓拍 (${captures.length})`);
    renderCaptureList(root, captures, (capture) => {
      options.onSelectCapture?.(capture);
    });
  };

  const onRuntime = (event) => render(event.detail);
  win.addEventListener(INSPECTION_RUNTIME_EVENT, onRuntime);
  const timer = win.setInterval(() => render(options.store?.snapshot?.() || win.bridgeInspectionRuntime), 500);
  render(options.store?.snapshot?.() || win.bridgeInspectionRuntime || {});

  return {
    active: true,
    render,
    destroy() {
      win.clearInterval(timer);
      win.removeEventListener(INSPECTION_RUNTIME_EVENT, onRuntime);
    },
  };
}

export default initFlightPanelBinder;
