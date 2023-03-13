import React from 'react';
import {type ComponentMeta, type ComponentStory} from '@storybook/react';

import ProfilePage from './ProfilePage';
import {ThemeDecorator} from '@/shared/config/storybook/decorators/ThemeDecorator/ThemeDecorator';
import {Theme} from '@/shared/ui/ThemeProvider';
import {StoreDecorator} from '@/shared/config/storybook/decorators/StoreDecorator/StoreDecorator';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import AvatarImg from '@/shared/assets/test/avatar.png';

export default {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    argTypes: {},
    decorators: [StoreDecorator({
        profile: {
            data: {
                age: 22,
                country: 'Armenia',
                username: 'admin',
                first: 'John',
                lastname: 'Doe',
                currency: 'RUB',
                avatar: AvatarImg,
                city: 'Москва',
            },
        },
    })],
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = () => <ProfilePage/>;

export const ProfilePageDefault = Template.bind({});

ProfilePageDefault.args = {};

export const ProfilePageDark = Template.bind({});

ProfilePageDark.args = {};
ProfilePageDark.decorators = [ThemeDecorator(Theme.DARK)]
