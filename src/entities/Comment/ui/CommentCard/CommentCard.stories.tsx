import React from 'react';
import { type ComponentMeta, type ComponentStory } from '@storybook/react';

import { CommentCard } from './CommentCard';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/ui/ThemeProvider';

export default {
    title: 'entities/Comment/CommentCard',
    component: CommentCard,
    argTypes: {},
    decorators: [],
} as ComponentMeta<typeof CommentCard>;

const Template: ComponentStory<typeof CommentCard> = (args) => <CommentCard {...args}/>;

export const Default = Template.bind({});

Default.args = {
    comment: {
        'id': '1',
        'text': 'some comment',
        user: {
            id: '1',
            username: 'name',
            avatar: 'https://avatars.mds.yandex.net/get-zen_doc/3413519/pub_5ff887b2fe4e686f6ae6ba3f_5ff887d7f906b16872a69755/scale_1200',
        },
    },
};

export const Dark = Template.bind({});

Dark.args = {
    comment: {
        'id': '1',
        'text': 'some comment',
        user: {
            id: '1',
            username: 'name',
            avatar: 'https://avatars.mds.yandex.net/get-zen_doc/3413519/pub_5ff887b2fe4e686f6ae6ba3f_5ff887d7f906b16872a69755/scale_1200',
        },
    },
};
Dark.decorators = [ ThemeDecorator(Theme.DARK) ]


export const Loading = Template.bind({});

Loading.args = { isLoading: true };