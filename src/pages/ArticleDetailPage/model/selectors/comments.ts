import {StateSchema} from '@/app/providers/StoreProvider';

export const getArticlesCommentsIsLoading = (state: StateSchema) => state.articleComments?.isLoading;
export const getArticlesCommentsError = (state: StateSchema) => state.articleComments?.error;