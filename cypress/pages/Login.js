export class Login {
    navigate() {
        cy.visit("http://localhost:3000/login/");
    }   
    login(email, password) {
        cy.get(':nth-child(2) > #username').type(email);
        cy.get('#password').type(password);
        cy.get('#loginButton').click();
    }
}
