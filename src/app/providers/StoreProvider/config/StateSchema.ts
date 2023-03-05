import {CounterSchema} from '@/entities/Counter';
import {IUserSchema} from '@/entities/User';
import {ILoginSchema} from '@/features/AuthByUsername';
import {AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject} from '@reduxjs/toolkit';
import {ProfileSchema} from '@/entities/Profile';
import {AxiosInstance} from 'axios';
import {NavigateOptions} from 'react-router/dist/lib/context';
import {To} from '@remix-run/router';

export interface StateSchema {
    counter: CounterSchema;
    user: IUserSchema;
    profile: ProfileSchema
    // Ассинхронные редюсеры
    loginForm?: ILoginSchema;
}

export type StateSchemaKey = keyof StateSchema;

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
    navigate: (to: To, options?: NavigateOptions) => void;
}

export interface ThunkConfig<T> {
    rejectValue: T;
    extra: ThunkExtraArg
}
