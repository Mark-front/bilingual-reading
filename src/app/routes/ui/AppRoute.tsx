import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

import { routeConfig } from 'shared/config/routeConfig/routeConfig'
import { PageLoader } from 'widgets/PageLoader'

const AppRoute = () => {
    return (
        <Suspense fallback={<PageLoader/>}>
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
    )
}

export default AppRoute
