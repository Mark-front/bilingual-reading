import React from 'react';
import { type ComponentStory, type ComponentMeta, type Story } from '@storybook/react';

import { AppLink } from '@/shared/ui/AppLink';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/ui/ThemeProvider';
import {
    MemoryRouterDecorator,
} from '@/shared/config/storybook/decorators/MemoryRouterDecorator/MemoryRouterDecorator';

export default {
    title: 'shared/AppLink',
    component: AppLink,
    argTypes: {},
    args: {
        to: '/',
    },
    decorators: [MemoryRouterDecorator],
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} >testLink</AppLink>;

export const AppLinkDefault = Template.bind({});
export const AppLinkDark = Template.bind({});

AppLinkDark.decorators = [ThemeDecorator(Theme.DARK)]