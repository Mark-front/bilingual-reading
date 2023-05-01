import React from 'react';
import { type ComponentMeta, type ComponentStory } from '@storybook/react';

import { Flex } from './Flex';

export default {
    title: 'pages/Flex',
    component: Flex,
    argTypes: {},
    args: {
        children: (
            <>
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
                <div>5</div>
            </>
        ),
    },
    decorators: [],
} as ComponentMeta<typeof Flex>;

const Template: ComponentStory<typeof Flex> = (args) => <Flex {...args}/>;

export const Row = Template.bind({});

Row.args = {
    direction: 'row',
};

export const Column = Template.bind({});

Column.args = {
    direction: 'column',
};

export const JustifyBetween = Template.bind({});

JustifyBetween.args = {
    justify: 'between',
};

export const JustifyCenter = Template.bind({});

JustifyCenter.args = {
    justify: 'center',
};

export const JustifyEnd = Template.bind({});

JustifyEnd.args = {
    justify: 'end',
};

export const JustifyStart = Template.bind({});

JustifyStart.args = {
    justify: 'start',
};

export const AlignCenter = Template.bind({});

AlignCenter.args = {
    align: 'center',
};

export const AlignEnd = Template.bind({});

AlignEnd.args = {
    align: 'end',
};

export const AlignStart = Template.bind({});

AlignStart.args = {
    align: 'start',
};

export const RowGap4 = Template.bind({});

RowGap4.args = {
    gap: '4',
};

export const RowGap8 = Template.bind({});

RowGap8.args = {
    gap: '8',
};

export const RowGap16 = Template.bind({});

RowGap16.args = {
    gap: '16',
};

export const RowGap32 = Template.bind({});

RowGap32.args = {
    gap: '32',
};

export const ColumnGap4 = Template.bind({});

ColumnGap4.args = {
    direction: 'column',
    gap: '4',
};

export const ColumnGap8 = Template.bind({});

ColumnGap8.args = {
    direction: 'column',
    gap: '8',
};

export const ColumnGap16 = Template.bind({});

ColumnGap16.args = {
    direction: 'column',
    gap: '16',
};

export const ColumnGap32 = Template.bind({});

ColumnGap32.args = {
    direction: 'column',
    gap: '32',
};

