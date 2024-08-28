import { Login } from "../pages/Login";
import { StartPage } from "../pages/StartPage";
import { HomePage } from "../pages/HomePage";
import { CreateUser, Users } from "../pages/Users";

// data users
import { firstName1, lastName1, email1, password1 } from '../support/data/dataUsers';
import { firstName2, lastName2, email2, password2 } from '../support/data/dataUsers';
import { firstName3, lastName3, email3, password3 } from '../support/data/dataUsers';

const loginPage = new Login();
const startPage = new StartPage();
const homePage = new HomePage();
const userCreate = new CreateUser();

describe("Get jaktestowac.pl POP", () => {

 beforeEach('Go to jaktestowac.pl page GAD', () => {
        startPage.navigate();
});  
  
it("Test1a: jaktestowac.pl without login", () => {
    // jaktestowac.pl without login menu-main-gui:
    startPage.jaktestowacPl();
});
    it("Test1b: jaktestowac.pl without login", () => {
    // jaktestowac.pl without login - icon:
    startPage.jaktestowacPl1();
    });
    it("Test1c: jaktestowac.pl without login", () => {
    // jaktestowac.pl without login - link at the icon:
    startPage.jaktestowacPl2();
    });
    it("Testd: jaktestowac.pl without login", () => {
    // jaktestowac.pl without login - link next to the program version:
    startPage.jaktestowacPl3();
});
    
it("Test2: jaktestowac.pl with registrate, login and delete user1", () => {
    // jaktestowac.pl with login:
    userCreate.navigate();
    userCreate.register(`${firstName1}`, `${lastName1}`, `${email1}`, `${password1}`);
    // login
    loginPage.navigate();
    loginPage.login(`${email1}`, `${password1}`);
    // jaktestowac.pl
    homePage.jaktestowacPl();
    // delete user
    homePage.navigate();
    homePage.deleteUser();
});     
it("Test3: jaktestowac.pl with registrate, login and delete user2", () => {
    // jaktestowac.pl with login:
    userCreate.navigate();
    userCreate.register(`${firstName2}`, `${lastName2}`, `${email2}`, `${password2}`);
    // login
    loginPage.navigate();
    loginPage.login(`${email2}`, `${password2}`);
    homePage.jaktestowacPl();
    // delete user
    homePage.navigate();
    homePage.deleteUser();
});   
it("Test4: jaktestowac.pl with registrate, login and delete user3", () => {
    // jaktestowac.pl with login:
    userCreate.navigate();
    userCreate.register(`${firstName3}`, `${lastName3}`, `${email3}`, `${password3}`);
    // login
    loginPage.navigate();
    loginPage.login(`${email3}`, `${password3}`);
    homePage.jaktestowacPl();
    // delete user
    homePage.navigate();
    homePage.deleteUser();
});   
});