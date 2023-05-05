import cls from './ArticleRecomendationsList.module.scss';
import React, { memo } from 'react';
import { ArticleList, ArticleView } from '@/entities/Article';
import { useSelector } from 'react-redux';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getArticleRecommendations } from '../../model/slices/ArticleRecomendationsListSlice';
import {
    getArticlesRecommendationsError,
    getArticlesRecommendationsIsLoading,
} from '../../model/selectors/recommendations';
import {
    fetchArticleRecommendationsList,
} from '../../model/services/fetchArticleRecommendations/fetchArticleRecommendations';
import { classNames } from '@/shared/lib/classNames/classNames';

interface ArticleRecomendationsListProps {
    className?: string;
}

export const ArticleRecomendationsList = memo((props: ArticleRecomendationsListProps) => {
    const {
        className,
    } = props;
    const dispatch = useAppDispatch()

    const recommendations = useSelector(getArticleRecommendations.selectAll)
    const recommendationsIsLoading = useSelector(getArticlesRecommendationsIsLoading)
    const recommendationsError = useSelector(getArticlesRecommendationsError)

    useInitialEffect(() => {
        dispatch(fetchArticleRecommendationsList())
    })

    return (
        <ArticleList
            target={'_blank'}
            className={classNames(cls.ArticleRecomendationsList, {}, [ className ])}
            articles={recommendations} isLoading={recommendationsIsLoading}
            withoutVirtual={true}
            view={ArticleView.SMALL}
        />
    );
});