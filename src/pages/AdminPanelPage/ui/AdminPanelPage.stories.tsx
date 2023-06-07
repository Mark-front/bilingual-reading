import React from 'react';
import { type ComponentMeta, type ComponentStory } from '@storybook/react';

import AdminPanelPage from './AdminPanelPage';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/ui/ThemeProvider';
import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator/StoreDecorator';

export default {
    title: 'pages/AdminPanel',
    component: AdminPanelPage,
    argTypes: {},
    decorators: [ StoreDecorator({}) ],
} as ComponentMeta<typeof AdminPanelPage>;

const Template: ComponentStory<typeof AdminPanelPage> = () => <AdminPanelPage/>;

export const Default = Template.bind({});

Default.args = {};

export const Dark = Template.bind({});

Dark.args = {};
Dark.decorators = [ ThemeDecorator(Theme.DARK) ]
