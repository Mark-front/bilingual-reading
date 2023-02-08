import React, {Suspense} from 'react';
import {Link, Route, Routes} from "react-router-dom";
import {MainPage} from 'pages/MainPage';
import { useTheme } from 'shared/ThemeProvider/lib/hooks/useTheme';

const App = () => {
    return (
        <div>
            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>О нас</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/" element={<MainPage/>}/>
                </Routes>
            </Suspense>
            <button onClick={useTheme}>toogle</button>
        </div>
    );
};

export default App;