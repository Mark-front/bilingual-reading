import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { IArticle } from '@/entities/Article';

export const fetchArticleRecommendationsList = createAsyncThunk<
IArticle[],
void,
ThunkConfig<string>
>(
    'articleDetailPage/fetchArticleRecommendationsList',
    async (_, thunkAPI) => {
        const {
            extra,
            rejectWithValue,
        } = thunkAPI;

        try {
            const response = await extra.api.get<IArticle[]>(
                '/articles', {
                    params: {
                        _limit: 4,
                    },
                }
            );
            if (!response.data) {
                throw new Error()
            }
            console.log(response.data)
            return response.data
        } catch (e) {
            console.log(e)
            return rejectWithValue('error')
        }
    }
)