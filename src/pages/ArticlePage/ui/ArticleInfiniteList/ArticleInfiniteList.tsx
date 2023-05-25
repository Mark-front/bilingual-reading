import React, { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getArticles } from '../../model/slices/articlePageSlice/articlePageSlice';
import {
    getArticlesPageError,
    getArticlesPageIsLoading,
    getArticlesPageView,
} from '../../model/selectors/getArticlesPage/getArticlesPage';
import { useSearchParams } from 'react-router-dom';
import { fetchNextArticlePage } from '../../model/services/fetchNextArticlePage/fetchNextArticlePage';
import { initArticlePage } from '../../model/services/initArticlePage/initArticlePage';
import { ArticlesPageFilter } from '../ArticlesPageFilter/ArticlesPageFilter';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { Text, ThemeText } from '@/shared/ui/Text';
import { ArticleList } from '@/entities/Article';

interface IArticleInfiniteListProps {
    className?: string;
}

export const ArticleInfiniteList = memo((props: IArticleInfiniteListProps) => {
    const {
        className = '',
    } = props;


    const { t } = useTranslation();

    const dispatch = useAppDispatch();
    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlesPageIsLoading)
    const error = useSelector(getArticlesPageError)
    const view = useSelector(getArticlesPageView)
    const [ searchParams ] = useSearchParams()

    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextArticlePage())
    }, [ dispatch ])

    useInitialEffect(() => {
        dispatch(initArticlePage(searchParams))
    })

    if (error) {
        return (
            <Text
                theme={ThemeText.ERROR}
                title={t('Произошла ошиюка при загрузке списка статей') || 'Произошла ошиюка при загрузке статьи'}
            />
        )
    }
    const Header = () => <ArticlesPageFilter/>


    return (
        <ArticleList
            target={'_self'}
            articles={articles}
            view={view}
            isLoading={isLoading}
            onLoadNextPart={onLoadNextPart}
            header={Header}
        />
    );
})

ArticleInfiniteList.displayName = 'ArticleInfiniteList'