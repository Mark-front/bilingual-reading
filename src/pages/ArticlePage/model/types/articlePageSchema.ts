import { EntityState } from '@reduxjs/toolkit';
import { IArticle, TArticleView } from '@/entities/Article';

export interface IArticlePageSchema extends EntityState<IArticle> {
    isLoading?: boolean;
    error?: string;

    view: TArticleView;
    // pagination
    page: number;
    limit?: number;
    hasMore: boolean;

    _inited?: boolean;
}