import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { IArticle } from '@/entities/Article';
import {
    getArticlesPageLimit,
    getArticlesPageNum,
    getArticlesPageOrder,
    getArticlesPageSearch,
    getArticlesPageSort,
} from '@/pages/ArticlePage/model/selectors/getArticlesPage/getArticlesPage';

interface IFetchArticleListProps {
    replace?: boolean;
}

export const fetchArticleList = createAsyncThunk<
IArticle[],
IFetchArticleListProps,
ThunkConfig<string>
>(
    'articlePage/fetchArticleList',
    async (props, thunkAPI) => {
        const {
            extra,
            rejectWithValue,
            getState,
        } = thunkAPI;

        const {
            replace,
        } = props;

        const limit = getArticlesPageLimit(getState());
        const page = getArticlesPageNum(getState());
        const sort = getArticlesPageSort(getState());
        const order = getArticlesPageOrder(getState());
        const search = getArticlesPageSearch(getState());

        try {
            const response = await extra.api.get<IArticle[]>(
                '/articles', {
                    params: {
                        _expand: 'user',
                        _limit: limit,
                        _page: page,
                        _sort: sort,
                        _order: order,
                        q: search,
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