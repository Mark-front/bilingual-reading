import React from 'react'
import {classNames} from '@/shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import {AppLink} from '@/shared/ui/AppLink'
import {AppLinkTheme} from '@/shared/ui/AppLink/ui/AppLink'
import {TranslateSwitcher} from '@/widgets/TranslateSwitcher'
import {useTranslation} from "react-i18next";

interface NavbarProps {
    className?: string
}

export const Navbar = ({className}: NavbarProps) => {
    const {t} = useTranslation()
    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <TranslateSwitcher/>
            <nav className={cls.links}>
                <AppLink theme={AppLinkTheme.SECONDARY} to={'/'}>
                    {t("Главная")}
                </AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to={'/about'}>
                    {t("О нас")}
                </AppLink>
            </nav>
        </div>
    )
}
