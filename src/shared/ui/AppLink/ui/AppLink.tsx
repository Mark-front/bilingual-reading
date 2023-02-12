import React, { FC } from 'react';
import {Link, LinkProps} from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './AppLink.module.scss';

export const AppLinkTheme = {
    PRIMARY: 'primary',
    SECONDARY: 'secondary'
} as const;

export type TAppLinkTheme = (typeof AppLinkTheme)[keyof typeof AppLinkTheme];

interface AppLinkProps extends LinkProps{
    className? : string;
    theme?: TAppLinkTheme;
}
export const AppLink: FC<AppLinkProps> = (props) => {
    const {
        className,
        to,
        children,
        theme = AppLinkTheme.PRIMARY,
        ...otherProps } = props;
    return (
        <Link
            to={to}
            className={classNames(cls.AppLink, {}, [className, cls[theme]])}
            {...otherProps}
        >
            { children }
        </Link>
    );
};