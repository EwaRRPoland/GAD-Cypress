import { Login } from "../pages/Login";
import { HomePage } from "../pages/HomePage";
import { Article } from "../pages/Article";
import { CreateUser, Users } from "../pages/Users";

// data users
import { firstName1, lastName1, email1, password1 } from '../support/data/dataUsers';
import { firstName2, lastName2, email2, password2 } from '../support/data/dataUsers';
import { firstName3, lastName3, email3, password3 } from '../support/data/dataUsers';

// data - articles
import { title1, body1, picture1 } from '../support/data/articles';
import { title2, body2, picture2 } from '../support/data/articles';
import { title3, body3, picture3 } from '../support/data/articles';

import { titleNew1, bodyNew1, pictureNew1 } from '../support/data/articles';
import { titleNew2, bodyNew2, pictureNew2 } from '../support/data/articles';
import { titleNew3, bodyNew3, pictureNew3 } from '../support/data/articles';

const loginPage = new Login();
const homePage = new HomePage();
const article = new Article();
const userCreate = new CreateUser();

describe("Add user articles and update POP", () => {

beforeEach('Go to page GAD register', () => {
        userCreate.navigate();
});
  
it("Test1: add  and update article1", () => {
    //create user
    userCreate.navigate();
    userCreate.register(`${firstName1}`, `${lastName1}`, `${email1}`, `${password1}`);
    // login
    loginPage.navigate();
    loginPage.login(`${email1}`, `${password1}`);
    //create article     
    homePage.getArticles();
    article.navigate();
    article.createArticle(title1, body1, picture1);
    // update article
    article.updateArticle(titleNew1, bodyNew1, pictureNew1);
});

it("Test2: add artile2", () => {
    //create user
    userCreate.navigate();
    userCreate.register(`${firstName2}`, `${lastName2}`, `${email2}`, `${password2}`);
    // login
    loginPage.navigate();
    loginPage.login(`${email2}`, `${password2}`);
    //create article     
    homePage.getArticles();
    article.navigate();
    article.createArticle(title2, body2, picture2);
    // update article
    article.updateArticle(titleNew2, bodyNew2, pictureNew2);
});
  
it("Test3: add article3", () => {
    //create user
    userCreate.navigate();
    userCreate.register(`${firstName3}`, `${lastName3}`, `${email3}`, `${password3}`);
    // login
    loginPage.navigate();
    loginPage.login(`${email3}`, `${password3}`);
    //create article     
    homePage.getArticles();
    article.navigate();
    article.createArticle(title3, body3, picture3);
    // update article
    article.updateArticle(titleNew3, bodyNew3, pictureNew3);
});
afterEach('delete user', ()=> {
  // delete user
  homePage.navigate();
  homePage.deleteUser();
});
});   