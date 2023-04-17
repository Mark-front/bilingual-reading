import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { getArticlesPageInited } from '../../selectors/getArticlesPage/getArticlesPage';
import { articlesPageAction } from '../../slices/articlePageSlice/articlePageSlice';
import { fetchArticleList } from '../../services/fetchArticleList/fetchArticleList';

export const initArticlePage = createAsyncThunk<
void,
void,
ThunkConfig<string>
>(
    'articlePage/fetchNextArticlePage',
    async (_, thunkAPI) => {
        const {
            getState,
            dispatch,
        } = thunkAPI;

        const _inited = getArticlesPageInited(getState());

        if (_inited) return;
        dispatch(articlesPageAction.initState())
        dispatch(fetchArticleList({}))
    }
)