import React, {useCallback} from 'react';
import {classNames} from '@/shared/lib/classNames/classNames';
import {useTranslation} from 'react-i18next';
import cls from './CountrySelect.module.scss';
import {Select} from '@/shared/ui/Select';
import {Country, TCountry} from '../../modal/types/country';

interface ICountrySelectProps {
    className?: string;
    value?: TCountry;
    onChange?: (value: TCountry) => void;
    readonly?: boolean;
}

export const CountrySelect = (props: ICountrySelectProps) => {
    const {
        className = '',
        value,
        onChange,
        readonly,
    } = props;

    const {t} = useTranslation()

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as TCountry)
    }, [onChange])

    const options = [
        {value: Country.Armenia, content: Country.Armenia},
        {value: Country.Belarus, content: Country.Belarus},
        {value: Country.Kazakhstan, content: Country.Kazakhstan},
        {value: Country.Ukraine, content: Country.Ukraine},
        {value: Country.Russia, content: Country.Russia},
    ]

    return (
        <Select
            className={classNames(cls.CountrySelect, {}, [className])}
            label={t('Укажите страну') || 'Укажите страну'}
            options={options}
            value={value}
            onChange={onChangeHandler}
            readonly={readonly}
        />
    );
}