import * as THREE from 'three';
import { createCatmullRomFlightPath } from '../core/FlightPathCurve.js';

export function createPathVisualizer(scene, drone) {
    const pathMaterial = new THREE.LineBasicMaterial({
        color: 0xd4af37,
        opacity: 0.8,
        transparent: true
    });

    let pathLine = null;
    const waypointMarkers = [];

    function clear() {
        if (pathLine) {
            scene.remove(pathLine);
            pathLine.geometry.dispose();
            pathLine = null;
        }

        waypointMarkers.forEach((marker) => {
            scene.remove(marker);
            marker.geometry.dispose();
            marker.material.dispose();
        });
        waypointMarkers.length = 0;
    }

    function update() {
        clear();

        if (drone.waypoints.length === 0) {
            return;
        }

        const points = createFlightPathPoints(drone);
        const geometry = new THREE.BufferGeometry().setFromPoints(points);
        pathLine = new THREE.Line(geometry, pathMaterial);
        scene.add(pathLine);

        drone.waypoints.forEach((waypoint, index) => {
            const marker = new THREE.Mesh(
                new THREE.SphereGeometry(1.5),
                new THREE.MeshBasicMaterial({ color: index === 0 ? 0xff0000 : 0xd4af37 })
            );
            marker.position.copy(waypoint);
            scene.add(marker);
            waypointMarkers.push(marker);
        });
    }

    return { update, clear };
}

function createFlightPathPoints(drone) {
    const controlPoints = [drone.mesh.position.clone(), ...drone.waypoints];

    if (controlPoints.length < 3) {
        return controlPoints;
    }

    const flightPath = createCatmullRomFlightPath(controlPoints, {
        curveType: 'centripetal',
        tension: 0.35
    });

    return flightPath.getSpacedPoints(Math.max(32, controlPoints.length * 24));
}
