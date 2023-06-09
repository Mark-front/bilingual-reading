import React from 'react';
import { type ComponentMeta, type ComponentStory } from '@storybook/react';

import { Icon } from './Icon';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator/ThemeDecorator';
import { Theme } from '../../ThemeProvider';
// @ts-ignore
import IconPoo from '../../../assets/icons/star.svg'

export default {
    title: 'shared/Icon',
    component: Icon,
    argTypes: {},
    decorators: [],
} as ComponentMeta<typeof Icon>;

// @ts-ignore
const Template: ComponentStory<typeof Icon> = (args) => <Icon Svg={IconPoo} {...args}/>;

export const Default = Template.bind({});

Default.args = {};

export const Dark = Template.bind({});

Dark.args = {};
Dark.decorators = [ ThemeDecorator(Theme.DARK) ]
