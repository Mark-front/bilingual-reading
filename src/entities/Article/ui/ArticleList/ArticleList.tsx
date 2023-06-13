import React, { ComponentType, HTMLAttributeAnchorTarget, memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleList.module.scss';
import { ArticleView, IArticle, TArticleView } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../../ui/ArticleListItem/ArticleListItemSkeleton';
import { Virtuoso, VirtuosoGrid } from 'react-virtuoso';

interface IArticleListProps {
    className?: string;
    articles: IArticle[];
    isLoading?: boolean;
    view?: TArticleView;
    target: HTMLAttributeAnchorTarget;
    onLoadNextPart?: () => void;
    header?: ComponentType<{ context?: any; }>;
    withoutVirtual?: boolean;
}

export const ArticleList = memo((props: IArticleListProps) => {
    const {
        className = '',
        articles,
        isLoading,
        view = ArticleView.SMALL,
        target,
        onLoadNextPart,
        header,
        withoutVirtual = false,
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

    if (withoutVirtual) {
        return (
            <div className={classNames(cls.ArticleList, {}, [ className, cls[view] ])}>
                {
                    articles?.length > 0
                        ? articles.map((article, index) => renderArticle(index, article))
                        : null

                }
                {isLoading && getSkeletons()}
            </div>
        )
    }

    return (
        <div className={classNames(cls.ArticleList, {}, [ className, cls[view] ])}>
            {
                view === 'BIG' ?
                    <Virtuoso
                        className={cls.list}
                        style={{ height: 'calc(100vh - 50px)' }}
                        data={articles}
                        itemContent={renderArticle}
                        endReached={onLoadNextPart}
                        components={{
                            Header: header,
                            Footer,
                        }}
                    >
                    </Virtuoso>
                    :
                    <VirtuosoGrid
                        style={{ height: 'calc(100vh - 50px)' }}
                        data={articles}
                        totalCount={articles.length}
                        itemContent={renderArticle}
                        endReached={onLoadNextPart}
                        listClassName={cls.itemsWrapper}
                        components={{
                            Header: header,
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