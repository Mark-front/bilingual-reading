import React from 'react';
import {type ComponentStory, type ComponentMeta} from '@storybook/react';

import {Sidebar} from '@/widgets/Sidebar';
import {ThemeDecorator} from '@/shared/config/storybook/decorators/ThemeDecorator/ThemeDecorator';
import {Theme} from '@/shared/ui/ThemeProvider';
import {
    MemoryRouterDecorator,
} from "@/shared/config/storybook/decorators/MemoryRouterDecorator/MemoryRouterDecorator";

export default {
    title: 'widgets/Sidebar',
    component: Sidebar,
    argTypes: {},
    decorators: [MemoryRouterDecorator],
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args) => <Sidebar {...args} />;

export const SidebarDefault = Template.bind({});

SidebarDefault.args = {};

export const SidebarDark = Template.bind({});

SidebarDark.args = {};
SidebarDark.decorators = [ThemeDecorator(Theme.DARK)]
