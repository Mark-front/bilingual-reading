import React, { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './CommentCard.module.scss';
import { Avatar } from '@/shared/ui/Avatar';
import { Text } from '@/shared/ui/Text';
import { IComment } from '../../model/types/comment';
import { Skeleton, ThemeSkeleton } from '@/shared/ui/Skeleton';
import { AppLink } from '@/shared/ui/AppLink';
import { RoutePath } from '@/shared/const/router';

interface ICommentCardProps {
    className?: string;
    comment: IComment;
    isLoading: boolean;
}

export const CommentCard = memo((props: ICommentCardProps) => {
    const {
        className = '',
        comment,
        isLoading,
    } = props;

    if (isLoading) {
        return (
            <div className={classNames(cls.CommentCard, {}, [ className ])}>
                <div className={cls.header}>
                    <Skeleton theme={ThemeSkeleton.AVATAR} height={30} width={30}/>
                    <Skeleton className={cls.username} height={20} width={200}/>
                </div>
                <Skeleton className={cls.text} theme={ThemeSkeleton.PARAGRAPH} height={100}/>
            </div>
        )
    }

    return (
        <div className={classNames(cls.CommentCard, {}, [ className ])}>
            <AppLink to={RoutePath.profile + '/' + comment.userId} className={cls.header}>
                <Avatar src={comment.user.avatar || ''} size={30}/>
                <Text className={cls.username} title={comment.user.username}/>
            </AppLink>
            <Text className={cls.text} text={comment.text}/>
        </div>
    );
})

CommentCard.displayName = 'CommentCard'