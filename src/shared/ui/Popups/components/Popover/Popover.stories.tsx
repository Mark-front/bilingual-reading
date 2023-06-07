import React from 'react';
import { type ComponentMeta, type ComponentStory } from '@storybook/react';

import { Popover } from './Popover';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator/ThemeDecorator';
import { Theme } from '../../../../ui/ThemeProvider';

export default {
    title: 'shared/Popover',
    component: Popover,
    args: {
        trigger: <button> open popover </button>,
        children: <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias atque consectetur consequatur dolor
            doloribus earum est harum, itaque laboriosam minus, molestias necessitatibus nostrum placeat praesentium
            quis sequi totam unde voluptas?</p>,
    },
    decorators: [],
} as ComponentMeta<typeof Popover>;

const Template: ComponentStory<typeof Popover> = (args) => <Popover {...args}/>;

export const Default = Template.bind({});

Default.args = {};

export const Dark = Template.bind({});

Dark.args = {};
Dark.decorators = [ ThemeDecorator(Theme.DARK) ]
