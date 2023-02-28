import React from 'react';
import {type ComponentStory, type ComponentMeta} from '@storybook/react';

import {LoginForm} from './LoginForm';
import {ThemeDecorator} from '@/shared/config/storybook/decorators/ThemeDecorator/ThemeDecorator';
import {Theme} from '@/shared/ui/ThemeProvider';
import {
    MemoryRouterDecorator,
} from '@/shared/config/storybook/decorators/MemoryRouterDecorator/MemoryRouterDecorator';
import {StoreDecorator} from '@/shared/config/storybook/decorators/StoreDecorator/StoreDecorator';

export default {
    title: 'features/LoginForm',
    component: LoginForm,
    argTypes: {},
    args: {},
    decorators: [],
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = () => <LoginForm/>;

export const LoginFormDefault = Template.bind({});
LoginFormDefault.decorators = [StoreDecorator({loginForm: {password:'', username:''}})]
export const LoginFormDark = Template.bind({});

LoginFormDark.decorators = [ThemeDecorator(Theme.DARK)]
LoginFormDark.decorators = [StoreDecorator({loginForm: {password:'', username:''}})]
