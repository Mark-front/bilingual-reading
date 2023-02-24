import React, {MouseEvent, ReactNode, useCallback, useEffect, useRef, useState} from 'react';
import {classNames} from '@/shared/lib/classNames/classNames';
import cls from './Modal.module.scss';
import {Portal} from "@/shared/Portal";

interface ModalProps {
    className?: string;
    children: ReactNode;
    isOpen: boolean;
    onClose: () => void;
}

const ANIMATION_DELAY = 300;
export const Modal = (props: ModalProps) => {
    const {
        className = '',
        children,
        isOpen = false,
        onClose,
    } = props;


    const [isClosing, setIsClosing] = useState(true);
    const timerRef = useRef<ReturnType<typeof setTimeout>>();

    const closeHandler = useCallback(() => {
        if (onClose) {
            setIsClosing(true)
            timerRef.current = setTimeout(() => {
                onClose();
            }, ANIMATION_DELAY)
        }

    }, [onClose])

    const onKeyDown = useCallback((e: KeyboardEvent): void => {
        if (e.key === 'Escape') {
            closeHandler();
        }
    }, [closeHandler])

    const openHandler = useCallback(() => {
        if (isOpen) {
            window.addEventListener('keydown', (event) => onKeyDown(event))
            setIsClosing(false)
        }

    }, [isOpen, onKeyDown])

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
    }, [onKeyDown, openHandler])

    return (
        <Portal>
            <div className={classNames(cls.Modal, mods, [className])}>
                <div className={cls.overlay} onClick={closeHandler}>
                    <div
                        onClick={(event) => onContentClick(event)}
                        className={classNames(cls.content, {[cls.contentClosing]: isClosing})}
                    >
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};