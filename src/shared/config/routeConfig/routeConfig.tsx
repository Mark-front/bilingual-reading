import { type RouteProps } from 'react-router-dom'
import { MainPage } from '@/pages/MainPage'
import { AboutPage } from '@/pages/AboutPage'
import { NotFoundPage } from '@/pages/NotFoundPage'
import { ProfilePage } from '@/pages/ProfilePage';
import { ArticlePage } from '@/pages/ArticlePage';
import { ArticleDetailPage } from '@/pages/ArticleDetailPage';
import { ArticleEditPage } from '@/pages/ArticleEditPage';
import { AdminPanelPage } from '@/pages/AdminPanelPage';
import { TUserRole } from '@/entities/User';
import UnavailablePage from '@/pages/UnavailablePage/ui/UnavailablePage';


export type AppRouteProps = RouteProps & {
    authOnly?: boolean,
    roles?: TUserRole[]
}
export const AppRoutes = {
    MAIN: 'main',
    ABOUT: 'about',
    PROFILE: 'profile',
    ARTICLES: 'articles',
    ARTICLE_DETAIL: 'article_detail',
    ARTICLE_EDIT: 'article_edit',
    ARTICLE_CREATE: 'article_create',
    ADMIN_PANEL: 'admin_panel',
    UNAVAILABLE: 'unavailable',
    //last
    NOT_FOUND: 'not-found',
} as const

export type AppRoutesType = (typeof AppRoutes)[keyof typeof AppRoutes]
export const RoutePath: Record<AppRoutesType, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.PROFILE]: '/profile',// + :id
    [AppRoutes.ARTICLES]: '/articles',
    [AppRoutes.ARTICLE_DETAIL]: '/articles/',// + :id
    [AppRoutes.ARTICLE_EDIT]: '/articles/:id/edit',
    [AppRoutes.ARTICLE_CREATE]: '/articles/new',
    [AppRoutes.ADMIN_PANEL]: '/admin_panel',
    [AppRoutes.UNAVAILABLE]: '/unavailable',
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
    [AppRoutes.ADMIN_PANEL]: {
        path: RoutePath.admin_panel,
        element: <AdminPanelPage/>,
        authOnly: true,
        roles: [ 'ADMIN', 'MANAGER' ],
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
    [AppRoutes.ARTICLE_EDIT]: {
        path: RoutePath.article_edit,
        element: <ArticleEditPage/>,
        authOnly: true,
    },
    [AppRoutes.ARTICLE_CREATE]: {
        path: RoutePath.article_create,
        element: <ArticleEditPage/>,
        authOnly: true,
    },
    [AppRoutes.UNAVAILABLE]: {
        path: RoutePath.unavailable,
        element: <UnavailablePage/>,
    },
    //last
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath['not-found'],
        element: <NotFoundPage/>,
    },
}
