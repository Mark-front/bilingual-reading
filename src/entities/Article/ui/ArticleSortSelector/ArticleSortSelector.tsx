import React, { useMemo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './ArticleSortSelector.module.scss';
import { Select } from '@/shared/ui/Select';
import { ArticleSortField, TArticleSortField } from '../../model/types/article';
import { SortOrder } from '@/shared/types/sort';
import { SelectOption } from '@/shared/ui/Select/ui/Select';

interface IArticleSortSelectorProps {
    className?: string;
    sort: TArticleSortField;
    order: SortOrder;
    onChangeOrder: (newOrder: SortOrder) => void;
    onChangeSort: (newSort: TArticleSortField) => void;
}

export const ArticleSortSelector = (props: IArticleSortSelectorProps) => {
    const {
        className = '',
        onChangeOrder,
        sort,
        order,
        onChangeSort,
    } = props;

    const { t } = useTranslation()

    const orderOptions = useMemo<SelectOption<SortOrder>[]>(() => [
        {
            value: 'asc',
            content: t('Возрастанию'),
        },
        {
            value: 'desc',
            content: t('Убыванию'),
        },
    ], [ t ])

    const sortFieldOptions = useMemo<SelectOption<TArticleSortField>[]>(() => [
        {
            value: ArticleSortField.CREATED,
            content: t('дате создания'),
        },
        {
            value: ArticleSortField.TITLE,
            content: t('названию'),
        },
        {
            value: ArticleSortField.VIEWS,
            content: t('просмотрам'),
        },
    ], [ t ])

    return (
        <div className={classNames(cls.ArticleSortSelector, {}, [ className ])}>
            <Select
                onChange={onChangeSort}
                options={sortFieldOptions}
                value={sort}
                label={t('Сортировать по') || 'Сортировать по'}
            />
            <Select
                onChange={onChangeOrder}
                options={orderOptions}
                value={order}
                label={t('по') || 'по'}
            />
        </div>
    );
}

ArticleSortSelector.displayName = 'ArticleSortSelector'