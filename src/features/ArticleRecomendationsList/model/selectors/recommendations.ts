import { StateSchema } from '@/app/providers/StoreProvider';

export const getArticlesRecommendationsIsLoading = (state: StateSchema) => state.articleRecommendations?.isLoading;
export const getArticlesRecommendationsError = (state: StateSchema) => state.articleRecommendations?.error;