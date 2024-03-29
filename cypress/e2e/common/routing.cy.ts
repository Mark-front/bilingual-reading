import { selectByTestId } from '../../helpers/selectByTestId'

describe('Роутинг', () => {
    describe('Пользователь НЕ авторизован', () => {
        it('Переход на главную страницу', () => {
            cy.visit('/')
            cy.get(selectByTestId('MainPage')).should('exist')
        })
        it('Переход открывает страницу профиля', () => {
            cy.visit('/profile/1')
            cy.get(selectByTestId('MainPage')).should('exist')
        })
        it('Переход открывает несуществующий маршрут', () => {
            cy.visit('/something_wrong')
            cy.get(selectByTestId('NotFoundPage')).should('exist')
        })
    })
    describe('Пользователь авторизован', () => {
        beforeEach(() => {
            cy.login('admin', '123')
        })
        it('Переход на страницу профиля', () => {
            cy.visit('/profile/1')
            cy.get(selectByTestId('ProfilePage')).should('exist')
        })
        it('Переход на страницу листа статей', () => {
            cy.visit('/articles')
            cy.get(selectByTestId('ArticlePage')).should('exist')
        })
    })
})
