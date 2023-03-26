import React, {memo, Suspense, useEffect} from 'react'
import {useTheme} from '@/shared/ui/ThemeProvider'
import {classNames} from '@/shared/lib/classNames/classNames'
import {AppRouter} from '@/app/routes'
import {Navbar} from '@/widgets/Navbar'
import {Sidebar} from '@/widgets/Sidebar'

import './styles/index.scss'
import {useDispatch, useSelector} from 'react-redux';
import {getUserMounted, userActions} from '@/entities/User';

const App = memo(() => {
    useTheme()
    const dispatch = useDispatch();
    const mounted = useSelector(getUserMounted)
    useEffect(() => {
        dispatch(userActions.initAuthData())
    }, [dispatch])
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
