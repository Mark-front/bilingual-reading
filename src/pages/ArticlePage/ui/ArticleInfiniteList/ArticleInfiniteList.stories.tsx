import React from 'react';
import {type ComponentMeta, type ComponentStory} from '@storybook/react';

import {ArticleInfiniteList} from './ArticleInfiniteList';
import {ThemeDecorator} from '@/shared/config/storybook/decorators/ThemeDecorator/ThemeDecorator';
import {Theme} from '@/shared/ui/ThemeProvider';

export default {
    title: 'pages/ArticleInfiniteList',
    component: ArticleInfiniteList,
    argTypes: {},
    decorators: [],
} as ComponentMeta<typeof ArticleInfiniteList>;

const Template: ComponentStory<typeof ArticleInfiniteList> = (args) => <ArticleInfiniteList {...args}/>;

export const Default = Template.bind({});

Default.args = {};

export const Dark = Template.bind({});

Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)]
