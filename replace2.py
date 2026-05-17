import io

with io.open('main.js', 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace('THREE.PCFSoftShadowMap', 'THREE.PCFShadowMap')

with io.open('main.js', 'w', encoding='utf-8') as f:
    f.write(content)
