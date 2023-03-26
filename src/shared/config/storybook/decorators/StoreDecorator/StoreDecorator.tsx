import {StateSchema, StoreProvider} from '@/app/providers/StoreProvider';
import {Story} from '@storybook/react';
import {ReducersList} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {loginReducer} from '@/features/AuthByUsername/model/slice/loginSlice';
import {profileReducer} from '@/entities/Profile/model/slice/profileSlice';
import {articleReducer} from '../../../../../entities/Article/model/slice/articleSlise';

const defaultAsyncReducers: ReducersList = {
    loginForm: loginReducer,
    profile: profileReducer,
    article: articleReducer,
};

type DeepPartial<T> = T extends object ? { [P in keyof T]?: DeepPartial<T[P]>; } : T;

export const StoreDecorator = (
    state: DeepPartial<StateSchema>,
    asyncReducers?: ReducersList
) => (StoryComponent: Story) => (
    <StoreProvider initialState={state as StateSchema} asyncReducers={{...defaultAsyncReducers, ...asyncReducers}}>
        <StoryComponent/>
    </StoreProvider>
);