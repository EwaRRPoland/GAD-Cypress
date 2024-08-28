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

const loginPage = new Login();
const homePage = new HomePage();
const article = new Article();
const userCreate = new CreateUser();

describe("Add user, login, add articles and delete user POP", () => {

    beforeEach('Go to page GAD create user', () => {
    userCreate.navigate();
});
    
 it("Test1: should register user1, login, add article and delete user", () => {
    // create user1
     userCreate.register(`${firstName1}`, `${lastName1}`, `${email1}`, `${password1}`);
     loginPage.navigate();

     //  add article1
     loginPage.login(`${email1}`, `${password1}`);
     homePage.getArticles();
     article.navigate();
     article.createArticle(title1, body1, picture1);

     // cancel add artile
     homePage.getArticles();
     article.navigate();
     article.cancelCreateArticle(title1, body1, picture1);
     
     // delete user1
      homePage.navigate();
      homePage.deleteUser();

 });
    
 it("Test2: should register user2, login, add article and delete user", () => {
    // create user2
     userCreate.register(`${firstName2}`, `${lastName2}`, `${email2}`, `${password2}`);
     loginPage.navigate();

     //  add article2
     loginPage.login(`${email2}`, `${password2}`);
     homePage.getArticles();
     article.navigate();
     article.createArticle(title2, body2, picture2);

     // cancel add artile
     homePage.getArticles();
     article.navigate();
     article.cancelCreateArticle(title2, body2, picture2);
     
     // delete user2
      homePage.navigate();
      homePage.deleteUser();

 });
  
it("Test3: should register user3, login, add article and delete user", () => {
    // create user3
     userCreate.register(`${firstName3}`, `${lastName3}`, `${email3}`, `${password3}`);
     loginPage.navigate();

     //  add article3
     loginPage.login(`${email3}`, `${password3}`);
     homePage.getArticles();
     article.navigate();
     article.createArticle(title3, body3, picture3);

     // cancel add artile
     homePage.getArticles();
     article.navigate();
     article.cancelCreateArticle(title3, body3, picture3);
     
     // delete user3
      homePage.navigate();
      homePage.deleteUser();

 });
});