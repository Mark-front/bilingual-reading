import { MainPage } from '@/pages/MainPage'
import { AboutPage } from '@/pages/AboutPage'
import { NotFoundPage } from '@/pages/NotFoundPage'
import { ProfilePage } from '@/pages/ProfilePage';
import { ArticlePage } from '@/pages/ArticlePage';
import { ArticleDetailPage } from '@/pages/ArticleDetailPage';
import { ArticleEditPage } from '@/pages/ArticleEditPage';
import { AdminPanelPage } from '@/pages/AdminPanelPage';
import { UnavailablePage } from '@/pages/UnavailablePage';
import { AppRouteProps, AppRoutesType } from '@/shared/types/router';
import { AppRoutes, RoutePath } from '@/shared/const/router';

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
