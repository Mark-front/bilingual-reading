import React from 'react';
import {type ComponentMeta, type ComponentStory} from '@storybook/react';

import {ArticleEditPage} from './ArticleEditPage';
import {ThemeDecorator} from '@/shared/config/storybook/decorators/ThemeDecorator/ThemeDecorator';
import {Theme} from '@/shared/ui/ThemeProvider';

export default {
    title: 'pages/ArticleEditPage',
    component: ArticleEditPage,
    argTypes: {},
    decorators: [],
} as ComponentMeta<typeof ArticleEditPage>;

const Template: ComponentStory<typeof ArticleEditPage> = (args) => <ArticleEditPage {...args}/>;

export const Default = Template.bind({});

Default.args = {};

export const Dark = Template.bind({});

Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)]
