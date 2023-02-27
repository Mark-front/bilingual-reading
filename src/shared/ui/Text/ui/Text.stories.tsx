import React from 'react';
import {type ComponentStory, type ComponentMeta} from '@storybook/react';

import {Text, ThemeText} from '@/shared/ui/Text';

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {},
    args: {},
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) =>
    <Text {...args} >
    </Text>;

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