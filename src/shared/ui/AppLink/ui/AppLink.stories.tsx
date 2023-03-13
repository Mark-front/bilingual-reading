import React from 'react';
import {type ComponentMeta, type ComponentStory} from '@storybook/react';

import {AppLink} from '@/shared/ui/AppLink';
import {ThemeDecorator} from '@/shared/config/storybook/decorators/ThemeDecorator/ThemeDecorator';
import {Theme} from '@/shared/ui/ThemeProvider';

export default {
    title: 'shared/AppLink',
    component: AppLink,
    argTypes: {},
    args: {
        to: '/',
    },
    decorators: [],
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} >12342345</AppLink>;

export const AppLinkDefault = Template.bind({});
export const AppLinkDark = Template.bind({});

AppLinkDark.decorators = [ThemeDecorator(Theme.DARK)]
