import { useContext } from 'react'
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext, type TTheme } from '../context/themeContext'

interface UseThemeResult {
    theme: TTheme
    toggleTheme: () => void
}

export function useTheme(): UseThemeResult {
    const { theme = Theme.LIGHT, setTheme } = useContext(ThemeContext)
    const toggleTheme = () => {
        let newTheme: TTheme;
        switch (theme) {
            case Theme.DARK:
                newTheme = Theme.LIGHT;
                break;
            case Theme.LIGHT:
                newTheme = Theme.GREEN;
                break;
            case Theme.GREEN:
                newTheme = Theme.DARK;
                break;
        }
        setTheme?.(newTheme)
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
    }
    document.body.className = theme

    return {
        theme,
        toggleTheme,
    }
}
