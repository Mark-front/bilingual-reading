import { EntityState } from '@reduxjs/toolkit';
import { IArticle, TArticleSortField, TArticleType, TArticleView } from '@/entities/Article';
import { SortOrder } from '@/shared/types';

export interface IArticlePageSchema extends EntityState<IArticle> {
    isLoading?: boolean;
    error?: string;

    // pagination
    page: number;
    limit?: number;
    hasMore: boolean;
    // filters
    view: TArticleView;
    order: SortOrder;
    sort: TArticleSortField;
    search: string;
    type: TArticleType;
    _inited?: boolean;
}