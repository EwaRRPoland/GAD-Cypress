export class StartPage {
    navigate() {
        cy.visit("http://localhost:3000");
    }
    // Let's start button - all articles without login:
    letsStart() {
        cy.get('#btnGui').click();
    }
    // Practice your test automation skills:
    practicePages() {
        cy.get('#btnPractice').click();
    }

    // menu-main-gui buttons:

    backofficeTools() {
        // Visit Backoffice Tools
        cy.get('[href="/tools/backoffice.html"] > .hovertext > img').click();
    }
    jaktestowacPl() {
        // Visit jaktestowac.pl
        cy.get('[style="text-decoration: none; color: white"] > .hovertext > img').click();
    }
    jaktestowacPl1() {
        // Visit jaktestowac.pl - icon:
        cy.get('span > img').click();
    }
    jaktestowacPl2() {
        // Visit jaktestowac.pl - link at the icon:
        cy.get('a > span').click();
    }
    jaktestowacPl3() {
        // Visit jaktestowac.pl - link next to the program version:
        cy.get('footer > .container > a').click();
    }
}