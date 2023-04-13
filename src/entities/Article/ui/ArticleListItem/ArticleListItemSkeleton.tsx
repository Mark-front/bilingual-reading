import React, { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleListItem.module.scss';
import { ArticleView, TArticleView } from '../../model/types/article';
import { Card } from '@/shared/ui/Card';
import { Skeleton, ThemeSkeleton } from '@/shared/ui/Skeleton';

interface IArticleListItemSkeletonProps {
    className?: string;
    view: TArticleView;

}

export const ArticleListItemSkeleton = memo((props: IArticleListItemSkeletonProps) => {
    const {
        className = '',
        view,
    } = props;

    if (view === ArticleView.BIG) {
        return (
            <div className={classNames(cls.ArticleListItem, {}, [ className, cls[view] ])}>
                <Card className={cls.card}>
                    <div className={cls.header}>
                        <Skeleton width={30} height={30} theme={ThemeSkeleton.AVATAR} className={cls.username}/>
                        <Skeleton width={150} height={30} className={cls.data}/>
                    </div>
                    <Skeleton width={350} height={30} className={cls.title}/>
                    <Skeleton width={400} height={50} className={cls.title}/>
                    <Skeleton width={'100%'} height={200} className={cls.title}/>
                    <div className={cls.footer}>
                        <Skeleton width={'50%'} height={30} className={cls.title}/>
                        <Skeleton width={'10%'} height={30} className={cls.title}/>
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <div className={classNames(cls.ArticleListItem, {}, [ className, cls[view] ])}>
            <Card className={cls.card}>
                <div className={cls.imageWrapper}>
                    <Skeleton width={200} height={200} className={cls.username}/>
                </div>
                <div className={cls.infoWrapper}>
                    <Skeleton width={130} height={16}/>
                </div>
                <Skeleton width={150} height={32}/>
            </Card>
        </div>
    );
})

ArticleListItemSkeleton.displayName = 'ArticleListItem'