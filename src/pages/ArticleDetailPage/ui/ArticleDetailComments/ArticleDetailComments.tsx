import React, { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { getArticleComments } from '../../model/slices/articleDetailCommentsSlice';
import { getArticlesCommentsError, getArticlesCommentsIsLoading } from '../../model/selectors/comments';
import { postArticleComment } from '../../model/services/postArtcleComment/postArtcleComment';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { t } from 'i18next';
import { Text, TextSize } from '@/shared/ui/Text';
import { CommentList } from '@/entities/Comment';
import { AddCommentForm } from '@/features/AddComment';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { VStack } from '@/shared/ui/Stack';

interface IArticleDetailCommentsProps {
    id: string;
    className?: string;
}

export const ArticleDetailComments = memo((props: IArticleDetailCommentsProps) => {
    const {
        className = '',
        id,
    } = props;
    const comments = useSelector(getArticleComments.selectAll)
    const commentsIsLoading = useSelector(getArticlesCommentsIsLoading)
    const commentsError = useSelector(getArticlesCommentsError)

    const dispatch = useAppDispatch()

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id as string))
    })

    const onSendComment = useCallback((value: string) => {
        dispatch(postArticleComment(value))
    }, [ dispatch ])

    return (
        <VStack gap={'16'} max={true} align={'start'}>
            <Text size={TextSize.L} title={t('Комментарии') || 'Комментарии'}/>
            <AddCommentForm onSendComment={onSendComment}/>
            <CommentList comments={comments} isLoading={commentsIsLoading}/>
        </VStack>
    );
})

ArticleDetailComments.displayName = 'ArticleDetailComments'