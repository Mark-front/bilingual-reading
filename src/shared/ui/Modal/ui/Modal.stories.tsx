import React from 'react';
import { type ComponentMeta, type ComponentStory } from '@storybook/react';

import { Modal } from './Modal';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator/ThemeDecorator';
import { Theme } from '../../ThemeProvider';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {},
    args: {
        // eslint-disable-next-line max-len
        isOpen: true,
        children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum dolor doloribus esse inventore, libero necessitatibus, nemo nobis nulla officia quia, quibusdam quos repudiandae. Esse iste maiores nesciunt odit repudiandae sunt!',
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) =>
    <Modal {...args} >
        {args.children}
    </Modal>;

export const Primary = Template.bind({});

Primary.args = {};

export const Dark = Template.bind({});

Dark.args = {};
Dark.decorators = [ ThemeDecorator(Theme.DARK) ];
