import React, {Suspense} from 'react';
import { useTheme } from 'shared/ui/ThemeProvider';
import {classNames} from "shared/lib/classNames/classNames";
import {AppRoute} from "app/routes";
import {Navbar} from "widgets/Navbar";
import {Sidebar} from "widgets/Sidebar";

import './styles/index.scss'
const App = () => {
    const {theme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback=''>
                <Navbar/>
                <div className={'content-page'}>
                    <Sidebar/>
                    <AppRoute/>
                </div>
            </Suspense>
        </div>
    );
};

export default App;