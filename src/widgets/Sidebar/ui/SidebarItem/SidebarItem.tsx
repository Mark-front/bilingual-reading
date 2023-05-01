import React, { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './SidebarItem.module.scss';
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink/ui/AppLink';
import { useSelector } from 'react-redux';
import { getUserAuthData } from '@/entities/User';
import { SidebarItemType } from '../../model/types/items';

interface ISidebarItemProps {
    item: SidebarItemType;
    collapsed: boolean;
}

export const SidebarItem = memo((props: ISidebarItemProps) => {
    const {
        item,
        collapsed,
    } = props;
    const isAuth = useSelector(getUserAuthData)
    const { t } = useTranslation()
    const Icon = item.Icon;
    if (item.authOnly && !isAuth) {
        return null;
    }

    return (
        <AppLink
            theme={AppLinkTheme.SECONDARY}
            to={item.path}
            className={classNames(cls.link, { [cls.collapsed]: collapsed })}
        >
            <Icon className={cls.linkIcon}/>
            <span className={cls.linkText}>{t(item.text)}</span>
        </AppLink>
    );
})