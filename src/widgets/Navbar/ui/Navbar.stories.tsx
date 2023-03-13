import React from 'react';
import {type ComponentMeta, type ComponentStory} from '@storybook/react';

import {Navbar} from '@/widgets/Navbar';
import {ThemeDecorator} from '@/shared/config/storybook/decorators/ThemeDecorator/ThemeDecorator';
import {Theme} from '@/shared/ui/ThemeProvider';

export default {
    title: 'widgets/Navbar',
    component: Navbar,
    argTypes: {},
    decorators: [],
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const NavbarDefault = Template.bind({});
NavbarDefault.args = {};

export const NavbarDark = Template.bind({});
NavbarDark.args = {};
NavbarDark.decorators = [ThemeDecorator(Theme.DARK)]
