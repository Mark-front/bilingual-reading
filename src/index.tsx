import React from 'react'
import ReactDOM from 'react-dom'
import App from './app/App'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'shared/ui/ThemeProvider'

import './shared/config/i18n/i18n'

ReactDOM.render(
    <BrowserRouter>
        <ThemeProvider>
            <App/>
        </ThemeProvider>
    </BrowserRouter>,
    document.querySelector('#root')
)
