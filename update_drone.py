import io

with io.open('modules/Drone.js', 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace('this.position = new THREE.Vector3(0, 52.5, 30);', 'this.position = new THREE.Vector3(0, -10, 150);')
content = content.replace('const isFlying = this.position.y > 53', 'const isFlying = this.position.y > -8')

with io.open('modules/Drone.js', 'w', encoding='utf-8') as f:
    f.write(content)
