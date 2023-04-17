import React, { HTMLAttributes, memo, ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Card.module.scss';

interface ICardProps extends HTMLAttributes<HTMLDivElement> {
    className?: string;
    children: ReactNode
}

export const Card = memo((props: ICardProps) => {
    const {
        className = '',
        children,
        ...otherProps
    } = props;

    return (
        <div className={classNames(cls.Card, {}, [ className ])} {...otherProps}>
            {children}
        </div>
    );
})

Card.displayName = 'Card'