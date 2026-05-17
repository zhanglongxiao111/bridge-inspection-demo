import io

with io.open('main.js', 'r', encoding='utf-8') as f:
    content = f.read()

old_nav = '''// --- Navigation Routing ---'''
new_nav = '''// --- Navigation Routing & Tabs ---
document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        
        const targetId = e.target.getAttribute('data-tab');
        document.querySelectorAll('.tab-content').forEach(tc => tc.classList.add('hidden'));
        const tc = document.getElementById(targetId);
        if(tc) tc.classList.remove('hidden');
    });
});

'''
content = content.replace(old_nav, new_nav + old_nav)

with io.open('main.js', 'w', encoding='utf-8') as f:
    f.write(content)
