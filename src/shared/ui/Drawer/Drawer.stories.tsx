import React from 'react';
import { type ComponentMeta, type ComponentStory } from '@storybook/react';

import { Drawer } from './Drawer';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator/ThemeDecorator';
import { Theme } from '../../ui/ThemeProvider';

export default {
    title: 'shared/Drawer',
    component: Drawer,
    argTypes: {},
    decorators: [],
} as ComponentMeta<typeof Drawer>;

const Template: ComponentStory<typeof Drawer> = (args) => <Drawer isOpen {...args}>Lorem ipsum dolor sit amet,
    consectetur adipisicing elit. Accusamus alias, animi aperiam deserunt eveniet facilis in ipsam iste iusto magnam
    necessitatibus nihil non nostrum officia officiis, quo repudiandae sapiente ut.</Drawer>;

export const Default = Template.bind({});

Default.args = {};

export const Dark = Template.bind({});

Dark.args = {};
Dark.decorators = [ ThemeDecorator(Theme.DARK) ]
