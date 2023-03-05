import React, {memo} from 'react';
import {classNames} from '@/shared/lib/classNames/classNames';
import {useTranslation} from 'react-i18next';
import cls from './SidebarItem.module.scss';
import {AppLink, AppLinkTheme} from '@/shared/ui/AppLink/ui/AppLink';
import {SidebarItemType} from '../../model/items';

interface ISidebarItemProps {
    item: SidebarItemType;
    collapsed: boolean;
}

export const SidebarItem = memo((props: ISidebarItemProps) => {
    const {
        item,
        collapsed,
    } = props;

    const {t} = useTranslation()
    const Icon = item.Icon;
    return (
        <AppLink
            theme={AppLinkTheme.SECONDARY}
            to={item.path}
            className={classNames(cls.link, {[cls.collapsed]: collapsed})}
        >
            <Icon className={cls.linkIcon}/>
            <span className={cls.linkText}>{t(item.text)}</span>
        </AppLink>
    );
})