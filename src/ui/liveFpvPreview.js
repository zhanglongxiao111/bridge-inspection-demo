import * as THREE from 'three';

export function initLiveFpvPreview(options = {}) {
    return new LiveFpvPreview(options);
}

export class LiveFpvPreview {
    constructor({ scene, drone, canvas } = {}) {
        this.scene = scene;
        this.drone = drone;
        this.canvas = canvas;
        this.active = Boolean(scene && drone && canvas);
        this.camera = new THREE.PerspectiveCamera(52, 16 / 9, 0.1, 2500);
        this.renderer = null;
        this.captureCanvas = null;
        this.captureContext = null;

        if (this.active) {
            this.renderer = new THREE.WebGLRenderer({
                canvas,
                antialias: true,
                alpha: true,
                preserveDrawingBuffer: true
            });
            this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
            this.renderer.setClearColor(0x02070b, 1);
            this.resize();
        }
    }

    resize() {
        if (!this.active) return;
        const box = this.canvas.getBoundingClientRect();
        const width = Math.max(1, Math.floor(box.width));
        const height = Math.max(1, Math.floor(box.height));
        this.camera.aspect = width / height;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(width, height, false);
    }

    update() {
        if (!this.active) return;
        const pose = this.drone.getFpvCameraPose();
        const offset = pose.offset.clone().applyQuaternion(this.drone.mesh.quaternion);
        const lookAt = pose.lookAt.clone().applyQuaternion(this.drone.mesh.quaternion);
        this.camera.position.copy(this.drone.mesh.position).add(offset);
        this.camera.lookAt(this.drone.mesh.position.clone().add(lookAt));
        this.renderer.render(this.scene, this.camera);
    }

    captureFrame({ overlayDetections } = {}) {
        if (this.active) {
            this.update();
        }

        const capturedAt = new Date().toISOString();
        const sourceCanvas = this.renderer?.domElement || this.canvas;
        const width = Math.max(1, Number(sourceCanvas?.width || 0));
        const height = Math.max(1, Number(sourceCanvas?.height || 0));
        const detections = normalizeDetections(overlayDetections);

        if (!detections.length) {
            const imageUrl = readCanvasDataUrl(sourceCanvas);
            if (imageUrl) {
                return { imageUrl, width, height, capturedAt };
            }
        }

        const overlayCanvas = this.getCaptureCanvas(width, height);
        if (!overlayCanvas || !this.captureContext) {
            return { imageUrl: '', width, height, capturedAt };
        }

        const context = this.captureContext;
        context.clearRect(0, 0, width, height);

        if (sourceCanvas) {
            context.drawImage(sourceCanvas, 0, 0, width, height);
        } else {
            context.fillStyle = '#02070b';
            context.fillRect(0, 0, width, height);
        }

        drawDetectionOverlays(context, detections, width, height);

        return {
            imageUrl: readCanvasDataUrl(overlayCanvas) || '',
            width,
            height,
            capturedAt
        };
    }

    getCaptureCanvas(width, height) {
        const doc = this.canvas?.ownerDocument || (typeof document !== 'undefined' ? document : null);
        if (!doc) return null;

        if (!this.captureCanvas) {
            this.captureCanvas = doc.createElement('canvas');
            this.captureContext = this.captureCanvas.getContext('2d');
        }

        if (this.captureCanvas.width !== width) this.captureCanvas.width = width;
        if (this.captureCanvas.height !== height) this.captureCanvas.height = height;
        return this.captureCanvas;
    }

    destroy() {
        this.renderer?.dispose?.();
        this.active = false;
        this.captureCanvas = null;
        this.captureContext = null;
    }
}

function normalizeDetections(input) {
    if (Array.isArray(input)) return input;
    if (Array.isArray(input?.detections)) return input.detections;
    return [];
}

function readCanvasDataUrl(canvas) {
    if (!canvas || typeof canvas.toDataURL !== 'function') return '';

    try {
        return canvas.toDataURL('image/png');
    } catch (error) {
        console.warn('[LiveFpvPreview] Unable to capture canvas frame.', error);
        return '';
    }
}

function drawDetectionOverlays(context, detections, width, height) {
    detections.slice(0, 12).forEach((detection, index) => {
        const rect = bboxToPixels(detection?.bbox, width, height);
        if (!rect.width || !rect.height) return;

        const color = severityColor(detection?.severity);
        const lineWidth = Math.max(2, Math.round(width / 480));
        const fontSize = Math.max(12, Math.min(18, Math.round(width / 42)));
        const label = formatDetectionLabel(detection, index);
        const labelPadding = Math.max(5, Math.round(fontSize * 0.42));
        const labelHeight = fontSize + labelPadding * 2;

        context.font = `600 ${fontSize}px Inter, Arial, sans-serif`;
        const labelWidth = Math.min(
            width - rect.x,
            Math.ceil(context.measureText(label).width) + labelPadding * 2
        );
        const labelY = Math.max(0, rect.y - labelHeight);

        context.save();
        context.lineWidth = lineWidth;
        context.strokeStyle = color;
        context.fillStyle = color;
        context.shadowColor = 'rgba(0, 0, 0, 0.45)';
        context.shadowBlur = lineWidth * 2;
        context.strokeRect(rect.x, rect.y, rect.width, rect.height);

        context.shadowBlur = 0;
        context.globalAlpha = 0.92;
        context.fillRect(rect.x, labelY, labelWidth, labelHeight);
        context.globalAlpha = 1;
        context.fillStyle = '#031018';
        context.textBaseline = 'middle';
        context.fillText(label, rect.x + labelPadding, labelY + labelHeight / 2);
        context.restore();
    });
}

function bboxToPixels(bbox = {}, width, height) {
    const raw = {
        x: finiteNumber(bbox.x ?? bbox.left),
        y: finiteNumber(bbox.y ?? bbox.top),
        width: finiteNumber(bbox.width ?? bbox.w),
        height: finiteNumber(bbox.height ?? bbox.h)
    };
    const isUnit = Math.abs(raw.x) <= 1 && Math.abs(raw.y) <= 1
        && Math.abs(raw.width) <= 1 && Math.abs(raw.height) <= 1;
    const isPercent = !isUnit && Math.abs(raw.x) <= 100 && Math.abs(raw.y) <= 100
        && Math.abs(raw.width) <= 100 && Math.abs(raw.height) <= 100;
    const scaleX = isUnit ? width : isPercent ? width / 100 : 1;
    const scaleY = isUnit ? height : isPercent ? height / 100 : 1;
    const x = clamp(raw.x * scaleX, 0, width);
    const y = clamp(raw.y * scaleY, 0, height);
    const right = clamp(x + raw.width * scaleX, x, width);
    const bottom = clamp(y + raw.height * scaleY, y, height);

    return {
        x,
        y,
        width: right - x,
        height: bottom - y
    };
}

function formatDetectionLabel(detection = {}, index) {
    const label = localizeLabel(detection.label || detection.type || `detection-${index + 1}`);
    const confidence = Number(detection.confidence);
    if (!Number.isFinite(confidence)) return String(label);
    return `${label} ${Math.round(confidence * 100)}%`;
}

function localizeLabel(label) {
    return {
        crack: '裂缝',
        corrosion: '锈蚀',
        spalling: '剥落',
        debris: '抛洒物',
        defect: '异常'
    }[String(label).toLowerCase()] || label;
}

function severityColor(severity = '') {
    return {
        critical: '#ef4444',
        high: '#f97316',
        medium: '#facc15',
        low: '#38bdf8'
    }[String(severity).toLowerCase()] || '#22d3ee';
}

function finiteNumber(value, fallback = 0) {
    const number = Number(value);
    return Number.isFinite(number) ? number : fallback;
}

function clamp(value, min, max) {
    return Math.min(max, Math.max(min, value));
}

export default initLiveFpvPreview;
