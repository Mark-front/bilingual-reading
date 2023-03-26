import {IArticle} from './article';

export interface IArticleSchema {
    data?: IArticle;
    isLoading: boolean;
    error?: string;
}