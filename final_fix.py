import io
import re

with io.open('main.js', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Update the FPV toggle text and add the fpv-mode class properly
content = re.sub(
    r'(const isFpv = myDrone\.toggleView\(\);\s+if\(isFpv\) \{)\s+btnFpv\.textContent = [^;]+;\s+btnFpv\.classList\.replace\([^;]+;',
    r"\1\n            document.body.classList.add('fpv-mode');\n            btnFpv.textContent = \"💻 退出 FPV\";\n            btnFpv.classList.replace('secondary-btn', 'danger-btn');",
    content
)

content = re.sub(
    r'(\} else \{)\s+btnFpv\.textContent = [^;]+;\s+btnFpv\.classList\.replace\([^;]+;',
    r"\1\n            document.body.classList.remove('fpv-mode');\n            btnFpv.textContent = \"💻 切换第一人称 (FPV)\";\n            btnFpv.classList.replace('danger-btn', 'secondary-btn');",
    content
)

# 2. Add lighting adjustments to updateSceneTheme
old_theme = '''    gridHelper.material.opacity = 0.2;
    scene.add(gridHelper);
}'''

new_theme = '''    gridHelper.material.opacity = 0.2;
    scene.add(gridHelper);
    
    if (bgColor === 0xe5e5e5) {
        ambientLight.intensity = 1.0;
        directionalLight.intensity = 1.2;
    } else {
        ambientLight.intensity = 0.6;
        directionalLight.intensity = 0.8;
    }
}'''
content = content.replace(old_theme, new_theme)

with io.open('main.js', 'w', encoding='utf-8') as f:
    f.write(content)
