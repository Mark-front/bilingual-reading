import React, {Suspense} from 'react';
import {Route, Routes} from "react-router-dom";
import {AboutPage} from "pages/AboutPage";
import {MainPage} from "pages/MainPage";
import { routeConfig } from 'shared/config/routeConfig/routeConfig';

const AppRoute = () => {
    return (
        <Suspense fallback={<div> Loading... </div>}>
            <Routes>
                {
                    Object.values(routeConfig).map(({ path, element }, index) =>
                        <Route
                            key={index}
                            path={path}
                            element={
                                <div className={'page-wrapper'}>
                                    {element}
                                </div>
                            }
                        />
                    )
                }
            </Routes>
        </Suspense>
    );
};

export default AppRoute;