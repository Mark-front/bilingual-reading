import React, { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleList.module.scss';
import { ArticleView, IArticle, TArticleView } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '@/entities/Article/ui/ArticleListItem/ArticleListItemSkeleton';

interface IArticleListProps {
    className?: string;
    articles: IArticle[];
    isLoading?: boolean;
    view?: TArticleView;
}

export const ArticleList = memo((props: IArticleListProps) => {
    const {
        className = '',
        articles,
        isLoading,
        view = ArticleView.SMALL,
    } = props;

    const getSkeletons = () => new Array(view === ArticleView.SMALL ? 9 : 3)
        .fill(0)
        .map((item, index) => (
            <ArticleListItemSkeleton key={index} view={view} className={cls.card}/>
        ))
    const renderArticle = (article: IArticle, key: string) => {
        return (
            <ArticleListItem
                key={key}
                className={cls.card}
                article={article}
                view={view}
            />
        )
    }

    return (
        <div className={classNames(cls.ArticleList, {}, [ className, cls[view] ])}>
            {
                articles.length > 0
                    ? articles.map(article => renderArticle(article, article.id + article.title))
                    : null

            }
            {isLoading && getSkeletons()}
        </div>
    );
})

ArticleList.displayName = 'ArticleList'