export function renderFlightControlView(assets) {
  return `
    <div id="view-flight-control" class="view-container app-body active">
      <aside class="sidebar-left glass-panel">
        <div class="sidebar-tabs">
          <button class="tab-btn active">任务飞行</button>
          <button class="tab-btn">航线规划</button>
          <button class="tab-btn">巡检记录</button>
        </div>

        <div class="panel-section dock-status">
          <h3>机巢状态 (DJI Dock)</h3>
          <div class="dock-grid">
            <div class="dock-item dock-item-wide">
              <span class="d-label">任务状态</span>
              <span class="d-value text-success" data-dock-status>待命</span>
            </div>
            <div class="dock-item">
              <span class="d-label">舱盖</span>
              <span class="d-value text-success" data-dock-hatch>关闭</span>
            </div>
            <div class="dock-item">
              <span class="d-label">锁止/推杆</span>
              <span class="d-value text-warning" data-dock-pusher>锁定</span>
            </div>
            <div class="dock-item">
              <span class="d-label">升降平台</span>
              <span class="d-value" data-dock-platform>收纳</span>
            </div>
            <div class="dock-item">
              <span class="d-label">旋翼</span>
              <span class="d-value" data-dock-rotor>停止</span>
            </div>
            <div class="dock-item">
              <span class="d-label">风速</span>
              <span class="d-value" data-dock-wind>-- m/s</span>
            </div>
            <div class="dock-item">
              <span class="d-label">雨量</span>
              <span class="d-value" data-dock-rain>-- mm</span>
            </div>
            <div class="dock-item">
              <span class="d-label">温度</span>
              <span class="d-value" data-dock-temp>--°C</span>
            </div>
            <div class="dock-item">
              <span class="d-label">湿度</span>
              <span class="d-value" data-dock-humidity>--%</span>
            </div>
          </div>
        </div>

        <div class="panel-section">
          <h3>当前任务：索塔精细化巡检</h3>
          <ul class="node-list">
            <li class="node-item" data-target="pylon-1">📍 1号主索塔</li>
            <li class="node-item" data-target="pylon-2">📍 2号主索塔</li>
            <li class="node-item" data-target="cable-left">🕸 左侧斜拉索群</li>
            <li class="node-item" data-target="pier-3">🏛 3号承台及墩身</li>
          </ul>
        </div>
      </aside>

      <main class="main-content">
        <div class="waypoint-timeline glass-panel">
          <div class="timeline-header">
            <span class="mission-time" data-mission-time>已飞行: 00:00:00 (待命)</span>
            <span class="mission-percent" data-mission-percent>0%</span>
          </div>
          <div class="timeline-track">
            <div class="timeline-progress timeline-progress-80" data-timeline-progress></div>
            <div class="wp-node completed wp-node-0"><span>起飞</span></div>
            <div class="wp-node completed wp-node-20"><span>航点36</span></div>
            <div class="wp-node completed wp-node-40"><span>航点37</span></div>
            <div class="wp-node completed wp-node-60"><span>航点38</span></div>
            <div class="wp-node active wp-node-80"><span>航点39</span></div>
            <div class="wp-node pending wp-node-100"><span>返航</span></div>
          </div>
        </div>

        <div class="fpv-controls-overlay">
          <div class="fpv-control-row">
            <button id="btn-start-mission" class="action-btn primary-btn">✈️ 起飞并执行任务</button>
            <button id="btn-resume-mission" class="action-btn danger-btn hidden">🔄 恢复自动巡检</button>
            <button id="btn-toggle-fpv" class="action-btn secondary-btn">💻 切换第一人称 (FPV)</button>
          </div>
          <div id="fpv-instructions" class="glass-panel hidden fpv-instructions-panel">
            <strong>[飞行控制]</strong><br/>
            W/S: 前进/后退<br/>
            A/D: 左右平移<br/>
            Q/E: 旋转机头<br/>
            空格/Shift: 升/降<br/>
            <em>* 第三视角下双击桥梁可自动飞往目标</em>
          </div>
        </div>
      </main>

      <aside class="sidebar-right glass-panel">
        <div class="panel-section fpv-container">
          <div class="fpv-header">
            <h3>实时图传 (M350 RTK)</h3>
            <button class="pip-btn" title="视口切换">🔄</button>
          </div>
          <div class="fpv-view">
            <canvas class="fpv-image fpv-preview-canvas" data-live-fpv-canvas aria-label="实时第一人称图传"></canvas>
            <div class="fpv-overlay">
              <div class="crosshair"></div>
              <div class="fpv-data top-left" data-fpv-record-time>录制 00:00:00</div>
              <div class="fpv-data bottom-right" data-fpv-z>Z: --m</div>
            </div>
          </div>
          <div class="telemetry-grid mt-2">
            <div class="telemetry-item"><div class="label">高度</div><div class="value"><span data-telemetry-altitude>--</span><span class="unit">m</span></div></div>
            <div class="telemetry-item"><div class="label">距离</div><div class="value"><span data-telemetry-distance>--</span><span class="unit">m</span></div></div>
            <div class="telemetry-item"><div class="label">电量</div><div class="value"><span data-telemetry-battery>--</span><span class="unit">%</span></div></div>
            <div class="telemetry-item"><div class="label">信号</div><div class="value" data-telemetry-signal>--</div></div>
          </div>
        </div>

        <div class="panel-section ai-feed-section">
          <div class="ai-feed-header">
            <h3 data-ai-capture-count>异常抓拍 (0)</h3>
            <div class="ai-tags">
              <span class="tag tag-red">裂缝</span>
              <span class="tag tag-yellow">锈蚀</span>
              <span class="tag tag-blue">抛洒物</span>
            </div>
          </div>
          <div class="ai-feed-list" data-ai-feed-list>
            <div class="ai-feed-empty">等待无人机发现异常并抓拍</div>
          </div>
        </div>
      </aside>
    </div>
  `;
}
