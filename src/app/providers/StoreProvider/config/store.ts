import {configureStore, ReducersMapObject} from '@reduxjs/toolkit'
import {StateSchema} from './StateSchema';
import {counterReduser} from '@/entities/Counter';
import {userReduser} from '@/entities/User';
import {createReducerManager} from './reducerManager';
import {$api} from '@/shared/api/api';
import {To} from '@remix-run/router';
import {NavigateOptions} from 'react-router/dist/lib/context';


export function createReduxStore(
    initialState: StateSchema,
    asyncReducers?: ReducersMapObject<StateSchema>,
    navigate?: (to: To, options?: NavigateOptions) => void
) {
    const rootReducers: ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        user: userReduser,
        counter: counterReduser,
    }

    const reducerManager = createReducerManager(rootReducers);

    const store = configureStore<StateSchema>({
        reducer: reducerManager.reduce,
        devTools: __IS_DEV__,
        preloadedState: initialState,
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        middleware: getDefaultMiddleware => getDefaultMiddleware({
            thunk: {
                extraArgument: {
                    api: $api,
                    navigate,
                },
            },
        }),
    });


    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    store.reducerManager = reducerManager

    return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];