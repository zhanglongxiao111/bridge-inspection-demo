const DEMO_SIMULATION_EVENT = 'bridge:demo-simulation-change';
const FLIGHT_SAFETY_EVENT = 'bridge:flight-safety-change';
const INSPECTION_RUNTIME_EVENT = 'bridge:inspection-runtime-change';

const noop = () => {};

function getDocument(root) {
    if (root && root.nodeType === 9) return root;
    if (root && root.ownerDocument) return root.ownerDocument;
    if (typeof document !== 'undefined') return document;
    return null;
}

function getWindow(doc) {
    if (doc?.defaultView) return doc.defaultView;
    if (typeof window !== 'undefined') return window;
    return null;
}

function createEmptyController() {
    return {
        active: false,
        render: noop,
        destroy: noop,
        getState: () => ({})
    };
}

function formatNumber(value, digits = 0, fallback = '--') {
    const number = Number(value);
    if (!Number.isFinite(number)) return fallback;
    return number.toFixed(digits);
}

function normalizeDetection(item = {}, index) {
    return {
        id: item.id || `HUD-${index + 1}`,
        label: localizeDetectionLabel(item.label || item.type || 'defect'),
        confidence: Number(item.confidence ?? 0.78),
        bbox: item.bbox || { x: 0.56, y: 0.38, width: 0.18, height: 0.13 },
        severity: item.severity || 'medium'
    };
}

function createHud(doc) {
    const hud = doc.createElement('div');
    hud.className = 'fpv-hud-layer';
    hud.setAttribute('aria-hidden', 'true');
    hud.innerHTML = `
        <div class="fpv-hud-vignette"></div>
        <div class="fpv-hud-panel fpv-hud-top-left">
            <span class="fpv-hud-rec">录制</span>
            <span data-fpv-time>00:00:00</span>
            <span data-fpv-rig>吊舱相机</span>
        </div>
        <div class="fpv-hud-panel fpv-hud-top-right">
            <span>RTK <strong data-fpv-rtk>固定解</strong></span>
            <span>信号 <strong data-fpv-signal>4/4</strong></span>
            <span>电量 <strong data-fpv-battery>--%</strong></span>
        </div>
        <div class="fpv-hud-center">
            <div class="fpv-hud-reticle"></div>
            <div class="fpv-hud-horizon"></div>
        </div>
        <div class="fpv-hud-readout fpv-hud-bottom-left">
            <span>高度 <strong data-fpv-altitude>--m</strong></span>
            <span>距离 <strong data-fpv-distance>--m</strong></span>
            <span>风速 <strong data-fpv-wind>--m/s</strong></span>
        </div>
        <div class="fpv-hud-readout fpv-hud-bottom-right">
            <span>焦距 <strong>35mm</strong></span>
            <span>云台 <strong data-fpv-gimbal>-12°</strong></span>
            <span>能见 <strong data-fpv-visibility>--km</strong></span>
        </div>
        <div class="fpv-hud-ai-layer" data-fpv-ai-layer></div>
        <div class="fpv-hud-alert" data-fpv-alert></div>
    `;
    doc.body.appendChild(hud);
    return hud;
}

function localizeDetectionLabel(label) {
    const labels = {
        crack: '裂缝',
        corrosion: '锈蚀',
        spalling: '剥落',
        debris: '抛洒物',
        defect: '病害',
        'surface-defect': '表面病害',
        'surface scan': '表面扫描'
    };
    return labels[label] || label;
}

function localizeRtkStatus(status) {
    const labels = {
        FIX: '固定解',
        FIXED: '固定解',
        FLOAT: '浮点解',
        LOST: '丢失'
    };
    return labels[status] || status;
}

function renderDetections(layer, detections = []) {
    if (!layer) return;
    const items = Array.isArray(detections) ? detections : [];
    if (!items.length) {
        layer.innerHTML = '';
        return;
    }
    layer.innerHTML = items.slice(0, 4).map((item, index) => {
        const detection = normalizeDetection(item, index);
        const bbox = detection.bbox;
        const left = Math.max(4, Math.min(90, bbox.x * 100));
        const top = Math.max(8, Math.min(82, bbox.y * 100));
        const width = Math.max(8, Math.min(32, bbox.width * 100));
        const height = Math.max(6, Math.min(24, bbox.height * 100));
        const confidence = Math.round(detection.confidence * 100);

        return `
            <div class="fpv-ai-box severity-${detection.severity}" style="left:${left}%;top:${top}%;width:${width}%;height:${height}%;">
                <span>${detection.label} ${confidence}%</span>
            </div>
        `;
    }).join('');
}

export function initFpvHud(options = {}) {
    const doc = getDocument(options.root);
    const win = getWindow(doc);
    if (!doc || !win) return createEmptyController();

    const hud = options.hudElement || createHud(doc);
    const state = {
        simulation: {},
        safety: {},
        telemetry: {},
        startedAt: win.performance?.now?.() ?? Date.now()
    };

    const query = (selector) => hud.querySelector(selector);
    const setText = (selector, value) => {
        const element = query(selector);
        if (element) element.textContent = value;
    };

    const readTelemetry = () => {
        if (typeof options.getTelemetrySnapshot === 'function') {
            return options.getTelemetrySnapshot();
        }
        if (options.telemetryBus?.snapshot) {
            return options.telemetryBus.snapshot();
        }
        return state.telemetry;
    };

    const render = () => {
        const now = win.performance?.now?.() ?? Date.now();
        const elapsed = Math.floor((now - state.startedAt) / 1000);
        const drone = options.drone;
        const position = drone?.mesh?.position;
        const telemetry = readTelemetry();
        const primaryAsset = telemetry?.assets?.find?.((asset) => asset.type === 'drone') || telemetry?.assets?.[0] || {};
        const weather = state.simulation.weather || {};
        const mission = state.simulation.mission || {};
        const ai = state.simulation.ai || {};
        const safety = state.safety || {};
        const mm = String(Math.floor(elapsed / 60)).padStart(2, '0');
        const ss = String(elapsed % 60).padStart(2, '0');

        setText('[data-fpv-time]', `00:${mm}:${ss}`);
        setText('[data-fpv-rtk]', localizeRtkStatus(state.simulation.telemetry?.rtkStatus || primaryAsset.rtkStatus || 'FIX'));
        setText('[data-fpv-signal]', `${state.simulation.telemetry?.signalBars ?? primaryAsset.signalBars ?? 4}/4`);
        setText('[data-fpv-battery]', `${formatNumber(state.simulation.telemetry?.battery ?? primaryAsset.battery ?? 68)}%`);
        setText('[data-fpv-altitude]', `${formatNumber(position?.y ?? mission.altitudeM ?? 145, 1)}m`);
        setText('[data-fpv-distance]', `${formatNumber(safety.distance, 1, formatNumber(mission.distanceM, 1, '5.1'))}m`);
        setText('[data-fpv-wind]', `${formatNumber(weather.windSpeed, 1, '2.4')}m/s`);
        setText('[data-fpv-visibility]', `${formatNumber(weather.visibilityKm, 1, '8.5')}km`);

        const alert = query('[data-fpv-alert]');
        if (alert) {
            const active = Boolean(safety.alert?.active || state.simulation.safety?.alert?.active);
            const message = safety.alert?.message || state.simulation.safety?.alert?.message || '';
            alert.textContent = active ? message : '';
            alert.classList.toggle('is-active', active);
            alert.dataset.level = safety.alert?.level || state.simulation.safety?.alert?.level || 'info';
        }

        renderDetections(query('[data-fpv-ai-layer]'), ai.detections || state.simulation.detections);
    };

    const onSimulation = (event) => {
        state.simulation = event.detail || {};
        render();
    };
    const onSafety = (event) => {
        state.safety = event.detail || {};
        render();
    };
    const onTelemetry = (event) => {
        state.telemetry = event.detail || {};
        render();
    };

    win.addEventListener(DEMO_SIMULATION_EVENT, onSimulation);
    win.addEventListener(INSPECTION_RUNTIME_EVENT, onSimulation);
    win.addEventListener(FLIGHT_SAFETY_EVENT, onSafety);
    win.addEventListener('bridge:resource-telemetry', onTelemetry);
    const timer = win.setInterval(render, 500);
    render();

    return {
        active: true,
        element: hud,
        render,
        getState: () => ({ ...state }),
        destroy() {
            win.clearInterval(timer);
            win.removeEventListener(DEMO_SIMULATION_EVENT, onSimulation);
            win.removeEventListener(INSPECTION_RUNTIME_EVENT, onSimulation);
            win.removeEventListener(FLIGHT_SAFETY_EVENT, onSafety);
            win.removeEventListener('bridge:resource-telemetry', onTelemetry);
            if (!options.hudElement) hud.remove();
        }
    };
}

export default initFpvHud;
