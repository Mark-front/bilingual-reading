import React from 'react';
import { type ComponentMeta, type ComponentStory } from '@storybook/react';

import NotFoundPage from './NotFoundPage';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/ui/ThemeProvider';

export default {
    title: 'pages/NotFoundPage',
    component: NotFoundPage,
    argTypes: {},
} as ComponentMeta<typeof NotFoundPage>;

const Template: ComponentStory<typeof NotFoundPage> = (args) => <NotFoundPage/>;

export const NotFoundPageDefault = Template.bind({});

NotFoundPageDefault.args = {};

export const NotFoundPageDark = Template.bind({});

NotFoundPageDark.args = {};
NotFoundPageDark.decorators = [ ThemeDecorator(Theme.DARK) ]
