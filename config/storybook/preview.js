import { addDecorator } from '@storybook/react'
import {
    StyleDecorator,
} from '../../src/shared/config/storybook/decorators/StyleDecorator/StyleDecorator'
import {
    ThemeDecorator,
} from '../../src/shared/config/storybook/decorators/ThemeDecorator/ThemeDecorator'
import { Theme } from '../../src/shared/ui/ThemeProvider'

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i, date: /Date$/,
        },
    },
}

addDecorator(StyleDecorator)
addDecorator(ThemeDecorator(Theme.LIGHT))
