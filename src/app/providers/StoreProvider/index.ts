import { StoreProvider } from './ui/StoreProvider';
import { AppDispatch, createReduxStore } from './config/store';
import { ReduxStoreWithManager, StateSchema, StateSchemaKey, ThunkConfig, ThunkExtraArg } from './config/StateSchema';

export {
    StoreProvider,
    createReduxStore,
}

export type {
    ReduxStoreWithManager,
    StateSchemaKey,
    StateSchema,
    AppDispatch,
    ThunkExtraArg,
    ThunkConfig,
}