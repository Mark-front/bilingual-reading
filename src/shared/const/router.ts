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


export const getRouteMain = () => '/'
export const getRouteAbout = () => '/about'
export const getRouteProfile = (id: string) => '/profile/' + id
export const getRouteArticles = () => '/articles'
export const getRouteArticleDetail = (id: string) => '/articles/' + id
export const getRouteArticleEdit = (id: string) => '/articles/' + id + '/edit'
export const getRouteArticleCreate = () => '/articles/new'
export const getRouteAdminPanel = () => '/admin_panel'
export const getRouteUnavailable = () => '/unavailable'
export const getRouteNotFound = () => '*'