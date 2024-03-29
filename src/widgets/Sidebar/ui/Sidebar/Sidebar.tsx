import React, { memo, useState } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Button, ButtonSize, ThemeButton } from '@/shared/ui/Button'
import { ThemeSwitcher } from '@/entities/ThemeSwitcher'
import { TranslateSwitcher } from '@/entities/TranslateSwitcher';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import cls from './Sidebar.module.scss'
import { useSelector } from 'react-redux';
import { getSidebarItems } from '../../model/selectors/getSidebarItems';
import { VStack } from '@/shared/ui/Stack';
import { isUserAdmin, isUserManager } from '@/entities/User';
import { getRouteAdminPanel } from '@/shared/const/router';


interface SidebarProps {
    className?: string
}

export const Sidebar = memo(({ className = '' }: SidebarProps) => {
    const [ collapsed, setCollapsed ] = useState(false);
    const onToggle = () => {
        setCollapsed(prev => !prev)
    }

    const SidebarItemsList = useSelector(getSidebarItems)
    const isAdmin = useSelector(isUserAdmin);
    const isManager = useSelector(isUserManager);
    const isAdminPageAvailable = isAdmin || isManager;


    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [ className ])}
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
                        ? '>'
                        : '<'
                }
            </Button>
            <VStack gap={'16'} align={'start'} className={cls.items}>
                {
                    SidebarItemsList.map(
                        (item, index) => {
                            if (!isAdminPageAvailable && item.path === getRouteAdminPanel()) return;

                            return (
                                <SidebarItem
                                    key={index}
                                    item={item}
                                    collapsed={collapsed}
                                />
                            )
                        }
                    )
                }
            </VStack>
            <div className={cls.switchers}>
                <ThemeSwitcher/>
                <TranslateSwitcher short={collapsed}/>
            </div>
        </div>
    )
})
