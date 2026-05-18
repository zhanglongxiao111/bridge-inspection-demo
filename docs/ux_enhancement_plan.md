# 全局体验与底层架构提升计划 (UX & Engine Enhancement Plan)

## 0. 导言
当前系统虽然在前端视觉和 UI 状态流转上初步具备了 SaaS 级平台的雏形，但在**底层仿真引擎**、**大/小场景空间联动**以及**交互沉浸感**方面仍处于非常“简陋”的原型阶段。
本计划旨在深入复盘现有代码库，提出面向“工业级高精度数字孪生”演进的全面升级方案。

**进度口径**：
- [x] 表示当前代码库已经完成并通过构建/冒烟验证。
- [ ] 表示尚未完成，或只完成了基础设施但完整业务能力仍待实现。

**本轮并行实施记录（2026-05-18）**：
- [x] Agent A-J 已完成并完成主线集成；未打断任何子 agent。
- [x] 白色工业无人机、吊舱无机体遮挡 FPV、巡检相机 HUD 已完成并接入主线。
- [x] Demo 级天气/遥测/AI/安全模拟闭环已接入 `bridge:demo-simulation-change`。
- [x] 电子围栏 enforcement、遇阻侧移绕行、水面事故粒子表现已完成基础演示闭环。
- [x] `npm run build` 通过；当前仅保留 Vite 大 chunk 警告。
- [x] JS/CSS/HTML 单文件均低于 800 行；当前最大文件约 549 行。
- [x] 浏览器冒烟已覆盖 5 个页签、资源 3D 抽屉、工作流病害定位、系统角色/电子围栏、FPV 开关与键盘输入。
- [x] Playwright 冒烟已验证 5173：FPV pose、WASD 姿态稳定、资源抽屉、AI 缺陷卡、系统电子围栏均正常。
- [x] 本轮已完成 Cesium 到 Three 的 4 段 Demo 转场、机巢开盖起飞、场景机巢平台、右侧实时 FPV 小窗、固定种子瑕疵、电子围栏桥梁顶视图、右下角无人机浮层移除、HUD/主要 UI 汉化和卡片对齐收敛。
- [ ] in-app browser 的 CDP 截图命令仍偶发超时；已用 Playwright 产出截图并完成断言。

---

## 1. 📁 项目目录与架构整理 (Project Directory Restructuring)
**现状痛点**：目前项目目录“乱七八糟”，所有的逻辑（包含 UI、3D 渲染、初始化）高度耦合在根目录下的 main.js 和 index.html 中，静态资源 (图片) 也散落在 public/ 目录下缺乏分类。

**提升方案与进度**：
- [x] **资源分类 (Assets Management)**：已在 `public/` 下建立 `textures`、`models`、`ui`、`icons`、`models/ai` 等子目录，并新增 `src/config/assets.js` 统一资产路径。
- [x] **源码拆分 (Source Code Modularization)**：已建立 `src/core`、`src/ui`、`src/features`、`src/styles` 等目录，根 `main.js` 已压缩为应用启动薄入口。
- [x] 将 Three.js 桥梁场景、水面、车辆动画、主题应用拆入 `src/core/bridgeScene.js`。
- [x] 将 Cesium 指挥中心初始化拆入 `src/core/cesium.js`。
- [x] 将导航、主题、任务控制、路径可视化拆入 `src/ui/`。
- [x] 将工作流、资源遥测、系统配置增强拆入 `src/features/businessFeatures.js`。
- [x] 将视觉样式从根 `style.css` 拆入 `src/styles/`，根样式文件只保留集中 `@import`。
- [x] 清理旧 Vite starter 残留 `src/main.js`、`src/style.css`、`src/counter.js`、`src/assets/*`。
- [x] 单文件硬上限 800 行已满足；当前最大源码文件约 549 行。
- [x] **组件化 (Componentization)**：`index.html` 已收敛为薄 app shell，页面 DOM 已拆入 `src/ui/views/*.js` 模板函数并由 `src/ui/renderAppShell.js` 挂载。
- [x] `modules/Drone.js` 保持为领域入口，同时已将视觉、运动控制、状态机拆到 `src/core/drone/`，避免继续在单文件堆叠。

---

## 2. 🌍 宏观与微观空间联动重构 (Macro-Micro Transition)
**现状痛点**：目前“指挥中心（Cesium 地球）”和“飞行控制（Three.js 局部场景）”是两个完全割裂的独立 DOM 容器，切换时只是生硬的 CSS 隐藏与显示，毫无空间连续性。

**提升方案与进度**：
- [x] **地理坐标映射 (Geo-Referencing)**：已新增 `src/core/geoReference.js`，提供 WGS84 与 Three.js 局部坐标的双向转换。
- [x] **桥梁资产点位**：Cesium 指挥中心已通过 `src/core/cesiumBridgeLink.js` 增加桥梁资产 marker 与 `bridge:cesium-bridge-selected` 事件。
- [x] **基础拉近联动**：点击 Cesium 桥梁资产后可切到飞控视图，并触发 Three 相机聚焦到局部目标。
- [x] **Demo 级 4 段转场**：已新增 `SceneTransitionService`，完成地球高空拉近、桥梁低空拉近、遮罩淡切、Three 俯视推近到固定巡检镜头；当前是视觉连续的 Demo 方案，不是真正同一 WebGL 相机无缝共用。
- [ ] **反向联动**：在局部 FPV 飞行时，右上角的二维缩略图应与 Cesium 的视角保持小地图级别的同步更新。

---

## 3. 🛸 无人机仿真引擎重置 (Drone Physics & Assets)
**现状痛点**：目前无人机仅由几个 `THREE.BoxGeometry` 拼接而成，物理飞行仅靠简单的 `translateZ` 线性位移计算，毫无惯性、空气动力学和真实感。

**提升方案与进度**：
- [ ] **高精模型替换**：引入经过减面和 Draco 压缩的真实无人机 `.glb` 静态模型（如 DJI M350 RTK），包含折叠桨叶的细节。
- [x] **模型加载降级**：已在 `DroneVisual` 中使用 `GLTFLoader` 条件加载 `.glb`，资源缺失时自动回退程序化无人机模型。
- [x] **高细节程序化视觉模型**：`DroneVisual` 的 fallback 已升级为 M350/工业四旋翼风格模型，包含机身壳体、碳纤维机臂、电机舱、旋翼、起落架、云台相机、避障传感器、RTK/GNSS 天线、状态灯、散热槽、电池模块与铭牌细节。
- [x] **白色工业涂装与吊舱 FPV**：已将程序化无人机改为白色/陶瓷白/浅灰主涂装，保留黑色碳纤维机臂和桨叶，并通过 `DroneVisual.getFpvCameraPose()` 提供无机体遮挡的吊舱巡检相机视角。
- [x] **真实物理引擎 (Cannon.js / Ammo.js)**：已引入 `cannon-es`，`DroneMotionController` 使用刚体、质量、阻尼和力输入替代原有线性位移。
- [x] **姿态稳定修复**：运动控制已改为 yaw-only 姿态同步，Cannon 刚体只负责位置/速度，避免无人机在飞行中异常翻滚。
- [x] **状态机拆分**：已拆出 `DroneVisual`、`DroneMotionController`、`DroneStateMachine`，保留 `IDLE / AUTO_NAV / MANUAL / PHOTOGRAPHING` 语义和 FPV 键盘打断行为。
- [x] **Demo 天气/遥测模拟服务**：已新增 `initDemoSimulation()`，按固定 mock 节奏输出风速、雨量、能见度、电池、信号、RTK、任务进度、机巢温湿度和安全告警。
- [x] **机巢起飞链路**：已新增场景机巢、起降平台、舱盖动画和 `DockLaunchController`，无人机刷新后停在岸边机巢，点击“起飞并执行任务”后按开盖、升空、离巢、自动巡检链路执行。
- [ ] **动态天气耦合 - 风阻计算**：将系统面板上的“风速 (2.4 m/s)”与无人机的位移进行向量叠加。大风侧吹时，无人机必须自动倾斜机身 (Pitch/Roll) 进行姿态补偿。
- [ ] **动态天气耦合 - 高度气压模拟**：随着飞行高度的增加，模拟更猛烈的气流抖动 (Camera Shake)。

---

## 4. 🛡️ 环境感知与交互反馈 (Environment & Collision)
**现状痛点**：当前无人机可以穿模飞跃桥墩，遇到海平面不会坠机，完全是一台“幽灵摄像机”。

**提升方案与进度**：
- [x] **射线感知原型**：已新增 `src/core/EnvironmentSensors.js`，可基于 Raycaster 输出 `clear / warning / blocked / waterImpact` 状态。
- [x] **环境状态挂载**：应用运行时会将检测结果写入 `window.bridgeEnvironmentStatus`，便于后续 UI 告警和飞控逻辑接入。
- [x] **多方向射线检测**：已支持前、后、左、右、上、下多方向检测和水面检测。
- [x] **飞控安全策略**：已新增 `src/core/FlightSafetyPolicy.js`，输出 `clear / warning / blocked / waterImpact`，并通过 `Drone.applySafetyPolicyState()` 限制危险方向输入。
- [ ] **Octree 碰撞优化**：尚未接入 Octree 或 BVH 等空间索引。
- [x] **Demo 自动避障控制**：自动导航遇到 `blocked` 时会减速并按安全策略侧移绕行；手动危险方向输入仍被屏蔽。
- [x] **海平面物理反馈**：当安全策略识别 `waterImpact` 时，会停止运动并进入坠水/悬停安全状态。
- [x] **水面事故视觉表现**：已新增 Three.js 粒子溅水、红色告警信标和任务暂停状态；报错音效仍未接入。

---

## 5. 🚀 彩蛋功能：战术武装拓展 (Tactical Payload)
**现状痛点**：缺乏趣味性。

**提升方案与进度**：
- [x] **隔离模块**：已新增 `src/features/tacticalPayload.js`，默认不污染工业巡检 UI，只在隐藏开发者模式启用。
- [x] **隐藏开发者模式**：支持 `window.bridgeDeveloperMode = true` 或输入隐藏序列 `tactical` 启用。
- [ ] **系统管理显式入口**：尚未在系统管理界面增加可见开关。
- [x] **交互**：在 FPV 模式下，右键瞄准，瞄准时左键发射。
- [x] **视觉效果**：已用 Three.js 线段和粒子实现演示轨迹/命中特效；不接入真实巡检工作流。

---

## 6. 🔀 其他代码层面的重构 (Code Refactoring)
- [x] **动画曲线平滑化基础设施**：已新增 `src/core/CameraAnimator.js`，提供 ease-in-out 相机动画工具。
- [x] **病害定位相机动画接入**：点击工作流中的 `#DEF-102` 时，会切回飞行控制并以 ease 动画飞到目标视角。
- [ ] **上帝视角双击切换目标全量接入**：双击桥梁或所有目标切换场景仍需统一接入相机动画工具。
- [x] **路径可视化 (Path Line)**：已新增 `src/core/FlightPathCurve.js`，并用 `THREE.CatmullRomCurve3` 生成曲线航迹。
- [x] **性能优化 - WaterShader**：已通过 `src/core/waterSurface.js` 使用自定义 shader 升级水面材质，并保留主题适配。
- [x] **架构解耦**：已将根 `main.js` 拆分为场景、Cesium、导航、主题、任务控制、路径可视化和业务增强模块。

---

## 7. 💼 业务级功能页签深度演进 (Business-Level Tab Enhancements)
除了飞行控制与物理引擎外，作为完整的 SaaS 平台，其他三大顶栏页签（资源管理、工作流、系统管理）目前的静态展示距离“生产可用”仍有差距，计划在未来引入以下真实业务逻辑：

### 7.1 资产设备全息档案 (Resource Management)
- [x] **IoT 遥测数据动态化原型**：已新增前端 mock 遥测，动态刷新设备电量、温湿度、网络速率和信号状态，并暴露 `window.bridgeInspectionTelemetry`。
- [x] **遥测事件输出**：已派发 `bridge:resource-telemetry` 事件，便于后续替换为 WebSocket 数据源。
- [x] **TelemetryBus**：已新增 `src/features/telemetryBus.js`，保留 `bridge:resource-telemetry` 事件并为后续 WebSocket 替换留出统一接口。
- [ ] **真实 WebSocket 模拟层**：尚未接入真实 WebSocket 或更完整的网络消息回放。
- [x] **3D 资产拆解视图**：点击无人机/机巢卡片会打开资源详情抽屉，内置轻量 Three canvas 和程序化 3D 爆炸图；有 `.glb` 时可加载真实模型。
- [x] **资产健康模拟**：TelemetryBus 已扩展无人机健康度、电池寿命、桨叶状态、机巢温湿度曲线和离线风险。

### 7.2 自动化巡检工作流 (Workflow Kanban)
- [x] **空间连动溯源原型**：点击“#DEF-102 深度裂缝”病害卡片时，系统会自动切换回【飞行控制】页面，并添加目标航点、驱动相机飞到对应桥墩视角。
- [x] **模型表面高亮**：已新增缺陷 marker/目标环/高亮材质，并通过场景聚焦服务接入病害定位。
- [x] **动态拖拽**：已引入 Drag & Drop，Kanban 卡片可在不同列之间拖拽流转。
- [x] **工作流事件输出**：拖拽后会派发 `bridge:workflow-card-moved` 事件。
- [x] **缺陷数据模型**：已新增 `src/features/defectData.js`，包含病害 id、等级、局部坐标、地理坐标、截图和工作流阶段。
- [x] **报告生成**：已新增 HTML 报告、Word 兼容 `.doc` 导出和浏览器打印样式入口。
- [x] **AI 缺陷 mock 闭环**：mock detector 会周期生成裂缝/锈蚀/剥落检测框并自动追加 Kanban 缺陷卡；点击 AI 卡会切回飞控并聚焦对应局部锚点。
- [x] **报告内容扩展**：报告已包含遥测快照、AI 检测结果、任务历史、安全事件和天气快照。
- [x] **默认瑕疵种子**：已新增 `BridgeDefectSeeder`，启动时按固定 seed 在索塔、桥面边缘、斜拉索锚点生成多处裂缝/锈蚀/剥落 marker，并同步进入 AI 卡片、报告和场景聚焦链路。

### 7.3 系统底层配置 (System Management)
- [x] **系统配置状态化原型**：飞行限高、低电量返航阈值、避障灵敏度、AI 模型、置信度、即时告警等控件已同步到 `window.bridgeInspectionSettings`。
- [x] **系统配置事件输出**：配置变更会派发 `bridge:settings-change` 事件，便于后续飞控/AI/告警模块消费。
- [x] **AI 推理壳**：已新增 AI engine provider 接口，默认 mock detector；配置 ONNX runtime 和模型路径后可加载 ONNX session。
- [ ] **真实 AI 权重与热切换**：尚未提交或加载真实 YOLO/ONNX 权重，也未实现生产级模型热切换。
- [x] **RBAC 权限**：已增加 `admin/operator` 前端角色 mock，并控制系统高级配置显隐。
- [x] **电子围栏 (Geo-fencing) UI**：已增加二维局部坐标多边形编辑器，并输出 `bridge:geofence-change`。
- [x] **电子围栏桥梁顶视图**：系统页围栏编辑器已升级为桥梁顶视图，包含水域、桥面、默认航线、机巢、无人机当前位置和瑕疵点。
- [x] **电子围栏飞控 enforcement**：电子围栏状态已接入 `FlightSafetyPolicy`，越界时强制悬停并输出告警事件。
