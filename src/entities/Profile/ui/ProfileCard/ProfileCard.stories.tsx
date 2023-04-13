import React from 'react';
import { type ComponentMeta, type ComponentStory } from '@storybook/react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import AvatarImg from '@/shared/assets/test/avatar.png';
import { ProfileCard } from './ProfileCard';
import { ValidateProfileError } from '../../model/types/profile';
import { Country } from '../../../Country';
import { Currency } from '../../../Currency';

export default {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    argTypes: {},
    args: {},
    decorators: [],
} as ComponentMeta<typeof ProfileCard>;
const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args}/>;

export const Default = Template.bind({});
Default.args = {
    isLoading: false,
    data: {
        username: 'admin',
        age: 22,
        country: Country.Ukraine,
        lastname: 'ulbi tv',
        first: 'asd',
        city: 'asf',
        currency: Currency.USD,
        avatar: AvatarImg,
    },
}


export const Loading = Template.bind({});
Loading.args = {
    isLoading: true,
}

export const withError = Template.bind({});
withError.args = {
    isLoading: false,
    error: ValidateProfileError.SERVER_NOT_RESPONSE,
}

