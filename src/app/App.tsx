import React, { memo, Suspense, useEffect } from 'react'
import { useTheme } from '@/shared/ui/ThemeProvider'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Navbar } from '@/widgets/Navbar'
import { Sidebar } from '@/widgets/Sidebar'

import './styles/index.scss'
import { useDispatch, useSelector } from 'react-redux';
import { getUserMounted, userActions } from '@/entities/User';
// eslint-disable-next-line mym-path-checker/layer-imports
import { AppRouter } from './providers/router';

window.addEventListener('error', (e) => {
    if (
        e.message ===
        'ResizeObserver loop completed with undelivered notifications.' ||
        e.message === 'ResizeObserver loop limit exceeded'
    ) {
        console.error(e.message)
        e.stopImmediatePropagation();
    }
});
const App = memo(() => {


    useTheme()
    const dispatch = useDispatch();
    const mounted = useSelector(getUserMounted)
    useEffect(() => {

        dispatch(userActions.initAuthData())
    }, [ dispatch ])
    return (
        <div className={classNames('app')}>
            <Suspense fallback=''>
                <Navbar/>
                <div className={'content-page'}>
                    <Sidebar/>
                    {mounted && <AppRouter/>}
                </div>
            </Suspense>
        </div>
    )
})

export default App
