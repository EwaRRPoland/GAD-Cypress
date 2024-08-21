import { Login } from "../pages/Login";
import { HomePage } from "../pages/HomePage";
// data users
import { firstName1, lastName1, email1, password1 } from '../support/data/dataUsers';
import { firstName2, lastName2, email2, password2 } from '../support/data/dataUsers';
import { firstName3, lastName3, email3, password3 } from '../support/data/dataUsers';

const loginPage = new Login();
const homePage = new HomePage();

describe("Get user articles POP", () => {

beforeEach('Go to page GAD register', () => {
        loginPage.navigate();
});
  
it("Test1: should login user1", () => {
    // login
    loginPage.login(`${email1}`, `${password1}`);
  });

it("Test2: should login user2", () => {
    // login
    loginPage.login(`${email2}`, `${password2}`);
});
  
it("Test3: should delete user3", () => {
    // login
    loginPage.login(`${email3}`, `${password3}`);
});
  
afterEach('check my articles', ()=> {
    homePage.myArticles();
  })
});