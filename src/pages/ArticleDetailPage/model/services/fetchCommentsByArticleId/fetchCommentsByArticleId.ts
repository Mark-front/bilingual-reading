import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { IComment } from '@/entities/Comment';

export const fetchCommentsByArticleId = createAsyncThunk<
IComment[],
string,
ThunkConfig<string>
>(
    'ArticleDetailPage/fetchCommentsByArticleId',
    async (articleId, thunkAPI) => {
        const {
            extra,
            rejectWithValue,
        } = thunkAPI;

        if (!articleId) {
            return rejectWithValue('id not resolve')
        }

        try {
            const response = await extra.api.get<IComment[]>(
                '/comments', {
                    params: {
                        articleId,
                        _expand: 'user',
                    },
                }
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