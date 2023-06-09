import React from 'react';
import { type ComponentMeta, type ComponentStory } from '@storybook/react';

import { NotificationList } from './NotificationList';
import { StoreProvider } from '@/app/providers/StoreProvider';
import { Notification } from '../../model/types/notification';

const data: Notification = {
    title: 'asfdasdf',
    description: 'asdfasdfas asdfasdf asdfasdf',
    id: '',
    userId: 'asdf',
    href: 'asdfaqwerqw',
}
export default {
    title: 'entities/NotificationList',
    component: NotificationList,
    args: {},
    decorators: [ StoreProvider ],
} as ComponentMeta<typeof NotificationList>;

const Template: ComponentStory<typeof NotificationList> = (args) => <NotificationList {...args}/>;

export const Default = Template.bind({});

Default.parameters = {
    mockData: [
        {
            //@ts-ignore
            url: `${__API__}/notifications`,
            method: 'GET',
            status: 200,
            response: [ data ],
        },
    ],
};
