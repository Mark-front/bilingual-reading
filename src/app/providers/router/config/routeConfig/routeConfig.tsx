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
import {
    AppRoutes,
    getRouteAbout,
    getRouteAdminPanel,
    getRouteArticleCreate,
    getRouteArticleDetail,
    getRouteArticleEdit,
    getRouteArticles,
    getRouteMain,
    getRouteNotFound,
    getRouteProfile,
    getRouteUnavailable,
} from '@/shared/const/router';

export const routeConfig: Record<AppRoutesType, AppRouteProps> = {
    [AppRoutes.MAIN]: {
        path: getRouteMain(),
        element: <MainPage/>,
    },
    [AppRoutes.ABOUT]: {
        path: getRouteAbout(),
        element: <AboutPage/>,
    },
    [AppRoutes.ADMIN_PANEL]: {
        path: getRouteAdminPanel(),
        element: <AdminPanelPage/>,
        authOnly: true,
        roles: [ 'ADMIN', 'MANAGER' ],
    },
    [AppRoutes.PROFILE]: {
        path: getRouteProfile(':id'),
        element: <ProfilePage/>,
        authOnly: true,
    },
    [AppRoutes.ARTICLES]: {
        path: getRouteArticles(),
        element: <ArticlePage/>,
        authOnly: true,
    },
    [AppRoutes.ARTICLE_DETAIL]: {
        path: getRouteArticleDetail(':id'),
        element: <ArticleDetailPage/>,
        authOnly: true,
    },
    [AppRoutes.ARTICLE_EDIT]: {
        path: getRouteArticleEdit(':id'),
        element: <ArticleEditPage/>,
        authOnly: true,
    },
    [AppRoutes.ARTICLE_CREATE]: {
        path: getRouteArticleCreate(),
        element: <ArticleEditPage/>,
        authOnly: true,
    },
    [AppRoutes.UNAVAILABLE]: {
        path: getRouteUnavailable(),
        element: <UnavailablePage/>,
    },
    //last
    [AppRoutes.NOT_FOUND]: {
        path: getRouteNotFound(),
        element: <NotFoundPage/>,
    },
}
