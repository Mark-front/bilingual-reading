import React, { memo } from 'react';
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articlesPageReducer } from '../../model/slices/articlePageSlice/articlePageSlice';
import { ArticleInfiniteList } from '../ArticleInfiniteList/ArticleInfiniteList';

interface IArticlePageProps {
    className?: string;
}

const reducers: ReducersList = {
    articlePage: articlesPageReducer,
}
const ArticlePage = (props: IArticlePageProps) => {
    const {
        className = '',
    } = props;

    return (
        <DynamicModuleLoader reducers={reducers}>
            <ArticleInfiniteList/>
        </DynamicModuleLoader>
    );
}

export default memo(ArticlePage)