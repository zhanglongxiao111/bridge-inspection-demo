import io

with io.open('main.js', 'r', encoding='utf-8') as f:
    content = f.read()

old_fpv_on = '''          if(isFpv) {
              btnFpv.textContent = "💻 退出 FPV";'''
new_fpv_on = '''          if(isFpv) {
              document.body.classList.add('fpv-mode');
              btnFpv.textContent = "💻 退出 FPV";'''

old_fpv_off = '''          } else {
              btnFpv.textContent = "💻 切换第一人称 (FPV)";'''
new_fpv_off = '''          } else {
              document.body.classList.remove('fpv-mode');
              btnFpv.textContent = "💻 切换第一人称 (FPV)";'''

content = content.replace(old_fpv_on, new_fpv_on)
content = content.replace(old_fpv_off, new_fpv_off)

with io.open('main.js', 'w', encoding='utf-8') as f:
    f.write(content)
