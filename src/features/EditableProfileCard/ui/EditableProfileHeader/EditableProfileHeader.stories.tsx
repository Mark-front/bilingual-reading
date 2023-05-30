import React from 'react';
import { type ComponentMeta, type ComponentStory } from '@storybook/react';

import { EditableProfileHeader } from './EditableProfileHeader';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/ui/ThemeProvider';
import { StoreDecorator } from '../../../../shared/config/storybook/decorators/StoreDecorator/StoreDecorator';

export default {
    title: 'features/EditableProfileHeader',
    component: EditableProfileHeader,
    argTypes: {},
    decorators: [ StoreDecorator({}) ],
} as ComponentMeta<typeof EditableProfileHeader>;

const Template: ComponentStory<typeof EditableProfileHeader> = (args) => <EditableProfileHeader {...args}/>;

export const Default = Template.bind({});

Default.args = {};

export const Dark = Template.bind({});

Dark.args = {};
Dark.decorators = [ ThemeDecorator(Theme.DARK) ]
