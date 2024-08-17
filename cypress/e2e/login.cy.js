import { Login } from "../pages/Login";
import { HomePage } from "../pages/HomePage";

const loginPage = new Login();
const homePage = new HomePage();

describe("Testing creating new user POP", () => {

beforeEach('Go to page GAD register', () => {
        loginPage.navigate();
});
    
it("Test1: should login and log out with lamamba5a23@gmail.com", () => {
    // login
    loginPage.login('lamambada56@gmail.com', '1234567890');
  });

it("Test2: should login and log out with testowyqa@qa.team", () => {
    // login
    loginPage.login('testowyqa@qa.team', 'pierduleczka1258-8');
});
  
afterEach('logout', ()=> {
    homePage.logout();
  })
});