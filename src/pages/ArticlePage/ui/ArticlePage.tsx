import React, { memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './ArticlePage.module.scss';
import { ArticleList, ArticleViewSelector, TArticleView } from '@/entities/Article';
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articlesPageAction, articlesPageReducer, getArticles } from '../model/slices/articlePageSlice/articlePageSlice';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import {
    getArticlesPageError,
    getArticlesPageIsLoading,
    getArticlesPageView,
} from '../model/selectors/getArticlesPage/getArticlesPage';
import { Text, ThemeText } from '@/shared/ui/Text';
import { Page } from '@/widgets/Page';
import { fetchNextArticlePage } from '../model/services/fetchNextArticlePage/fetchNextArticlePage';
import { initArticlePage } from '../model/services/initArticlePage/initArticlePage';

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


    const onChangeView = useCallback((newView: TArticleView) => {
        dispatch(articlesPageAction.setView(newView));
    }, [ dispatch ])

    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextArticlePage())
    }, [ dispatch ])

    useInitialEffect(() => {
        dispatch(initArticlePage())
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
        <Page onScrollEnd={onLoadNextPart}>
            <DynamicModuleLoader reducers={reducers}>
                <div className={classNames(cls.ArticlePage, {}, [ className ])}>
                    <ArticleViewSelector view={view} onViewClick={onChangeView}/>
                    <ArticleList
                        articles={articles}
                        view={view}
                        isLoading={isLoading}
                    />
                </div>
            </DynamicModuleLoader>
        </Page>
    );
}

export default memo(ArticlePage)