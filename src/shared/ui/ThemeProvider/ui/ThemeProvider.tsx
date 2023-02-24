import React, {type FC, useMemo, useState} from 'react'
import {
    LOCAL_STORAGE_THEME_KEY,
    Theme,
    ThemeContext,
    type TTheme,
} from '../lib/context/themeContext'

const defaultTheme =
    localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as TTheme ||
    Theme.LIGHT

interface ThemeProviderProps {
    initialTheme?: TTheme;
}

const ThemeProvider: FC<ThemeProviderProps> = (props) => {
    const {
        children,
        initialTheme = Theme.LIGHT,
    } = props;
    const [theme, setTheme] = useState(initialTheme || defaultTheme)
    const defaultProps = useMemo(() => ({
        theme,
        setTheme,
    }), [theme])
    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider
