export const ACCESS_CONTROL_EVENT = 'bridge:access-control-change';

const noop = () => {};

export const ACCESS_ROLES = {
  admin: {
    label: '管理员',
    permissions: [
      'system:read',
      'system:write',
      'system:advanced',
      'ai:configure',
      'geofence:edit',
    ],
  },
  operator: {
    label: '操作员',
    permissions: [
      'system:read',
      'geofence:edit',
    ],
  },
};

export let AccessControlState = createAccessControlState();

function getDocument(root) {
  if (root && root.nodeType === 9) return root;
  if (root && root.ownerDocument) return root.ownerDocument;
  if (typeof document !== 'undefined') return document;
  return null;
}

function getWindow(doc) {
  if (doc && doc.defaultView) return doc.defaultView;
  if (typeof window !== 'undefined') return window;
  return null;
}

function emit(win, name, detail) {
  if (!win || typeof win.CustomEvent !== 'function') return;
  win.dispatchEvent(new win.CustomEvent(name, { detail }));
}

function normalizeRole(role) {
  return ACCESS_ROLES[role] ? role : 'operator';
}

export function createAccessControlState(options = {}) {
  const role = normalizeRole(options.role || 'operator');
  const permissions = [...ACCESS_ROLES[role].permissions];

  return {
    role,
    userId: options.userId || `mock-${role}`,
    label: ACCESS_ROLES[role].label,
    permissions,
    updatedAt: new Date().toISOString(),
    can(permission) {
      return permissions.includes(permission);
    },
  };
}

function createEmptyController(state) {
  return {
    active: false,
    state,
    setRole: noop,
    getState: () => state,
    destroy: noop,
  };
}

function textOf(element) {
  return element ? element.textContent.trim().replace(/\s+/g, ' ') : '';
}

function findSystemView(root) {
  if (!root || typeof root.querySelector !== 'function') return null;
  return root.querySelector('#view-system');
}

function createRoleSwitcher(doc, state) {
  const shell = doc.createElement('div');
  shell.className = 'system-role-switcher glass-panel';
  shell.setAttribute('data-system-enhancement', 'access-control');

  const label = doc.createElement('span');
  label.className = 'system-role-label';
  label.textContent = '演示角色';

  const buttons = doc.createElement('div');
  buttons.className = 'system-role-buttons';

  Object.keys(ACCESS_ROLES).forEach((role) => {
    const button = doc.createElement('button');
    button.type = 'button';
    button.className = 'system-role-button';
    button.dataset.role = role;
    button.textContent = ACCESS_ROLES[role].label;
    button.setAttribute('aria-pressed', String(role === state.role));
    buttons.appendChild(button);
  });

  shell.append(label, buttons);
  return shell;
}

function markAdvancedItems(view) {
  const marked = [];
  const panels = Array.from(view.querySelectorAll('.settings-panel'));

  panels.forEach((panel) => {
    const title = textOf(panel.querySelector('h3'));
    if (/AI|engine|model|vision|引擎|模型|视觉/i.test(title)) {
      panel.dataset.accessPermission = 'ai:configure';
      panel.classList.add('system-admin-only');
      marked.push(panel);
    }
  });

  Array.from(view.querySelectorAll('.setting-item')).forEach((item) => {
    const label = textOf(item.querySelector('label'));
    if (/radar|sensitivity|confidence|alert|雷达|灵敏度|置信度|告警/i.test(label)) {
      item.dataset.accessPermission = item.closest('.settings-panel')?.dataset.accessPermission || 'system:advanced';
      item.classList.add('system-admin-only');
      marked.push(item);
    }
  });

  return marked;
}

function applyAccess(view, state) {
  const canSeeAdvanced = state.can('system:advanced') || state.can('ai:configure');
  view.dataset.accessRole = state.role;

  view.querySelectorAll('.system-admin-only').forEach((element) => {
    const permission = element.dataset.accessPermission || 'system:advanced';
    const visible = canSeeAdvanced || state.can(permission);
    element.hidden = !visible;
    element.setAttribute('aria-hidden', String(!visible));
  });

  view.querySelectorAll('.system-role-button').forEach((button) => {
    button.classList.toggle('active', button.dataset.role === state.role);
    button.setAttribute('aria-pressed', String(button.dataset.role === state.role));
  });
}

export function initAccessControl(options = {}) {
  const root = options.root || getDocument();
  const doc = getDocument(root);
  const win = getWindow(doc);
  const state = createAccessControlState(options);

  AccessControlState = state;
  if (win) win.AccessControlState = state;

  const view = findSystemView(root);
  if (!view || !doc) {
    return createEmptyController(state);
  }

  const disposers = [];
  const marked = markAdvancedItems(view);
  const switcher = options.showRoleSwitcher === false
    ? null
    : createRoleSwitcher(doc, state);

  if (switcher) {
    const header = view.querySelector('.resource-header');
    if (header) {
      header.appendChild(switcher);
    } else {
      view.prepend(switcher);
    }

    const onClick = (event) => {
      const button = event.target.closest('.system-role-button');
      if (!button) return;
      controller.setRole(button.dataset.role);
    };
    switcher.addEventListener('click', onClick);
    disposers.push(() => switcher.removeEventListener('click', onClick));
  }

  const publish = () => {
    if (win) win.AccessControlState = AccessControlState;
    emit(win, ACCESS_CONTROL_EVENT, AccessControlState);
    if (typeof options.onChange === 'function') options.onChange(AccessControlState);
  };

  const controller = {
    active: true,
    get state() {
      return AccessControlState;
    },
    getState() {
      return AccessControlState;
    },
    setRole(role) {
      const next = createAccessControlState({
        role,
        userId: options.userId || `mock-${normalizeRole(role)}`,
      });
      AccessControlState = next;
      applyAccess(view, next);
      publish();
    },
    destroy() {
      disposers.splice(0).forEach((dispose) => dispose());
      marked.forEach((element) => {
        element.hidden = false;
        element.removeAttribute('aria-hidden');
        element.classList.remove('system-admin-only');
        delete element.dataset.accessPermission;
      });
      if (switcher?.parentNode) switcher.parentNode.removeChild(switcher);
      delete view.dataset.accessRole;
    },
  };

  applyAccess(view, state);
  publish();
  return controller;
}

export default initAccessControl;
