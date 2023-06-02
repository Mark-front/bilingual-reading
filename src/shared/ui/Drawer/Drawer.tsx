import React, { memo, ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './Drawer.module.scss';
import { Portal } from '../Portal';
import { Overlay } from '../Overlay/Overlay';

interface IDrawerProps {
    className?: string;
    children: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
}

export const Drawer = memo((props: IDrawerProps) => {
    const {
        className = '',
        children,
        isOpen,
        onClose,
    } = props;

    const { t } = useTranslation()

    const mods: Record<string, boolean> = {
        [cls.opening]: Boolean(isOpen),
    }

    return (
        <Portal>
            <div className={classNames(cls.Drawer, mods, [ className ])}>
                <Overlay onClose={onClose} isOpen={isOpen}/>
                <div
                    className={cls.content}
                >
                    {children}
                </div>
            </div>
        </Portal>
    );
})

Drawer.displayName = 'Drawer'