import { TestAsyncThunk } from '@/shared/lib/tests/testAsyncThunk/testAsyncThunk';
import { fetchNextArticlePage } from '../fetchNextArticlePage/fetchNextArticlePage';
import { fetchArticleList } from '../fetchArticleList/fetchArticleList';

jest.mock('../fetchArticleList/fetchArticleList')
describe('fetchNextArticlePage.test', () => {
    test('success', async () => {
        const thunk = new TestAsyncThunk(fetchNextArticlePage, {
            articlePage: {
                page: 2,
                limit: 4,
                hasMore: true,
                ids: [],
                entities: {},
                isLoading: false,
            },
        });

        await thunk.callThunk();

        expect(thunk.dispatch).toBeCalledTimes(4);
        expect(fetchArticleList).toHaveBeenCalledWith({ page: 3 });
    });

    test('fetchNextArticlePage not called', async () => {
        const thunk = new TestAsyncThunk(fetchNextArticlePage, {
            articlePage: {
                page: 2,
                limit: 4,
                hasMore: false,
                ids: [],
                entities: {},
                isLoading: false,
            },
        });

        await thunk.callThunk();

        expect(thunk.dispatch).toBeCalledTimes(2);
        expect(fetchArticleList).not.toHaveBeenCalled();
    });

    test('fetchNextArticlePage when loading', async () => {
        const thunk = new TestAsyncThunk(fetchNextArticlePage, {
            articlePage: {
                page: 2,
                limit: 4,
                hasMore: true,
                ids: [],
                entities: {},
                isLoading: true,
            },
        });

        await thunk.callThunk();

        expect(thunk.dispatch).toBeCalledTimes(2);
        expect(fetchArticleList).not.toHaveBeenCalled();
    });
})