import { Login } from "../pages/Login";
import { StartPage } from "../pages/StartPage";
import { HomePage } from "../pages/HomePage";

// data users
import { firstName1, lastName1, email1, password1 } from '../support/data/dataUsers';
import { firstName2, lastName2, email2, password2 } from '../support/data/dataUsers';
import { firstName3, lastName3, email3, password3 } from '../support/data/dataUsers';

const loginPage = new Login();
const startPage = new StartPage();
const homePage = new HomePage();

describe("Get Backoffice POP", () => {

 beforeEach('Go to Backoffice page GAD', () => {
        startPage.navigate();
});  
  
it("Test1: Backoffice without login", () => {
    // Backoffice without login:
    startPage.backofficeTools();
});
    
it("Test2: Backoffice with login user1", () => {
    // Backoffice with login:
    loginPage.navigate();
    loginPage.login(`${email1}`, `${password1}`);
    homePage.backofficeTools();
});     
it("Test3: Backoffice with login user2", () => {
    // Backoffice with login:
    loginPage.navigate();
    loginPage.login(`${email2}`, `${password2}`);
    homePage.backofficeTools();
});   
it("Test4: Backoffice with login user3", () => {
    // Backoffice with login:
    loginPage.navigate();
    loginPage.login(`${email3}`, `${password3}`);
    homePage.backofficeTools();
});       
});