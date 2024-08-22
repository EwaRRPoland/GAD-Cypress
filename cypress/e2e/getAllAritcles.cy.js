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

describe("Get all articles POP", () => {

 beforeEach('Go to start page GAD', () => {
        startPage.navigate();
});  
  
it("Test1: all articles without login", () => {
    // Let's start button - all articles without login:
    startPage.letsStart();
});
    
it("Test2: all articles with login user1", () => {
    // all articles with login:
    loginPage.navigate();
    loginPage.login(`${email1}`, `${password1}`);
    homePage.getArticles();
});     
it("Test3: all articles with login user2", () => {
    // all articles with login:
    loginPage.navigate();
    loginPage.login(`${email2}`, `${password2}`);
    homePage.getArticles();
});   
it("Test4: all articles with login user3", () => {
    // all articles with login:
    loginPage.navigate();
    loginPage.login(`${email3}`, `${password3}`);
    homePage.getArticles();
});       
});