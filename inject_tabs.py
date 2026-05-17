import io

with io.open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

old_tabs = '''            <div class="sidebar-tabs">
              <button class="tab-btn active">任务飞行</button>
              <button class="tab-btn">航线规划</button>
              <button class="tab-btn">巡检记录</button>
            </div>'''

new_tabs = '''            <div class="sidebar-tabs">
              <button class="tab-btn active" data-tab="tab-flight">任务飞行</button>
              <button class="tab-btn" data-tab="tab-plan">航线规划</button>
              <button class="tab-btn" data-tab="tab-log">巡检记录</button>
            </div>'''

content = content.replace(old_tabs, new_tabs)

old_panels = '''            <div class="panel-section dock-status">'''
new_panels = '''            <div id="tab-flight" class="tab-content active">
            <div class="panel-section dock-status">'''
content = content.replace(old_panels, new_panels)

old_end_panels = '''                </div>
              </div>
            </div>
          </aside>'''
new_end_panels = '''                </div>
              </div>
            </div>
            </div>

            <!-- Tab: Path Planning -->
            <div id="tab-plan" class="tab-content hidden" style="padding: 15px;">
              <h3>2D 航线总览</h3>
              <img src="/map.png" style="width: 100%; border-radius: 8px; margin-top: 10px; opacity: 0.8;" />
              <p style="font-size: 0.85rem; color: #a1a1aa; margin-top: 10px;">目前大桥区域已设定 4 条巡检航线，可切换至指挥中心查看三维全景。</p>
            </div>

            <!-- Tab: Logs -->
            <div id="tab-log" class="tab-content hidden" style="padding: 15px;">
              <h3>飞行作业日志</h3>
              <ul style="list-style: none; padding: 0; margin-top: 10px; font-size: 0.85rem;">
                <li style="margin-bottom: 8px;"><span style="color: #10b981;">[10:42:12]</span> 巡检完成，已归巢</li>
                <li style="margin-bottom: 8px;"><span style="color: #d4af37;">[10:15:33]</span> 发现疑似裂缝，记录坐标</li>
                <li style="margin-bottom: 8px;"><span style="color: #10b981;">[10:02:00]</span> 航线起飞 (大桥南塔)</li>
                <li style="margin-bottom: 8px;"><span style="color: #3b82f6;">[09:55:01]</span> 下载 AI 模型版本 V2.1</li>
              </ul>
            </div>
          </aside>'''
content = content.replace(old_end_panels, new_end_panels)

with io.open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)
