import {configureStore, ReducersMapObject} from '@reduxjs/toolkit'
import {StateSchema} from './StateSchema';
import {counterReduser} from '@/entities/Counter';
import {userReduser} from '@/entities/User';


export function createReduxStore(initialState: StateSchema) {
    const rootReducers: ReducersMapObject<StateSchema> = {
        user: userReduser,
        counter: counterReduser,
    }
    
    return configureStore<StateSchema>({
        reducer: rootReducers,
        devTools: __IS_DEV__,
        preloadedState: initialState,
    })
}