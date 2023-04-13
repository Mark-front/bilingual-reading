import React from 'react';
import { type ComponentMeta, type ComponentStory } from '@storybook/react';

import LoginForm from './LoginForm';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/ui/ThemeProvider';
import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator/StoreDecorator';

export default {
    title: 'features/LoginForm',
    component: LoginForm,
    argTypes: {},
    args: {},
    decorators: [],
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = () => <LoginForm onSuccess={() => {
    console.log('form init')
}}/>;

export const Default = Template.bind({});
Default.decorators = [ StoreDecorator({ loginForm: { password: '', username: '', isLoading: false } }) ]
export const Dark = Template.bind({});
Dark.decorators = [ ThemeDecorator(Theme.DARK),
    StoreDecorator({
        loginForm: {
            password: '',
            username: '',
            isLoading: false,
        },
    }) ]

export const Error = Template.bind({});
Error.decorators = [ ThemeDecorator(Theme.DARK),
    StoreDecorator({
        loginForm: {
            isLoading: false,
            error: 'Login form',
        },
    }) ]

export const Loading = Template.bind({});
Loading.decorators = [ ThemeDecorator(Theme.DARK),
    StoreDecorator({
        loginForm: {
            isLoading: true,
        },
    }) ]
