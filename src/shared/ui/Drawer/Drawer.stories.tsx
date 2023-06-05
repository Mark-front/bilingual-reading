import React from 'react';
import { type ComponentMeta, type ComponentStory } from '@storybook/react';

import { Drawer } from './Drawer';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator/ThemeDecorator';
import { Theme } from '../../ui/ThemeProvider';

export default {
    title: 'pages/Drawer',
    component: Drawer,
    argTypes: {},
    decorators: [],
} as ComponentMeta<typeof Drawer>;

const Template: ComponentStory<typeof Drawer> = (args) => <Drawer {...args}/>;

export const Default = Template.bind({});

Default.args = {};

export const Dark = Template.bind({});

Dark.args = {};
Dark.decorators = [ ThemeDecorator(Theme.DARK) ]
