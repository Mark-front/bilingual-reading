import React, { memo, MutableRefObject, ReactNode, useRef } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Page.module.scss';
import { useInfiniteScroll } from '@/shared/lib/hooks/useInfiniteScroll/useInfiniteScroll';

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

    useInfiniteScroll({
        wrapperRef: wrapperRef,
        triggerRef: triggerRef,
        callback: onScrollEnd,
    })
    return (
        <section ref={wrapperRef} className={classNames(cls.Page, {}, [ className ])}>
            {children}
            <div ref={triggerRef}></div>
        </section>
    );
})

Page.displayName = 'Page'