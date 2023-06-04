import React, { MouseEvent, ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Modal.module.scss';
import { Portal } from '../../Portal';
import { Overlay } from '../../Overlay/Overlay';
import { useModal } from '../../../lib/hooks/useModal/useModal';

interface ModalProps {
    className?: string;
    children: ReactNode;
    isOpen: boolean;
    onClose: () => void;
    lazy?: boolean;
}

const ANIMATION_DELAY = 300;
export const Modal = (props: ModalProps) => {
    const {
        className = '',
        children,
        isOpen = false,
        onClose,
        lazy,
    } = props;

    const { isClosing, close, isMounted } = useModal({
        animationDelay: ANIMATION_DELAY,
        isOpen,
        onClose,
    })

    const onContentClick = (e: MouseEvent<HTMLDivElement>) => {
        e.stopPropagation()
    }

    if (lazy && !isMounted) {
        return null;
    }

    const mods: Record<string, boolean> = {
        [cls.opening]: isOpen,
        [cls.isClosing]: isClosing,
    }

    return (
        <Portal>
            <div className={classNames(cls.Modal, mods, [ className ])}>
                <Overlay isOpen={isOpen} onClose={close}/>
                <div
                    onClick={(event) => onContentClick(event)}
                    className={classNames(cls.content, { [cls.contentClosing]: isClosing })}
                >
                    {children}
                </div>
            </div>
        </Portal>
    );
};

Modal.displayName = 'Modal'