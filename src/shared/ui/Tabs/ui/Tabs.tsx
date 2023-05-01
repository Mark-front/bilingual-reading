import React, { memo, ReactNode, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './Tabs.module.scss';
import { Card, ThemeCard } from '../../Card/ui/Card';

export interface TabItem {
    value: string;
    content: ReactNode;
}

interface ITabsProps {
    className?: string;
    tabs: TabItem[];
    value: string;
    onTabClick: (tab: TabItem) => void;
}

export const Tabs = memo((props: ITabsProps) => {
    const {
        className = '',
        tabs,
        onTabClick,
        value,
    } = props;

    const { t } = useTranslation()

    const clickHandle = useCallback((tab: TabItem) => {
        return () => {
            onTabClick(tab)
        }
    }, [ onTabClick ])

    return (
        <div className={classNames(cls.Tabs, {}, [ className ])}>
            {tabs.map(item =>
                <Card
                    key={item.value}
                    className={cls.tab}
                    theme={item.value === value ? ThemeCard.NORMAL : ThemeCard.OUTLINE}
                    onClick={clickHandle(item)}
                >
                    {item.content}
                </Card>
            )}
        </div>
    );
})

Tabs.displayName = 'Tabs';