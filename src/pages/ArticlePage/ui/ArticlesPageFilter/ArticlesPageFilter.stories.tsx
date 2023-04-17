import React from 'react';
import {type ComponentMeta, type ComponentStory} from '@storybook/react';

import {ArticlesPageFilter} from './ArticlesPageFilter';
import {ThemeDecorator} from '@/shared/config/storybook/decorators/ThemeDecorator/ThemeDecorator';
import {Theme} from '@/shared/ui/ThemeProvider';

export default {
    title: 'pages/ArticlesPageFilter',
    component: ArticlesPageFilter,
    argTypes: {},
    decorators: [],
} as ComponentMeta<typeof ArticlesPageFilter>;

const Template: ComponentStory<typeof ArticlesPageFilter> = (args) => <ArticlesPageFilter {...args}/>;

export const Default = Template.bind({});

Default.args = {};

export const Dark = Template.bind({});

Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)]
