import React from 'react';
import { type ComponentMeta, type ComponentStory } from '@storybook/react';

import AboutPage from './AboutPage';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/ui/ThemeProvider';
import { StoreDecorator } from '../../../shared/config/storybook/decorators/StoreDecorator/StoreDecorator';

export default {
    title: 'pages/AboutPage',
    component: AboutPage,
    argTypes: {},
    decorators: [ StoreDecorator({}) ],
} as ComponentMeta<typeof AboutPage>;

const Template: ComponentStory<typeof AboutPage> = () => <AboutPage/>;

export const Default = Template.bind({});

Default.args = {};

export const Dark = Template.bind({});

Dark.args = {};
Dark.decorators = [ ThemeDecorator(Theme.DARK) ]
