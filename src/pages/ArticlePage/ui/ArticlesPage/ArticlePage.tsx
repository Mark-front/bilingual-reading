import React, { memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './ArticlePage.module.scss';
import { ArticleList } from '@/entities/Article';
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articlesPageReducer, getArticles } from '../../model/slices/articlePageSlice/articlePageSlice';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import {
    getArticlesPageError,
    getArticlesPageIsLoading,
    getArticlesPageView,
} from '../../model/selectors/getArticlesPage/getArticlesPage';
import { Text, ThemeText } from '@/shared/ui/Text';
import { fetchNextArticlePage } from '../../model/services/fetchNextArticlePage/fetchNextArticlePage';
import { initArticlePage } from '../../model/services/initArticlePage/initArticlePage';
import { useSearchParams } from 'react-router-dom';

interface IArticlePageProps {
    className?: string;
}

const reducers: ReducersList = {
    articlePage: articlesPageReducer,
}
const ArticlePage = (props: IArticlePageProps) => {
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
                className={classNames(cls.Error, {}, [ className ])}
                theme={ThemeText.ERROR}
                title={t('Произошла ошиюка при загрузке списка статей') || 'Произошла ошиюка при загрузке статьи'}
            />
        )
    }

    return (
        <DynamicModuleLoader reducers={reducers}>
            <ArticleList
                target={'_self'}
                className={cls.list}
                articles={articles}
                view={view}
                isLoading={isLoading}
                onLoadNextPart={onLoadNextPart}
            />
        </DynamicModuleLoader>
    );
}

export default memo(ArticlePage)