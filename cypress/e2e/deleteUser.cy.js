import { Login } from "../pages/Login";
import { HomePage } from "../pages/HomePage";

const loginPage = new Login();
const homePage = new HomePage();

describe("Testing deliting new user POP", () => {

beforeEach('Go to page GAD register', () => {
        loginPage.navigate();
});
    
it("Test1: should delete with lamamba5a23@gmail.com", () => {
    // login
    loginPage.login('lamambadaLambada12@gmail.com', '1234567890');
  });

it("Test2: should delete with testowyqa@qa.team", () => {
    // login
    loginPage.login('testowyqa12@qa.team', 'pierduleczka1258-8');
});
  
afterEach('delete user', ()=> {
    homePage.deleteUser();
  })
});