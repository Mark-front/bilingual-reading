import React from 'react';
import {type ComponentMeta, type ComponentStory} from '@storybook/react';

import AboutPage from './AboutPage';
import {ThemeDecorator} from '@/shared/config/storybook/decorators/ThemeDecorator/ThemeDecorator';
import {Theme} from '@/shared/ui/ThemeProvider';

export default {
    title: 'pages/AboutPage',
    component: AboutPage,
    argTypes: {},
} as ComponentMeta<typeof AboutPage>;

const Template: ComponentStory<typeof AboutPage> = () => <AboutPage/>;

export const AboutPageDefault = Template.bind({});

AboutPageDefault.args = {};

export const AboutPageDark = Template.bind({});

AboutPageDark.args = {};
AboutPageDark.decorators = [ThemeDecorator(Theme.DARK)]
