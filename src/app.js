import * as THREE from 'three';
import { Drone } from '../modules/Drone.js';
import { createCameraAnimator } from './core/CameraAnimator.js';
import { createBridgeScene } from './core/bridgeScene.js';
import { initCesiumCommandCenter } from './core/cesium.js';
import { CESIUM_BRIDGE_SELECTED_EVENT } from './core/cesiumBridgeLink.js';
import { createDockLaunchController } from './core/DockLaunchController.js';
import { createEnvironmentSensors } from './core/EnvironmentSensors.js';
import { createFlightSafetyPolicy } from './core/FlightSafetyPolicy.js';
import { createSceneTransitionService } from './core/SceneTransitionService.js';
import { createSceneFocusService } from './core/sceneFocusService.js';
import { createSafetyEffects } from './core/safetyEffects.js';
import { createWeatherEffects } from './core/weatherEffects.js';
import { publishSeededDefects, seedBridgeDefects } from './features/BridgeDefectSeeder.js';
import { initBusinessFeatures } from './features/businessFeatures.js';
import { initDemoSimulation } from './features/demoSimulation.js';
import { findDefectById, getDefaultDefects } from './features/defectData.js';
import { initResourceExplorer } from './features/resourceExplorer.js';
import { initSystemEnhancements } from './features/systemEnhancements.js';
import { initTacticalPayload } from './features/tacticalPayload.js';
import { initFpvCaptureService } from './features/FpvCaptureService.js';
import { createInspectionRuntimeStore, DEFECT_SELECTION_EVENT } from './features/InspectionRuntimeStore.js';
import { createTelemetryBus } from './features/telemetryBus.js';
import { DEFECT_HIGHLIGHT_REQUEST_EVENT, initWorkflowEnhancements } from './features/workflowEnhancements.js';
import { initFlightPanelBinder } from './ui/FlightPanelBinder.js';
import { bindMissionControls } from './ui/missionControls.js';
import { initFpvHud } from './ui/fpvHud.js';
import { initLiveFpvPreview } from './ui/liveFpvPreview.js';
import { bindNavigation } from './ui/navigation.js';
import { createPathVisualizer } from './ui/pathVisualization.js';
import { renderAppShell } from './ui/renderAppShell.js';
import { bindThemeToggle } from './ui/theme.js';

const DEFECT_TARGETS = {
    'DEF-102': {
        waypoint: new THREE.Vector3(250, 110, 140),
        camera: new THREE.Vector3(330, 150, 250),
        lookAt: new THREE.Vector3(250, 105, 0)
    }
};

export function startApp() {
    const appShell = renderAppShell();
    const canvasContainer = document.getElementById('canvas-container');
    if (!canvasContainer) {
        throw new Error('Missing #canvas-container');
    }

    const bridgeScene = createBridgeScene(canvasContainer);
    const weatherEffects = createWeatherEffects({
        scene: bridgeScene.scene,
        ambientLight: window.ambientLight,
        directionalLight: window.directionalLight,
        water: bridgeScene.water
    });
    const drone = new Drone(bridgeScene.scene, bridgeScene.camera, bridgeScene.controls, {
        initialPosition: bridgeScene.dockStation.getLaunchPosition()
    });
    const pathVisualizer = createPathVisualizer(bridgeScene.scene, drone);
    const cameraAnimator = createCameraAnimator(bridgeScene.camera, { duration: 950 });
    const sceneTransitionService = createSceneTransitionService({
        camera: bridgeScene.camera,
        controls: bridgeScene.controls,
        cameraAnimator,
        navigateToView,
        getCesiumViewer: () => cesiumViewer || window.cesiumViewer
    });
    const sceneFocusService = createSceneFocusService({
        scene: bridgeScene.scene,
        camera: bridgeScene.camera,
        controls: bridgeScene.controls,
        cameraAnimator
    });
    const environmentSensors = createEnvironmentSensors({
        obstacles: [bridgeScene.bridgeGroup, bridgeScene.dockStation.group],
        waterObjects: bridgeScene.water ? [bridgeScene.water] : []
    });
    const flightSafetyPolicy = createFlightSafetyPolicy();
    const safetyEffects = createSafetyEffects({
        scene: bridgeScene.scene,
        drone
    });
    const dockLaunchController = createDockLaunchController({
        drone,
        dockStation: bridgeScene.dockStation
    });
    const seededDefects = seedBridgeDefects({
        bridgeScene,
        seed: 20260518,
        count: 7
    });
    const telemetryBus = createTelemetryBus();
    const runtimeStore = createInspectionRuntimeStore();
    const demoSimulation = initDemoSimulation({
        weatherEffects,
        getSafetyState: () => ({
            source: 'flight-safety-policy',
            obstacleDistance: window.bridgeFlightSafetyState?.obstacleDistance,
            waterDistance: window.bridgeFlightSafetyState?.waterDistance
        }),
        onChange: (snapshot) => {
            window.bridgeWeatherSnapshot = snapshot.weather;
            window.bridgeMissionSnapshot = snapshot.mission;
            window.bridgeDemoTelemetrySnapshot = snapshot.telemetry;
            runtimeStore.updateSimulation(snapshot);
        }
    });
    let lastFlightSafetySignature = '';
    let lastProjectionSignature = '';
    let lastProjectionAt = 0;
    let cesiumViewer = null;

    bridgeScene.attachDrone(drone);
    bridgeScene.addFrameTask(({ now, dt }) => {
        cameraAnimator.update(now);
        sceneFocusService.update();

        const environmentStatus = environmentSensors.scan({
            object: drone.mesh
        });
        const flightSafetyState = flightSafetyPolicy.evaluate(drone, environmentStatus, {
            geofence: window.bridgeGeofenceState
        });

        drone.applySafetyPolicyState(flightSafetyState);
        window.bridgeEnvironmentStatus = environmentStatus;
        window.bridgeFlightSafetyState = flightSafetyState;
        lastFlightSafetySignature = dispatchFlightSafetyChange(flightSafetyState, lastFlightSafetySignature);
        runtimeStore.syncFrame({
            drone,
            simulation: demoSimulation.snapshot,
            safety: flightSafetyState,
            resource: telemetryBus.snapshot(),
            ai: window.bridgeAiDetections
        });
        safetyEffects.update({ now });
        weatherEffects.update(dt);
        dockLaunchController.update(now);
        liveFpvPreview.update();
        if (now - lastProjectionAt > 450) {
            const projection = updateFpvProjection({
                seededDefects,
                liveFpvPreview,
                runtimeStore,
                previousSignature: lastProjectionSignature,
                now
            });
            lastProjectionAt = now;
            lastProjectionSignature = projection.signature;
        }
    });
    window.myDrone = drone;
    window.bridgeEnvironmentSensors = environmentSensors;
    window.bridgeSceneFocusService = sceneFocusService;

    bindThemeToggle({
        onThemeChange: (mode) => bridgeScene.applyTheme(mode)
    });

    bindMissionControls({
        drone,
        pathVisualizer,
        dockLaunchController,
        camera: bridgeScene.camera,
        bridgeGroup: bridgeScene.bridgeGroup,
        terrainGroup: bridgeScene.terrainGroup
    });

    bindNavigation({
        canvasContainer,
        getCesiumViewer: () => cesiumViewer || window.cesiumViewer,
        onBeforeViewChange: (targetId) => {
            if (targetId !== 'view-flight-control' && drone.isFPV) {
                drone.toggleView();
                document.body.classList.remove('fpv-mode');
                document.getElementById('fpv-instructions')?.classList.add('hidden');
                tacticalPayload?.disable?.();
            }
        }
    });

    const businessFeatures = initBusinessFeatures({
        navigateTo: navigateToView,
        showDefectModal: appShell.showDefectModal
    });
    const resourceExplorer = initResourceExplorer({ telemetryBus });
    const workflowEnhancements = initWorkflowEnhancements({
        defects: [...getDefaultDefects(), ...seededDefects.defects],
        telemetrySource: runtimeStore,
        getTelemetrySnapshot: () => runtimeStore.snapshot()
    });
    const systemEnhancements = initSystemEnhancements({
        loadAiEngine: false,
        geofence: {
            context: {
                getDronePosition: () => drone.mesh.position,
                defects: seededDefects.defects,
                route: drone.waypoints,
                dockPosition: bridgeScene.dockStation.getLaunchPosition()
            }
        }
    });
    publishSeededDefects(seededDefects);
    const fpvHud = initFpvHud({
        drone,
        telemetryBus,
        getTelemetrySnapshot: () => runtimeStore.snapshot()
    });
    const liveFpvPreview = initLiveFpvPreview({
        scene: bridgeScene.scene,
        drone,
        canvas: document.querySelector('[data-live-fpv-canvas]')
    });
    const fpvCaptureService = initFpvCaptureService({
        liveFpvPreview,
        runtimeStore,
        getTelemetrySnapshot: () => runtimeStore.snapshot(),
        getDetections: () => runtimeStore.snapshot().ai?.detections || []
    });
    const tacticalPayload = initTacticalPayload({
        scene: bridgeScene.scene,
        camera: bridgeScene.camera,
        drone
    });
    const flightPanelBinder = initFlightPanelBinder({
        store: runtimeStore,
        onSelectCapture: (capture) => runtimeStore.selectDefect(capture.defectId || capture.defect?.id || 'DEF-102', {
            defect: capture.defect,
            capture,
            focus: true,
            addWaypoint: false,
            source: 'capture-card'
        })
    });

    window.addEventListener('bridge:resource-telemetry', (event) => runtimeStore.updateResource(event.detail));
    window.addEventListener('bridge:ai-detections-updated', (event) => runtimeStore.updateAi(event.detail));
    window.addEventListener('bridge:inspection-capture', (event) => runtimeStore.addCapture(event.detail));

    window.bridgeModules = {
        businessFeatures,
        resourceExplorer,
        workflowEnhancements,
        systemEnhancements,
        fpvHud,
        liveFpvPreview,
        fpvCaptureService,
        safetyEffects,
        weatherEffects,
        demoSimulation,
        runtimeStore,
        sceneTransitionService,
        dockLaunchController,
        seededDefects,
        tacticalPayload,
        flightPanelBinder,
        telemetryBus
    };

    window.addEventListener(DEFECT_HIGHLIGHT_REQUEST_EVENT, (event) => {
        const detail = event.detail || {};
        runtimeStore.selectDefect(detail.id || detail.defect?.id || 'DEF-102', {
            ...detail,
            focus: true,
            addWaypoint: false,
            source: detail.source || 'workflow-highlight'
        });
    });

    window.addEventListener(DEFECT_SELECTION_EVENT, (event) => {
        const detail = event.detail || {};
        if (detail.focus === false) return;
        focusDefect(detail.defect || detail.capture?.defect || detail, {
            addWaypoint: Boolean(detail.addWaypoint),
            pathVisualizer,
            drone,
            sceneFocusService,
            bridgeScene
        });
    });

    window.addEventListener(CESIUM_BRIDGE_SELECTED_EVENT, (event) => {
        sceneTransitionService.startFromCesium(event.detail);
    });

    window.addEventListener('resize', bridgeScene.resize);
    scheduleCesiumInit((viewer) => {
        cesiumViewer = viewer;
    });
    bridgeScene.start();
}

function scheduleCesiumInit(onReady) {
    window.setTimeout(() => {
        try {
            const viewer = initCesiumCommandCenter({
                googleApiKey: import.meta.env.VITE_GOOGLE_MAP_TILES_API_KEY
            });
            onReady(viewer);
        } catch (error) {
            console.warn('[BridgeInspection] Cesium command center unavailable:', error);
            onReady(null);
        }
    }, 0);
}

function navigateToView(targetId) {
    const navItem = document.querySelector(`.nav-item[data-target="${targetId}"]`);
    if (navItem) {
        navItem.click();
        return true;
    }

    document.querySelectorAll('.view-container').forEach((view) => view.classList.remove('active'));
    document.getElementById(targetId)?.classList.add('active');
    return Boolean(document.getElementById(targetId));
}

function focusDefect(defectInput, {
    addWaypoint,
    pathVisualizer,
    drone,
    sceneFocusService,
    bridgeScene
}) {
    const normalized = normalizeDefectTarget(defectInput);
    navigateToView('view-flight-control');

    if (addWaypoint) {
        drone.addWaypoint(normalized.waypoint);
        pathVisualizer.update();
    }

    bridgeScene.highlightDefect({
        ...normalized.defect,
        position: normalized.waypoint
    });
    sceneFocusService.focusTarget(normalized.waypoint, {
        cameraPosition: normalized.camera,
        duration: 950
    });
}

function normalizeDefectTarget(defectInput = {}) {
    const id = defectInput.id || 'DEF-102';
    const defect = findDefectById(id, getDefaultDefects()) || defectInput;
    const fallback = DEFECT_TARGETS[id] || DEFECT_TARGETS['DEF-102'];
    const waypoint = vectorFrom(defect.localPosition, fallback.waypoint);

    return {
        defect: { ...defect, id },
        waypoint,
        camera: vectorFrom(defect.cameraPosition, fallback.camera)
    };
}

function vectorFrom(value, fallback) {
    if (value instanceof THREE.Vector3) return value.clone();
    if (Array.isArray(value)) return new THREE.Vector3(value[0] ?? fallback.x, value[1] ?? fallback.y, value[2] ?? fallback.z);
    if (value && typeof value === 'object') {
        return new THREE.Vector3(
            Number(value.x ?? fallback.x),
            Number(value.y ?? fallback.y),
            Number(value.z ?? fallback.z)
        );
    }
    return fallback.clone();
}

function dispatchFlightSafetyChange(safetyState, previousSignature) {
    const signature = [
        safetyState.status,
        safetyState.reason,
        safetyState.blockedDirections.join(','),
        Math.round(Math.min(safetyState.distance, 9999) * 10) / 10
    ].join('|');

    if (signature !== previousSignature) {
        window.dispatchEvent(new CustomEvent('bridge:flight-safety-change', {
            detail: safetyState
        }));
    }

    return signature;
}

function updateFpvProjection({
    seededDefects,
    liveFpvPreview,
    runtimeStore,
    previousSignature,
    now
}) {
    if (!seededDefects?.createProjectionPayload || !liveFpvPreview?.camera) {
        return { signature: previousSignature };
    }

    const canvas = liveFpvPreview.canvas;
    const payload = seededDefects.createProjectionPayload({
        camera: liveFpvPreview.camera,
        viewport: {
            width: canvas?.width || 1,
            height: canvas?.height || 1
        },
        frameId: `fpv-${Math.round(now)}`
    });
    const signature = (payload.detections || [])
        .map((item) => `${item.id}:${item.defectId}:${Math.round((item.confidence || 0) * 100)}`)
        .join('|');

    runtimeStore.updateAi(payload);
    if (signature !== previousSignature) {
        window.bridgeAiDetections = payload;
        window.dispatchEvent(new CustomEvent('bridge:ai-detections-updated', { detail: payload }));
    }
    return { signature };
}
