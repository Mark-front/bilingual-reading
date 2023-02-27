import React from 'react';
import {type ComponentStory, type ComponentMeta} from '@storybook/react';

import {Button, ThemeButton} from '@/shared/ui/Button';
import {ThemeDecorator} from '@/shared/config/storybook/decorators/ThemeDecorator/ThemeDecorator';
import {Theme} from '@/shared/ui/ThemeProvider';
import {ButtonSize} from './Button';

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {},
    args: {
        children: 'Кнопка',
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) =>
    <Button {...args} >
        {args.children}
    </Button>;

export const Clear = Template.bind({});

Clear.args = {
    theme: ThemeButton.CLEAR,
};

export const ClearInverted = Template.bind({});

ClearInverted.args = {
    theme: ThemeButton.CLEAR_INVERTED,
};

export const ClearDark = Template.bind({});

ClearDark.args = {
    theme: ThemeButton.CLEAR,
};
ClearDark.decorators = [ThemeDecorator(Theme.DARK)]

export const BackgroundTheme =
    Template.bind({});

BackgroundTheme.args = {
    theme: ThemeButton.BACKGROUND,
};

export const BackgroundThemeInverted = Template.bind({});

BackgroundThemeInverted.args = {
    theme: ThemeButton.BACKGROUND_INVERTED,
};

export const Outline = Template.bind({});

Outline.args = {
    theme: ThemeButton.OUTLINE,
};

export const OutlineL = Template.bind({});

OutlineL.args = {
    theme: ThemeButton.OUTLINE,
    size: ButtonSize.L,
};

export const OutlineXL = Template.bind({});

OutlineXL.args = {
    theme: ThemeButton.OUTLINE,
    size: ButtonSize.XL,
};

export const OutlineDark = Template.bind({});

OutlineDark.args = {
    theme: ThemeButton.OUTLINE,
};

OutlineDark.decorators = [ThemeDecorator(Theme.DARK)]

export const Square = Template.bind({});

Square.args = {
    children: '<>',
    theme: ThemeButton.BACKGROUND_INVERTED,
    square: true,
};
export const SquareSizeL = Template.bind({});

SquareSizeL.args = {
    children: '<>',
    theme: ThemeButton.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.L,
};
export const SquareSizeXL = Template.bind({});

SquareSizeXL.args = {
    children: '<>',
    theme: ThemeButton.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.XL,
};
export const Disabled = Template.bind({});

Disabled.args = {
    children: 'disabled',
    theme: ThemeButton.BACKGROUND_INVERTED,
    disabled: true,
};


