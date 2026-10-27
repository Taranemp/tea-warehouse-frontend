export const themeService = {

    // Get theme from localStorage
    getTheme: () => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme && (savedTheme === 'dark' || savedTheme === 'light')) {
            return savedTheme;
        }
        return null;
    },

    // Set theme in localStorage
    setTheme: (theme) => {
        if (theme === 'dark' || theme === 'light') {
            localStorage.setItem('theme', theme);
            document.documentElement.setAttribute("data-bs-theme", theme);
            return true;
        }
        return false;
    },

    // Initialize theme (called once at app start)
    initializeTheme: () => {
        const savedTheme = themeService.getTheme();
        const defaultTheme = savedTheme || 'light';

        if (!savedTheme) {
            localStorage.setItem('theme', defaultTheme);
        }

        document.documentElement.setAttribute("data-bs-theme", defaultTheme);
        return defaultTheme;
    }
};