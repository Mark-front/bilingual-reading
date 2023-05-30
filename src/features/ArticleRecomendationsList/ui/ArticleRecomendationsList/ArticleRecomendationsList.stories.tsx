import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ArticleRecomendationsList } from './ArticleRecomendationsList';
import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator/StoreDecorator';
import { IArticle } from '@/entities/Article';

export default {
    title: 'features/ArticleRecommendationsList',
    component: ArticleRecomendationsList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [ StoreDecorator({}) ],
} as ComponentMeta<typeof ArticleRecomendationsList>;

const Template: ComponentStory<typeof ArticleRecomendationsList> = (args) => <ArticleRecomendationsList {...args} />;

const article: IArticle = {
    id: '1',
    img: '',
    createdAt: '',
    views: 123,
    user: { id: '1', username: '123' },
    blocks: [],
    type: [],
    title: '123',
    subtitle: 'asfsa',
};

export const Normal = Template.bind({});
Normal.args = {};
Normal.parameters = {
    mockData: [
        {
            url: `${__API__}/articles?_limit=4`,
            method: 'GET',
            status: 200,
            response: [ { ...article, id: '1' }, { ...article, id: '2' }, { ...article, id: '3' }, { ...article, id: '4' } ],
        },
    ],
};