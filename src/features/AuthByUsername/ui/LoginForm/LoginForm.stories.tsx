import React from 'react';
import {type ComponentStory, type ComponentMeta} from '@storybook/react';

import {LoginForm} from './LoginForm';
import {ThemeDecorator} from '@/shared/config/storybook/decorators/ThemeDecorator/ThemeDecorator';
import {Theme} from '@/shared/ui/ThemeProvider';
import {
    MemoryRouterDecorator,
} from '@/shared/config/storybook/decorators/MemoryRouterDecorator/MemoryRouterDecorator';

export default {
    title: 'features/LoginForm',
    component: LoginForm,
    argTypes: {},
    args: {
        to: '/',
    },
    decorators: [MemoryRouterDecorator],
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} >12342345</LoginForm>;

export const LoginFormDefault = Template.bind({});
export const LoginFormDark = Template.bind({});

LoginFormDark.decorators = [ThemeDecorator(Theme.DARK)]
