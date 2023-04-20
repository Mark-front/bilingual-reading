import React from 'react';
import { type ComponentMeta, type ComponentStory } from '@storybook/react';

import { ArticleTypeTabs } from './ArticleTypeTabs';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/ui/ThemeProvider';

export default {
    title: 'entities/Article/ArticleTypeTabs',
    component: ArticleTypeTabs,
    argTypes: {},
    decorators: [],
} as ComponentMeta<typeof ArticleTypeTabs>;

const Template: ComponentStory<typeof ArticleTypeTabs> = (args) => <ArticleTypeTabs {...args}/>;

export const Default = Template.bind({});

Default.args = {};

export const Dark = Template.bind({});

Dark.args = {};
Dark.decorators = [ ThemeDecorator(Theme.DARK) ]
