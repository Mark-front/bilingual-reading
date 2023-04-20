import { EntityState } from '@reduxjs/toolkit';
import { IArticle, TArticleView } from '@/entities/Article';
import { SortOrder } from '@/shared/types';
import { TArticleSortField, TArticleType } from '@/entities/Article/model/types/article';

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