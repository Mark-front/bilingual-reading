import React from 'react';
import {type ComponentMeta, type ComponentStory} from '@storybook/react';

import {ArticleBlockImage} from './ArticleBlockImage';
import {ThemeDecorator} from '@/shared/config/storybook/decorators/ThemeDecorator/ThemeDecorator';
import {Theme} from '@/shared/ui/ThemeProvider';
import {TypeBlock} from '../../model/types/article';

export default {
    title: 'entities/Article/ArticleBlockImage',
    component: ArticleBlockImage,
    argTypes: {},
    decorators: [],
    args: {
        block: {
            'id': '2',
            'type': TypeBlock.IMAGE,
            'src': 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
            'title': 'Рисунок 1 - скриншот сайта',
        },
    },
} as ComponentMeta<typeof ArticleBlockImage>;

const Template: ComponentStory<typeof ArticleBlockImage> = (args) => <ArticleBlockImage {...args}/>;

export const Default = Template.bind({});

Default.args = {};

export const Dark = Template.bind({});

Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)]
