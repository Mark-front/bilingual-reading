import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { EditableProfileCard } from './EditableProfileCard';
import { StoreDecorator } from '@/shared/config';

export default {
    title: 'features/EditableProfileCard',
    component: EditableProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [ StoreDecorator({}) ],
} as ComponentMeta<typeof EditableProfileCard>;

const Template: ComponentStory<typeof EditableProfileCard> = (args) => <EditableProfileCard {...args} />;

export const Normal = Template.bind({});
Normal.args = {};