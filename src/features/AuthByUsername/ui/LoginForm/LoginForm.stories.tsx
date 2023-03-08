import React from 'react';
import {type ComponentMeta, type ComponentStory} from '@storybook/react';

import LoginForm from './LoginForm';
import {ThemeDecorator} from '@/shared/config/storybook/decorators/ThemeDecorator/ThemeDecorator';
import {Theme} from '@/shared/ui/ThemeProvider';
import {StoreDecorator} from '@/shared/config/storybook/decorators/StoreDecorator/StoreDecorator';

export default {
    title: 'features/LoginForm',
    component: LoginForm,
    argTypes: {},
    args: {},
    decorators: [],
} as ComponentMeta<typeof LoginForm>;

// eslint-disable-next-line @typescript-eslint/no-empty-function
const Template: ComponentStory<typeof LoginForm> = () => <LoginForm onSuccess={() => {
}}/>;

export const LoginFormDefault = Template.bind({});
LoginFormDefault.decorators = [StoreDecorator({loginForm: {password: '', username: '', isLoading: false}})]
export const LoginFormDark = Template.bind({});

LoginFormDark.decorators = [ThemeDecorator(Theme.DARK)]
LoginFormDark.decorators = [StoreDecorator({loginForm: {password: '', username: '', isLoading: false}})]
