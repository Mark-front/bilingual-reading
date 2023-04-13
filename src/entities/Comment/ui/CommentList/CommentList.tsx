import React, { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './CommentList.module.scss';
import { IComment } from '../../model/types/comment';
import { useTranslation } from 'react-i18next';
import { CommentCard } from '@/entities/Comment';
import { Text } from '@/shared/ui/Text';


interface ICommentListProps {
    className?: string;
    comments?: IComment[];
    isLoading?: boolean;
}

export const CommentList = memo((props: ICommentListProps) => {
    const {
        className = '',
        comments,
        isLoading,
    } = props;

    const { t } = useTranslation()


    return (
        <div className={classNames(cls.CommentList, {}, [ className ])}>
            {comments?.length
                ? comments.map((comment, index) => (
                    <CommentCard
                        key={String(index) + String(comment)}
                        className={cls.CommentItem}
                        comment={comment}
                        isLoading={Boolean(isLoading)}
                    />
                ))
                : <Text text={t('Комментариев к посту пока нет') || 'Комментариев к посту пока нет'}/>
            }
        </div>
    );
})

CommentList.displayName = 'CommentList'