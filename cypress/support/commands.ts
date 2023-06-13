import { loginCy } from './commands/login';

Cypress.Commands.add(
    'login',
    loginCy
)
declare global {
    // eslint-disable-next-line @typescript-eslint/no-namespace
    namespace Cypress {
        interface Chainable {
            login(email: string, password: string): Chainable<void>
        }
    }
}

export {}