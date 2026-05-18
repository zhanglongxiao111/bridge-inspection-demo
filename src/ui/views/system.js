export function renderSystemView() {
  return `
    <div id="view-system" class="view-container">
      <div class="resource-header">
        <h2>系统底层配置</h2>
      </div>
      <div class="system-settings-grid">
        <div class="settings-panel glass-panel">
          <h3>🛸 飞行控制参数</h3>
          <div class="setting-item">
            <label>全局飞行限高 (m)</label>
            <input type="range" min="50" max="500" value="150" class="slider">
            <span class="setting-val">150m</span>
          </div>
          <div class="setting-item">
            <label>低电量返航阈值 (%)</label>
            <input type="range" min="10" max="50" value="30" class="slider">
            <span class="setting-val">30%</span>
          </div>
          <div class="setting-item">
            <label>避障雷达灵敏度</label>
            <select class="custom-select">
              <option>保守 (保守绕行)</option>
              <option selected>标准 (均衡)</option>
              <option>激进 (近距越障)</option>
            </select>
          </div>
        </div>

        <div class="settings-panel glass-panel">
          <h3>🧠 AI 引擎配置</h3>
          <div class="setting-item">
            <label>计算机视觉模型</label>
            <select class="custom-select">
              <option>ResNet-50 (通用)</option>
              <option selected>YOLOv10-Bridge (专业版)</option>
            </select>
          </div>
          <div class="setting-item">
            <label>置信度阈值</label>
            <input type="range" min="1" max="100" value="85" class="slider">
            <span class="setting-val">85%</span>
          </div>
          <div class="setting-item">
            <label>开启异常即时告警</label>
            <label class="switch">
              <input type="checkbox" checked>
              <span class="slider-toggle round"></span>
            </label>
          </div>
        </div>
      </div>
    </div>
  `;
}
