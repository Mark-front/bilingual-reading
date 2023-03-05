import {StateSchema, StoreProvider} from '@/app/providers/StoreProvider';
import {Story} from '@storybook/react';
import {DeepPartial, ReducersMapObject} from '@reduxjs/toolkit';
import {loginReducers} from '@/features/AuthByUsername/model/slice/loginSlice';

const defaultAsyncReducers: DeepPartial<ReducersMapObject<StateSchema>> = {
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
    loginForm: loginReducers,
}
export const StoreDecorator = (
    state: DeepPartial<StateSchema>,
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
) => (StoryComponent: Story) => (
    <StoreProvider initialState={state as StateSchema} asyncReducers={{...defaultAsyncReducers, ...asyncReducers}}>
        <StoryComponent/>
    </StoreProvider>
)
