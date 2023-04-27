import React, { ReactNode, useMemo, useState } from 'react'
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext, type TTheme } from '../lib/context/themeContext'

const defaultTheme =
    localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as TTheme ||
    Theme.LIGHT

interface ThemeProviderProps {
    children: ReactNode;
    initialTheme?: TTheme;
}

const ThemeProvider = (props: ThemeProviderProps) => {
    const {
        children,
        initialTheme = Theme.LIGHT,
    } = props;

    const [ theme, setTheme ] = useState(initialTheme || defaultTheme)
    const defaultProps = useMemo(() => ({
        theme,
        setTheme,
    }), [ theme ])
    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider
