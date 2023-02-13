import React, { useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Sidebar.module.scss'
import { Button } from 'shared/ui/Button'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'

interface SidebarProps {
    className?: string
}
export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false)

    const onToggle = () => {
        setCollapsed(prev => !prev)
    }

    return (
        <div className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
            <Button onClick={onToggle}>collapse</Button>
            <div className={cls.switchers}>
                <ThemeSwitcher/>
            </div>
        </div>
    )
}
