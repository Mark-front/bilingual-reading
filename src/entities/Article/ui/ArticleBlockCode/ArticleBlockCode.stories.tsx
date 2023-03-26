import React from 'react';
import {type ComponentMeta, type ComponentStory} from '@storybook/react';

import {ArticleBlockCode} from './ArticleBlockCode';
import {ThemeDecorator} from '@/shared/config/storybook/decorators/ThemeDecorator/ThemeDecorator';
import {Theme} from '@/shared/ui/ThemeProvider';
import {TypeBlock} from '../../model/types/article';

export default {
    title: 'entities/ArticleBlockCode',
    component: ArticleBlockCode,
    argTypes: {},
    decorators: [],
    args: {
        block: {
            'id': '4',
            'type': TypeBlock.CODE,
            'code': '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;',
        },
    },
} as ComponentMeta<typeof ArticleBlockCode>;

const Template: ComponentStory<typeof ArticleBlockCode> = (args) => <ArticleBlockCode {...args}/>;

export const Default = Template.bind({});

Default.args = {};

export const Dark = Template.bind({});

Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)]
