import { Login } from "../pages/Login";
import { HomePage } from "../pages/HomePage";
import { CreateUser, Users } from "../pages/Users";
// data users
import { firstName1, lastName1, email1, password1 } from '../support/data/dataUsers';
import { firstName2, lastName2, email2, password2 } from '../support/data/dataUsers';
import { firstName3, lastName3, email3, password3 } from '../support/data/dataUsers';

const loginPage = new Login();
const homePage = new HomePage();
const userCreate = new CreateUser();

describe("Get all users POP", () => {

 beforeEach('Go to page GAD login', () => {
        userCreate.navigate();
});  
  
it("Test1: should register, login and delete user1", () => {
    userCreate.register(`${firstName1}`, `${lastName1}`, `${email1}`, `${password1}`);
    // login
    loginPage.navigate();
    loginPage.login(`${email1}`, `${password1}`);
  });

it("Test2: should register, login and delete user2", () => {
    userCreate.register(`${firstName2}`, `${lastName2}`, `${email2}`, `${password2}`);
    // login
    loginPage.navigate();
    loginPage.login(`${email2}`, `${password2}`);
});
  
it("Test3: should register, login and delete user3", () => {
    userCreate.register(`${firstName3}`, `${lastName3}`, `${email3}`, `${password3}`);
    // login
    loginPage.navigate();
    loginPage.login(`${email3}`, `${password3}`);
});
  
afterEach('check my profile', ()=> {
  homePage.getUsers();
  // delete user
    homePage.navigate();
    homePage.deleteUser();
  })    
});