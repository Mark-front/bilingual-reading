import { classNames } from '@/shared/lib/classNames/classNames'
import React, { type ButtonHTMLAttributes, type FC } from 'react'
import cls from './Button.module.scss'

export const ThemeButton = {
    CLEAR: 'clear'
} as const

export type TThemeButton = (typeof ThemeButton)[keyof typeof ThemeButton]

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    theme?: TThemeButton
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        children,
        theme = ThemeButton.CLEAR,
        ...otherProps
    } = props

    return (
        <button
            className={classNames(cls.Button, {}, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </button>
    )
}
