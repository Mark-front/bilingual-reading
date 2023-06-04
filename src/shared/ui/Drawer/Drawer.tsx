import React, { memo, ReactNode, useCallback, useEffect } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Drawer.module.scss';
import { Portal } from '../Portal';
import { Overlay } from '../Overlay/Overlay';
import { useAnimationLibs } from '@/shared/lib/components/AnimationProvider';

interface IDrawerProps {
    className?: string;
    children: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
}

const height = window.innerHeight - 100;

export const DrawerContent = memo((props: IDrawerProps) => {
    const {
        className = '',
        children,
        isOpen,
        onClose,
    } = props;

    const { Gesture, Spring } = useAnimationLibs();

    const [ { y }, api ] = Spring.useSpring(() => ({ y: height }));


    const openDrawer = useCallback(() => {
        api.start({ y: 0, immediate: false });
    }, [ api ]);

    useEffect(() => {
        if (isOpen) {
            openDrawer();
        }
    }, [ api, isOpen, openDrawer ]);

    const close = (velocity = 0) => {
        api.start({
            y: height,
            immediate: false,
            config: { ...Spring.config.stiff, velocity },
            onResolve: onClose,
        });
    };

    const bind = Gesture.useDrag(
        ({
            last,
            velocity: [ , vy ],
            direction: [ , dy ],
            movement: [ , my ],
            cancel,
        }) => {
            if (my < -70) cancel();

            if (last) {
                if (my > height * 0.5 || (vy > 0.5 && dy > 0)) {
                    close();
                } else {
                    openDrawer();
                }
            } else {
                api.start({ y: my, immediate: true });
            }
        },
        {
            from: () => [ 0, y.get() ], filterTaps: true, bounds: { top: 0 }, rubberband: true,
        }
    );

    if (!isOpen) {
        return null;
    }

    const display = y.to((py) => (py < height ? 'block' : 'none'));

    const mods: Record<string, boolean> = {
        [cls.opened]: Boolean(isOpen),
    }

    return (
        <Portal>
            <div className={classNames(cls.Drawer, mods, [ className ])}>
                <Overlay onClose={close} isOpen={isOpen}/>
                <Spring.a.div
                    className={cls.sheet}
                    style={{ display, bottom: `calc(-100vh + ${height - 100}px)`, y }}
                    {...bind()}
                >
                    {children}
                </Spring.a.div>
            </div>
        </Portal>
    );
})

DrawerContent.displayName = 'DrawerContent'

export const Drawer = memo((props: IDrawerProps) => {

    const { isLoaded } = useAnimationLibs();

    if (!isLoaded) {
        return null;
    }

    return <DrawerContent {...props}/>
})

Drawer.displayName = 'Drawer'
