export class CreateUser {
    navigate() {
        cy.visit("http://localhost:3000/register.html");
    }
    register(firstName, lastName, email, password) {
        cy.get("#firstname").type(firstName);
        cy.get("#lastname").type(lastName);
        cy.get("#email").type(email);
        cy.get("#password").type(password);
        cy.get('#registerButton').click();
    }
}