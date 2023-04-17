import React, { ChangeEvent, useMemo } from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './Select.module.scss';

export interface SelectOption<T> {
    value: T;
    content: string;
}

interface ISelectProps<T> {
    className?: string;
    label?: string;
    nameSelect?: string;
    options?: SelectOption<T>[];
    value?: T;
    onChange?: (value: T) => void;
    readonly?: boolean;
}

export const Select = <T extends string>(props: ISelectProps<T>) => {
    const {
        className = '',
        label,
        nameSelect,
        options,
        value,
        onChange,
        readonly,
    } = props;

    const { t } = useTranslation()

    const mods: Mods = {}

    const optionsList = useMemo(() => {
        return options?.map((opt) =>
            <option
                key={opt.value}
                value={opt.value}
                className={cls.option}
            >
                {opt.content}
            </option>
        )
    }, [ options ])

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value as T)
    }

    return (
        <div className={classNames(cls.wrapper, mods, [ className ])}>
            {
                label &&
                <span className={cls.label}>
                    {label}
                </span>
            }

            <select
                className={cls.select}
                name={nameSelect}
                onChange={onChangeHandler}
                disabled={readonly}
                value={value}
            >
                {optionsList}
            </select>
        </div>
    );
}