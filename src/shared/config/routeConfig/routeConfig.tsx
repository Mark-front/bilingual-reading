import { type RouteProps } from 'react-router-dom'
import { MainPage } from '@/pages/MainPage'
import { AboutPage } from '@/pages/AboutPage'
import { NotFoundPage } from '@/pages/NotFoundPage'
import { ProfilePage } from '@/pages/ProfilePage';
import { ArticlePage } from '@/pages/ArticlePage';
import { ArticleDetailPage } from '@/pages/ArticleDetailPage';


export type AppRouteProps = RouteProps & {
    authOnly?: boolean
}
export const AppRoutes = {
    MAIN: 'main',
    ABOUT: 'about',
    PROFILE: 'profile',
    ARTICLES: 'articles',
    ARTICLE_DETAIL: 'article_detail',
    //last
    NOT_FOUND: 'not-found',
} as const

export type AppRoutesType = (typeof AppRoutes)[keyof typeof AppRoutes]
export const RoutePath: Record<AppRoutesType, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.PROFILE]: '/profile',
    [AppRoutes.ARTICLES]: '/articles',
    [AppRoutes.ARTICLE_DETAIL]: '/articles/',// + :id
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
        path: RoutePath.profile + '/:id',
        element: <ProfilePage/>,
        authOnly: true,
    },
    [AppRoutes.ARTICLES]: {
        path: RoutePath.articles,
        element: <ArticlePage/>,
        authOnly: true,
    },
    [AppRoutes.ARTICLE_DETAIL]: {
        path: RoutePath.article_detail + ':id',
        element: <ArticleDetailPage/>,
        authOnly: true,
    },
    //last
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath['not-found'],
        element: <NotFoundPage/>,
    },
}
