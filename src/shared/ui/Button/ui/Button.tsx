import {classNames} from '@/shared/lib/classNames/classNames'
import React, {type ButtonHTMLAttributes, type FC} from 'react'
import cls from './Button.module.scss'

export const ThemeButton = {
    CLEAR: 'clear',
    CLEAR_INVERTED: 'clearInverted',
    OUTLINE: 'outline',
    BACKGROUND: 'background',
    BACKGROUND_INVERTED: 'backgroundInverted',
} as const

export type TThemeButton = (typeof ThemeButton)[keyof typeof ThemeButton]

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    theme?: TThemeButton
    square?: boolean
    disabled?: boolean
    size?: TButtonSize
}

export const ButtonSize = {
    M: 'size_m',
    L: 'size_l',
    XL: 'size_xl',
} as const;

export type TButtonSize = (typeof ButtonSize)[keyof typeof ButtonSize];

export const Button: FC<ButtonProps> = (props) => {
    const {
        className = '',
        children,
        theme = ThemeButton.CLEAR,
        square = false,
        disabled = false,
        size = ButtonSize.M,
        ...otherProps
    } = props
    const mods: Record<string, boolean> = {
        [cls.square]: square,
        [cls.disabled]: disabled,
    }
    return (
        <button
            className={classNames(cls.Button, mods, [className, cls[theme], cls[size]])}
            {...otherProps}
        >
            {children}
        </button>
    )
}
