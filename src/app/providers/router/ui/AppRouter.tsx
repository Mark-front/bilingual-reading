import React, { memo, Suspense, useCallback } from 'react'
import { PageLoader } from '@/widgets/PageLoader'
import { Route, Routes } from 'react-router-dom';
import { AppRouteProps } from '@/shared/types/router';
// eslint-disable-next-line mym-path-checker/layer-imports
import { RequireAuth } from '@/app/providers/router/ui/RequireAuth';
// eslint-disable-next-line mym-path-checker/layer-imports
import { routeConfig } from '@/app/providers/router/config/routeConfig/routeConfig';

const AppRouter = () => {
    const renderWithWrapper = useCallback((route: AppRouteProps) => {
        const element = (
            <Suspense fallback={<PageLoader/>}>
                {route.element}
            </Suspense>
        );
        return (
            <Route
                key={route.path}
                path={route.path}
                element={
                    route.authOnly ? <RequireAuth> {element} </RequireAuth> : element
                }
            />
        )
    }, [])
    return (
        <Routes>
            {Object.values(routeConfig).map(item => {
                return renderWithWrapper(item)
            })}
        </Routes>

    )
}

AppRouter.displayName = 'AppRouter'
export default memo(AppRouter)
