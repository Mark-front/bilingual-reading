import {FC, useEffect} from 'react';
import {useDispatch, useStore} from 'react-redux';
import {ReduxStoreWithManager, StateSchemaKey} from '@/app/providers/StoreProvider/config/StateSchema';
import {Reducer} from '@reduxjs/toolkit';

export type ReducersList = {
    [key in StateSchemaKey]?: Reducer;
}

export interface DynamicModuleLoaderProps {
    reducers: ReducersList;
    removeAfterUnmount?: boolean;
}

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = (props) => {
    const {
        children,
        reducers,
        removeAfterUnmount = true,
    } = props;
    const store = useStore() as ReduxStoreWithManager;
    const dispatch = useDispatch();

    useEffect(() => {
        Object.entries(reducers).forEach(([key, reducer]) => {
            store.reducerManager.add(key as StateSchemaKey, reducer);
            dispatch({type: `@INIT ${key} reducer`})

            return () => {
                if (removeAfterUnmount) {
                    Object.entries(reducers).forEach(([key]) => {
                        store.reducerManager.remove(key as StateSchemaKey);
                        dispatch({type: `@DESTROY ${key} reducer`})
                    })
                }
            }
        })
    }, [dispatch, reducers, removeAfterUnmount, store.reducerManager])
    return (
        <>
            {children}
        </>
    );
};