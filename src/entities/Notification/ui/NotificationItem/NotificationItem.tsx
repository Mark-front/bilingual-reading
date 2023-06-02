import React, { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './NotificationItem.module.scss';
import { Notification } from '../../model/types/notification';
import { Text } from '@/shared/ui/Text';
import { Card, ThemeCard } from '@/shared/ui/Card';
import { AppLink } from '@/shared/ui/AppLink';

interface INotificationItemProps {
    className?: string;
    data: Notification;
}

export const NotificationItem = memo((props: INotificationItemProps) => {
    const {
        className = '',
        data,
    } = props;

    const content = (
        <Card
            theme={ThemeCard.OUTLINE}
            className={classNames(cls.NotificationItem, {}, [ className ])}
        >
            <Text title={data.title} text={data.description}/>
        </Card>
    )

    if (data.href) {
        return (
            <AppLink to={data.href} className={cls.link}>
                {content}
            </AppLink>
        )
    }

    return content;
})

NotificationItem.displayName = 'NotificationItem'