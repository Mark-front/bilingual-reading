import { useCallback, useEffect, useRef, useState } from 'react';

interface UseModalProps {
    onClose?: () => void;
    isOpen?: boolean;
    lazy?: boolean;
    animationDelay?: number
}

export function useModal({ animationDelay, onClose, lazy, isOpen }: UseModalProps) {
    const [ isClosing, setIsClosing ] = useState(true);
    const [ isMounted, setIsMounted ] = useState(false)

    const timerRef = useRef<ReturnType<typeof setTimeout>>();

    const close = useCallback(() => {
        if (onClose) {
            setIsClosing(true)
            timerRef.current = setTimeout(() => {
                onClose();
            }, animationDelay)
        }

    }, [ animationDelay, onClose ])

    useEffect(() => {
        openHandler()
        return () => {
            clearTimeout(timerRef.current)
            window.removeEventListener('keydown', (event) => onKeyDown(event))
        }
    }, [ onKeyDown, openHandler ])

    return {
        isClosing,
        isMounted,
        close,
    }
}