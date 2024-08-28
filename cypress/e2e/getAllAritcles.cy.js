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

describe("Get all articles POP", () => {

 beforeEach('Go to start page GAD', () => {
        startPage.navigate();
});  
  
it("Test1: all articles without login", () => {
    // Let's start button - all articles without login:
    startPage.letsStart();
});
    
it("Test2: all articles with repistration, login and delete user1", () => {
    // registration
    userCreate.navigate();
    userCreate.register(`${firstName1}`, `${lastName1}`, `${email1}`, `${password1}`);
    // login
    loginPage.navigate();
    loginPage.login(`${email1}`, `${password1}`);
    // get articles
    homePage.getArticles();
    // delete user
    homePage.navigate();
    homePage.deleteUser();
});     
it("Test3: all articles with repistration, login and delete user2", () => {
    userCreate.navigate();
    userCreate.register(`${firstName2}`, `${lastName2}`, `${email2}`, `${password2}`);
    loginPage.navigate();
    loginPage.login(`${email2}`, `${password2}`);
    homePage.getArticles();
    homePage.navigate();
    homePage.deleteUser();
});
it("Test4: all articles with repistration, login and delete user3", () => {
    userCreate.navigate();
    userCreate.register(`${firstName3}`, `${lastName3}`, `${email3}`, `${password3}`);
    loginPage.navigate();
    loginPage.login(`${email3}`, `${password3}`);
    homePage.getArticles();
    homePage.navigate();
    homePage.deleteUser();
});  
   
});