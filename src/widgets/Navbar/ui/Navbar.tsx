import React from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import { AppLink } from '@/shared/ui/AppLink'
import { AppLinkTheme } from '@/shared/ui/AppLink/ui/AppLink'
import { TranslateSwitcher } from '@/widgets/TranslateSwitcher'

interface NavbarProps {
    className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <TranslateSwitcher/>
            <nav className={cls.links}>
                <AppLink theme={AppLinkTheme.SECONDARY} to={'/'}>Главная</AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to={'/about'}>О нас</AppLink>
            </nav>
        </div>
    )
}
