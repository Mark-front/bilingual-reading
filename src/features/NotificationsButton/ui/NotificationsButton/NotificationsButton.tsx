import React, { memo } from 'react';
import { Icon } from '@/shared/ui/Icon';
import IconNotice from '@/shared/assets/icons/notice.svg';
import { NotificationList } from '@/entities/Notification';
import cls from './NotificationsButton.module.scss';
import { Popover } from '@/shared/ui/Popups';
import { classNames } from '@/shared/lib/classNames/classNames';

interface NotificationsButtonProps {
    className?: string;
}

export const NotificationsButton = memo((props: NotificationsButtonProps) => {
    const {
        className,
    } = props;

    return (
        <Popover
            className={classNames(cls.NotificationsButton, {}, [ className ])}
            direction={'bottom left'}
            trigger={
                <Icon Svg={IconNotice}/>
            }>
            <NotificationList className={cls.notifications}/>
        </Popover>
    );
});

NotificationsButton.displayName = 'NotificationsButton'