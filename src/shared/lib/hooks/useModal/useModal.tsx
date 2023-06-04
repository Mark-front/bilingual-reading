import { useCallback, useEffect, useRef, useState } from 'react';

interface UseModalProps {
    onClose?: () => void;
    isOpen?: boolean;
    animationDelay?: number
}

export function useModal({ animationDelay, onClose, isOpen }: UseModalProps) {
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

    const onKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            close();
        }
    }, [ close ]);

    const openHandler = useCallback(() => {
        if (isOpen) {
            window.addEventListener('keydown', (event) => onKeyDown(event))
            setIsClosing(false)
        }

    }, [ isOpen, onKeyDown ])

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

    return {
        isClosing,
        isMounted,
        close,
    }
}