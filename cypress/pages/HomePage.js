export class HomePage {
    navigate() {
        cy.visit("http://localhost:3000/welcome");
    }
    // Quick Navigation buttons:
    logout() {
        cy.get('[data-testid="logoutButton"]').click();
    }
    myProfile() {
        //GET user
        cy.get('#btnMyAccountLink > .button-primary').click();
    }
    myArticles() {
        //GET my articles
        cy.get('#btnArticlesLink > .button-primary').click();
    }
    deleteUser() {
        //Delete user
        cy.get('[data-testid="deleteButton"]').click();
    }

    // menu-main-gui buttons:

    getUsers() {
        // get all users
        cy.contains('Users').click();
    }
}