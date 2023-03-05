import React, {memo} from 'react';
import {classNames} from '@/shared/lib/classNames/classNames';
import cls from './Text.module.scss';
import {useTranslation} from 'react-i18next';

export const ThemeText = {
    ERROR: 'error',
} as const

export type TThemeText = (typeof ThemeText)[keyof typeof ThemeText]

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    theme?: TThemeText;
}

export const Text = memo((props: TextProps) => {
    const {
        title,
        text,
        className = '',
        theme = '',
    } = props;

    const {t} = useTranslation();

    return (
        <div className={classNames(cls.Text, {}, [className, cls[theme]])}>
            {title && <p className={cls.title}>{title}</p>}
            {text && <p className={cls.text}>{text}</p>}
        </div>
    );
})