import React from 'react';
import { type ComponentMeta, type ComponentStory } from '@storybook/react';

import { Skeleton, ThemeSkeleton } from './Skeleton';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/ui/ThemeProvider';

export default {
    title: 'shared/Skeleton',
    component: Skeleton,
    argTypes: {},
    decorators: [],
} as ComponentMeta<typeof Skeleton>;

const Template: ComponentStory<typeof Skeleton> = (args) => <Skeleton {...args}/>;

export const Default = Template.bind({});

Default.args = {};

export const Dark = Template.bind({});

Dark.args = {};
Dark.decorators = [ ThemeDecorator(Theme.DARK) ]

export const Circle = Template.bind({});

Circle.args = {
    theme: ThemeSkeleton.AVATAR,
};

