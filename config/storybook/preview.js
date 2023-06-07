// eslint-disable-next-line
import {StyleDecorator} from '../../src/shared/config/storybook/decorators/StyleDecorator/StyleDecorator'
// eslint-disable-next-line
import {ThemeDecorator} from "../../src/shared/config/storybook/decorators/ThemeDecorator/ThemeDecorator";
// eslint-disable-next-line
import {Theme} from '../../src/shared/ui/ThemeProvider'
// eslint-disable-next-line
import {
    MemoryRouterDecorator,
} from '../../src/shared/config/storybook/decorators/MemoryRouterDecorator/MemoryRouterDecorator';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    layout: 'fullscreen',
    themes: {
        default: 'light',
        list: [
            { name: 'light', class: Theme.LIGHT, color: '#ffffff' },
            { name: 'dark', class: Theme.DARK, color: '#000000' },
            { name: 'green', class: Theme.GREEN, color: '#9bff05' },
        ],
    },
}

export const decorators = [ StyleDecorator, MemoryRouterDecorator, ThemeDecorator(Theme.LIGHT) ]
