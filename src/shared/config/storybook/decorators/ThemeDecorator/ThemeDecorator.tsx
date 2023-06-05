import { type Story } from '@storybook/react';
import { ThemeProvider, type TTheme } from '@/shared/ui/ThemeProvider';

export const ThemeDecorator = (theme: TTheme) => (StoryComponent: Story) => {
    document.body.className = theme
    return (
        <ThemeProvider initialTheme={theme}>
            <StoryComponent/>
        </ThemeProvider>
    )
}
