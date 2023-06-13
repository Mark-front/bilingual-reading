// eslint-disable-next-line
import {USER_LOCALSTORAGE_KEY} from '../../../src/shared/const/localStorage';

export function loginCy(username = 'testsuser', password = '123') {
    cy.log(`Logging in as ${username}`)
    cy.request({
        method: 'POST',
        url: 'http://localhost:8000/login',
        body: {
            grant_type: 'password',
            username,
            password,
        },
    }).then(({ body }) => {
        window.localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(body))
    })
}