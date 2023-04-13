import React from 'react';
import { type ComponentMeta, type ComponentStory } from '@storybook/react';

import { ArticleListItem } from './ArticleListItem';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/ui/ThemeProvider';

export default {
    title: 'pages/ArticleListItem',
    component: ArticleListItem,
    argTypes: {},
    decorators: [],
} as ComponentMeta<typeof ArticleListItem>;

const Template: ComponentStory<typeof ArticleListItem> = (args) => <ArticleListItem {...args}/>;

export const Default = Template.bind({});

Default.args = {};

export const Dark = Template.bind({});

Dark.args = {};
Dark.decorators = [ ThemeDecorator(Theme.DARK) ]
