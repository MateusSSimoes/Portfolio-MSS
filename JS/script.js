 const toggleBtn = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');

    // Carrega tema salvo ou padrão (dark)
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.body.classList.toggle('light-mode', savedTheme === 'light');
    themeIcon.textContent = savedTheme === 'light' ? 'light_mode' : 'dark_mode';

    toggleBtn.addEventListener('click', () => {
      document.body.classList.toggle('light-mode');
      const isLight = document.body.classList.contains('light-mode');
      themeIcon.textContent = isLight ? 'light_mode' : 'dark_mode';
      localStorage.setItem('theme', isLight ? 'light' : 'dark');
    });