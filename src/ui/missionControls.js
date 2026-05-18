import * as THREE from 'three';

const TARGET_MAP = {
    'pylon-1': new THREE.Vector3(-250, 110, 140),
    'pylon-2': new THREE.Vector3(250, 110, 140),
    'cable-left': new THREE.Vector3(-150, 85, 110),
    'pier-3': new THREE.Vector3(0, 45, 160)
};

export function bindMissionControls({
    drone,
    pathVisualizer,
    dockLaunchController,
    camera,
    bridgeGroup,
    terrainGroup
}) {
    const updatePath = () => pathVisualizer.update();
    bindWaypointNodeList(drone, updatePath);
    bindDroneState(drone, updatePath);
    bindMissionButtons(drone, dockLaunchController);
    bindFpvToggle(drone);
    bindDoubleClickWaypoints({ drone, camera, bridgeGroup, terrainGroup, updatePath });

    window.updatePathVisualization = updatePath;
    window.setTimeout(updatePath, 500);
}

function bindWaypointNodeList(drone, updatePath) {
    document.querySelectorAll('.node-item').forEach((item) => {
        item.addEventListener('click', () => {
            const targetId = item.getAttribute('data-target');
            if (!TARGET_MAP[targetId]) return;

            drone.addWaypoint(TARGET_MAP[targetId]);
            updatePath();
        });
    });
}

function bindDroneState(drone, updatePath) {
    drone.onStateChange = (state) => {
        const btnResume = document.getElementById('btn-resume-mission');
        const btnStart = document.getElementById('btn-start-mission');

        if (btnResume) {
            if (state === 'MANUAL' && drone.waypoints.length > 0) {
                btnResume.classList.remove('hidden');
            } else {
                btnResume.classList.add('hidden');
            }
        }

        if (btnStart) {
            if (state !== 'IDLE') {
                btnStart.classList.add('hidden');
            } else if (drone.waypoints.length > 0) {
                btnStart.classList.remove('hidden');
            }
        }

        updatePath();
    };
}

function bindMissionButtons(drone, dockLaunchController) {
    const btnStart = document.getElementById('btn-start-mission');
    if (btnStart) {
        btnStart.addEventListener('click', async () => {
            btnStart.disabled = true;
            btnStart.textContent = '🚁 机巢开盖起飞中';
            const launched = dockLaunchController
                ? await dockLaunchController.startLaunch()
                : true;
            if (launched) {
                drone.startMission();
            }
            btnStart.disabled = false;
            btnStart.textContent = '✈️ 起飞并执行任务';
        });
    }

    const btnResume = document.getElementById('btn-resume-mission');
    if (btnResume) {
        btnResume.addEventListener('click', () => drone.resumeMission());
    }
}

function bindFpvToggle(drone) {
    const btnFpv = document.getElementById('btn-toggle-fpv');
    const fpvInstructions = document.getElementById('fpv-instructions');

    if (!btnFpv) {
        return;
    }

    btnFpv.addEventListener('click', () => {
        const isFpv = drone.toggleView();

        if (isFpv) {
            document.body.classList.add('fpv-mode');
            btnFpv.textContent = '💻 退出 FPV';
            btnFpv.classList.replace('secondary-btn', 'danger-btn');
            fpvInstructions?.classList.remove('hidden');
        } else {
            document.body.classList.remove('fpv-mode');
            btnFpv.textContent = '💻 切换第一人称 (FPV)';
            btnFpv.classList.replace('danger-btn', 'secondary-btn');
            fpvInstructions?.classList.add('hidden');
        }
    });
}

function bindDoubleClickWaypoints({ drone, camera, bridgeGroup, terrainGroup, updatePath }) {
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    window.addEventListener('dblclick', (event) => {
        const flightView = document.getElementById('view-flight-control');
        if (!flightView?.classList.contains('active') || drone.isFPV) {
            return;
        }

        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

        raycaster.setFromCamera(mouse, camera);
        const intersects = raycaster.intersectObjects([bridgeGroup, terrainGroup], true);
        if (intersects.length === 0) {
            return;
        }

        if (event.shiftKey) {
            drone.removeLastWaypoint();
        } else {
            drone.addWaypoint(intersects[0].point);
        }

        updatePath();
    });
}
