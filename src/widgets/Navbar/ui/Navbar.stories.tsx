import React from 'react';
import { type ComponentMeta, type ComponentStory } from '@storybook/react';

import { Navbar } from '@/widgets/Navbar';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/ui/ThemeProvider';
import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator/StoreDecorator';

export default {
    title: 'widgets/Navbar',
    component: Navbar,
    argTypes: {},
    decorators: [],
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const Default = Template.bind({});
Default.args = {};
Default.decorators = [ StoreDecorator({
    user: {
        authData: {
            id: 'asdfasdf',
            username: 'asdfasdf',
        },
    },
}) ]
export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ StoreDecorator({
    user: {
        authData: {
            id: 'asdfasdf',
            username: 'asdfasdf',
        },
    },
}), ThemeDecorator(Theme.DARK) ]
