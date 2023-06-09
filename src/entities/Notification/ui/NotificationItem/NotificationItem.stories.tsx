import React from 'react';
import { type ComponentMeta, type ComponentStory } from '@storybook/react';

import { NotificationItem } from './NotificationItem';
import { Notification } from '../../model/types/notification';

const data: Notification = {
    title: 'asfdasdf',
    description: 'asdfasdfas asdfasdf asdfasdf',
    id: '',
    userId: 'asdf',
    href: 'asdfaqwerqw',
}
export default {
    title: 'entities/NotificationItem',
    component: NotificationItem,
    args: {
        data: data,
    },
    decorators: [],
} as ComponentMeta<typeof NotificationItem>;

const Template: ComponentStory<typeof NotificationItem> = (args) => <NotificationItem  {...args}/>;

export const Default = Template.bind({});

Default.args = {};
