export function renderResourceManagementView(assets) {
  return `
    <div id="view-resource-management" class="view-container">
      <div class="resource-header">
        <h2>资产设备全息档案</h2>
      </div>
      <div class="resource-grid">
        <div class="resource-card">
          <img src="${assets.fleet}" class="rc-img" />
          <div class="rc-info">
            <div class="rc-title">M350 RTK <span class="rc-status">🟢 待机正常</span></div>
            <div class="rc-meta">序列号: 3Q4DF2409X<br>飞行时长: 240H<br>电池循环: 12次</div>
          </div>
        </div>
        <div class="resource-card">
          <img src="${assets.dock}" class="rc-img" />
          <div class="rc-info">
            <div class="rc-title">DJI Dock 2 (大桥北塔) <span class="rc-status">🟢 运行中</span></div>
            <div class="rc-meta">序列号: DOCK-40291<br>网络: 5G (420Mbps)<br>内温: 22°C</div>
          </div>
        </div>
        <div class="resource-card">
          <img src="${assets.fleet}" class="rc-img" />
          <div class="rc-info">
            <div class="rc-title">M30T <span class="rc-status rc-status-danger">🔴 保养中</span></div>
            <div class="rc-meta">序列号: 8K9LM102XX<br>飞行时长: 1200H<br>电池循环: 84次</div>
          </div>
        </div>
        <div class="resource-card">
          <img src="${assets.dock}" class="rc-img" />
          <div class="rc-info">
            <div class="rc-title">DJI Dock 2 (大桥南塔) <span class="rc-status">🟢 待命</span></div>
            <div class="rc-meta">序列号: DOCK-40292<br>网络: 5G (390Mbps)<br>内温: 20°C</div>
          </div>
        </div>
      </div>
    </div>
  `;
}
