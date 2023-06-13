import React, { memo } from 'react';
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articlesPageReducer } from '../../model/slices/articlePageSlice/articlePageSlice';
import { ArticleInfiniteList } from '../ArticleInfiniteList/ArticleInfiniteList';
import { Page } from '@/widgets/Page';
import cls from './ArticlePage.module.scss'

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
            <Page className={cls.ArticlePage} data-testid='ArticlePage'>
                <ArticleInfiniteList/>
            </Page>
        </DynamicModuleLoader>
    );
}

export default memo(ArticlePage)