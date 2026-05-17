import io

with io.open('main.js', 'r', encoding='utf-8') as f:
    content = f.read()

old_ui_str = '''  // FPV Toggle Button
  const btnFpv = document.getElementById('btn-toggle-fpv');
  const fpvInstructions = document.getElementById('fpv-instructions');
  if(btnFpv) {
      btnFpv.addEventListener('click', () => {
          const isFpv = myDrone.toggleView();
          if(isFpv) {
              btnFpv.textContent = "退出 FPV (返回上帝视角)";
              btnFpv.classList.replace('primary-btn', 'danger-btn');
              fpvInstructions.classList.remove('hidden');
          } else {
              btnFpv.textContent = "切换第一人称 (FPV)";
              btnFpv.classList.replace('danger-btn', 'primary-btn');
              fpvInstructions.classList.add('hidden');
          }
      });
  }

  // Double Click Raycaster for TPV AutoNav
  const raycaster = new THREE.Raycaster();
  const mouse = new THREE.Vector2();
  
  window.addEventListener('dblclick', (e) => {
      if(document.getElementById('view-flight-control').classList.contains('active') && !myDrone.isFPV) {
          mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
          mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
          
          raycaster.setFromCamera(mouse, camera);
          const intersects = raycaster.intersectObjects([bridgeGroup, terrainGroup], true);
          
          if(intersects.length > 0) {
              const hitPoint = intersects[0].point;
              myDrone.flyTo(hitPoint);
              
              const marker = new THREE.Mesh(
                  new THREE.SphereGeometry(2),
                  new THREE.MeshBasicMaterial({ color: 0xd4af37 })
              );
              marker.position.copy(hitPoint);
              scene.add(marker);
              setTimeout(() => scene.remove(marker), 1000);
          }
      }
  });'''

new_ui_str = '''  // --- Path Visualization ---
  const pathMaterial = new THREE.LineBasicMaterial({ color: 0xd4af37, opacity: 0.8, transparent: true });
  let pathLine = null;
  const waypointMarkers = [];
  
  window.updatePathVisualization = function() {
      if(pathLine) {
          scene.remove(pathLine);
          pathLine.geometry.dispose();
      }
      waypointMarkers.forEach(m => scene.remove(m));
      waypointMarkers.length = 0;
      
      if(myDrone.waypoints.length > 0) {
          const points = [myDrone.mesh.position.clone(), ...myDrone.waypoints];
          const geometry = new THREE.BufferGeometry().setFromPoints(points);
          pathLine = new THREE.Line(geometry, pathMaterial);
          scene.add(pathLine);
          
          myDrone.waypoints.forEach((wp, idx) => {
              const marker = new THREE.Mesh(
                  new THREE.SphereGeometry(1.5),
                  new THREE.MeshBasicMaterial({ color: idx === 0 ? 0xff0000 : 0xd4af37 })
              );
              marker.position.copy(wp);
              scene.add(marker);
              waypointMarkers.push(marker);
          });
      }
  };

  myDrone.onStateChange = (state) => {
      const btnResume = document.getElementById('btn-resume-mission');
      const btnStart = document.getElementById('btn-start-mission');
      if(state === 'MANUAL' && myDrone.waypoints.length > 0) {
          btnResume.classList.remove('hidden');
      } else {
          btnResume.classList.add('hidden');
      }
      
      if(state !== 'IDLE') {
          btnStart.classList.add('hidden');
      } else if (myDrone.waypoints.length > 0) {
          btnStart.classList.remove('hidden');
      }
      window.updatePathVisualization();
  };

  const btnStart = document.getElementById('btn-start-mission');
  if(btnStart) btnStart.addEventListener('click', () => myDrone.startMission());
  
  const btnResume = document.getElementById('btn-resume-mission');
  if(btnResume) btnResume.addEventListener('click', () => myDrone.resumeMission());

  // FPV Toggle Button
  const btnFpv = document.getElementById('btn-toggle-fpv');
  const fpvInstructions = document.getElementById('fpv-instructions');
  if(btnFpv) {
      btnFpv.addEventListener('click', () => {
          const isFpv = myDrone.toggleView();
          if(isFpv) {
              btnFpv.textContent = "退出 FPV";
              btnFpv.classList.replace('secondary-btn', 'danger-btn');
              fpvInstructions.classList.remove('hidden');
          } else {
              btnFpv.textContent = "切换第一人称 (FPV)";
              btnFpv.classList.replace('danger-btn', 'secondary-btn');
              fpvInstructions.classList.add('hidden');
          }
      });
  }

  // Double Click Raycaster for TPV AutoNav
  const raycaster = new THREE.Raycaster();
  const mouse = new THREE.Vector2();
  
  window.addEventListener('dblclick', (e) => {
      if(document.getElementById('view-flight-control').classList.contains('active') && !myDrone.isFPV) {
          mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
          mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
          
          raycaster.setFromCamera(mouse, camera);
          const intersects = raycaster.intersectObjects([bridgeGroup, terrainGroup], true);
          
          if(intersects.length > 0) {
              const hitPoint = intersects[0].point;
              if (e.shiftKey) {
                  myDrone.removeLastWaypoint();
              } else {
                  myDrone.addWaypoint(hitPoint);
              }
              window.updatePathVisualization();
          }
      }
  });'''

content = content.replace(old_ui_str, new_ui_str)

old_animate = '''    const dt = clock.getDelta();
    if (!myDrone.isFPV) controls.update();
    myDrone.update(dt);'''

new_animate = '''    const dt = clock.getDelta();
    if (!myDrone.isFPV) controls.update();
    myDrone.update(dt);
    if(window.updatePathVisualization) window.updatePathVisualization();'''

content = content.replace(old_animate, new_animate)

with io.open('main.js', 'w', encoding='utf-8') as f:
    f.write(content)
