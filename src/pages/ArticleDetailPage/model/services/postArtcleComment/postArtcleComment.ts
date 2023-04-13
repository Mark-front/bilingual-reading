import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { IComment } from '@/entities/Comment';
import { getUserAuthData } from '@/entities/User';
import { getArticleData } from '@/entities/Article/model/selectors/articleDetails';
import { fetchCommentsByArticleId } from '../../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';

export const postArticleComment = createAsyncThunk<
IComment,
string,
ThunkConfig<string>
>(
    'addComment/postComment',
    async (text, thunkAPI) => {
        const {
            dispatch,
            extra,
            rejectWithValue,
            getState,
        } = thunkAPI;

        const userData = getUserAuthData(getState())
        const article = getArticleData(getState())

        if (!userData || !text || !article) {
            return rejectWithValue('data error')
        }

        try {
            const response = await extra.api.post<IComment>(
                '/comments',
                {
                    articleId: article?.id,
                    userId: userData?.id,
                    text: text,
                }
            );

            if (!response.data) {
                throw new Error()
            }
            
            dispatch(fetchCommentsByArticleId(article.id))

            return response.data
        } catch (e) {
            console.log(e)
            return rejectWithValue('error')
        }
    }
)