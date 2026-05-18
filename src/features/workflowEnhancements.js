import { AI_DETECTIONS_EVENT } from './aiEngine.js';
import { findDefectById, getDefaultDefects, normalizeDefect } from './defectData.js';
import {
  collectTelemetrySnapshot,
  downloadHtmlReport,
  downloadWordReport,
  generateInspectionReportHtml,
  printReport,
} from './reportGenerator.js';

export const DEFECT_HIGHLIGHT_REQUEST_EVENT = 'bridge:defect-highlight-requested';
const WORKFLOW_MOVED_EVENT = 'bridge:workflow-card-moved';
const INSPECTION_CAPTURE_EVENT = 'bridge:inspection-capture';
const TARGET_DEFECT_ID = 'DEF-102';

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

function emit(win, name, detail) {
  if (!win || typeof win.CustomEvent !== 'function') return false;
  win.dispatchEvent(new win.CustomEvent(name, { detail }));
  return true;
}

function textOf(element) {
  return element ? element.textContent.trim().replace(/\s+/g, ' ') : '';
}

function createEmptyController(extra = {}) {
  return {
    active: false,
    destroy: noop,
    requestHighlight: () => false,
    downloadHtmlReport: () => ({ ok: false, reason: 'workflow-enhancement-inactive' }),
    downloadWordReport: () => ({ ok: false, reason: 'workflow-enhancement-inactive' }),
    generateReportHtml: () => '',
    printReport: () => ({ ok: false, reason: 'workflow-enhancement-inactive' }),
    getWorkflowHistory: () => [],
    ...extra,
  };
}

function findDef102Card(root) {
  if (!root || typeof root.querySelectorAll !== 'function') return null;
  const view = root.querySelector('#view-workflow') || root;
  return Array.from(view.querySelectorAll('.kanban-card'))
    .find((card) => textOf(card).includes(`#${TARGET_DEFECT_ID}`)) || null;
}

function getStageFromCard(card) {
  const explicit = card?.dataset?.workflowStage;
  if (explicit) return explicit;

  const column = card?.closest?.('.kanban-col');
  const title = textOf(column?.querySelector?.('.kanban-title, h3'));
  if (/Data/i.test(title)) return 'data';
  if (/Processing/i.test(title)) return 'processing';
  if (/Verification/i.test(title)) return 'verification';
  if (/Tickets/i.test(title)) return 'tickets';
  return 'verification';
}

function addClassPulse(win, element) {
  if (!element) return;
  element.classList.add('defect-highlight-requested');
  win?.setTimeout(() => element.classList.remove('defect-highlight-requested'), 1400);
}

function createReportOptions(options, state) {
  const telemetrySnapshot = typeof options.getTelemetrySnapshot === 'function'
    ? options.getTelemetrySnapshot()
    : collectTelemetrySnapshot(options.telemetrySource);
  const win = getWindow(getDocument(options.root));

  return {
    defects: state.defects,
    telemetrySnapshot,
    workflowHistory: state.workflowHistory,
    taskHistory: state.workflowHistory,
    aiDetections: state.aiDetections.length
      ? state.aiDetections
      : win?.bridgeAiDetections?.detections || [],
    captures: state.captures,
    safetyEvents: options.safetyEvents || [win?.bridgeFlightSafetyState].filter(Boolean),
    weatherSnapshot: options.weatherSnapshot || win?.bridgeWeatherSnapshot || {
      condition: '模拟晴好',
      windSpeedMps: 4.2,
      temperatureC: 24,
      humidity: 58,
      visibilityKm: 8,
    },
    title: options.reportTitle,
    author: options.reportAuthor,
  };
}

function appendReportControls(card, controller) {
  if (!card || card.querySelector('.defect-report-actions')) return;

  const actions = card.ownerDocument.createElement('div');
  actions.className = 'defect-report-actions';
  actions.innerHTML = `
    <button type="button" class="defect-report-btn" data-report-action="html">导出 HTML</button>
    <button type="button" class="defect-report-btn" data-report-action="doc">Word</button>
    <button type="button" class="defect-report-btn" data-report-action="print">打印</button>
  `;

  actions.addEventListener('click', (event) => {
    const button = event.target.closest('[data-report-action]');
    if (!button) return;
    event.preventDefault();
    event.stopPropagation();

    const action = button.dataset.reportAction;
    if (action === 'html') controller.downloadHtmlReport();
    if (action === 'doc') controller.downloadWordReport();
    if (action === 'print') controller.printReport();
  });

  card.appendChild(actions);
  return () => actions.remove();
}

function findStageColumn(root, stage = 'processing') {
  const view = root.querySelector('#view-workflow') || root;
  const columns = Array.from(view.querySelectorAll('.kanban-col'));
  return columns.find((column) => getStageFromCard({ closest: () => column }) === stage)
    || columns.find((column) => /AI|Processing/i.test(textOf(column.querySelector('.kanban-title, h3'))))
    || columns[0]
    || null;
}

function cardTitle(defect) {
  const label = translateDefectLabel(defect.label || defect.type || 'surface-defect');
  return `#${defect.id}: ${label.replace(/-/g, ' ')}`;
}

function translateDefectLabel(label) {
  return {
    crack: '裂缝',
    corrosion: '锈蚀',
    spalling: '剥落',
    debris: '抛洒物',
    'surface-defect': '表面病害',
    'fpv-capture': 'FPV 抓拍',
  }[label] || label;
}

function createAiDefectCard(doc, defect) {
  const card = doc.createElement('div');
  card.className = 'kanban-card warning-card ai-defect-card';
  card.draggable = true;
  card.tabIndex = 0;
  card.setAttribute('role', 'button');
  card.dataset.workflowCardId = defect.id;
  card.dataset.aiDefectCard = 'true';
  card.dataset.workflowStage = defect.workflowStage;
  const image = defect.snapshot?.imageUrl
    ? `<img src="${defect.snapshot.imageUrl}" class="kanban-thumb" alt="${defect.id}">`
    : '';
  card.innerHTML = `
    ${image}
    <h4>${cardTitle(defect)}</h4>
    <p>AI 置信度: ${Math.round((defect.confidence || 0) * 100)}%</p>
    <p>锚点: X ${Math.round(defect.localPosition.x)}, Y ${Math.round(defect.localPosition.y)}, Z ${Math.round(defect.localPosition.z)}</p>
    <p>${defect.snapshot?.capturedAt ? new Date(defect.snapshot.capturedAt).toLocaleString('zh-CN', { hour12: false }) : '等待抓拍'}</p>
  `;
  return card;
}

function defectFromCapture(capture = {}) {
  const id = String(capture.defectId || capture.defect?.id || `DEF-CAP-${capture.id || Date.now()}`).toUpperCase();
  const detection = capture.detection || capture.detections?.[0] || {};
  const defect = capture.defect || {};
  return normalizeDefect({
    ...defect,
    id,
    type: capture.label || detection.label || defect.type || 'surface-defect',
    label: capture.label || detection.label || defect.label || '异常抓拍',
    severity: capture.severity || detection.severity || defect.severity || 'medium',
    confidence: detection.confidence ?? defect.confidence ?? 0.86,
    bbox: capture.bbox || detection.bbox || defect.bbox,
    localPosition: defect.localPosition || detection.localPosition || capture.localPosition || {},
    geoPosition: defect.geoPosition || detection.geoPosition || capture.geoPosition || {},
    snapshot: {
      imageUrl: capture.imageUrl,
      cameraId: 'M350-RTK-FPV',
      capturedAt: capture.capturedAt,
      missionId: capture.telemetry?.mission?.id || 'DEMO-INSPECTION',
      telemetry: capture.telemetry || {},
    },
    workflowStage: defect.workflowStage || 'verification',
  });
}

export function initWorkflowEnhancements(options = {}) {
  const root = options.root || getDocument();
  const doc = getDocument(root);
  const win = getWindow(doc);

  if (!doc || !win) return createEmptyController();

  const card = findDef102Card(root);
  if (!card) return createEmptyController({ reason: 'defect-card-not-found' });

  const defect = normalizeDefect({
    ...findDefectById(TARGET_DEFECT_ID, options.defects || getDefaultDefects()),
    workflowStage: getStageFromCard(card),
  });
  const state = {
    defects: [defect, ...(options.defects || getDefaultDefects()).filter((item) => item.id !== TARGET_DEFECT_ID)],
    aiDetections: [],
    captures: [],
    workflowHistory: Array.isArray(options.workflowHistory) ? [...options.workflowHistory] : [],
  };
  const disposers = [];
  const dynamicCards = new Map();
  let draggingDynamicId = null;

  const getTargetDefect = () => {
    const current = state.defects.find((item) => item.id === TARGET_DEFECT_ID) || defect;
    return normalizeDefect({
      ...current,
      workflowStage: getStageFromCard(card),
    });
  };

  const getDefectById = (id) => normalizeDefect(
    state.defects.find((item) => item.id === id) || getTargetDefect(),
  );

  const requestDefectHighlight = (targetDefect, source) => {
    const target = normalizeDefect(targetDefect);
    const detail = {
      id: target.id,
      defect: target,
      localPosition: target.localPosition,
      geoPosition: target.geoPosition,
      snapshot: target.snapshot,
      workflowStage: target.workflowStage,
      source,
      requestedAt: new Date().toISOString(),
    };

    const record = dynamicCards.get(target.id);
    addClassPulse(win, record?.card || card);
    emit(win, DEFECT_HIGHLIGHT_REQUEST_EVENT, detail);
    if (typeof options.onHighlightRequested === 'function') {
      options.onHighlightRequested(detail);
    }
    return true;
  };

  const wireDynamicCard = (itemCard, itemDefect) => {
    const onClick = () => requestDefectHighlight(getDefectById(itemDefect.id), 'ai-defect-card-click');
    const onKeyDown = (event) => {
      if (event.key !== 'Enter' && event.key !== ' ') return;
      event.preventDefault();
      requestDefectHighlight(getDefectById(itemDefect.id), 'ai-defect-card-keyboard');
    };
    const onDragStart = (event) => {
      draggingDynamicId = itemDefect.id;
      if (event.dataTransfer) {
        event.dataTransfer.effectAllowed = 'move';
        event.dataTransfer.setData('text/plain', itemDefect.id);
      }
      itemCard.style.opacity = '0.62';
    };
    const onDragEnd = () => {
      draggingDynamicId = null;
      itemCard.style.opacity = '';
    };

    itemCard.addEventListener('click', onClick);
    itemCard.addEventListener('keydown', onKeyDown);
    itemCard.addEventListener('dragstart', onDragStart);
    itemCard.addEventListener('dragend', onDragEnd);
    disposers.push(() => {
      itemCard.removeEventListener('click', onClick);
      itemCard.removeEventListener('keydown', onKeyDown);
      itemCard.removeEventListener('dragstart', onDragStart);
      itemCard.removeEventListener('dragend', onDragEnd);
    });
  };

  const upsertAiDefectCards = (defects = []) => {
    defects.map(normalizeDefect).forEach((itemDefect) => {
      state.defects = [
        itemDefect,
        ...state.defects.filter((existing) => existing.id !== itemDefect.id),
      ];

      const existing = dynamicCards.get(itemDefect.id);
      if (existing) {
        existing.card.querySelector('h4').textContent = cardTitle(itemDefect);
        const thumb = existing.card.querySelector('.kanban-thumb');
        if (thumb && itemDefect.snapshot?.imageUrl) thumb.src = itemDefect.snapshot.imageUrl;
        existing.card.dataset.workflowStage = itemDefect.workflowStage;
        return;
      }

      const column = findStageColumn(root, itemDefect.workflowStage);
      if (!column) return;
      const itemCard = createAiDefectCard(doc, itemDefect);
      column.appendChild(itemCard);
      dynamicCards.set(itemDefect.id, { card: itemCard });
      wireDynamicCard(itemCard, itemDefect);
    });
  };

  const controller = {
    active: true,
    card,
    getWorkflowHistory() {
      return [...state.workflowHistory];
    },
    requestHighlight(source = 'workflow-enhancement') {
      return requestDefectHighlight(getTargetDefect(), source);
    },
    generateReportHtml(reportOptions = {}) {
      return generateInspectionReportHtml({
        ...createReportOptions(options, state),
        ...reportOptions,
      });
    },
    downloadHtmlReport(reportOptions = {}) {
      return downloadHtmlReport({
        ...createReportOptions(options, state),
        ...reportOptions,
      });
    },
    downloadWordReport(reportOptions = {}) {
      return downloadWordReport({
        ...createReportOptions(options, state),
        ...reportOptions,
      });
    },
    printReport(reportOptions = {}) {
      return printReport({
        ...createReportOptions(options, state),
        ...reportOptions,
      });
    },
    destroy() {
      disposers.splice(0).forEach((dispose) => dispose());
      card.classList.remove('defect-highlight-requested');
      dynamicCards.forEach(({ card: itemCard }) => itemCard.remove());
      dynamicCards.clear();
    },
  };

  const onCardClick = () => controller.requestHighlight('def-102-card-click');
  const onCardKeyDown = (event) => {
    if (event.key !== 'Enter' && event.key !== ' ') return;
    controller.requestHighlight('def-102-card-keyboard');
  };
  const onWorkflowMoved = (event) => {
    const movedId = event.detail?.card?.id || event.detail?.id;
    if (movedId !== TARGET_DEFECT_ID && !dynamicCards.has(movedId)) return;

    state.workflowHistory.push(event.detail);
    state.defects = state.defects.map((item) => (
      item.id === movedId
        ? normalizeDefect({ ...item, workflowStage: event.detail.toStage || getStageFromCard(card) })
        : item
    ));
  };
  const onAiDetections = (event) => {
    const detail = event.detail || {};
    state.aiDetections = Array.isArray(detail.detections) ? [...detail.detections] : [];
    upsertAiDefectCards(detail.defects || []);
  };
  const onCapture = (event) => {
    const capture = event.detail || {};
    const captureId = capture.id || `${capture.defectId}-${capture.capturedAt}`;
    state.captures = [
      capture,
      ...state.captures.filter((item) => (item.id || `${item.defectId}-${item.capturedAt}`) !== captureId),
    ].slice(0, 80);
    const defectFromShot = defectFromCapture(capture);
    state.aiDetections = [
      {
        id: capture.detectionId || `DET-${captureId}`,
        defectId: defectFromShot.id,
        label: defectFromShot.label,
        confidence: defectFromShot.confidence || 0.86,
        severity: defectFromShot.severity,
        bbox: capture.bbox || {},
        processedAt: capture.capturedAt,
        source: 'fpv-capture',
      },
      ...state.aiDetections.filter((item) => item.defectId !== defectFromShot.id),
    ];
    upsertAiDefectCards([defectFromShot]);
  };
  const onDynamicDrop = (event) => {
    if (!draggingDynamicId) return;
    const column = event.currentTarget;
    const record = dynamicCards.get(draggingDynamicId);
    if (!record) return;

    event.preventDefault();
    const fromStage = record.card.dataset.workflowStage || '';
    const toStage = getStageFromCard({ closest: () => column });
    column.appendChild(record.card);
    record.card.dataset.workflowStage = toStage;
    emit(win, WORKFLOW_MOVED_EVENT, {
      card: {
        id: draggingDynamicId,
        title: textOf(record.card.querySelector('h4')),
        stage: toStage,
        text: textOf(record.card),
      },
      fromStage,
      toStage,
      movedAt: new Date().toISOString(),
      source: 'ai-workflow-enhancement',
    });
  };
  const onDynamicDragOver = (event) => {
    if (!draggingDynamicId) return;
    event.preventDefault();
    if (event.dataTransfer) event.dataTransfer.dropEffect = 'move';
  };

  card.addEventListener('click', onCardClick);
  card.addEventListener('keydown', onCardKeyDown);
  win.addEventListener(WORKFLOW_MOVED_EVENT, onWorkflowMoved);
  win.addEventListener(AI_DETECTIONS_EVENT, onAiDetections);
  win.addEventListener(INSPECTION_CAPTURE_EVENT, onCapture);
  disposers.push(() => card.removeEventListener('click', onCardClick));
  disposers.push(() => card.removeEventListener('keydown', onCardKeyDown));
  disposers.push(() => win.removeEventListener(WORKFLOW_MOVED_EVENT, onWorkflowMoved));
  disposers.push(() => win.removeEventListener(AI_DETECTIONS_EVENT, onAiDetections));
  disposers.push(() => win.removeEventListener(INSPECTION_CAPTURE_EVENT, onCapture));

  Array.from((root.querySelector('#view-workflow') || root).querySelectorAll('.kanban-col')).forEach((column) => {
    column.addEventListener('drop', onDynamicDrop);
    column.addEventListener('dragover', onDynamicDragOver);
    disposers.push(() => {
      column.removeEventListener('drop', onDynamicDrop);
      column.removeEventListener('dragover', onDynamicDragOver);
    });
  });

  const removeReportControls = appendReportControls(card, controller);
  if (removeReportControls) disposers.push(removeReportControls);

  return controller;
}

export default initWorkflowEnhancements;
