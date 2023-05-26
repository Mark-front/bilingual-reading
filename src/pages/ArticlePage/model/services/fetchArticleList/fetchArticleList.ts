import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { ArticleType, IArticle } from '@/entities/Article';
import {
    getArticlesPageLimit,
    getArticlesPageNum,
    getArticlesPageOrder,
    getArticlesPageSearch,
    getArticlesPageSort,
    getArticlesPageType,
} from '../../selectors/getArticlesPage/getArticlesPage';
import { addQueryParams } from '@/shared/lib/url/addQueryParams/addQueryParams';

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
        const type = getArticlesPageType(getState());

        try {
            addQueryParams({ sort, order, search, type })
            const response = await extra.api.get<IArticle[]>(
                '/articles', {
                    params: {
                        _expand: 'user',
                        _limit: limit,
                        _page: page,
                        _sort: sort,
                        _order: order,
                        q: search,
                        type: type === ArticleType.ALL ? undefined : type,
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