import React from 'react';
import { type ComponentMeta, type ComponentStory } from '@storybook/react';

import { Card } from './Card';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator/ThemeDecorator';
import { Theme } from '../../ThemeProvider/lib/context/themeContext';
import { Text } from '../../Text';

export default {
    title: 'shared/Card',
    component: Card,
    argTypes: {},
    decorators: [],
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args}/>;

export const Default = Template.bind({});

Default.args = {
    children: <Text title={'Title'} text={'Children'}/>,
};

export const Dark = Template.bind({});

Dark.args = {
    children: <Text title={'Title'} text={'Children'}/>,
};
Dark.decorators = [ ThemeDecorator(Theme.DARK) ]
