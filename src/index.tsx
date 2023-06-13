import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client';

import { ErrorBoundary } from '@/app/providers/ErrorBoundary'
import { ThemeProvider } from '@/shared/ui/ThemeProvider'
import { DevSupport } from '@react-buddy/ide-toolbox';
import { ComponentPreviews, useInitial } from './dev';
// eslint-disable-next-line mym-path-checker/public-api-imports
import App from './app/App';
// eslint-disable-next-line mym-path-checker/public-api-imports
import { StoreProvider } from './app/providers/StoreProvider';

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
export type { TUserRole } from './shared/types/user';