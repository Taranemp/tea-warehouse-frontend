import { createContext, useContext, useState, useEffect } from "react";
import { themeService } from "../services/themeService";


// ThemeProvider is designed to handle dark and light theme
// useTheme: is for accessing [theme, setTheme] in other components
// setTheme is for changing theme from dark <-> light
// theme is [dark OR light]

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState(() => themeService.initializeTheme());

    useEffect(() => {
        themeService.setTheme(theme);
    }, [theme]);


    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
}