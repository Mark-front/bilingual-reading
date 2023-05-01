import React from 'react';
import { type ComponentMeta, type ComponentStory } from '@storybook/react';

import { PageError } from './PageError';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/ui/ThemeProvider';

export default {
    title: 'widgets/PageError',
    component: PageError,
    argTypes: {},
    decorators: [],
} as ComponentMeta<typeof PageError>;

const Template: ComponentStory<typeof PageError> = (args) => <PageError {...args} />;

export const PageErrorDefault = Template.bind({});

PageErrorDefault.args = {};

export const PageErrorDark = Template.bind({});

PageErrorDark.args = {};
PageErrorDark.decorators = [ ThemeDecorator(Theme.DARK) ]
