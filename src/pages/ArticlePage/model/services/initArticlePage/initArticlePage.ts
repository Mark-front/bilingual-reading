import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { getArticlesPageInited } from '../../selectors/getArticlesPage/getArticlesPage';
import { articlesPageAction } from '../../slices/articlePageSlice/articlePageSlice';
import { fetchArticleList } from '../../services/fetchArticleList/fetchArticleList';
import { SortOrder } from '@/shared/types';
import { TArticleSortField, TArticleType } from '@/entities/Article';

export const initArticlePage = createAsyncThunk<
void,
URLSearchParams,
ThunkConfig<string>
>(
    'articlePage/fetchNextArticlePage',
    async (searchParams, thunkAPI) => {
        const {
            getState,
            dispatch,
        } = thunkAPI;


        const _inited = getArticlesPageInited(getState());

        if (_inited) return;
        const orderFromUrl = searchParams.get('order');
        const searchFromUrl = searchParams.get('search');
        const sortFromUrl = searchParams.get('sort');
        const typeFromUrl = searchParams.get('type');

        if (orderFromUrl) {
            dispatch(articlesPageAction.setOrder(orderFromUrl as SortOrder))
        }

        if (searchFromUrl) {
            dispatch(articlesPageAction.setSearch(searchFromUrl))
        }

        if (sortFromUrl) {
            dispatch(articlesPageAction.setSort(sortFromUrl as TArticleSortField))
        }

        if (typeFromUrl) {
            dispatch(articlesPageAction.setType(typeFromUrl as TArticleType))
        }

        dispatch(articlesPageAction.initState())
        dispatch(fetchArticleList({}))
    }
)