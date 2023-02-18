import React from 'react';
import { type ComponentStory, type ComponentMeta } from '@storybook/react';

import { Button, ThemeButton } from '@/shared/ui/Button';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/ui/ThemeProvider';

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {},
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} >test</Button>;

export const Clear = Template.bind({});

Clear.args = {
    theme: ThemeButton.CLEAR,
};

export const Outline = Template.bind({});

Outline.args = {
    theme: ThemeButton.OUTLINE,
};

export const ClearDark = Template.bind({});

ClearDark.args = {
    theme: ThemeButton.CLEAR,
};

export const OutlineDark = Template.bind({});

OutlineDark.args = {
    theme: ThemeButton.OUTLINE,
};

OutlineDark.decorators = [ThemeDecorator(Theme.DARK)]
