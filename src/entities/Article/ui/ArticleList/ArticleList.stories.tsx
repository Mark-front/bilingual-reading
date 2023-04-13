import React from 'react';
import { type ComponentMeta, type ComponentStory } from '@storybook/react';

import { ArticleList } from './ArticleList';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/ui/ThemeProvider';

export default {
    title: 'pages/ArticleList',
    component: ArticleList,
    argTypes: {},
    decorators: [],
} as ComponentMeta<typeof ArticleList>;

const Template: ComponentStory<typeof ArticleList> = (args) => <ArticleList {...args}/>;

export const Default = Template.bind({});

Default.args = {};

export const Dark = Template.bind({});

Dark.args = {};
Dark.decorators = [ ThemeDecorator(Theme.DARK) ]
