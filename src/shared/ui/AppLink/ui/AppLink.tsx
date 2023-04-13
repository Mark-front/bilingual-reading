import React, { memo, ReactNode } from 'react'
import { Link, type LinkProps } from 'react-router-dom'
import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './AppLink.module.scss'

export const AppLinkTheme = {
    PRIMARY: 'primary',
    SECONDARY: 'secondary',
} as const

export type TAppLinkTheme = (typeof AppLinkTheme)[keyof typeof AppLinkTheme]

interface AppLinkProps extends LinkProps {
    className?: string
    theme?: TAppLinkTheme
    children?: ReactNode
}

export const AppLink = memo((props: AppLinkProps) => {
    const {
        className = '',
        to,
        children,
        theme = AppLinkTheme.PRIMARY,
        ...otherProps
    } = props
    return (
        <Link
            to={to}
            className={classNames(cls.AppLink, {}, [ className, cls[theme] ])}
            {...otherProps}
        >
            {children}
        </Link>
    )
})
