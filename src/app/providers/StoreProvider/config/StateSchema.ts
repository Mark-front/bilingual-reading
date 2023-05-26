import { AxiosInstance } from 'axios';
import { To } from '@remix-run/router';
import { IUserSchema } from '@/entities/User';
import { SaveScrollSchema } from '@/widgets/Page';
import { CounterSchema } from '@/entities/Counter';
import { IArticleSchema } from '@/entities/Article';
import { ILoginSchema } from '@/features/AuthByUsername';
import { IArticlePageSchema } from '@/pages/ArticlePage';
import { IAddCommentSchema } from '@/features/AddComment';
import { NavigateOptions } from 'react-router/dist/lib/context';
import { AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit';
import { ArticleDetailsPageSchema } from '@/pages/ArticleDetailPage/model/types';
import { rtkApi } from '@/shared/api/rtkApi';
import { ProfileSchema } from '@/features/EditableProfileCard';

export interface StateSchema {
    counter: CounterSchema;
    user: IUserSchema;
    profile: ProfileSchema;
    saveScroll: SaveScrollSchema;
    [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>,

    // Ассинхронные редюсеры
    loginForm?: ILoginSchema;
    article?: IArticleSchema;
    addComment?: IAddCommentSchema;
    articlePage?: IArticlePageSchema;
    articleDetailsPage?: ArticleDetailsPageSchema;

}

export type StateSchemaKey = keyof StateSchema;

export type MountedReducers = OptionalRecord<StateSchemaKey, boolean>

export interface IReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>;
    reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
    add: (key: StateSchemaKey, reducer: Reducer) => void;
    remove: (key: StateSchemaKey) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: IReducerManager;
}

export interface ThunkExtraArg {
    api: AxiosInstance;
    navigate?: (to: To, options?: NavigateOptions) => void;
}

export interface ThunkConfig<T> {
    rejectValue: T;
    extra: ThunkExtraArg;
    state: StateSchema;
}
