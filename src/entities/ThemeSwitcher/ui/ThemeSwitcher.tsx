import React, { memo } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Theme, useTheme } from '@/shared/ui/ThemeProvider'
import cls from './ThemeSwitcher.module.scss'
import LightIcon from '@/shared/assets/icons/theme-light.svg'
import DarkIcon from '@/shared/assets/icons/theme-dark.svg'
import { Button } from '@/shared/ui/Button'

interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher = memo(({ className = '' }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme()

    return (
        <Button onClick={toggleTheme} className={classNames(cls.ThemeSwitcher, {}, [ className ])}>
            {theme === Theme.DARK ? <LightIcon/> : <DarkIcon/>}
        </Button>
    )
})
