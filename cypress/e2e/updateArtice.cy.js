import { Login } from "../pages/Login";
import { HomePage } from "../pages/HomePage";
import { Article } from "../pages/Article";
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

describe("Add user articles and update POP", () => {

beforeEach('Go to page GAD login', () => {
        loginPage.navigate();
});
  
it("Test1: add article1", () => {
    loginPage.login(`${email1}`, `${password1}`);
    homePage.getArticles();
    article.navigate();
    article.createArticle(title1, body1, picture1);
    article.updateArticle(titleNew1, bodyNew1, pictureNew1);
  });

it("Test2: add artile2", () => {
    loginPage.login(`${email2}`, `${password2}`);
    homePage.getArticles();
    article.navigate();
    article.createArticle(title2, body2, picture2);
    article.updateArticle(titleNew2, bodyNew2, pictureNew2);
});
  
it("Test3: add article3", () => {
    loginPage.login(`${email3}`, `${password3}`);
    homePage.getArticles();
    article.navigate();
    article.createArticle(title3, body3, picture3);
    article.updateArticle(titleNew3, bodyNew3, pictureNew3);
});
    
 });   