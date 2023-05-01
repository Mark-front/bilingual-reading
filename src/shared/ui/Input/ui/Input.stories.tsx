import React from 'react';
import { type ComponentMeta, type ComponentStory } from '@storybook/react';

import { Input } from './Input';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator/ThemeDecorator';
import { Theme } from '../../ThemeProvider';

export default {
    title: 'shared/Input',
    component: Input,
    argTypes: {},
    args: {},
    decorators: [],
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const InputDefault = Template.bind({});
export const InputDark = Template.bind({});

InputDark.decorators = [ ThemeDecorator(Theme.DARK) ]
