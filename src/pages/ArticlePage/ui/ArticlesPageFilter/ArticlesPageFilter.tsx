import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import React, { memo, useCallback } from 'react';
import cls from './ArticlesPageFilter.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ArticleSortSelector, ArticleViewSelector, TArticleView } from '@/entities/Article';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { articlesPageAction } from '../../model/slices/articlePageSlice/articlePageSlice';
import {
    getArticlesPageOrder,
    getArticlesPageSearch,
    getArticlesPageSort,
    getArticlesPageView,
} from '../../model/selectors/getArticlesPage/getArticlesPage';
import { Card } from '@/shared/ui/Card';
import { Input } from '@/shared/ui/Input';
import { TArticleSortField } from '@/entities/Article/model/types/article';
import { SortOrder } from '@/shared/types';
import { fetchArticleList } from '../../model/services/fetchArticleList/fetchArticleList';

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

    const { t } = useTranslation();

    const fetchData = useCallback(() => {
        dispatch(fetchArticleList({ replace: true }))
    }, [ dispatch ])

    const onChangeView = useCallback((newView: TArticleView) => {
        dispatch(articlesPageAction.setView(newView));
    }, [ dispatch ])

    const onChangeSort = useCallback((newSort: TArticleSortField) => {
        dispatch(articlesPageAction.setSort(newSort));
        fetchData()
    }, [ fetchData, dispatch ])

    const onChangeOrder = useCallback((newOrder: SortOrder) => {
        dispatch(articlesPageAction.setOrder(newOrder));
        dispatch(articlesPageAction.setPage(1));
        fetchData()
    }, [ fetchData, dispatch ])

    const onChangeSearch = useCallback((newSearch: string) => {
        dispatch(articlesPageAction.setSearch(newSearch));
        dispatch(articlesPageAction.setPage(1))
        fetchData()
    }, [ fetchData, dispatch ])

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
        </div>
    );
})

ArticlesPageFilter.displayName = 'ArticlesPageFilter'