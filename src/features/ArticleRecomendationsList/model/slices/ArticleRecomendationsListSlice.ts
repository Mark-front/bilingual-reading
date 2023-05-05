import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/StoreProvider';
import { ArticleRecomendationsListSchema } from '../types/ArticleRecomendationsListSchema';
import { IArticle } from '@/entities/Article';
import { fetchArticleRecommendationsList } from '../services/fetchArticleRecommendations/fetchArticleRecommendations';

const recommendationsAdapter = createEntityAdapter<IArticle>({
    selectId: (article) => article.id,
})

export const getArticleRecommendations = recommendationsAdapter.getSelectors<StateSchema>(
    (state) => state.articleRecommendations || recommendationsAdapter.getInitialState()
)


const articleRecommendationsSlice = createSlice({
    name: 'articleRecommendationsSlice',
    initialState: recommendationsAdapter.getInitialState<ArticleRecomendationsListSchema>({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {},
    }),
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticleRecommendationsList.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchArticleRecommendationsList.fulfilled, (state, action) => {
                state.isLoading = false;
                recommendationsAdapter.setAll(state, action.payload)
            })
            .addCase(fetchArticleRecommendationsList.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
    },
})

export const { reducer: articleRecommendationsReducer } = articleRecommendationsSlice;
