import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IArticle} from '../types/article';
import {fetchArticleDataById} from '../services/fetchArticleDataById/fetchArticleDataById';
import {IArticleSchema} from '../types/articleDetailShema';

const initialState: IArticleSchema = {
    data: undefined,
    isLoading: false,
    error: undefined,
}
export const articleSlice = createSlice({
    name: 'article',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            // fetchArticleDataById
            .addCase(fetchArticleDataById.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchArticleDataById.fulfilled, (state, action: PayloadAction<IArticle>) => {
                state.isLoading = false;
                state.data = action.payload
            })
            .addCase(fetchArticleDataById.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
    },
})

export const {actions: articleActions} = articleSlice
export const {reducer: articleReducer} = articleSlice
