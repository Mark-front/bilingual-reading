import React, { HTMLAttributeAnchorTarget, memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleList.module.scss';
import { ArticleView, IArticle, TArticleView } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '@/entities/Article/ui/ArticleListItem/ArticleListItemSkeleton';
import AutoSizer from 'react-virtualized-auto-sizer';
import { FixedSizeList as List, ListChildComponentProps } from 'react-window';

interface IArticleListProps {
    className?: string;
    articles: IArticle[];
    isLoading?: boolean;
    view?: TArticleView;
    target: HTMLAttributeAnchorTarget;
}

export const ArticleList = memo((props: IArticleListProps) => {
    const {
        className = '',
        articles,
        isLoading,
        view = ArticleView.SMALL,
        target,
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
                target={target}
            />
        )
    }
    const ItemList = ({
        index,
        style,
        data,
    }: ListChildComponentProps<IArticle[]>) => {
        console.log(data[index])
        if (isLoading) return <ArticleListItemSkeleton view={view} className={cls.card}/>
        return renderArticle(data[index], data[index].id + data[index].title)
    }

    return (

        <div className={classNames(cls.ArticleList, {}, [ className, cls[view] ])}>
            <AutoSizer>
                {({ height, width }) => {
                    console.log(height,
                        width)
                    return (
                        <List
                            itemSize={660}
                            height={height as number}
                            width={width as number}
                            itemData={articles}
                            itemCount={articles.length}
                        >
                            {ItemList}
                        </List>
                    )
                }}
            </AutoSizer>
        </div>
    );
})

ArticleList.displayName = 'ArticleList'