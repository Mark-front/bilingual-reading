import React from 'react';
import { type ComponentMeta, type ComponentStory } from '@storybook/react';

import { ThemeSwitcher } from '@/widgets/ThemeSwitcher';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/ui/ThemeProvider';

export default {
    title: 'widgets/ThemeSwitcher',
    component: ThemeSwitcher,
    argTypes: {},
} as ComponentMeta<typeof ThemeSwitcher>;

const Template: ComponentStory<typeof ThemeSwitcher> = (args) => <ThemeSwitcher {...args} />;

export const ThemeSwitcherDefault = Template.bind({});

ThemeSwitcherDefault.args = {};

export const ThemeSwitcherDark = Template.bind({});

ThemeSwitcherDark.args = {};
ThemeSwitcherDark.decorators = [ ThemeDecorator(Theme.DARK) ]
