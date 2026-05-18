const sunIcon = `
  <svg class="sun-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="12" cy="12" r="5"></circle>
    <line x1="12" y1="1" x2="12" y2="3"></line>
    <line x1="12" y1="21" x2="12" y2="23"></line>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
    <line x1="1" y1="12" x2="3" y2="12"></line>
    <line x1="21" y1="12" x2="23" y2="12"></line>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
  </svg>
`;

const moonIcon = `
  <svg class="moon-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
  </svg>
`;

export function renderHeader(assets) {
  return `
    <header class="global-header glass-panel">
      <div class="header-left">
        <div class="logo">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
            <polyline points="2 17 12 22 22 17"></polyline>
            <polyline points="2 12 12 17 22 12"></polyline>
          </svg>
          <span>DJI Cloud API · 桥梁孪生指控中心</span>
        </div>
        <nav class="main-nav">
          <a href="#" class="nav-item" data-target="view-command-center">指挥中心</a>
          <a href="#" class="nav-item active" data-target="view-flight-control">飞行控制</a>
          <a href="#" class="nav-item" data-target="view-resource-management">资源管理</a>
          <a href="#" class="nav-item" data-target="view-workflow">工作流</a>
          <a href="#" class="nav-item" data-target="view-system">系统管理</a>
        </nav>
      </div>
      <div class="header-right">
        <div class="status-indicators">
          <span class="status online">● M350 RTK 在线</span>
          <span class="status rtk">● RTK 固定解</span>
        </div>
        <button id="theme-toggle" class="theme-btn" title="切换主题">
          ${sunIcon}
          ${moonIcon}
        </button>
        <div class="user-profile">
          <img src="${assets.avatar}" alt="当前用户" class="avatar" />
        </div>
      </div>
    </header>
  `;
}
