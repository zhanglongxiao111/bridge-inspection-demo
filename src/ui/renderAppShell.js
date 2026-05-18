import { renderCommandCenterView } from './views/commandCenter.js';
import { renderDefectModal } from './views/defectModal.js';
import { renderFlightControlView } from './views/flightControl.js';
import { renderHeader } from './views/header.js';
import { renderResourceManagementView } from './views/resourceManagement.js';
import { renderSystemView } from './views/system.js';
import { renderWorkflowView } from './views/workflow.js';

const assetModules = import.meta.glob('../config/assets.js', { eager: true });

const FALLBACK_ASSETS = {
  avatar: 'https://ui-avatars.com/api/?name=Admin&background=0D8ABC&color=fff',
  crack: '/crack.png',
  dock: '/dock.png',
  drone: '/drone.png',
  favicon: '/favicon.svg',
  fleet: '/fleet.png',
  fpv: '/fpv.png',
};

function getConfiguredAssets() {
  const module = Object.values(assetModules)[0];
  if (!module) return {};

  const configured = module.default || module.ASSETS || module.assets || {};
  const legacy = module.LEGACY_PUBLIC_ALIASES || {};

  return {
    ...configured,
    crack: configured.crack || configured.textures?.crack || legacy.crack,
    dock: configured.dock || configured.ui?.dock || legacy.dock,
    drone: configured.drone || configured.ui?.drone || legacy.drone,
    favicon: configured.favicon || configured.icons?.favicon || legacy.favicon,
    fleet: configured.fleet || configured.ui?.fleet || legacy.fleet,
    fpv: configured.fpv || configured.ui?.fpv || legacy.fpv,
  };
}

export function getAppAssets() {
  return {
    ...FALLBACK_ASSETS,
    ...getConfiguredAssets(),
  };
}

export function showDefectModal() {
  document.getElementById('defect-modal')?.classList.remove('hidden');
}

export function hideDefectModal() {
  document.getElementById('defect-modal')?.classList.add('hidden');
}

function installDefectModalGlobals() {
  window.showDefectModal = showDefectModal;
  window.hideDefectModal = hideDefectModal;
}

function updateHeadAssets(assets) {
  const favicon = document.querySelector('link[rel="icon"]');
  if (favicon && assets.favicon) {
    favicon.setAttribute('href', assets.favicon);
  }
}

export function renderAppShell(target = document.getElementById('ui-layer')) {
  if (!target) {
    throw new Error('Missing #ui-layer');
  }

  const assets = getAppAssets();
  target.classList.add('app-shell');
  target.innerHTML = [
    renderHeader(assets),
    renderFlightControlView(assets),
    renderCommandCenterView(assets),
    renderResourceManagementView(assets),
    renderWorkflowView(assets),
    renderSystemView(assets),
    renderDefectModal(assets),
  ].join('');

  updateHeadAssets(assets);
  installDefectModalGlobals();

  return {
    assets,
    hideDefectModal,
    showDefectModal,
  };
}
