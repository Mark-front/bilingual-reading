let articleId = ''

describe('Пользователь заходит на страницу статьи', () => {
    beforeEach(() => {
        cy.login()
        cy.createArticle().then(article => {
            articleId = article.id
            cy.visit('/articles/' + article.id)
            cy.log(JSON.stringify(article.id))
        })
    })
    afterEach(() => {
        cy.removeArticle(articleId)
    })
    it('Видит содержание статьи', () => {
        cy.getByTestId('ArticleDetailPage').should('exist')
    })
    it('Видит список рекоммендаций', () => {
        cy.getByTestId('ArticleRecomendationsList').should('exist')
    })
    it('Оставляет комментарий', () => {
        cy.getByTestId('ArticleDetailPage').should('exist')
        cy.getByTestId('AddCommentForm').scrollIntoView()
        cy.addComment('test test test')
        cy.addComment('test test test')
        cy.addComment('test test test')
        cy.wait(5000)
        cy.getByTestId('CommentCard.Content').should('have.length', 1)
    })
    it('И ставит оценку', () => {
        cy.intercept('GET', '**/articles/*', { fixture: 'article-details.json' })
        cy.getByTestId('ArticleDetails.Info');
        cy.getByTestId('RatingCard').scrollIntoView();
        cy.setRate(4, 'feedback');
        cy.get('[data-selected=true]').should('have.length', 4);
    });
})