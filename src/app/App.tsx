import React, {memo, Suspense, useEffect} from 'react'
import {useTheme} from '@/shared/ui/ThemeProvider'
import {classNames} from '@/shared/lib/classNames/classNames'
import {AppRoute} from '@/app/routes'
import {Navbar} from '@/widgets/Navbar'
import {Sidebar} from '@/widgets/Sidebar'

import './styles/index.scss'
import {useDispatch} from 'react-redux';
import {userActions} from '../entities/User';

const App = memo(() => {
    useTheme()
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userActions.initAuthData())
    }, [dispatch])
    return (
        <div className={classNames('app')}>
            <Suspense fallback=''>
                <Navbar/>
                <div className={'content-page'}>
                    <Sidebar/>
                    <AppRoute/>
                </div>
            </Suspense>
        </div>
    )
})

export default App
