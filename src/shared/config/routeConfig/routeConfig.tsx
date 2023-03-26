import {type RouteProps} from 'react-router-dom'
import {MainPage} from '@/pages/MainPage'
import {AboutPage} from '@/pages/AboutPage'
import {NotFoundPage} from '@/pages/NotFoundPage'
import {ProfilePage} from '@/pages/ProfilePage';


export type AppRouteProps = RouteProps & {
    authOnly?: boolean
}
export const AppRoutes = {
    MAIN: 'main',
    ABOUT: 'about',
    PROFILE: 'profile',
    //last
    NOT_FOUND: 'not-found',
} as const

export type AppRoutesType = (typeof AppRoutes)[keyof typeof AppRoutes]
export const RoutePath: Record<AppRoutesType, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.PROFILE]: '/profile',
    //last
    [AppRoutes.NOT_FOUND]: '*',
}

export const routeConfig: Record<AppRoutesType, AppRouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage/>,
    },
    [AppRoutes.ABOUT]: {
        path: RoutePath.about,
        element: <AboutPage/>,
    },
    [AppRoutes.PROFILE]: {
        path: RoutePath.profile,
        element: <ProfilePage/>,
        authOnly: true,
    },
    //last
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath['not-found'],
        element: <NotFoundPage/>,
    },
}
