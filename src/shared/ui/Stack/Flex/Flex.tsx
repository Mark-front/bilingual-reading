import React, { memo, ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Flex.module.scss';

export type FlexJustify = 'start' | 'center' | 'end' | 'between';
export type FlexAlign = 'start' | 'center' | 'end';
export type FlexDirection = 'row' | 'column';
export type FlexGap = '4' | '8' | '16' | '32';


const justifyClasses: Record<FlexJustify, string> = {
    start: cls.justifyStart,
    end: cls.justifyEnd,
    center: cls.justifyCenter,
    between: cls.justifyBetween,
}

const directionClasses: Record<FlexDirection, string> = {
    row: cls.directionRow,
    column: cls.directionColumn,
}

const alignClasses: Record<FlexAlign, string> = {
    start: cls.alignStart,
    end: cls.alignEnd,
    center: cls.alignCenter,
}

const gapClasses: Record<FlexGap, string> = {
    4: cls.gap4,
    8: cls.gap8,
    16: cls.gap16,
    32: cls.gap32,
}

export interface IFlexProps {
    className?: string;
    children: ReactNode;
    justify?: FlexJustify;
    align?: FlexAlign;
    direction?: FlexDirection;
    gap?: FlexGap;
    max?: boolean;
}

export const Flex = memo((props: IFlexProps) => {
    const {
        className = '',
        children,
        justify = 'start',
        direction = 'row',
        align = 'start',
        gap = '8',
        max = true,
    } = props;

    const additional = [
        className,
        justifyClasses[justify],
        directionClasses[direction],
        alignClasses[align],
        gapClasses[gap],
    ]

    const mods = {
        [cls.max]: max,
    }
    return (
        <div
            className={classNames(
                cls.Flex,
                mods,
                additional)}>
            {children}
        </div>
    );
})

Flex.displayName = 'Flex'