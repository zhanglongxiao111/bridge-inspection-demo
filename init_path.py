import io

with io.open('main.js', 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace('waypointMarkers.push(marker);\n        });\n    }\n};', 'waypointMarkers.push(marker);\n        });\n    }\n};\nsetTimeout(window.updatePathVisualization, 500);')

with io.open('main.js', 'w', encoding='utf-8') as f:
    f.write(content)
