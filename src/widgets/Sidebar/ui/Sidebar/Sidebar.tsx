import React, {memo, useState} from 'react'
import {classNames} from '@/shared/lib/classNames/classNames'
import {Button, ButtonSize, ThemeButton} from '@/shared/ui/Button'
import {ThemeSwitcher} from '@/widgets/ThemeSwitcher'
import {TranslateSwitcher} from '@/widgets/TranslateSwitcher';
import {SidebarItemsList} from '../../model/items';
import {SidebarItem} from '../SidebarItem/SidebarItem';
import cls from './Sidebar.module.scss'


interface SidebarProps {
    className?: string
}

export const Sidebar = memo(({className = ''}: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
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
                        ? '>'
                        : '<'
                }
            </Button>
            <div className={cls.items}>
                {
                    SidebarItemsList.map(
                        (item, index) =>
                            <SidebarItem
                                key={index}
                                item={item}
                                collapsed={collapsed}
                            />
                    )
                }
            </div>
            <div className={cls.switchers}>
                <ThemeSwitcher/>
                <TranslateSwitcher short={collapsed}/>
            </div>
        </div>
    )
})
