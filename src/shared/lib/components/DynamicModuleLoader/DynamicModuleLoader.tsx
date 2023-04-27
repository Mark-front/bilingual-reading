import { ReactNode, useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';
import { ReduxStoreWithManager, StateSchema, StateSchemaKey } from '@/app/providers/StoreProvider/config/StateSchema';
import { Reducer } from '@reduxjs/toolkit';

export type ReducersList = {
    [key in StateSchemaKey]?: Reducer<NonNullable<StateSchema[key]>>;
}

export interface DynamicModuleLoaderProps {
    children: ReactNode;
    reducers: ReducersList;
    removeAfterUnmount?: boolean;
}

export const DynamicModuleLoader = (props: DynamicModuleLoaderProps) => {
    const {
        children,
        reducers,
        removeAfterUnmount = true,
    } = props;
    const store = useStore() as ReduxStoreWithManager;
    const dispatch = useDispatch();

    useEffect(() => {
        const mountedReducers = store.reducerManager.getReducerMap();
        Object.entries(reducers).forEach(([ key, reducer ]) => {
            const mounted = mountedReducers[key as StateSchemaKey];

            if (mounted) return;
            store.reducerManager.add(key as StateSchemaKey, reducer);
            dispatch({ type: `@INIT ${key} reducer` })

            return () => {
                if (removeAfterUnmount) {
                    Object.entries(reducers).forEach(([ key ]) => {
                        store.reducerManager.remove(key as StateSchemaKey);
                        dispatch({ type: `@DESTROY ${key} reducer` })
                    })
                }
            }
        })
    }, [ dispatch, reducers, removeAfterUnmount, store.reducerManager ])
    return (
        <>
            {children}
        </>
    );
};