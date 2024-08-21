import { Login } from "../pages/Login";
import { HomePage } from "../pages/HomePage";
import { Profile } from "../pages/Profile";
// data users
import { firstName1, lastName1, email1, password1 } from '../support/data/dataUsers';
import { firstName2, lastName2, email2, password2 } from '../support/data/dataUsers';
import { firstName3, lastName3, email3, password3 } from '../support/data/dataUsers';
// data new users
import { firstNameNew1, lastNameNew1, emailNew1, passwordNew1, avatarNew1 } from '../support/data/dataUsers';
import { firstNameNew2, lastNameNew2, emailNew2, passwordNew2, avatarNew2 } from '../support/data/dataUsers';
import { firstNameNew3, lastNameNew3, emailNew3, passwordNew3, avatarNew3} from '../support/data/dataUsers';

const loginPage = new Login();
const homePage = new HomePage();
const profile = new Profile();

describe("Edit profile user POP", () => {

beforeEach('Go to page GAD register', () => {
        loginPage.navigate();
});
    
it("Test1: should login user1", () => {
    // login
    loginPage.login(`${email1}`, `${password1}`);
  
    // user profile
        homePage.myProfile();
        // edit profile
        profile.editProfile();
        profile.edit(`${firstNameNew1}`, `${lastNameNew1}`, `${emailNew1}`, `${avatarNew1}`)
});
    
it("Test2: should login user2", () => {
    // login
    loginPage.login(`${email2}`, `${password2}`);

    // user profile
    homePage.myProfile();
// edit profile
    profile.editProfile();
    profile.editWithPassword(`${firstNameNew2}`, `${lastNameNew2}`, `${emailNew2}`, `${passwordNew2}`, `${avatarNew2}`)
});
  
it("Test3: should login user3", () => {
    // login
    loginPage.login(`${email3}`, `${password3}`);

    // user profile
    homePage.myProfile();
// edit profile
    profile.editProfile();
    profile.editWithPassword(`${firstNameNew3}`, `${lastNameNew3}`, `${emailNew3}`, `${passwordNew3}`, `${avatarNew3}`)
});
    
  });
    