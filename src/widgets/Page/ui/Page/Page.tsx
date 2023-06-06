import React, { memo, MutableRefObject, ReactNode, useRef } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Page.module.scss';
import { useInfiniteScroll } from '@/shared/lib/hooks/useInfiniteScroll/useInfiniteScroll';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { scrollSaveAction } from '../../model/slices/scrollSaveSlice/scrollSaveSlice';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getSaveScrollByPath } from '../../model/selectors/saveScroll';

// eslint-disable-next-line mym-path-checker/layer-imports
import { StateSchema } from '@/app/providers/StoreProvider';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useThrottle } from '@/shared/lib/hooks/useThrottle/useThrottle';

interface IPageProps {
    className?: string;
    children: ReactNode;
    onScrollEnd?: () => void;
}

export const Page = memo((props: IPageProps) => {
    const {
        className = '',
        children,
        onScrollEnd,
    } = props;

    const wrapperRef = useRef() as MutableRefObject<HTMLElement>;
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

    const dispatch = useAppDispatch();
    const location = useLocation();
    const scrollPosition = useSelector((state: StateSchema) => getSaveScrollByPath(state, location.pathname))

    useInfiniteScroll({
        wrapperRef: wrapperRef,
        triggerRef: triggerRef,
        callback: onScrollEnd,
    })

    useInitialEffect(() => {
        wrapperRef.current.scrollTop = scrollPosition;
    })

    const onScroll = useThrottle((e: React.UIEvent<HTMLDivElement>) => {
        dispatch(scrollSaveAction.setScrollPosition({
            path: location.pathname,
            position: e.currentTarget.scrollTop,
        }))
    }, 500)

    return (
        <section
            ref={wrapperRef}
            className={classNames(cls.Page, {}, [ className ])}
            onScroll={onScroll}
        >
            {children}
            {onScrollEnd ? <div ref={triggerRef} className={cls.trigger}></div> : null}
        </section>
    );
})

Page.displayName = 'Page'