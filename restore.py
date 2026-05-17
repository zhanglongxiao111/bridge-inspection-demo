import io

with io.open('main.js', 'r', encoding='utf-8') as f:
    content = f.read()

# We will inject updateSceneTheme right before Animation Loop
old_anim = '''// --- Animation Loop ---
let fraction = 0;'''

new_anim = '''function updateSceneTheme(bgColor, meshColor, gridColor, lightColor, landColor) {
    renderer.setClearColor(bgColor, 1);
    scene.fog.color.setHex(bgColor);
    concreteMat.color.setHex(meshColor);
    terrainMat.color.setHex(landColor);
    
    scene.remove(gridHelper);
    gridHelper = new THREE.GridHelper(3000, 150, lightColor, gridColor);
    gridHelper.position.y = -14.5;
    gridHelper.material.transparent = true;
    gridHelper.material.opacity = 0.2;
    scene.add(gridHelper);
}

// --- Animation Loop ---
let fraction = 0;'''

content = content.replace(old_anim, new_anim)

with io.open('main.js', 'w', encoding='utf-8') as f:
    f.write(content)
