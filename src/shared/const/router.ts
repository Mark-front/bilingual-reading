import { AppRoutesType } from '@/shared/types/router';

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