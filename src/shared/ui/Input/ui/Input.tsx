import React, { ChangeEvent, InputHTMLAttributes, memo } from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'>

export const ThemeInput = {
    OUTLINE: 'outline',
    READONLY: 'readonly',
} as const

export type TThemeInput = (typeof ThemeInput)[keyof typeof ThemeInput]

interface InputProps extends HTMLInputProps {
    className?: string;
    value: string | number;
    onChange?: (value: string) => void;
    theme?: TThemeInput;
    readOnly?: boolean;
}


export const Input = memo((props: InputProps) => {
    const {
        className = '',
        value,
        onChange,
        type = 'text',
        theme = ThemeInput.OUTLINE,
        readOnly = false,
        ...otherProps
    } = props;

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value)
    }

    const mods: Mods = {
        [cls.readonly]: readOnly,
    }

    return (
        <label className={classNames(cls.InputWrapper, mods, [ className, cls[theme] ])}>
            <input
                className={cls.input}
                type={type}
                value={value}
                onChange={onChangeHandler}
                readOnly={readOnly}
                {...otherProps}
            />
        </label>
    );
});

