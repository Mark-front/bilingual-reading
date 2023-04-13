import React from 'react';
import { type ComponentMeta, type ComponentStory } from '@storybook/react';

import { CommentList } from './CommentList';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/ui/ThemeProvider';


const comments = [
    {
        'id': '1',
        'text': 'some comment',
        user: {
            id: '1',
            username: 'name',
            avatar: 'https://avatars.mds.yandex.net/get-zen_doc/3413519/pub_5ff887b2fe4e686f6ae6ba3f_5ff887d7f906b16872a69755/scale_1200',
        },
    },
    {
        'id': '1',
        'text': 'some comment',
        user: {
            id: '1',
            username: 'name',
            avatar: 'https://avatars.mds.yandex.net/get-zen_doc/3413519/pub_5ff887b2fe4e686f6ae6ba3f_5ff887d7f906b16872a69755/scale_1200',
        },
    },
    {
        'id': '1',
        'text': 'some comment',
        user: {
            id: '1',
            username: 'name',
            avatar: 'https://avatars.mds.yandex.net/get-zen_doc/3413519/pub_5ff887b2fe4e686f6ae6ba3f_5ff887d7f906b16872a69755/scale_1200',
        },
    },
]

export default {
    title: 'entities/Comment/CommentList',
    component: CommentList,
    argTypes: {},
    args: { comments },
    decorators: [],
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) => <CommentList {...args}/>;

export const Default = Template.bind({});

export const Dark = Template.bind({});
Dark.decorators = [ ThemeDecorator(Theme.DARK) ]

export const Loading = Template.bind({});

Loading.args = { isLoading: true };
Loading.decorators = [ ThemeDecorator(Theme.DARK) ]

export const Empty = Template.bind({});

Empty.args = { comments: undefined };
Empty.decorators = [ ThemeDecorator(Theme.DARK) ]
