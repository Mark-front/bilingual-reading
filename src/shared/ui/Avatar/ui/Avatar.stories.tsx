import React from 'react';
import { type ComponentMeta, type ComponentStory } from '@storybook/react';

import { Avatar } from './Avatar';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import AvatarImg from '../../../assets/test/avatar.png';

export default {
    title: 'shared/Avatar',
    component: Avatar,
    argTypes: {},
    args: {},
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const AvatarDefault = Template.bind({});
AvatarDefault.args = {
    size: 150,
    src: AvatarImg,
}

export const AvatarSmall = Template.bind({});
AvatarSmall.args = {
    size: 50,
    src: AvatarImg,
}