# 🤖 Bridge Inspection Demo - AGENTS.md

## 📌 项目概述 (Project Overview)
本项目是一个 **工业级无人机桥梁巡检 SaaS 平台演示系统** (Bridge Inspection Demo)。
核心目标：展示基于 WebGL (Three.js) 的 3D 无人机飞行仿真、自动化航点规划、机巢状态监控以及全链路巡检工作流（数据采集、AI 分析、人工复核、维修工单）。

## 🏗️ 技术栈 (Tech Stack)
- **核心框架**: Vanilla JavaScript + HTML5
- **3D 引擎**: Three.js (用于无人机物理仿真与场景渲染)
- **GIS 引擎**: CesiumJS (用于指挥中心宏观地球概览)
- **构建工具**: Vite (快速打包与本地开发)
- **样式方案**: Vanilla CSS (全局采用暗色玻璃态 Glassmorphism 设计规范)

## 📁 目录结构 (Directory Structure)
- /index.html: 主入口文件，包含全部模块的 DOM 结构（指挥中心、飞行控制、工作流、系统管理等）。
- /main.js: 前端核心逻辑控制、UI 交互（Tab 切换）、Three.js 场景初始化与渲染循环。
- /modules/Drone.js: 核心领域模型，负责无人机的物理状态机（IDLE, AUTO_NAV, MANUAL）、键盘接管逻辑（WASD）与航点队列管理。
- /style.css: 统一的 UI 样式库，定义了毛玻璃效果面板、动画、浅色/暗色主题变量。
- /public/: 存放 3D 模型 (.glb) 与所有贴图/UI 素材。

## 🎨 UI/UX 设计规范 (Design Aesthetics)
- **极客/工业风**: 系统需要体现出“SaaS 管理系统”的专业感。
- **Glassmorphism (毛玻璃)**: 大量使用半透明背景 ackground: rgba(255, 255, 255, 0.05) 与背景模糊 ackdrop-filter: blur(10px)。
- **主题自适应**: 系统支持 Light/Dark Mode。在进行场景开发时，必须兼顾 updateSceneTheme() 对 Three.js 场景环境光 (AmbientLight/DirectionalLight) 的双向调节。
- **沉浸感**: 在进入第一人称视角 (FPV) 时，非必要的 UI 面板必须通过 ody.fpv-mode 进行 CSS 隐藏（opacity: 0; pointer-events: none;）。

## ⚠️ AI 代理修改守则 (Agent Rules)
当后续 AI 代理 (Agents) 对此项目进行修改时，必须遵守以下核心准则：

1. **谋定而后动**: 在修改现有的 Three.js 渲染管线或 Drone.js 状态机前，必须仔细评估对“人工/自动导航混合控制逻辑”的影响。
2. **纯粹的 CSS**: 尽量保持 Vanilla CSS，不要引入 Tailwind 等庞大的原子化 CSS 框架，利用现有的 CSS Variables 保持全局风格一致。
3. **保持模块化**: 不要把所有的逻辑都塞进 main.js。如果新增例如“AI 病害分析引擎”等逻辑，请在 /modules/ 下新建独立文件。
4. **不破坏当前状态机**: Drone.js 中的状态机设计（IDLE, AUTO_NAV, MANUAL, PHOTOGRAPHING）非常严密，特别是从 IDLE 或 AUTO_NAV 向 MANUAL 切换的键盘打断逻辑，任何对 WASD 键位的修改都需要极端谨慎。
5. **部署无缝**: 该项目部署在 GitHub Pages。确保所有的相对路径资源引用（图片、模型）使用标准的 Vite 规范，不要使用绝对服务器路径。

## 🚀 后续功能扩展方向 (Roadmap)
- [ ] 增加射线检测 (Raycasting) 以实现自动避障（感知桥墩）。
- [ ] 在工作流中打通真实的数据保存逻辑（当前为静态 Mock）。
- [ ] 升级 Cesium 页面，增加全国桥梁资产点位 3D Marker。
