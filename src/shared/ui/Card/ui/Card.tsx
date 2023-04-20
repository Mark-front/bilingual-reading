import React, { HTMLAttributes, memo, ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Card.module.scss';


export const ThemeCard = {
    NORMAL: 'NORMAL',
    OUTLINE: 'OUTLINE',
} as const;

export type TThemeCard = (typeof ThemeCard)[keyof typeof ThemeCard];

interface ICardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    children: ReactNode;
    theme?: TThemeCard;
}

export const Card = memo((props: ICardProps) => {
    const {
        className = '',
        children,
        theme = ThemeCard.NORMAL,
        ...otherProps
    } = props;

    return (
        <div className={classNames(cls.Card, {}, [ className, cls[theme] ])} {...otherProps}>
            {children}
        </div>
    );
})

Card.displayName = 'Card'