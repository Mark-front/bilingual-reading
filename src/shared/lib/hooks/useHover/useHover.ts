import { useCallback, useMemo, useState } from 'react';

interface UseHoverBind {
    onMouseEnter: () => void;
    onMouseLeave: () => void;
}

type useHoverResult = [boolean, UseHoverBind]
export const useHover = () => {
    const [ isHover, setIsHover ] = useState(false)

    const onMouseEnter = useCallback(() => {
        setIsHover(true)
    }, [])
    const onMouseLeave = useCallback(() => {
        setIsHover(false)
    }, [])

    return useMemo((): useHoverResult =>
        [
            isHover,
            {
                onMouseEnter,
                onMouseLeave,
            },
        ],
    [ onMouseLeave, isHover, onMouseEnter ])
}