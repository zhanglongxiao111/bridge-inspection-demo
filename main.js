import './style.css';
import { startApp } from './src/app.js';

try {
    startApp();
} catch (error) {
    window.bridgeStartupError = error;
    console.error('[BridgeInspection] Startup failed:', error);
}
