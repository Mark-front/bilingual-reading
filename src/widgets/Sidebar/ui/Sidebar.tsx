import React, {useState} from 'react'
import {classNames} from '@/shared/lib/classNames/classNames'
import cls from './Sidebar.module.scss'
import {Button, ButtonSize, ThemeButton} from '@/shared/ui/Button'
import {ThemeSwitcher} from '@/widgets/ThemeSwitcher'
import {useTranslation} from 'react-i18next'
import {TranslateSwitcher} from "@/widgets/TranslateSwitcher";
import {AppLink} from "@/shared/ui/AppLink";
import {AppLinkTheme} from "@/shared/ui/AppLink/ui/AppLink";
import {RoutePath} from "@/shared/config/routeConfig/routeConfig";
import AboutIcon from 'shared/assets/icons/about.svg'
import HomeIcon from 'shared/assets/icons/home.svg'

interface SidebarProps {
    className?: string
}

export const Sidebar = ({className = ""}: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false)
    const {t} = useTranslation()
    const onToggle = () => {
        setCollapsed(prev => !prev)
    }

    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [className])}
        >
            <Button
                className={classNames(cls.btnCollapse, {}, [])}
                data-testid={'sidebar-toggle'}
                onClick={onToggle}
                theme={ThemeButton.BACKGROUND_INVERTED}
                square={true}
                size={ButtonSize.L}
            >
                {
                    collapsed
                        ? t('>')
                        : t('<')
                }
            </Button>
            <div className={cls.items}>
                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    to={RoutePath.main}
                    className={classNames(cls.link)}
                >
                    <HomeIcon className={cls.linkIcon}/>
                    <span className={cls.linkText}>{t("Главная")}</span>
                </AppLink>
                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    to={RoutePath.about}
                    className={classNames(cls.link)}
                >
                    <AboutIcon className={cls.linkIcon}/>
                    <span className={cls.linkText}>{t("О нас")}</span>
                </AppLink>
            </div>
            <div className={cls.switchers}>
                <ThemeSwitcher/>
                <TranslateSwitcher short={collapsed}/>
            </div>
        </div>
    )
}
