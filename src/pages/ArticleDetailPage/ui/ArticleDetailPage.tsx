import React, { memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './ArticleDetailPage.module.scss';
import { ArticleDetails } from '@/entities/Article';
import { useNavigate, useParams } from 'react-router-dom';
import { Text, ThemeText } from '@/shared/ui/Text';
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articleDetailCommentsReducer, getArticleComments } from '../model/slices/articleDetailCommentsSlice';
import { useSelector } from 'react-redux';
import { getArticlesCommentsError, getArticlesCommentsIsLoading } from '../model/selectors/comments';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { fetchCommentsByArticleId } from '../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { postArticleComment } from '../model/services/postArtcleComment/postArtcleComment';
import { AddCommentForm } from '@/features/AddComment';
import { CommentList } from '@/entities/Comment';
import { Button, ButtonSize, ThemeButton } from '@/shared/ui/Button';
import { RoutePath } from '@/shared/config/routeConfig/routeConfig';
import { Page } from '@/widgets/Page';

interface IArticleDetailPageProps {
    className?: string;
}

const reducers: ReducersList = {
    articleComments: articleDetailCommentsReducer,
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
    const navigate = useNavigate()

    const onBackToList = useCallback(() => {
        navigate(RoutePath.articles)
    }, [ navigate ])

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
                    <Button theme={ThemeButton.CLEAR} size={ButtonSize.M} onClick={onBackToList}>
                        {t('Назад к списку')}
                    </Button>
                    <ArticleDetails id={id || '1'}/>
                    <Text className={cls.Comments} title={t('Комментарии') || 'Комментарии'}/>
                    <AddCommentForm onSendComment={onSendComment}/>
                    <CommentList comments={comments} isLoading={commentsIsLoading}/>
                </div>
            </DynamicModuleLoader>
        </Page>
    );
}

export default memo(ArticleDetailPage)