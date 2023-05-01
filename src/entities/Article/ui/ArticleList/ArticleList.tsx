import React, { HTMLAttributeAnchorTarget, memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleList.module.scss';
import { ArticleView, IArticle, TArticleView } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '@/entities/Article/ui/ArticleListItem/ArticleListItemSkeleton';
import { Virtuoso, VirtuosoGrid } from 'react-virtuoso';
import { ArticlesPageFilter } from '@/pages/ArticlePage/ui/ArticlesPageFilter/ArticlesPageFilter';

interface IArticleListProps {
    className?: string;
    articles: IArticle[];
    isLoading?: boolean;
    view?: TArticleView;
    target: HTMLAttributeAnchorTarget;
    onLoadNextPart?: () => void;
}

export const ArticleList = memo((props: IArticleListProps) => {
    const {
        className = '',
        articles,
        isLoading,
        view = ArticleView.SMALL,
        target,
        onLoadNextPart,
    } = props;

    const getSkeletons = () => new Array(3)
        .fill(0)
        .map((item, index) => (
            <ArticleListItemSkeleton key={index} view={view} className={cls.card}/>
        ))

    const Footer = memo(() => {
        if (isLoading) {
            return (
                <div className={cls.skelletons}>
                    {getSkeletons()}
                </div>
            )
        }
        return null;
    })


    const Header = () => <ArticlesPageFilter className={cls.header}/>

    const SkeletonPlaceholderGrid = () => (
        <div>
            <ArticleListItemSkeleton view={view} className={cls.card}/>
        </div>
    )
    const renderArticle = (index: number, article: IArticle) => {
        return (
            <ArticleListItem
                key={index}
                className={cls.card}
                article={article}
                view={view}
                target={target}
            />
        )
    }

    return (
        <div className={classNames(cls.ArticleList, {}, [ className, cls[view] ])}>
            {
                view === 'BIG' ?
                    <Virtuoso
                        className={cls.list}
                        style={{ height: '100%' }}
                        data={articles}
                        itemContent={renderArticle}
                        endReached={onLoadNextPart}
                        components={{
                            Header,
                            Footer,
                        }}
                    >
                    </Virtuoso>
                    :
                    <VirtuosoGrid
                        style={{ height: '100%' }}
                        data={articles}
                        totalCount={articles.length}
                        itemContent={renderArticle}
                        endReached={onLoadNextPart}
                        listClassName={cls.itemsWrapper}
                        components={{
                            Header,
                            ScrollSeekPlaceholder: SkeletonPlaceholderGrid,
                        }}
                        scrollSeekConfiguration={{
                            enter: velocity => Math.abs(velocity) > 200,
                            exit: velocity => Math.abs(velocity) < 30,
                        }}
                    >
                    </VirtuosoGrid>
            }
        </div>
    );
})

ArticleList.displayName = 'ArticleList'