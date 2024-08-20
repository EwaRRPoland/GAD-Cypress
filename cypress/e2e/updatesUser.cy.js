import { Login } from "../pages/Login";
import { HomePage } from "../pages/HomePage";
import { Profile } from "../pages/Profile";

const loginPage = new Login();
const homePage = new HomePage();
const profile = new Profile();

describe("Edit profile user POP", () => {

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
    
    // userNew1
    const firstNameNew1='Angelikax';
    const lastNameNew1='Wolakx';
    const emailNew1='drabina@zoo.plx';
    const passwordNew1 = 'flipiflapx';
    const avatarNew1 = '123.jpg';
    
    // userNew2
    const firstNameNew2='Olax';
    const lastNameNew2='Wolakx';
    const emailNew2='wiadro@zoo.plx';
    const passwordNew2 = '789987x';
    const avatarNew2 = '124.jpg';
    
    // userNew3
    const firstNameNew3='Adamx';
    const lastNameNew3='Japanx';
    const emailNew3='parasol@zoo.plx';
    const passwordNew3 = '123321x';
    const avatarNew3 = '125.jpg';
    
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
    