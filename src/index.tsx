import React from 'react'
import App, { StoreProvider } from '@/./app'
import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client';

import '@/./shared'
import { ErrorBoundary } from '@/app/providers/ErrorBoundary'
import { ThemeProvider } from '@/shared/ui/ThemeProvider'
import { DevSupport } from '@react-buddy/ide-toolbox';
import { ComponentPreviews, useInitial } from './dev';

const container = document.getElementById('root')
const root = createRoot(container!);

root.render(
    <BrowserRouter>
        <StoreProvider>
            <ErrorBoundary>
                <ThemeProvider>
                    <DevSupport ComponentPreviews={ComponentPreviews}
                        useInitialHook={useInitial}
                    >
                        <App/>
                    </DevSupport>
                </ThemeProvider>
            </ErrorBoundary>
        </StoreProvider>
    </BrowserRouter>
)
export { UserRole } from './shared/const/user';
export { TUserRole } from './shared/types';