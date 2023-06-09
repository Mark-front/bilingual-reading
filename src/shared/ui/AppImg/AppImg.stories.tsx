import React from 'react';
import {type ComponentMeta, type ComponentStory} from '@storybook/react';

import {AppImg} from './AppImg';
import {ThemeDecorator} from '@/shared/config/storybook/decorators/ThemeDecorator/ThemeDecorator';
import {Theme} from '@/shared/ui/ThemeProvider';

export default {
    title: 'pages/AppImg',
    component: AppImg,
    argTypes: {},
    decorators: [],
} as ComponentMeta<typeof AppImg>;

const Template: ComponentStory<typeof AppImg> = (args) => <AppImg {...args}/>;

export const Default = Template.bind({});

Default.args = {};

export const Dark = Template.bind({});

Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)]
