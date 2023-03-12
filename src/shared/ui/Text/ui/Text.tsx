import React, {memo} from 'react';
import {classNames} from '@/shared/lib/classNames/classNames';
import cls from './Text.module.scss';
import {useTranslation} from 'react-i18next';

export const ThemeText = {
    ERROR: 'error',
} as const

export type TThemeText = (typeof ThemeText)[keyof typeof ThemeText]

export const TextAlign = {
    CENTER: 'center',
    LEFT: 'left',
    RIGHT: 'right',
} as const

export type TTextAlign = (typeof TextAlign)[keyof typeof TextAlign]


interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    theme?: TThemeText;
    align?: TTextAlign;
}

export const Text = memo((props: TextProps) => {
    const {
        title,
        text,
        className = '',
        theme = '',
        align = TextAlign.LEFT,
    } = props;

    const {t} = useTranslation();

    return (
        <div className={classNames(cls.Text, {}, [className, cls[theme], cls[align]])}>
            {title && <p className={cls.title}>{title}</p>}
            {text && <p className={cls.text}>{text}</p>}
        </div>
    );
})