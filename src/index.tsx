import React from 'react'
import ReactDOM from 'react-dom'
import App from './app/App'
import {BrowserRouter} from 'react-router-dom'

import './shared/config/i18n/i18n'
import {ErrorBoundary} from '@/app/providers/ErrorBoundary'
import {ThemeProvider} from '@/shared/ui/ThemeProvider'
import {StoreProvider} from './app/providers/StoreProvider';

ReactDOM.render(
    <BrowserRouter>
        <StoreProvider>
            <ErrorBoundary>
                <ThemeProvider>
                    <App/>
                </ThemeProvider>
            </ErrorBoundary>
        </StoreProvider>
    </BrowserRouter>,
    document.querySelector('#root')
)
