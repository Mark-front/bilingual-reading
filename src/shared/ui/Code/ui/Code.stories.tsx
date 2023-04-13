import React from 'react';
import { type ComponentMeta, type ComponentStory } from '@storybook/react';

import { Code } from './Code';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/ui/ThemeProvider';

export default {
    title: 'shared/Code',
    component: Code,
    argTypes: {},
    args: {
        text: '<!DOCTYPE html>\n' +
            '<html>\n' +
            '  <body>\n' +
            '    <p id="hello"></p>\n' +
            '\n' +
            '    <script>\n' +
            '      document.getElementById("hello").innerHTML = "Hello, world!";\n' +
            '    </script>\n' +
            '  </body>\n' +
            '</html>;',
    },
    decorators: [],
} as ComponentMeta<typeof Code>;

const Template: ComponentStory<typeof Code> = (args) => <Code {...args}/>;

export const Default = Template.bind({});

Default.args = {};

export const Dark = Template.bind({});

Dark.args = {};
Dark.decorators = [ ThemeDecorator(Theme.DARK) ]
