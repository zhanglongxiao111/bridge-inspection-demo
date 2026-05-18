export function bindThemeToggle({ onThemeChange }) {
    const themeButton = document.getElementById('theme-toggle');
    const sunIcon = document.querySelector('.sun-icon');
    const moonIcon = document.querySelector('.moon-icon');

    if (!themeButton) {
        return;
    }

    let isLightMode = false;

    themeButton.addEventListener('click', () => {
        isLightMode = !isLightMode;
        const mode = isLightMode ? 'light' : 'dark';

        if (isLightMode) {
            document.documentElement.setAttribute('data-theme', 'light');
            if (sunIcon) sunIcon.style.display = 'none';
            if (moonIcon) moonIcon.style.display = 'block';
        } else {
            document.documentElement.removeAttribute('data-theme');
            if (sunIcon) sunIcon.style.display = 'block';
            if (moonIcon) moonIcon.style.display = 'none';
        }

        onThemeChange(mode);
    });
}
