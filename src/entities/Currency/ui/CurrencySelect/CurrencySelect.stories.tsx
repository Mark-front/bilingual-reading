import React from 'react';
import { type ComponentMeta, type ComponentStory } from '@storybook/react';

import { CurrencySelect } from './CurrencySelect';

export default {
    title: 'entities/CurrencySelect',
    component: CurrencySelect,
    argTypes: {},
    args: {},
} as ComponentMeta<typeof CurrencySelect>;

const Template: ComponentStory<typeof CurrencySelect> = (args) => <CurrencySelect {...args} />;

export const CurrencySelectDefault = Template.bind({});

CurrencySelectDefault.args = {}