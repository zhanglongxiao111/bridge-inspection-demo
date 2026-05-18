export function renderWorkflowView(assets) {
  return `
    <div id="view-workflow" class="view-container">
      <div class="resource-header">
        <h2>自动化巡检工作流</h2>
      </div>
      <div class="workflow-board">
        <div class="kanban-col">
          <h3 class="kanban-title">📥 数据采集</h3>
          <div class="kanban-card">
            <h4>航线 A - 主桥墩</h4>
            <p>状态: 飞行中 (80%)</p>
            <div class="progress-bar"><div class="progress-fill progress-fill-80"></div></div>
          </div>
          <div class="kanban-card">
            <h4>航线 B - 斜拉索</h4>
            <p>状态: 已完成</p>
            <div class="progress-bar"><div class="progress-fill progress-fill-100 progress-fill-complete"></div></div>
          </div>
        </div>
        <div class="kanban-col">
          <h3 class="kanban-title">🧠 AI 分析</h3>
          <div class="kanban-card">
            <h4>航线 B 图像集</h4>
            <p>模型: YOLOv10-Bridge</p>
            <p class="text-accent">发现 3 处疑似病害</p>
          </div>
        </div>
        <div class="kanban-col">
          <h3 class="kanban-title">⚠️ 人工复核</h3>
          <div class="kanban-card warning-card">
            <div class="kanban-thumb kanban-thumb-placeholder">等待 FPV 抓拍</div>
            <h4>#DEF-102: 深度裂缝</h4>
            <p>位置: Pylon-2-South</p>
            <button class="action-btn danger-btn card-action-full" onclick="showDefectModal()">查看详情</button>
          </div>
        </div>
        <div class="kanban-col">
          <h3 class="kanban-title">📄 维修工单</h3>
          <div class="kanban-card">
            <h4>工单 #T-091</h4>
            <p>级别: 高</p>
            <p>指派给: 结构维修组</p>
          </div>
        </div>
      </div>
    </div>
  `;
}
