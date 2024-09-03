import { Login } from "../pages/Login";
import { HomePage } from "../pages/HomePage";
import { Profile } from "../pages/Profile";
import { CreateUser, Users } from "../pages/Users";

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
const userCreate = new CreateUser();

describe("Edit profile user POP", () => {

beforeEach('Go to page GAD register', () => {
        userCreate.navigate();
});
    
it("Test1: should login user1", () => {
   //create user
    userCreate.navigate();
    userCreate.register(`${firstName1}`, `${lastName1}`, `${email1}`, `${password1}`);
    // login
    loginPage.navigate();
    loginPage.login(`${email1}`, `${password1}`);
    // user profile
    homePage.myProfile();
    // edit profile
    profile.editProfile();
    profile.edit(`${firstNameNew1}`, `${lastNameNew1}`, `${emailNew1}`, `${avatarNew1}`);
    // logout
    homePage.navigate();
    homePage.logout();
    // re - login after edition
    loginPage.navigate();
    loginPage.login(`${emailNew1}`, `${password1}`);

});
    
it("Test2: should login user2", () => {
    //create user
    userCreate.navigate();
    userCreate.register(`${firstName2}`, `${lastName2}`, `${email2}`, `${password2}`);
    // login
    loginPage.navigate();
    loginPage.login(`${email2}`, `${password2}`);
    // user profile
    homePage.myProfile();
    // edit profile
    profile.editProfile();
    profile.editWithPassword(`${firstNameNew2}`, `${lastNameNew2}`, `${emailNew2}`, `${passwordNew2}`, `${avatarNew2}`);
    // logout
    homePage.navigate();
    homePage.logout();
    // re - login after edition
    loginPage.navigate();
    loginPage.login(`${emailNew2}`, `${passwordNew2}`);
});
  
it("Test3: should login user3", () => {
    //create user
    userCreate.navigate();
    userCreate.register(`${firstName3}`, `${lastName3}`, `${email3}`, `${password3}`);
    // login
    loginPage.navigate();
    loginPage.login(`${email3}`, `${password3}`);
    // user profile
    homePage.myProfile();
    // edit profile
    profile.editProfile();
    profile.editWithPassword(`${firstNameNew3}`, `${lastNameNew3}`, `${emailNew3}`, `${passwordNew3}`, `${avatarNew3}`);
  // logout
    homePage.navigate();
    homePage.logout();
    // re - login after edition
    loginPage.navigate();
    loginPage.login(`${emailNew3}`, `${passwordNew3}`);
});
    afterEach('delete user', ()=> {
  // delete user
  homePage.navigate();
  homePage.deleteUser();
});
});
    