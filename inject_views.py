import io

with io.open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Enhance view-command-center
old_cc = '''              <div class="cc-stat-panel right-panel">
                 <div class="cc-card">
                  <div class="label">Fleet Uptime</div>
                  <div class="value">99.8%</div>
                </div>
                <div class="cc-card">
                  <div class="label">Data Streamed</div>
                  <div class="value">4.2 TB</div>
                </div>
              </div>'''

new_cc = '''              <div class="cc-stat-panel right-panel">
                 <div class="cc-card">
                  <div class="label">Fleet Uptime</div>
                  <div class="value">99.8%</div>
                </div>
                <div class="cc-card" style="padding: 0; overflow: hidden; height: 180px; position: relative;">
                  <div class="label" style="position: absolute; top: 10px; left: 10px; z-index: 10; background: rgba(0,0,0,0.5); padding: 2px 5px; border-radius: 4px;">Live FPV Feed</div>
                  <div style="position: absolute; top: 10px; right: 10px; z-index: 10; color: #ef4444; font-weight: bold; animation: blink 1s infinite;">● REC</div>
                  <img src="/live_feed.png" style="width: 100%; height: 100%; object-fit: cover; opacity: 0.8;" />
                </div>
              </div>'''
content = content.replace(old_cc, new_cc)

# 2. Add Workflow and System views after Resource Management
old_end = '''          </div>
        </div>
      </div>

      <!-- Floating Drone Widget -->'''

new_views = '''          </div>
        </div>
      </div>

      <!-- New: Workflow View -->
      <div id="view-workflow" class="view-container">
        <div class="resource-header">
          <h2>自动化巡检工作流 (Kanban)</h2>
        </div>
        <div style="display: flex; gap: 20px; padding: 20px; height: calc(100vh - 120px); overflow-x: auto;">
          <!-- Column 1 -->
          <div class="kanban-col">
            <h3 class="kanban-title">📥 数据采集 (Data)</h3>
            <div class="kanban-card">
              <h4>航线 A - 主桥墩</h4>
              <p>状态: 飞行中 (80%)</p>
              <div class="progress-bar"><div class="progress-fill" style="width: 80%;"></div></div>
            </div>
            <div class="kanban-card">
              <h4>航线 B - 斜拉索</h4>
              <p>状态: 已完成</p>
              <div class="progress-bar"><div class="progress-fill" style="width: 100%; background: #10b981;"></div></div>
            </div>
          </div>
          <!-- Column 2 -->
          <div class="kanban-col">
            <h3 class="kanban-title">🧠 AI 分析 (Processing)</h3>
            <div class="kanban-card">
              <h4>航线 B 图像集</h4>
              <p>模型: YOLOv10-Bridge</p>
              <p style="color: #d4af37;">发现 3 处疑似病害</p>
            </div>
          </div>
          <!-- Column 3 -->
          <div class="kanban-col">
            <h3 class="kanban-title">⚠️ 人工复核 (Verification)</h3>
            <div class="kanban-card warning-card">
              <img src="/crack.png" style="width: 100%; height: 100px; object-fit: cover; border-radius: 4px; margin-bottom: 10px;" />
              <h4>#DEF-102: 深度裂缝</h4>
              <p>位置: Pylon-2-South</p>
              <button class="action-btn danger-btn" style="width: 100%; margin-top: 10px;" onclick="showDefectModal()">查看详情</button>
            </div>
          </div>
          <!-- Column 4 -->
          <div class="kanban-col">
            <h3 class="kanban-title">📄 维修工单 (Tickets)</h3>
            <div class="kanban-card">
              <h4>工单 #T-091</h4>
              <p>级别: 高</p>
              <p>指派给: 结构维修组</p>
            </div>
          </div>
        </div>
      </div>

      <!-- New: System Management View -->
      <div id="view-system" class="view-container">
        <div class="resource-header">
          <h2>系统底层配置 (System Settings)</h2>
        </div>
        <div style="padding: 20px; display: grid; grid-template-columns: 1fr 1fr; gap: 30px; max-width: 1000px;">
          
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
              <label>置信度阈值 (Confidence)</label>
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

      <!-- Floating Drone Widget -->'''
content = content.replace(old_end, new_views)

with io.open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)
