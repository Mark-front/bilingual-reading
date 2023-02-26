import {configureStore} from '@reduxjs/toolkit'
import {StateSchema} from './StateSchema';
import {counterReduser} from '@/entities/Counter';


export function createReduxStore(initialState: StateSchema) {
    return configureStore<StateSchema>({
        reducer: {
            counter: counterReduser,
        },
        devTools: __IS_DEV__,
        preloadedState: initialState,
    })
}