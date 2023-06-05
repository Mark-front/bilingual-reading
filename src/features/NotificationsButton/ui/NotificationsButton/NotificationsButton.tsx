import React, { memo, useCallback, useState } from 'react';
import { Icon } from '@/shared/ui/Icon';
import IconNotice from '@/shared/assets/icons/notice.svg';
import { NotificationList } from '@/entities/Notification';
import cls from './NotificationsButton.module.scss';
import { Popover } from '@/shared/ui/Popups';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Drawer } from '@/shared/ui/Drawer';
import { BrowserView, MobileView } from 'react-device-detect';

interface NotificationsButtonProps {
    className?: string;
}

export const NotificationsButton = memo((props: NotificationsButtonProps) => {
    const {
        className,
    } = props;

    const [ isListOpen, setIsDrawerOpen ] = useState(false);

    const openListHandler = useCallback(() => {
        setIsDrawerOpen(true)
    }, []);

    const closeListHandler = useCallback(() => {
        setIsDrawerOpen(false)
    }, []);

    const ButtonOpenList = () => (
        <div role={'button'} onClick={openListHandler}>
            <Icon Svg={IconNotice}/>
        </div>
    )

    return (
        <>
            <MobileView>
                <ButtonOpenList/>
                <Drawer isOpen={isListOpen} onClose={closeListHandler}>
                    <NotificationList/>
                </Drawer>
            </MobileView>
            <BrowserView>
                <Popover
                    className={classNames(cls.NotificationsButton, {}, [ className ])}
                    direction={'bottom left'}
                    trigger={
                        <ButtonOpenList/>
                    }>
                    <NotificationList className={cls.notifications}/>
                </Popover>
            </BrowserView>
        </>

    );
});

NotificationsButton.displayName = 'NotificationsButton';