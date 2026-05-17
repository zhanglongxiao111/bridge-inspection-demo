import io

with io.open('main.js', 'r', encoding='utf-8') as f:
    content = f.read()

old_anim = '''    const dt = clock.getDelta();
    if (!myDrone.isFPV) controls.update();
    myDrone.update(dt);'''

new_anim = '''    const dt = clock.getDelta();
    if (!myDrone.isFPV) controls.update();
    myDrone.update(dt);
    if(window.updatePathVisualization) window.updatePathVisualization();'''

content = content.replace(old_anim, new_anim)

with io.open('main.js', 'w', encoding='utf-8') as f:
    f.write(content)
