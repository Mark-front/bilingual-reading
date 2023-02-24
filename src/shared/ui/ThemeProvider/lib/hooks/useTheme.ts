import {useContext} from 'react'
import {
    LOCAL_STORAGE_THEME_KEY,
    Theme,
    ThemeContext,
    type TTheme,
} from '../context/themeContext'

interface UseThemeResult {
    theme: TTheme
    toggleTheme: () => void
}

export function useTheme(): UseThemeResult {
    const {theme = Theme.LIGHT, setTheme} = useContext(ThemeContext)
    const toggleTheme = () => {
        const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK
        setTheme?.(newTheme)
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
    }

    return {
        theme,
        toggleTheme,
    }
}
