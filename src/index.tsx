import React from 'react'
import App from './app/App'
import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client';

import './shared/config/i18n/i18n'
import { ErrorBoundary } from '@/app/providers/ErrorBoundary'
import { ThemeProvider } from '@/shared/ui/ThemeProvider'
import { StoreProvider } from './app/providers/StoreProvider';

const container = document.getElementById('root')
const root = createRoot(container!);
root.render(
    <BrowserRouter>
        <StoreProvider>
            <ErrorBoundary>
                <ThemeProvider>
                    <App/>
                </ThemeProvider>
            </ErrorBoundary>
        </StoreProvider>
    </BrowserRouter>
)
