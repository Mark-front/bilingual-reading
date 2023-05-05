import React, { memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './ArticleDetailPage.module.scss';
import { ArticleDetails } from '@/entities/Article';
import { useParams } from 'react-router-dom';
import { Text, TextSize, ThemeText } from '@/shared/ui/Text';
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { getArticleComments } from '../../model/slices/articleDetailCommentsSlice';
import { useSelector } from 'react-redux';
import { getArticlesCommentsError, getArticlesCommentsIsLoading } from '../../model/selectors/comments';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { postArticleComment } from '../../model/services/postArtcleComment/postArtcleComment';
import { AddCommentForm } from '@/features/AddComment';
import { CommentList } from '@/entities/Comment';
import { Page } from '@/widgets/Page';
import { articleDetailsPageReducer } from '../../model/slices';
import { ArticleDetailPageHeader } from '../ArticleDetailPageHeader/ArticleDetailPageHeader';
import { ArticleRecomendationsList } from '@/features/ArticleRecomendationsList';
import {
    articleRecommendationsReducer,
} from '../../../../features/ArticleRecomendationsList/model/slices/ArticleRecomendationsListSlice';

interface IArticleDetailPageProps {
    className?: string;
}

const reducers: ReducersList = {
    articleDetailsPage: articleDetailsPageReducer,
    articleRecommendations: articleRecommendationsReducer,
}
const ArticleDetailPage = (props: IArticleDetailPageProps) => {
    const {
        className = '',
    } = props;

    const { t } = useTranslation()
    const { id } = useParams()
    const comments = useSelector(getArticleComments.selectAll)
    const commentsIsLoading = useSelector(getArticlesCommentsIsLoading)
    const commentsError = useSelector(getArticlesCommentsError)


    const dispatch = useAppDispatch()

    const onSendComment = useCallback((value: string) => {
        dispatch(postArticleComment(value))
    }, [ dispatch ])


    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id as string))
    })

    if (!id && __PROJECT__ !== 'storybook') {
        return (
            <Text
                className={classNames(cls.Error, {}, [ className ])}
                theme={ThemeText.ERROR}
                text={t('Статья не найдена') || 'Статья не найдена'}
            />
        )
    }

    return (
        <Page>
            <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
                <div className={classNames(cls.ArticleDetailPage, {}, [ className ])}>
                    <ArticleDetailPageHeader/>
                    <ArticleDetails id={id || '1'}/>
                    <Text className={cls.Comments} size={TextSize.L} title={t('Рекоммендации') || 'Рекоммендации'}/>
                    <ArticleRecomendationsList/>
                    <Text className={cls.Comments} size={TextSize.L} title={t('Комментарии') || 'Комментарии'}/>
                    <AddCommentForm onSendComment={onSendComment}/>
                    <CommentList comments={comments} isLoading={commentsIsLoading}/>
                </div>
            </DynamicModuleLoader>
        </Page>
    );
}

export default memo(ArticleDetailPage)