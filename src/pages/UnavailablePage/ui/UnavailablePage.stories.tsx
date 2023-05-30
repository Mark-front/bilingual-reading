import React from 'react';
import {type ComponentMeta, type ComponentStory} from '@storybook/react';

import UnavailablePage from './UnavailablePage';
import {ThemeDecorator} from '@/shared/config/storybook/decorators/ThemeDecorator/ThemeDecorator';
import {Theme} from '@/shared/ui/ThemeProvider';

export default {
    title: 'pages/UnavailablePage',
    component: UnavailablePage,
    argTypes: {},
} as ComponentMeta<typeof UnavailablePage>;

const Template: ComponentStory<typeof UnavailablePage> = (args) => <UnavailablePage/>;

export const Default = Template.bind({});

Default.args = {};

export const Dark = Template.bind({});

Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)]
