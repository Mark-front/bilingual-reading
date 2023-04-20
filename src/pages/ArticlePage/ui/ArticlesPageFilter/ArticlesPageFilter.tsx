import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import React, { memo, useCallback } from 'react';
import cls from './ArticlesPageFilter.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
    ArticleSortSelector,
    ArticleViewSelector,
    TArticleSortField,
    TArticleType,
    TArticleView,
} from '@/entities/Article';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { articlesPageAction } from '../../model/slices/articlePageSlice/articlePageSlice';
import {
    getArticlesPageOrder,
    getArticlesPageSearch,
    getArticlesPageSort,
    getArticlesPageType,
    getArticlesPageView,
} from '../../model/selectors/getArticlesPage/getArticlesPage';
import { Card } from '@/shared/ui/Card';
import { Input } from '@/shared/ui/Input';
import { SortOrder } from '@/shared/types';
import { fetchArticleList } from '../../model/services/fetchArticleList/fetchArticleList';
import { useDebounce } from '@/shared/lib/hooks/useDebounce/useDebounce';
import { ArticleTypeTabs } from '../../../../entities/Article/ui/ArticleTypeTabs/ArticleTypeTabs';

interface IArticlesPageFilterProps {
    className?: string;
}

export const ArticlesPageFilter = memo((props: IArticlesPageFilterProps) => {
    const {
        className = '',
    } = props;

    const dispatch = useAppDispatch();
    const view = useSelector(getArticlesPageView);
    const sort = useSelector(getArticlesPageSort);
    const order = useSelector(getArticlesPageOrder);
    const search = useSelector(getArticlesPageSearch);
    const type = useSelector(getArticlesPageType);

    const { t } = useTranslation();

    const debounceFetchData = useDebounce(() => {
        dispatch(fetchArticleList({ replace: true }))
    }, 500)


    const onChangeView = useCallback((newView: TArticleView) => {
        dispatch(articlesPageAction.setView(newView));
    }, [ dispatch ])

    const onChangeSort = useCallback((newSort: TArticleSortField) => {
        dispatch(articlesPageAction.setSort(newSort));
        debounceFetchData()
    }, [ debounceFetchData, dispatch ])

    const onChangeOrder = useCallback((newOrder: SortOrder) => {
        dispatch(articlesPageAction.setOrder(newOrder));
        dispatch(articlesPageAction.setPage(1));
        debounceFetchData()
    }, [ debounceFetchData, dispatch ])

    const onChangeSearch = useCallback((newSearch: string) => {
        dispatch(articlesPageAction.setSearch(newSearch));
        dispatch(articlesPageAction.setPage(1))
        debounceFetchData()
    }, [ debounceFetchData, dispatch ])

    const onChangeType = useCallback((value: TArticleType) => {
        dispatch(articlesPageAction.setType(value));
        dispatch(articlesPageAction.setPage(1))
        debounceFetchData()
    }, [ debounceFetchData, dispatch ])


    return (
        <div className={classNames(cls.ArticlesPageFilter, {}, [ className ])}>
            <div className={cls.sortWrapper}>
                <ArticleViewSelector view={view} onViewClick={onChangeView}/>
                <ArticleSortSelector
                    onChangeOrder={onChangeOrder}
                    onChangeSort={onChangeSort}
                    sort={sort}
                    order={order}/>
            </div>
            <Card className={cls.search}>
                <Input placeholder={t('Поиск') || 'Поиск'} onChange={onChangeSearch} value={search}/>
            </Card>
            <ArticleTypeTabs type={type} onChangeType={onChangeType}/>
        </div>
    );
})

ArticlesPageFilter.displayName = 'ArticlesPageFilter'