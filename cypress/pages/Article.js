export class Article {
     navigate() {
         cy.visit("http://localhost:3000/articles.html");
         cy.contains('Add Article').click();
    }
    createArticle(title, body, picture) {
        cy.get('[data-testid="title-input"]').type(title);
        cy.get('[data-testid="body-text"]').type(body);
        cy.get('[data-testid="save"]').click();
    }
    // cancel create article
    cancelCreateArticle(title, body, picture) {
        cy.get('[data-testid="title-input"]').type(title);
        cy.get('[data-testid="body-text"]').type(body);
        cy.get('.cancel').click();
    }
}