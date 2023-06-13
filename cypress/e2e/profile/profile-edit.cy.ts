let profileId = '4';

describe('Пользователь заходит на страницу профиля', () => {
    beforeEach(() => {
        cy.visit('profile')
        cy.login().then(data => {
            cy.visit('profile/' + data.id)
            profileId = data.id
        })
        cy.resetProfile(profileId)
    })
    afterEach(() => {
        cy.resetProfile(profileId)
    })
    it('Профиль успешно загружен', () => {
        cy.getByTestId('ProfileCard.firstname').should('have.value', 'test')
    })
    it('Редактирование профиля', () => {
        const testName = 'testname'
        const newLastName = 'testlastname'
        cy.updateProfile(testName, newLastName)
        cy.getByTestId('ProfileCard.firstname').should('have.value', testName)
        cy.getByTestId('ProfileCard.lastname').should('have.value', newLastName)
    })
})