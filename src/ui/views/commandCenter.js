export function renderCommandCenterView() {
  return `
    <div id="view-command-center" class="view-container">
      <div class="cc-map-container">
        <div id="cesium-container" class="cc-map"></div>
        <div class="cc-stats-overlay">
          <div class="cc-stat-panel left-panel">
            <div class="cc-card">
              <div class="label">累计巡检</div>
              <div class="value">12,458</div>
            </div>
            <div class="cc-card">
              <div class="label">在线机巢</div>
              <div class="value">42</div>
            </div>
            <div class="cc-card">
              <div class="label">24小时告警</div>
              <div class="value value-alert">86</div>
            </div>
          </div>
          <div></div>
          <div class="cc-stat-panel right-panel">
            <div class="cc-card">
              <div class="label">机队在线率</div>
              <div class="value">99.8%</div>
            </div>
            <div class="cc-card">
              <div class="label">图传数据量</div>
              <div class="value">4.2 TB</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}
