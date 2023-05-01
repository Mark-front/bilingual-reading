import React from 'react';
import { type ComponentMeta, type ComponentStory } from '@storybook/react';

import { Icon } from './Icon';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator/ThemeDecorator';
import { Theme } from '../../ThemeProvider';

export default {
    title: 'shared/Icon',
    component: Icon,
    argTypes: {},
    decorators: [],
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args}/>;

export const Default = Template.bind({});

Default.args = {};

export const Dark = Template.bind({});

Dark.args = {};
Dark.decorators = [ ThemeDecorator(Theme.DARK) ]
