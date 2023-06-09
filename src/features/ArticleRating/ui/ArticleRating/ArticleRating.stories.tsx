import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import ArticleRating from './ArticleRating';
import { StoreProvider } from '@/app/providers/StoreProvider';

export default {
    title: 'features/ArticleRating',
    component: ArticleRating,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [ StoreProvider ],
} as ComponentMeta<typeof ArticleRating>;

const Template: ComponentStory<typeof ArticleRating> = (args) => <ArticleRating {...args} />;

export const Normal = Template.bind({});
Normal.args = {};