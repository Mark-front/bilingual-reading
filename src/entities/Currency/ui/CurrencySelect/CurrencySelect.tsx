import React, {useCallback} from 'react';
import {classNames} from '@/shared/lib/classNames/classNames';
import {useTranslation} from 'react-i18next';
import {Select} from '@/shared/ui/Select';
import {Currency, TCurrency} from '../../modal/types/currency';

interface ICurrencySelectProps {
    className?: string;
    value?: TCurrency;
    onChange?: (value: TCurrency) => void;
    readonly?: boolean;
}

export const CurrencySelect = (props: ICurrencySelectProps) => {
    const {
        className = '',
        value,
        onChange,
        readonly,
    } = props;

    const {t} = useTranslation()

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as TCurrency)
    }, [onChange])

    const options = [
        {value: Currency.RUB, content: Currency.RUB},
        {value: Currency.EUR, content: Currency.EUR},
        {value: Currency.USD, content: Currency.USD},
    ]

    return (
        <Select
            className={classNames('', {}, [className])}
            label={t('Укажите валюту') || 'Укажите валюту'}
            options={options}
            value={value}
            onChange={onChangeHandler}
            readonly={readonly}
        />
    );
}