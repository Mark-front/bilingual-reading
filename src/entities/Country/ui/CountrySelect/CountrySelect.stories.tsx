import React from 'react';
import {type ComponentMeta, type ComponentStory} from '@storybook/react';

import {CountrySelect} from './CountrySelect';

export default {
    title: 'entities/CountrySelect',
    component: CountrySelect,
    argTypes: {},
    args: {},
} as ComponentMeta<typeof CountrySelect>;

const Template: ComponentStory<typeof CountrySelect> = (args) => <CountrySelect {...args} />;

export const CountrySelectDefault = Template.bind({});

CountrySelectDefault.args = {}