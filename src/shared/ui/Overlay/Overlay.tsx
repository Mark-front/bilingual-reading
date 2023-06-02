import React, { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './Overlay.module.scss';

interface IOverlayProps {
    className?: string;
    isOpen?: boolean;
    onClose?: () => void;
}

export const Overlay = memo((props: IOverlayProps) => {
    const {
        className = '',
        isOpen,
        onClose,
    } = props;

    const { t } = useTranslation()

    const mods: Record<string, boolean> = {
        [cls.opening]: Boolean(isOpen),
    }

    return (
        <div
            onClick={onClose}
            className={classNames(cls.Overlay, mods, [ className ])}
        />
    );
})

Overlay.displayName = 'Overlay'