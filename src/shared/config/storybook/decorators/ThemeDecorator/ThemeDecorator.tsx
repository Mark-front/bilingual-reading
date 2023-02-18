import { type Story } from '@storybook/react';
import { type TTheme } from '@/shared/ui/ThemeProvider/lib/context/themeContext';

export const ThemeDecorator = (theme: TTheme) => (StoryComponent: Story) => (
    <div className={`app ${theme}`}>
        <StoryComponent/>
    </div>
)
