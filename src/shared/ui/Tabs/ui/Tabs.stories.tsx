import React from 'react';
import { type ComponentMeta, type ComponentStory } from '@storybook/react';

import { Tabs } from './Tabs';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/ui/ThemeProvider';
import { action } from '@storybook/addon-actions';

export default {
    title: 'shared/Tabs',
    component: Tabs,
    argTypes: {},
    args: {
        value: 'tab1',
        onTabClick: action('onTabClick'),
        tabs: [ { value: 'tab1', content: 'tab1' }, { value: 'tab2', content: 'tab2' } ],
    },
    decorators: [],
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args) => <Tabs {...args}/>;

export const Default = Template.bind({});

Default.args = {};

export const Dark = Template.bind({});

Dark.args = {};
Dark.decorators = [ ThemeDecorator(Theme.DARK) ]
