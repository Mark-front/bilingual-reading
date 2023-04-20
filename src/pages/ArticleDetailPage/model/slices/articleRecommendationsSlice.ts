import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/StoreProvider';
import { IArticleDetailRecommendationsSchema } from '../types/articleDetailRecommendationsSchema';
import { IArticle } from '@/entities/Article';
import {
    fetchArticleRecommendationsList,
} from '@/pages/ArticleDetailPage/model/services/fetchArticleRecommendations/fetchArticleRecommendations';

const recommendationsAdapter = createEntityAdapter<IArticle>({
    selectId: (article) => article.id,
})

export const getArticleRecommendations = recommendationsAdapter.getSelectors<StateSchema>(
    (state) => state.articleDetailsPage?.recommendations || recommendationsAdapter.getInitialState()
)


const articleRecommendationsSlice = createSlice({
    name: 'articleRecommendationsSlice',
    initialState: recommendationsAdapter.getInitialState<IArticleDetailRecommendationsSchema>({
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
