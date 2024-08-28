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

describe("Get Backoffice POP", () => {

 beforeEach('Go to Backoffice page GAD', () => {
        startPage.navigate();
});  
  
it("Test1: Backoffice without login", () => {
    // Backoffice without login:
    startPage.backofficeTools();
});
    
it("Test2: Backoffice with create and login user1", () => {
    // Backoffice with login:
    // create user1
    userCreate.navigate();
    userCreate.register(`${firstName1}`, `${lastName1}`, `${email1}`, `${password1}`);
    // login
    loginPage.navigate();
    loginPage.login(`${email1}`, `${password1}`);
    homePage.backofficeTools();
    // delete user1
    homePage.navigate();
    homePage.deleteUser();
});     
it("Test3: Backoffice with create and  login user2", () => {
     // Backoffice with login:
    // create user2
    userCreate.navigate();
    userCreate.register(`${firstName2}`, `${lastName2}`, `${email2}`, `${password2}`);
    // login
    loginPage.navigate();
    loginPage.login(`${email2}`, `${password2}`);
    homePage.backofficeTools();
    // delete user2
    homePage.navigate();
    homePage.deleteUser();
});       
it("Test4: Backoffice with create and login user3", () => {
     // Backoffice with login:
    // create user3
    userCreate.navigate();
    userCreate.register(`${firstName3}`, `${lastName3}`, `${email3}`, `${password3}`);
    // login
    loginPage.navigate();
    loginPage.login(`${email3}`, `${password3}`);
    homePage.backofficeTools();
    // delete user3
    homePage.navigate();
    homePage.deleteUser();
});           
});