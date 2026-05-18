export function renderDefectModal(assets) {
  return `
    <div id="defect-modal" class="modal glass-panel hidden">
      <div class="modal-header">
        <h3>病害详情确认</h3>
        <button class="close-btn" onclick="hideDefectModal()">×</button>
      </div>
      <div class="modal-body">
        <img src="${assets.crack}" alt="Crack Defect" class="defect-image" />
        <div class="defect-info">
          <p><strong>位置坐标:</strong> [113.1234, 23.5678, 142.5]</p>
          <p><strong>AI 分析结果:</strong> 混凝土深度裂缝，建议尽快进行人工复核与灌浆修复。</p>
        </div>
        <button class="action-btn">生成维修工单</button>
      </div>
    </div>
  `;
}
