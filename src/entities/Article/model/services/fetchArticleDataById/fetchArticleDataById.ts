import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { IArticle } from '../../types/article';

export const fetchArticleDataById = createAsyncThunk<
IArticle,
string,
ThunkConfig<string>
>(
    'profile/fetchArticleData',
    async (articleId, thunkAPI) => {
        const {
            extra,
            rejectWithValue,
        } = thunkAPI;

        try {
            const response = await extra.api.get<IArticle>(
                '/articles/' + articleId
            );

            if (!response.data) {
                throw new Error()
            }

            return response.data
        } catch (e) {
            console.log(e)
            return rejectWithValue('error')
        }
    }
)