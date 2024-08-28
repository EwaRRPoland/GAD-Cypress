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
//         cy.window().then((win) => {
//   cy.stub(win, 'confirm').returns(true);
//   // Akcja, która wywołuje okienko potwierdzenia
//   cy.get('button#delete-account').click();
//});

    }

    // menu-main-gui buttons L:
    
// get all users
    getUsers() {
        cy.contains('Users').click();
    }

    // get all articles
    getArticles() {
        cy.contains('Articles').click();
    }

    // get all comments
    getComments() {
        cy.contains('Comments').click();
    }

    // get all flashposts
    getFlashposts() {
        cy.contains('Flashposts').click();
    }

    // get statistics
    getStatistics() {
        cy.contains('Statistics').click();
    }
    // menu-main-gui buttons R:

    backofficeTools() {
        // Visit Backoffice Tools
        cy.get('[href="/tools/backoffice.html"] > .hovertext > img').click();
    }
    jaktestowacPl() {
        // Visit jaktestowac.pl
        cy.get('[style="text-decoration: none; color: white"] > .hovertext > img').click();
    }
}