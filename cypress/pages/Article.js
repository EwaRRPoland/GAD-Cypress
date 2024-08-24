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
    // I am updating the article added above
    updateArticle(titleNew, bodyNew, pictureNew) {
        cy.get('[data-testid="edit"]').click();

        cy.get('[data-testid="title-input"]').clear();
        cy.get('[data-testid="title-input"]').type(titleNew);

        cy.get('[data-testid="body-input"]').clear();
        cy.get('[data-testid="body-input"]').type(bodyNew);

        cy.get('[data-testid="update"]').click();
    }

    // I am deleting the article added above
    deleteArticle() {
        cy.get('[data-testid="delete"]').click();
    }

    // cancel create article
    cancelCreateArticle(title, body, picture) {
        cy.get('[data-testid="title-input"]').type(title);
        cy.get('[data-testid="body-text"]').type(body);
        cy.get('.cancel').click();
    }
}