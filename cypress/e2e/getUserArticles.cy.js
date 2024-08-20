import { Login } from "../pages/Login";
import { HomePage } from "../pages/HomePage";

const loginPage = new Login();
const homePage = new HomePage();

describe("Get user articles POP", () => {

beforeEach('Go to page GAD register', () => {
        loginPage.navigate();
});
    
// user1
    const firstName1='Angelika';
    const lastName1='Wolak';
    const email1='dagma123@zoo.pl';
    const password1 = 'flipiflap';
    
    // user2
    const firstName2='Ola';
    const lastName2='Wolak';
    const email2='paczka123@zoo.pl';
    const password2 = '789987';
    
    // user3
    const firstName3='Adam';
    const lastName3='Japan';
    const email3='woda123@zoo.pl';
    const password3= '123321';
  
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