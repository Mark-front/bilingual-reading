import { StateSchema } from '@/app/providers/StoreProvider';
import { IArticlePageSchema } from '../../types/articlePageSchema';
import { ArticleView, IArticle, TArticleView } from '@/entities/Article';
import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchArticleList } from '../../services/fetchArticleList/fetchArticleList';
import { VIEW_ARTICLES } from '@/shared/const/localStorage';

const articleListAdapter = createEntityAdapter<IArticle>({
    selectId: (article) => article.id,
})


export const getArticles = articleListAdapter.getSelectors<StateSchema>(
    (state) => state.articlePage || articleListAdapter.getInitialState()
)


const articlePageSlice = createSlice({
    name: 'articleDetailCommentsSlice',
    initialState: articleListAdapter.getInitialState<IArticlePageSchema>({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {},
        view: ArticleView.SMALL,
        page: 1,
        hasMore: true,
        _inited: false,
    }),
    reducers: {
        setView: (state, action: PayloadAction<TArticleView>) => {
            state.view = action.payload;
            localStorage.setItem(VIEW_ARTICLES, action.payload)
        },
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload;

        },
        initState: state => {
            const view = localStorage.getItem(VIEW_ARTICLES) as TArticleView
            state.view = view;
            state.limit = view === ArticleView.BIG ? 4 : 9;
            state._inited = true;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticleList.pending, (state, action) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchArticleList.fulfilled, (state, action: PayloadAction<IArticle[]>) => {
                state.isLoading = false;
                articleListAdapter.addMany(state, action.payload);
                state.hasMore = action.payload.length > 0;
            })
            .addCase(fetchArticleList.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
    },
})

export const { reducer: articlesPageReducer } = articlePageSlice;
export const { actions: articlesPageAction } = articlePageSlice;
