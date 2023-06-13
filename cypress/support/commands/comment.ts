export const addComment = (text: string) => {
    cy.getByTestId('AddCommentForm.Input').should('exist').type(text);
    cy.getByTestId('AddCommentForm.BtnSend').should('exist').click();
};

declare global {
    // eslint-disable-next-line @typescript-eslint/no-namespace
    namespace Cypress {
        interface Chainable {
            addComment(text: string): Chainable<void>;
        }
    }
}
