export function updateProfile(firstname: string, lastname: string) {
    cy.getByTestId('EditableProfileHeader.EditButton').click()
    cy.getByTestId('ProfileCard.firstname').clear().type(firstname)
    cy.getByTestId('ProfileCard.lastname').clear().type(lastname)
    cy.getByTestId('EditableProfileHeader.SaveButton').click()
}

export function resetProfile(profileId: string) {
    return cy.request({
        method: 'PUT',
        url: 'http://localhost:8000/profile/' + profileId,
        headers: { Authorization: 'test_token' },
        body: {
            'id': '4',
            'first': 'test',
            'lastname': 'test',
            'age': 465,
            'currency': 'EUR',
            'country': 'Ukraine',
            'city': 'Moscow',
            'username': 'testuser',
            'avatar': 'https://xakep.ru/wp-content/uploads/2018/05/171485/KuroiSH-hacker.jpg',
        },
    })
}

declare global {
    // eslint-disable-next-line @typescript-eslint/no-namespace
    namespace Cypress {
        interface Chainable {
            updateProfile(firstname: string, lastname: string): Chainable<void>

            resetProfile(profileId: string): Chainable<void>
        }
    }
}
