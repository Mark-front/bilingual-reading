// eslint-disable-next-line
import {USER_LOCALSTORAGE_KEY} from '../../../src/shared/const/localStorage';
// eslint-disable-next-line
import {IUser} from "../../../src/entities/User";
import { selectByTestId } from '../../helpers/selectByTestId';

export function login(username = 'testuser', password = '123') {
    cy.log(`Logging in as ${username}`)
    return cy.request({
        method: 'POST',
        url: 'http://localhost:8000/login',
        body: {
            grant_type: 'password',
            username,
            password,
        },
    }).then(({ body }) => {
        window.localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(body))
        return body
    })
}

export const getByTestId = (testId: string) => {
    return cy.get(selectByTestId(testId))
}

declare global {
    // eslint-disable-next-line @typescript-eslint/no-namespace
    namespace Cypress {
        interface Chainable {
            login(username?: string, password?: string): Chainable<IUser>

            getByTestId(testId: string): Chainable<JQuery<HTMLElement>>
        }
    }
}
