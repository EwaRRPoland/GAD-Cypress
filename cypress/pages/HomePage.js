export class HomePage {
    navigate() {
        cy.visit("http://localhost:3000/welcome");
    }
    logout() {
        cy.get('[data-testid="logoutButton"]').click();
    }
}