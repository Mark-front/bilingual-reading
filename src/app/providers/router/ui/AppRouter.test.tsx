import { componentRender } from '@/shared/lib/tests/componentRender/componentRender';
import { AppRouter } from './AppRouter';
import { getRouteAbout, getRouteAdminPanel, getRouteProfile } from '@/shared/const/router';
import { screen } from '@testing-library/react';

describe('app/router/AppRouter', function () {
    test('Страница должна отрисоваться', async () => {
        componentRender(<AppRouter/>, {
            route: getRouteAbout(),
        })

        const page = await screen.findByTestId('AboutPage')
        expect(page).toBeInTheDocument()
    })
    test('Страница не найдена', async () => {
        componentRender(<AppRouter/>, {
            route: '/asdfasdf11243asfa',
        })

        const page = await screen.findByTestId('NotFoundPage')
        expect(page).toBeInTheDocument()
    })
    test('Редирект неавторизованного пользователья на главную', async () => {
        componentRender(<AppRouter/>, {
            route: getRouteProfile('1'),
        })

        const page = await screen.findByTestId('MainPage')
        expect(page).toBeInTheDocument()
    })
    test('Доступ к закрытой страницы для авторизованного пользователя', async () => {
        componentRender(<AppRouter/>, {
            route: getRouteProfile('1'),
            initialState: {
                user: {
                    _mounted: true,
                    authData: {
                        id: 'asdf',
                        roles: [ 'user' ],
                        username: 'asdfasdf',
                    },
                },
            },
        })

        const page = await screen.findByTestId('ProfilePage')
        expect(page).toBeInTheDocument()
    })
    test('Доступ запрещен (отсутствует роль)', async () => {
        componentRender(<AppRouter/>, {
            route: getRouteAdminPanel(),
            initialState: {
                user: {
                    _mounted: true,
                    authData: {
                        id: 'asdf',
                        roles: [ 'user' ],
                        username: 'asdfasdf',
                    },
                },
            },
        })
        const UnavailablePage = await screen.findByTestId('UnavailablePage')
        expect(UnavailablePage).toBeInTheDocument()
    })

    test('Доступ разрешен (присутствует роль ADMIN)', async () => {
        componentRender(<AppRouter/>, {
            route: getRouteAdminPanel(),
            initialState: {
                user: {
                    _mounted: true,
                    authData: {
                        id: 'asdf',
                        roles: [ 'ADMIN' ],
                        username: 'asdfasdf',
                    },
                },
            },
        })
        const UnavailablePage = await screen.findByTestId('AdminPanelPage')
        expect(UnavailablePage).toBeInTheDocument()
    })
});