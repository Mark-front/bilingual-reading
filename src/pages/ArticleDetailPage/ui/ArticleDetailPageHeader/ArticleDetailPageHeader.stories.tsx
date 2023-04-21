import React from 'react';
import { type ComponentMeta, type ComponentStory } from '@storybook/react';

import { ArticleDetailPageHeader } from './ArticleDetailPageHeader';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/ui/ThemeProvider';

export default {
    title: 'pages/ArticleDetailPageHeader',
    component: ArticleDetailPageHeader,
    argTypes: {},
    decorators: [],
} as ComponentMeta<typeof ArticleDetailPageHeader>;

const Template: ComponentStory<typeof ArticleDetailPageHeader> = (args) => <ArticleDetailPageHeader {...args}/>;

export const Default = Template.bind({});

Default.args = {};

export const Dark = Template.bind({});

Dark.args = {};
Dark.decorators = [ ThemeDecorator(Theme.DARK) ]
