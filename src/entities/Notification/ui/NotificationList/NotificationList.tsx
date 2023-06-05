import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useNotifications } from '../../api/notificationApi';
import { VStack } from '@/shared/ui/Stack';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './NotificationList.module.scss';
import { NotificationItem } from '../../ui/NotificationItem/NotificationItem';
import { Skeleton } from '@/shared/ui/Skeleton';
import { Card, ThemeCard } from '@/shared/ui/Card';

interface INotificationListProps {
    className?: string;
}

export const NotificationList = memo((props: INotificationListProps) => {
    const {
        className = '',
    } = props;

    const { t } = useTranslation();
    const { isLoading, data } = useNotifications(null, {
        pollingInterval: 1000,
    });

    const SkeletionItem = () => (
        <Card theme={ThemeCard.OUTLINE}>
            <Skeleton width={100} height={20}/>
            <Skeleton width={450} height={50}/>
        </Card>
    )

    if (isLoading) {
        return (
            <VStack
                gap={'16'}
                className={classNames(cls.NotificationList, {}, [ className ])}
            >
                <SkeletionItem/>
                <SkeletionItem/>
                <SkeletionItem/>
            </VStack>
        )
    }

    return (
        <VStack
            gap={'16'}
            className={classNames(cls.NotificationList, {}, [ className ])}
        >
            {data?.map(
                notice =>
                    <NotificationItem
                        key={notice.id}
                        data={notice}
                    />
            )}
        </VStack>
    );
})

NotificationList.displayName = 'NotificationList'