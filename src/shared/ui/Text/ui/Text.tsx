import React, { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Text.module.scss';
import { useTranslation } from 'react-i18next';

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

export const TextSize = {
    M: 'fz-m',
    L: 'fz-l',
    XL: 'fz-xl',
} as const

export type TTextSize = (typeof TextSize)[keyof typeof TextSize]


interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    theme?: TThemeText;
    align?: TTextAlign;
    size?: TTextSize;
    'data-testid'?: string;
}

export const Text = memo((props: TextProps) => {
    const {
        title,
        text,
        className = '',
        theme = '',
        align = TextAlign.LEFT,
        size = TextSize.M,
        'data-testid': dataTestId = 'Text',
    } = props;

    const { t } = useTranslation();
    console.log(text)
    return (
        <div
            className={classNames(cls.Text, {}, [ className, cls[theme], cls[align], cls[size] ])}>
            {title &&
                <p className={cls.title}
                    data-testid={`${dataTestId}.Header`}
                >
                    {title}
                </p>
            }
            {text &&
                <p className={cls.text}
                    data-testid={`${dataTestId}.Paragraph`}
                >
                    {text}
                </p>
            }
        </div>
    );
})