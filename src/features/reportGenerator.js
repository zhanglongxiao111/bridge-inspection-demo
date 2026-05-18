import { getDefaultDefects, normalizeDefect } from './defectData.js';

const REPORT_TITLE = '桥梁巡检病害报告';

function getDocument() {
  return typeof document !== 'undefined' ? document : null;
}

function getWindow() {
  return typeof window !== 'undefined' ? window : null;
}

function escapeHtml(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function formatDate(value) {
  if (!value) return '无数据';
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return String(value);
  return date.toLocaleString('zh-CN', { hour12: false });
}

function formatLocalPosition(position = {}) {
  return `X ${position.x ?? 0}, Y ${position.y ?? 0}, Z ${position.z ?? 0}`;
}

function formatGeoPosition(position = {}) {
  return `${position.longitude ?? 0}, ${position.latitude ?? 0}, ${position.altitude ?? 0}m`;
}

function severityText(severity) {
  const labels = {
    low: '低',
    medium: '中',
    high: '高',
    critical: '严重',
  };
  return labels[severity] || severity || 'N/A';
}

function normalizeTelemetrySnapshot(snapshot = {}) {
  const runtime = snapshot.flightState || snapshot.position || snapshot.weather ? snapshot : null;
  return {
    capturedAt: snapshot.capturedAt || new Date().toISOString(),
    droneState: snapshot.droneState || snapshot.drone || (runtime ? {
      state: snapshot.flightState,
      position: snapshot.position,
    } : {}),
    environmentStatus: snapshot.environmentStatus || snapshot.environment || {},
    flightSafety: snapshot.flightSafety || snapshot.safety || {},
    resourceTelemetry: snapshot.resourceTelemetry || snapshot.resources || {},
    mission: snapshot.mission || {},
  };
}

export function collectTelemetrySnapshot(source) {
  const win = getWindow();
  const busSnapshot = typeof source?.snapshot === 'function' ? source.snapshot() : null;
  const drone = source?.drone || win?.myDrone;
  const environmentStatus = source?.environmentStatus || win?.bridgeEnvironmentStatus || {};

  return normalizeTelemetrySnapshot({
    capturedAt: new Date().toISOString(),
    droneState: source?.droneState || {
      state: drone?.state,
      isFPV: Boolean(drone?.isFPV),
      position: drone?.mesh?.position
        ? { x: drone.mesh.position.x, y: drone.mesh.position.y, z: drone.mesh.position.z }
        : undefined,
    },
    environmentStatus,
    flightSafety: source?.flightSafety || win?.bridgeFlightSafetyState || {},
    resourceTelemetry: busSnapshot || win?.bridgeInspectionTelemetry || {},
    mission: source?.mission || {},
  });
}

function normalizeAiDetections(detections = []) {
  return detections.map((item, index) => ({
    id: item.id || `AI-${index + 1}`,
    defectId: item.defectId || item.anchorId || '无数据',
    label: item.label || item.type || 'surface-defect',
    confidence: Number(item.confidence ?? 0),
    severity: item.severity || 'medium',
    bbox: item.bbox || {},
    source: item.source || 'mock',
    processedAt: item.processedAt || item.capturedAt || '',
  }));
}

export function buildReportModel(options = {}) {
  const captures = Array.isArray(options.captures)
    ? [...options.captures]
    : Array.isArray(options.telemetrySnapshot?.captures)
      ? [...options.telemetrySnapshot.captures]
      : [];
  const captureByDefect = new Map(captures.map((capture) => [capture.defectId || capture.defect?.id, capture]));
  const defects = (options.defects || getDefaultDefects()).map((item) => {
    const normalized = normalizeDefect(item);
    const capture = captureByDefect.get(normalized.id);
    if (!capture?.imageUrl) return normalized;
    return normalizeDefect({
      ...normalized,
      snapshot: {
        imageUrl: capture.imageUrl,
        cameraId: 'M350-RTK-FPV',
        capturedAt: capture.capturedAt,
        missionId: capture.telemetry?.mission?.id || normalized.snapshot.missionId,
        telemetry: capture.telemetry || normalized.snapshot.telemetry,
      },
    });
  });
  const telemetrySnapshot = normalizeTelemetrySnapshot(
    options.telemetrySnapshot || collectTelemetrySnapshot(options.telemetrySource),
  );
  const workflowHistory = Array.isArray(options.workflowHistory) ? [...options.workflowHistory] : [];
  const win = getWindow();
  const aiDetections = normalizeAiDetections(
    options.aiDetections || win?.bridgeAiDetections?.detections || [],
  );
  const taskHistory = Array.isArray(options.taskHistory) ? [...options.taskHistory] : workflowHistory;
  const safetyEvents = Array.isArray(options.safetyEvents)
    ? options.safetyEvents
    : [telemetrySnapshot.flightSafety].filter((item) => Object.keys(item || {}).length);

  return {
    title: options.title || REPORT_TITLE,
    generatedAt: options.generatedAt || new Date().toISOString(),
    defects,
    telemetrySnapshot,
    workflowHistory,
    captures,
    aiDetections,
    taskHistory,
    safetyEvents,
    weatherSnapshot: options.weatherSnapshot || options.telemetrySnapshot?.weather || {
      condition: '模拟晴好',
      windSpeedMps: 4.2,
      temperatureC: 24,
      humidity: 58,
      visibilityKm: 8,
    },
    meta: {
      author: options.author || '桥梁巡检 Demo',
      version: options.version || '1.0',
    },
  };
}

function renderKeyValueRows(data = {}) {
  const rows = Object.entries(data).map(([key, value]) => {
    const printable = typeof value === 'object' && value !== null
      ? JSON.stringify(value)
      : value;
    return `<tr><th>${escapeHtml(key)}</th><td>${escapeHtml(printable ?? 'N/A')}</td></tr>`;
  });

  return rows.length ? rows.join('') : '<tr><td colspan="2">无数据</td></tr>';
}

function renderDefectRows(defects) {
  return defects.map((defect) => `
    <tr>
      <td><strong>${escapeHtml(defect.id)}</strong></td>
      <td><span class="severity severity-${escapeHtml(defect.severity)}">${escapeHtml(severityText(defect.severity))}</span></td>
      <td>${escapeHtml(formatLocalPosition(defect.localPosition))}</td>
      <td>${escapeHtml(formatGeoPosition(defect.geoPosition))}</td>
      <td>${escapeHtml(defect.workflowStage)}</td>
      <td>${escapeHtml(defect.snapshot.cameraId || '无数据')}</td>
      <td>${escapeHtml(formatDate(defect.snapshot.capturedAt))}</td>
    </tr>
  `).join('');
}

function renderWorkflowRows(history) {
  if (!history.length) return '<tr><td colspan="5">暂无流转记录</td></tr>';

  return history.map((entry) => `
    <tr>
      <td>${escapeHtml(entry.card?.id || entry.id || '无数据')}</td>
      <td>${escapeHtml(entry.fromStage || '无数据')}</td>
      <td>${escapeHtml(entry.toStage || entry.workflowStage || '无数据')}</td>
      <td>${escapeHtml(formatDate(entry.movedAt || entry.requestedAt || entry.time))}</td>
      <td>${escapeHtml(entry.source || 'workflow')}</td>
    </tr>
  `).join('');
}

function renderAiRows(detections) {
  if (!detections.length) return '<tr><td colspan="7">暂无 AI 检测结果</td></tr>';

  return detections.map((item) => `
    <tr>
      <td>${escapeHtml(item.id)}</td>
      <td>${escapeHtml(item.defectId)}</td>
      <td>${escapeHtml(item.label)}</td>
      <td>${escapeHtml(Math.round(item.confidence * 100))}%</td>
      <td>${escapeHtml(severityText(item.severity))}</td>
      <td>${escapeHtml(JSON.stringify(item.bbox || {}))}</td>
      <td>${escapeHtml(formatDate(item.processedAt))}</td>
    </tr>
  `).join('');
}

function renderSafetyRows(events) {
  if (!events.length) return '<tr><td colspan="4">暂无安全事件</td></tr>';

  return events.map((event, index) => `
    <tr>
      <td>${escapeHtml(event.id || `SAFE-${index + 1}`)}</td>
      <td>${escapeHtml(event.status || event.level || '无数据')}</td>
      <td>${escapeHtml(event.reason || event.message || '无数据')}</td>
      <td>${escapeHtml(formatDate(event.time || event.updatedAt || event.capturedAt))}</td>
    </tr>
  `).join('');
}

function renderCaptureCards(captures, defects) {
  const source = captures.length
    ? captures
    : defects.map((defect) => ({
      id: defect.id,
      defectId: defect.id,
      imageUrl: defect.snapshot.imageUrl,
      label: defect.label,
      capturedAt: defect.snapshot.capturedAt,
      telemetry: defect.snapshot.telemetry,
      bbox: defect.bbox,
    })).filter((item) => item.imageUrl);

  if (!source.length) return '暂无抓拍';

  return source.map((capture) => `
    <div class="snapshot-card">
      <h3>${escapeHtml(capture.defectId || capture.id)}</h3>
      ${capture.imageUrl ? `<img src="${escapeHtml(capture.imageUrl)}" alt="${escapeHtml(capture.defectId || capture.id)} snapshot">` : ''}
      <p><strong>类型:</strong> ${escapeHtml(capture.label || '异常')}</p>
      <p><strong>采集时间:</strong> ${escapeHtml(formatDate(capture.capturedAt))}</p>
      <p><strong>检测框:</strong> ${escapeHtml(JSON.stringify(capture.bbox || {}))}</p>
    </div>
  `).join('');
}

function reportStyles() {
  return `
    body { margin: 0; color: #172033; background: #f6f8fb; font-family: Arial, "Microsoft YaHei", sans-serif; }
    .report-page { max-width: 1120px; margin: 0 auto; padding: 32px; }
    .report-header { border-bottom: 3px solid #2563eb; padding-bottom: 16px; margin-bottom: 24px; }
    .report-header h1 { margin: 0 0 8px; font-size: 28px; letter-spacing: 0; }
    .report-meta { color: #526071; font-size: 13px; }
    .report-section { background: #fff; border: 1px solid #d9e1ec; margin: 0 0 20px; padding: 18px; }
    .report-section h2 { margin: 0 0 14px; font-size: 18px; }
    table { width: 100%; border-collapse: collapse; font-size: 13px; }
    th, td { border: 1px solid #d9e1ec; padding: 9px 10px; text-align: left; vertical-align: top; }
    th { background: #eef3f9; color: #243044; }
    .severity { display: inline-block; min-width: 64px; padding: 3px 8px; border-radius: 4px; text-align: center; font-weight: 700; }
    .severity-low { background: #dcfce7; color: #166534; }
    .severity-medium { background: #fef3c7; color: #92400e; }
    .severity-high { background: #fee2e2; color: #991b1b; }
    .severity-critical { background: #111827; color: #fff; }
    .snapshot-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 14px; }
    .snapshot-card { border: 1px solid #d9e1ec; padding: 12px; background: #fbfdff; }
    .snapshot-card img { width: 100%; max-height: 180px; object-fit: cover; border: 1px solid #d9e1ec; }
    .section-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 14px; }
    @media print { body { background: #fff; } .report-page { padding: 0; } .report-section { break-inside: avoid; } }
  `;
}

export function generateInspectionReportHtml(options = {}) {
  const model = buildReportModel(options);
  const snapshots = renderCaptureCards(model.captures, model.defects);

  return `<!doctype html>
<html lang="zh-CN">
<head>
  <meta charset="utf-8">
  <title>${escapeHtml(model.title)}</title>
  <style>${reportStyles()}</style>
</head>
<body>
  <main class="report-page">
    <header class="report-header">
      <h1>${escapeHtml(model.title)}</h1>
      <div class="report-meta">生成时间: ${escapeHtml(formatDate(model.generatedAt))} | 作者: ${escapeHtml(model.meta.author)} | 版本: ${escapeHtml(model.meta.version)}</div>
    </header>

    <section class="report-section">
      <h2>病害清单</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th><th>等级</th><th>局部坐标</th><th>地理坐标</th><th>流程阶段</th><th>相机</th><th>采集时间</th>
          </tr>
        </thead>
        <tbody>${renderDefectRows(model.defects)}</tbody>
      </table>
    </section>

    <section class="report-section">
      <h2>遥测快照</h2>
      <div class="section-grid">
        <table><tbody>${renderKeyValueRows(model.telemetrySnapshot.droneState)}</tbody></table>
        <table><tbody>${renderKeyValueRows(model.telemetrySnapshot.environmentStatus)}</tbody></table>
        <table><tbody>${renderKeyValueRows(model.telemetrySnapshot.resourceTelemetry)}</tbody></table>
      </div>
    </section>

    <section class="report-section">
      <h2>AI 检测结果</h2>
      <table>
        <thead><tr><th>检测</th><th>病害</th><th>类型</th><th>置信度</th><th>等级</th><th>检测框</th><th>处理时间</th></tr></thead>
        <tbody>${renderAiRows(model.aiDetections)}</tbody>
      </table>
    </section>

    <section class="report-section">
      <h2>工作流历史</h2>
      <table>
        <thead><tr><th>病害/卡片</th><th>来源阶段</th><th>目标阶段</th><th>时间</th><th>来源</th></tr></thead>
        <tbody>${renderWorkflowRows(model.workflowHistory)}</tbody>
      </table>
    </section>

    <section class="report-section">
      <h2>任务历史与安全事件</h2>
      <div class="section-grid">
        <table>
          <thead><tr><th>任务/卡片</th><th>来源阶段</th><th>目标阶段</th><th>时间</th><th>来源</th></tr></thead>
          <tbody>${renderWorkflowRows(model.taskHistory)}</tbody>
        </table>
        <table>
          <thead><tr><th>ID</th><th>状态</th><th>原因</th><th>时间</th></tr></thead>
          <tbody>${renderSafetyRows(model.safetyEvents)}</tbody>
        </table>
      </div>
    </section>

    <section class="report-section">
      <h2>天气快照</h2>
      <table><tbody>${renderKeyValueRows(model.weatherSnapshot)}</tbody></table>
    </section>

    <section class="report-section">
      <h2>抓拍图像</h2>
      <div class="snapshot-grid">${snapshots || '暂无抓拍'}</div>
    </section>
  </main>
</body>
</html>`;
}

function downloadBlob(content, filename, type) {
  const doc = getDocument();
  const win = getWindow();
  if (!doc || !win || typeof Blob === 'undefined' || !win.URL) {
    return { ok: false, reason: 'browser-download-unavailable' };
  }

  const blob = new Blob([content], { type });
  const url = win.URL.createObjectURL(blob);
  const link = doc.createElement('a');
  link.href = url;
  link.download = filename;
  link.style.display = 'none';
  doc.body?.appendChild(link);
  link.click();
  link.remove();
  win.setTimeout(() => win.URL.revokeObjectURL(url), 250);
  return { ok: true, filename };
}

export function downloadHtmlReport(options = {}) {
  const html = generateInspectionReportHtml(options);
  return downloadBlob(
    html,
    options.filename || `bridge-inspection-report-${Date.now()}.html`,
    'text/html;charset=utf-8',
  );
}

export function downloadWordReport(options = {}) {
  const html = generateInspectionReportHtml(options);
  return downloadBlob(
    html,
    options.filename || `bridge-inspection-report-${Date.now()}.doc`,
    'application/msword;charset=utf-8',
  );
}

export function printReport(options = {}) {
  const win = getWindow();
  if (!win || typeof win.open !== 'function') return { ok: false, reason: 'window-open-unavailable' };

  const reportWindow = win.open('', '_blank', 'noopener,noreferrer,width=1200,height=800');
  if (!reportWindow) return { ok: false, reason: 'popup-blocked' };

  reportWindow.document.open();
  reportWindow.document.write(generateInspectionReportHtml(options));
  reportWindow.document.close();
  reportWindow.focus();
  reportWindow.setTimeout(() => reportWindow.print(), 300);
  return { ok: true };
}

export default {
  buildReportModel,
  collectTelemetrySnapshot,
  downloadHtmlReport,
  downloadWordReport,
  generateInspectionReportHtml,
  printReport,
};
