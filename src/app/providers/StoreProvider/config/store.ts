import { CombinedState, configureStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit'
import { StateSchema, ThunkExtraArg } from './StateSchema';
import { counterReducer } from '@/entities/Counter';
import { userReducer } from '@/entities/User';
import { createReducerManager } from './reducerManager';
import { $api } from '@/shared/api/api';
import { To } from '@remix-run/router';
import { NavigateOptions } from 'react-router/dist/lib/context';
import { profileReducer } from '@/entities/Profile/model/slice/profileSlice';


export function createReduxStore(
    initialState?: StateSchema,
    asyncReducers?: ReducersMapObject<StateSchema>,
    navigate?: (to: To, options?: NavigateOptions) => void
) {
    const rootReducers: ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        user: userReducer,
        counter: counterReducer,
        profile: profileReducer,
    }

    const reducerManager = createReducerManager(rootReducers);
    const extraArg: ThunkExtraArg = {
        api: $api,
        navigate,
    }

    const store = configureStore({
        reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
        devTools: __IS_DEV__,
        preloadedState: initialState,
        middleware: getDefaultMiddleware => getDefaultMiddleware({
            thunk: {
                extraArgument: extraArg,
            },
        }),
    });


    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    store.reducerManager = reducerManager

    return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];