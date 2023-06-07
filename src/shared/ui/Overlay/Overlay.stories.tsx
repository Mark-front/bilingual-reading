import React from 'react';
import { type ComponentMeta, type ComponentStory } from '@storybook/react';

import { Overlay } from './Overlay';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator/ThemeDecorator';
import { Theme } from '../../ui/ThemeProvider';

export default {
    title: 'shared/Overlay',
    component: Overlay,
    argTypes: {},
    decorators: [],
} as ComponentMeta<typeof Overlay>;

const Template: ComponentStory<typeof Overlay> = (args) => <Overlay isOpen {...args}/>;

export const Default = Template.bind({});

Default.args = {};

export const Dark = Template.bind({});

Dark.args = {};
Dark.decorators = [ ThemeDecorator(Theme.DARK) ]
