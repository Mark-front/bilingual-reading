import React, { MouseEvent, ReactNode, useCallback, useEffect, useRef, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Modal.module.scss';
import { Portal } from '@/shared/ui/Portal';
import { Overlay } from '@/shared/ui/Overlay/Overlay';

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


    const [ isClosing, setIsClosing ] = useState(true);
    const [ isMounted, setIsMounted ] = useState(false)

    const timerRef = useRef<ReturnType<typeof setTimeout>>();

    const closeHandler = useCallback(() => {
        if (onClose) {
            setIsClosing(true)
            timerRef.current = setTimeout(() => {
                onClose();
            }, ANIMATION_DELAY)
        }

    }, [ onClose ])

    const onKeyDown = useCallback((e: KeyboardEvent): void => {
        if (e.key === 'Escape') {
            closeHandler();
        }
    }, [ closeHandler ])

    const openHandler = useCallback(() => {
        if (isOpen) {
            window.addEventListener('keydown', (event) => onKeyDown(event))
            setIsClosing(false)
        }

    }, [ isOpen, onKeyDown ])

    const onContentClick = (e: MouseEvent<HTMLDivElement>) => {
        e.stopPropagation()
    }

    const mods: Record<string, boolean> = {
        [cls.opening]: isOpen,
        [cls.isClosing]: isClosing,
    }

    useEffect(() => {
        openHandler()
        return () => {
            clearTimeout(timerRef.current)
            window.removeEventListener('keydown', (event) => onKeyDown(event))
        }
    }, [ onKeyDown, openHandler ])

    useEffect(() => {
        if (isOpen) {
            setIsMounted(true)
        }

    }, [ isOpen ])

    if (lazy && !isMounted) {
        return null;
    }

    return (
        <Portal>
            <div className={classNames(cls.Modal, mods, [ className ])}>
                <Overlay isOpen={isOpen} onClose={closeHandler}/>
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