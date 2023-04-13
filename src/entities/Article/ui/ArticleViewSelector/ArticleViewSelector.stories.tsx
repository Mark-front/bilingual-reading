import React from 'react';
import {type ComponentMeta, type ComponentStory} from '@storybook/react';

import {ArticleViewSelector} from './ArticleViewSelector';
import {ThemeDecorator} from '@/shared/config/storybook/decorators/ThemeDecorator/ThemeDecorator';
import {Theme} from '@/shared/ui/ThemeProvider';

export default {
    title: 'pages/ArticleViewSelector',
    component: ArticleViewSelector,
    argTypes: {},
    decorators: [],
} as ComponentMeta<typeof ArticleViewSelector>;

const Template: ComponentStory<typeof ArticleViewSelector> = (args) => <ArticleViewSelector {...args}/>;

export const Default = Template.bind({});

Default.args = {};

export const Dark = Template.bind({});

Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)]
