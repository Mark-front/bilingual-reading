import React from 'react';
import {type ComponentStory, type ComponentMeta} from '@storybook/react';

import MainPage from './MainPage';
import {ThemeDecorator} from '@/shared/config/storybook/decorators/ThemeDecorator/ThemeDecorator';
import {Theme} from '@/shared/ui/ThemeProvider';

export default {
    title: 'pages/MainPage',
    component: MainPage,
    argTypes: {},
} as ComponentMeta<typeof MainPage>;

const Template: ComponentStory<typeof MainPage> = () => <MainPage/>;

export const MainPageDefault = Template.bind({});

MainPageDefault.args = {};

export const MainPageDark = Template.bind({});

MainPageDark.args = {};
MainPageDark.decorators = [ThemeDecorator(Theme.DARK)]
