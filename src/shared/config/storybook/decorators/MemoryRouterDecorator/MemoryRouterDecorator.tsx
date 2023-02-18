import { type Story } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';

export const MemoryRouterDecorator = (StoryComponent: Story) => (
    <MemoryRouter initialEntries={['/']}>{<StoryComponent/>}</MemoryRouter>
)
