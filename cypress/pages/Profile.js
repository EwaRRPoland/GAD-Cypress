export class Profile {
    editProfile() {
        cy.get('.controls > .fa-edit').click();
    }
    // edit without password
   edit(firstNameNew, lastNameNew, emailNew, avatar) {
        cy.get("#firstname").clear();
        cy.get("#firstname").type(firstNameNew);

        cy.get("#lastname").clear();
        cy.get("#lastname").type(lastNameNew);

        cy.get("#email").clear();
        cy.get("#email").type(emailNew);

       //cy.get("#avatar").clear();
       cy.get("#avatar").type('{selectall}{del}');
       cy.get("#avatar").type(avatar);
       
        cy.get('[data-testid="update-user"]').click();
    }
    // edit with password
    editWithPassword(firstName, lastName, email, password, avatar) {
        cy.get("#firstname").clear();
        cy.get("#firstname").type(firstName);

        cy.get("#lastname").clear();
        cy.get("#lastname").type(lastName);

        cy.get("#email").clear();
        cy.get("#email").type(email);

        cy.get('#editPassword').click();

        cy.get("#password").clear();
        cy.get("#password").type(password);

        //cy.get("#avatar").clear();
        cy.get("#avatar").type('{selectall}{del}');
        cy.get("#avatar").type(avatar);

        cy.get('[data-testid="update-user"]').click();
    }
}