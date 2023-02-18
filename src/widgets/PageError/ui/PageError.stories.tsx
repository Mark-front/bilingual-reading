import React from 'react';
import { type ComponentStory, type ComponentMeta } from '@storybook/react';

import { PageError } from '@/widgets/PageError';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/ui/ThemeProvider';
import {
    MemoryRouterDecorator,
} from '@/shared/config/storybook/decorators/MemoryRouterDecorator/MemoryRouterDecorator';

export default {
    title: 'widgets/PageError',
    component: PageError,
    argTypes: {},
    decorators: [MemoryRouterDecorator],
} as ComponentMeta<typeof PageError>;

const Template: ComponentStory<typeof PageError> = (args) => <PageError {...args} />;

export const PageErrorDefault = Template.bind({});

PageErrorDefault.args = {};

export const PageErrorDark = Template.bind({});

PageErrorDark.args = {};
PageErrorDark.decorators = [ThemeDecorator(Theme.DARK)]
