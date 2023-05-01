import React from 'react';
import { type ComponentMeta, type ComponentStory } from '@storybook/react';

import { Select } from './Select';

export default {
    title: 'shared/Select',
    component: Select,
    argTypes: {},
    args: {},
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const SelectDefault = Template.bind({});

SelectDefault.args = {
    label: 'Укажите значение',
    options: [
        {
            value: 'Значение 1',
            content: 'Выбор значения 1',
        },
        {
            value: 'Значение 2',
            content: 'Выбор значения 2',
        },
        {
            value: 'Значение 3',
            content: 'Выбор значения 3',
        },
    ],
}