export function bindNavigation({ canvasContainer, getCesiumViewer, onBeforeViewChange }) {
    bindSidebarTabs();
    bindMainNavigation(canvasContainer, getCesiumViewer, onBeforeViewChange);
}

function bindSidebarTabs() {
    document.querySelectorAll('.tab-btn').forEach((button) => {
        button.addEventListener('click', () => {
            document.querySelectorAll('.tab-btn').forEach((item) => item.classList.remove('active'));
            button.classList.add('active');

            const targetId = button.getAttribute('data-tab');
            if (!targetId) {
                return;
            }

            document.querySelectorAll('.tab-content').forEach((content) => content.classList.add('hidden'));
            const targetContent = document.getElementById(targetId);
            if (targetContent) targetContent.classList.remove('hidden');
        });
    });
}

function bindMainNavigation(canvasContainer, getCesiumViewer, onBeforeViewChange) {
    document.querySelectorAll('.nav-item').forEach((item) => {
        item.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = item.getAttribute('data-target');
            if (!targetId) return;
            onBeforeViewChange?.(targetId);

            document.querySelectorAll('.nav-item').forEach((nav) => nav.classList.remove('active'));
            item.classList.add('active');

            document.querySelectorAll('.view-container').forEach((view) => view.classList.remove('active'));
            const targetView = document.getElementById(targetId);
            if (targetView) targetView.classList.add('active');

            if (targetId === 'view-command-center') {
                getCesiumViewer()?.resize();
            }

            setCanvasVisibility(canvasContainer, targetId === 'view-flight-control');
            window.dispatchEvent(new CustomEvent('bridge:view-change', {
                detail: { targetId }
            }));
        });
    });
}

function setCanvasVisibility(canvasContainer, isVisible) {
    if (!canvasContainer) return;
    canvasContainer.style.opacity = isVisible ? '1' : '0';
    canvasContainer.style.pointerEvents = isVisible ? 'auto' : 'none';
}
