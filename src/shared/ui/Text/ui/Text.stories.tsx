import React from 'react';
import { type ComponentMeta, type ComponentStory } from '@storybook/react';

import { Text, TextSize, ThemeText } from './Text';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator/ThemeDecorator';
import { Theme } from '../../ThemeProvider';

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {},
    args: {},
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) =>
    <Text {...args} />;

export const Default = Template.bind({});
Default.args = {
    title: 'Заголовок',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium natus nisi possimus sunt? Aliquid, architecto asperiores dolore doloremque ducimus fugiat hic id ipsa officiis omnis porro repellat, rerum, suscipit velit!',
}

export const Error = Template.bind({});

Error.args = {
    theme: ThemeText.ERROR,
    title: 'Заголовок',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium natus nisi possimus sunt? Aliquid, architecto asperiores dolore doloremque ducimus fugiat hic id ipsa officiis omnis porro repellat, rerum, suscipit velit!',
};

export const OnlyTitile = Template.bind({});
OnlyTitile.args = {
    title: 'Заголовок',
}

export const OnlyText = Template.bind({});

OnlyText.args = {
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium natus nisi possimus sunt? Aliquid, architecto asperiores dolore doloremque ducimus fugiat hic id ipsa officiis omnis porro repellat, rerum, suscipit velit!',
};

export const DefaultDark = Template.bind({});
DefaultDark.args = {
    title: 'Заголовок',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium natus nisi possimus sunt? Aliquid, architecto asperiores dolore doloremque ducimus fugiat hic id ipsa officiis omnis porro repellat, rerum, suscipit velit!',
}
DefaultDark.decorators = [ ThemeDecorator(Theme.DARK) ]

export const ErrorDark = Template.bind({});
ErrorDark.args = {
    theme: ThemeText.ERROR,
    title: 'Заголовок',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium natus nisi possimus sunt? Aliquid, architecto asperiores dolore doloremque ducimus fugiat hic id ipsa officiis omnis porro repellat, rerum, suscipit velit!',
};
ErrorDark.decorators = [ ThemeDecorator(Theme.DARK) ]

export const OnlyTitileDark = Template.bind({});
OnlyTitileDark.args = {
    title: 'Заголовок',
}
OnlyTitileDark.decorators = [ ThemeDecorator(Theme.DARK) ]

export const OnlyTextDark = Template.bind({});
OnlyTextDark.args = {
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium natus nisi possimus sunt? Aliquid, architecto asperiores dolore doloremque ducimus fugiat hic id ipsa officiis omnis porro repellat, rerum, suscipit velit!',
};
OnlyTextDark.decorators = [ ThemeDecorator(Theme.DARK) ]

export const SizeL = Template.bind({});
SizeL.args = {
    theme: ThemeText.ERROR,
    title: 'Заголовок',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium natus nisi possimus sunt? Aliquid, architecto asperiores dolore doloremque ducimus fugiat hic id ipsa officiis omnis porro repellat, rerum, suscipit velit!',
    size: TextSize.L,
};
SizeL.decorators = [ ThemeDecorator(Theme.DARK) ]