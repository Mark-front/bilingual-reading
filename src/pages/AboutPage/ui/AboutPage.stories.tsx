import React from 'react';
import { type ComponentStory, type ComponentMeta } from '@storybook/react';

import AboutPage from '@/pages/AboutPage/ui/AboutPage';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/ui/ThemeProvider';

export default {
    title: 'pages/AboutPage',
    component: AboutPage,
    argTypes: {},
} as ComponentMeta<typeof AboutPage>;

const Template: ComponentStory<typeof AboutPage> = (args) => <AboutPage {...args} />;

export const AboutPageDefault = Template.bind({});

AboutPageDefault.args = {};

export const AboutPageDark = Template.bind({});

AboutPageDark.args = {};
AboutPageDark.decorators = [ThemeDecorator(Theme.DARK)]
