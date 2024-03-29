import { createContext, PropsWithChildren, useContext, useEffect, useMemo, useRef, useState } from 'react';

type SpringType = typeof import('@react-spring/web')
type GestureType = typeof import('@use-gesture/react')

interface AnimationContextPayload {
    Spring?: SpringType
    Gesture?: GestureType
    isLoaded?: boolean
}

const AnimationContext = createContext<AnimationContextPayload>({})

// обе либы зависят друг от друга
const getAsyncAnimationModules = async () => {
    return Promise.all([
        import('@react-spring/web'),
        import('@use-gesture/react'),
    ])
}

export const useAnimationLibs = () => {
    return useContext(AnimationContext) as Required<AnimationContextPayload>;
}

export const AnimationProvider = ({ children }: PropsWithChildren) => {
    const SpringRef = useRef<SpringType>();
    const GestureRef = useRef<GestureType>();

    const [ isLoaded, setIsLoaded ] = useState(false)

    useEffect(() => {
        getAsyncAnimationModules().then(([ Spring, Gesture ]) => {
            SpringRef.current = Spring
            GestureRef.current = Gesture
            setIsLoaded(true)
        })
    }, [])

    const defaultProps = useMemo(() => ({
        Gesture: GestureRef.current,
        Spring: SpringRef.current,
        isLoaded,
    }), [ isLoaded ])

    return (
        <AnimationContext.Provider
            value={defaultProps}
        >
            {children}
        </AnimationContext.Provider>
    )
}
