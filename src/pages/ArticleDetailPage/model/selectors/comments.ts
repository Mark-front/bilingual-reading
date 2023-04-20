import { StateSchema } from '@/app/providers/StoreProvider';

export const getArticlesCommentsIsLoading = (state: StateSchema) => state.articleDetailsPage?.comments?.isLoading;
export const getArticlesCommentsError = (state: StateSchema) => state.articleDetailsPage?.comments?.error;