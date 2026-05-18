export const GEOFENCE_CHANGE_EVENT = 'bridge:geofence-change';

const noop = () => {};
const DEFAULT_BOUNDS = { minX: -520, maxX: 420, minY: -260, maxY: 260 };
const DEFAULT_POLYGON = [
  { x: -470, y: -220 },
  { x: 330, y: -220 },
  { x: 345, y: 220 },
  { x: -470, y: 225 },
];

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

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function copyPolygon(polygon) {
  return polygon.map((point) => ({ x: Number(point.x), y: Number(point.y) }));
}

function findSystemView(root) {
  if (!root || typeof root.querySelector !== 'function') return null;
  return root.querySelector('#view-system');
}

function svgElement(doc, tag, attrs = {}) {
  const element = doc.createElementNS('http://www.w3.org/2000/svg', tag);
  Object.entries(attrs).forEach(([key, value]) => element.setAttribute(key, value));
  return element;
}

function localToScreen(point, bounds) {
  const x = ((point.x - bounds.minX) / (bounds.maxX - bounds.minX)) * 100;
  const y = (1 - ((point.y - bounds.minY) / (bounds.maxY - bounds.minY))) * 100;
  return { x, y };
}

function screenToLocal(point, bounds) {
  return {
    x: Math.round(bounds.minX + (point.x / 100) * (bounds.maxX - bounds.minX)),
    y: Math.round(bounds.minY + ((100 - point.y) / 100) * (bounds.maxY - bounds.minY)),
  };
}

function eventToSvgPercent(event, svg) {
  const rect = svg.getBoundingClientRect();
  return {
    x: clamp(((event.clientX - rect.left) / rect.width) * 100, 0, 100),
    y: clamp(((event.clientY - rect.top) / rect.height) * 100, 0, 100),
  };
}

function createEmptyController(state) {
  return {
    active: false,
    getState: () => state,
    setPolygon: noop,
    destroy: noop,
  };
}

function createPanel(doc) {
  const panel = doc.createElement('section');
  panel.className = 'settings-panel glass-panel geofence-panel';
  panel.setAttribute('data-system-enhancement', 'geofence-editor');
  panel.innerHTML = `
    <div class="geofence-header">
      <div>
        <h3>电子围栏顶视图</h3>
        <p>桥梁局部坐标下的可飞行区域、航线、机巢与瑕疵点。</p>
      </div>
      <label class="geofence-toggle">
        <input type="checkbox" data-geofence-enabled checked>
        <span>启用</span>
      </label>
    </div>
    <div class="geofence-editor">
      <svg class="geofence-svg" viewBox="0 0 100 100" role="img" aria-label="电子围栏顶视图编辑器"></svg>
      <div class="geofence-readout" aria-live="polite"></div>
    </div>
    <div class="geofence-actions">
      <button type="button" data-geofence-action="add">添加点</button>
      <button type="button" data-geofence-action="reset">重置</button>
      <button type="button" data-geofence-action="clear">清空</button>
    </div>
  `;
  return panel;
}

function polygonBounds(polygon) {
  if (!polygon.length) return null;
  const xs = polygon.map((point) => point.x);
  const ys = polygon.map((point) => point.y);
  return {
    minX: Math.min(...xs),
    maxX: Math.max(...xs),
    minY: Math.min(...ys),
    maxY: Math.max(...ys),
  };
}

export function initGeofenceEditor(options = {}) {
  const root = options.root || getDocument();
  const doc = getDocument(root);
  const win = getWindow(doc);
  const bounds = { ...DEFAULT_BOUNDS, ...(options.bounds || {}) };
  const context = options.context || {};
  const state = {
    enabled: options.enabled !== false,
    polygon: copyPolygon(options.polygon || DEFAULT_POLYGON),
    bounds,
    updatedAt: new Date().toISOString(),
  };

  const view = findSystemView(root);
  if (!view || !doc) {
    return createEmptyController(state);
  }

  const panel = createPanel(doc);
  const svg = panel.querySelector('.geofence-svg');
  const enabledInput = panel.querySelector('[data-geofence-enabled]');
  const readout = panel.querySelector('.geofence-readout');
  const disposers = [];
  let draggingIndex = null;

  enabledInput.checked = state.enabled;

  const publish = () => {
    state.updatedAt = new Date().toISOString();
    const detail = {
      enabled: state.enabled,
      polygon: copyPolygon(state.polygon),
      bounds: polygonBounds(state.polygon),
      coordinateSystem: 'bridge-local-meters',
      updatedAt: state.updatedAt,
    };
    if (win) win.bridgeGeofenceState = detail;
    emit(win, GEOFENCE_CHANGE_EVENT, detail);
    if (typeof options.onChange === 'function') options.onChange(detail);
  };

  const render = () => {
    svg.replaceChildren();

    renderTopView(svg, doc, bounds, context);

    const grid = svgElement(doc, 'path', {
      class: 'geofence-grid',
      d: 'M 0 25 H 100 M 0 50 H 100 M 0 75 H 100 M 25 0 V 100 M 50 0 V 100 M 75 0 V 100',
    });
    svg.appendChild(grid);

    const points = state.polygon.map((point) => localToScreen(point, bounds));
    if (points.length) {
      const polygon = svgElement(doc, 'polygon', {
        class: 'geofence-shape',
        points: points.map((point) => `${point.x},${point.y}`).join(' '),
      });
      svg.appendChild(polygon);
    }

    points.forEach((point, index) => {
      const handle = svgElement(doc, 'circle', {
        class: 'geofence-point',
        cx: point.x,
        cy: point.y,
        r: 2.4,
        tabindex: '0',
        'data-point-index': String(index),
      });
      svg.appendChild(handle);
    });

    readout.textContent = `${state.polygon.length} 个围栏点 | ${state.enabled ? '已启用' : '已停用'}`;
  };

  const setPointFromEvent = (index, event) => {
    const local = screenToLocal(eventToSvgPercent(event, svg), bounds);
    state.polygon[index] = {
      x: clamp(local.x, bounds.minX, bounds.maxX),
      y: clamp(local.y, bounds.minY, bounds.maxY),
    };
    render();
    publish();
  };

  const onPointerDown = (event) => {
    const handle = event.target.closest('.geofence-point');
    if (handle) {
      draggingIndex = Number(handle.dataset.pointIndex);
      svg.setPointerCapture?.(event.pointerId);
      return;
    }

    const local = screenToLocal(eventToSvgPercent(event, svg), bounds);
    state.polygon.push(local);
    render();
    publish();
  };

  const onPointerMove = (event) => {
    if (draggingIndex === null) return;
    setPointFromEvent(draggingIndex, event);
  };

  const onPointerUp = (event) => {
    draggingIndex = null;
    svg.releasePointerCapture?.(event.pointerId);
  };

  const onEnabledChange = () => {
    state.enabled = Boolean(enabledInput.checked);
    render();
    publish();
  };

  const onActionClick = (event) => {
    const action = event.target.closest('[data-geofence-action]')?.dataset.geofenceAction;
    if (!action) return;

    if (action === 'add') state.polygon.push({ x: 0, y: 0 });
    if (action === 'reset') state.polygon = copyPolygon(DEFAULT_POLYGON);
    if (action === 'clear') state.polygon = [];

    render();
    publish();
  };

  svg.addEventListener('pointerdown', onPointerDown);
  svg.addEventListener('pointermove', onPointerMove);
  svg.addEventListener('pointerup', onPointerUp);
  svg.addEventListener('pointercancel', onPointerUp);
  enabledInput.addEventListener('change', onEnabledChange);
  panel.addEventListener('click', onActionClick);
  const refreshTimer = win?.setInterval?.(render, 800);
  disposers.push(() => {
    svg.removeEventListener('pointerdown', onPointerDown);
    svg.removeEventListener('pointermove', onPointerMove);
    svg.removeEventListener('pointerup', onPointerUp);
    svg.removeEventListener('pointercancel', onPointerUp);
    enabledInput.removeEventListener('change', onEnabledChange);
    panel.removeEventListener('click', onActionClick);
    if (refreshTimer) win.clearInterval(refreshTimer);
  });

  view.appendChild(panel);
  render();
  publish();

  return {
    active: true,
    getState() {
      return {
        ...state,
        polygon: copyPolygon(state.polygon),
      };
    },
    setPolygon(polygon = []) {
      state.polygon = copyPolygon(polygon);
      render();
      publish();
    },
    destroy() {
      disposers.splice(0).forEach((dispose) => dispose());
      if (panel.parentNode) panel.parentNode.removeChild(panel);
    },
  };
}

function renderTopView(svg, doc, bounds, context) {
  svg.appendChild(svgElement(doc, 'rect', {
    class: 'geofence-water',
    x: 0,
    y: 0,
    width: 100,
    height: 100,
  }));

  const bridgeStart = localToScreen({ x: bounds.minX, y: -24 }, bounds);
  const bridgeEnd = localToScreen({ x: bounds.maxX, y: 24 }, bounds);
  svg.appendChild(svgElement(doc, 'rect', {
    class: 'geofence-bridge',
    x: 0,
    y: Math.min(bridgeStart.y, bridgeEnd.y),
    width: 100,
    height: Math.abs(bridgeEnd.y - bridgeStart.y),
  }));

  const routePoints = normalizeRoute(context.route);
  if (routePoints.length > 1) {
    svg.appendChild(svgElement(doc, 'polyline', {
      class: 'geofence-route',
      points: routePoints.map((point) => {
        const screen = localToScreen(point, bounds);
        return `${screen.x},${screen.y}`;
      }).join(' '),
    }));
  }

  const dock = toTopPoint(context.dockPosition);
  if (dock) {
    const screen = localToScreen(dock, bounds);
    svg.appendChild(svgElement(doc, 'rect', {
      class: 'geofence-dock',
      x: screen.x - 2,
      y: screen.y - 2,
      width: 4,
      height: 4,
      rx: 0.8,
    }));
  }

  (context.defects || []).forEach((defect) => {
    const point = toTopPoint(defect.localPosition || defect.position);
    if (!point) return;
    const screen = localToScreen(point, bounds);
    svg.appendChild(svgElement(doc, 'circle', {
      class: `geofence-defect severity-${defect.severity || 'medium'}`,
      cx: screen.x,
      cy: screen.y,
      r: 1.2,
    }));
  });

  const drone = toTopPoint(context.getDronePosition?.());
  if (drone) {
    const screen = localToScreen(drone, bounds);
    svg.appendChild(svgElement(doc, 'path', {
      class: 'geofence-drone',
      d: `M ${screen.x} ${screen.y - 2.2} L ${screen.x + 1.8} ${screen.y + 1.8} L ${screen.x} ${screen.y + 0.9} L ${screen.x - 1.8} ${screen.y + 1.8} Z`,
    }));
  }
}

function normalizeRoute(route = []) {
  return route.map(toTopPoint).filter(Boolean);
}

function toTopPoint(value) {
  if (!value) return null;
  return {
    x: Number(value.x ?? 0),
    y: Number(value.z ?? value.y ?? 0),
  };
}

export default initGeofenceEditor;
