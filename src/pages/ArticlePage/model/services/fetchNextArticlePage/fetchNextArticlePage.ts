import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import {
    getArticlesPageHasMore,
    getArticlesPageIsLoading,
    getArticlesPageNum,
} from '../../selectors/getArticlesPage/getArticlesPage';
import { articlesPageAction } from '../../slices/articlePageSlice/articlePageSlice';
import { fetchArticleList } from '../../services/fetchArticleList/fetchArticleList';

export const fetchNextArticlePage = createAsyncThunk<
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

        const hasMore = getArticlesPageHasMore(getState());
        const page = getArticlesPageNum(getState());
        const isLoading = getArticlesPageIsLoading(getState());

        if (hasMore && !isLoading) {
            dispatch(articlesPageAction.setPage(page + 1))
            dispatch(fetchArticleList({
                page: page + 1,
            }))
        }
    }
)