(() => {
  const root = document.documentElement;
  const button = document.querySelector('[data-theme-toggle]');
  const saved = localStorage.getItem('theme');
  if (saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches)) root.classList.add('dark');
  if (!button) return;
  const update = () => {
    const dark = root.classList.contains('dark');
    button.setAttribute('aria-label', dark ? 'Switch to light theme' : 'Switch to dark theme');
    button.setAttribute('aria-pressed', String(dark));
    button.textContent = dark ? '☼' : '☾';
  };
  update();
  button.addEventListener('click', () => {
    const dark = root.classList.toggle('dark');
    localStorage.setItem('theme', dark ? 'dark' : 'light');
    update();
  });
})();
