import React from 'react';
import { type ComponentMeta, type ComponentStory } from '@storybook/react';

import { Loader } from '@/shared/ui/Loader';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/ui/ThemeProvider';

export default {
    title: 'shared/Loader',
    component: Loader,
    argTypes: {},
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = (args) => <Loader {...args} />;

export const LoaderDefault = Template.bind({});

LoaderDefault.args = {};

export const LoaderDark = Template.bind({});

LoaderDark.args = {};
LoaderDark.decorators = [ ThemeDecorator(Theme.DARK) ]
