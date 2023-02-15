import React from 'react'
import ReactDOM from 'react-dom'
import App from './app/App'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'shared/ui/ThemeProvider'

import './shared/config/i18n/i18n'
import { ErrorBoundary } from 'app/providers/ErrorBoundary'

ReactDOM.render(
    <BrowserRouter>
        <ErrorBoundary>
            <ThemeProvider>
                <App/>
            </ThemeProvider>
        </ErrorBoundary>
    </BrowserRouter>,
    document.querySelector('#root')
)
