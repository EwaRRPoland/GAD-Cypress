import { Login } from "../pages/Login";
import { CreateUser, Users } from "../pages/Users";

const loginPage = new Login();
const userCreate = new CreateUser();

describe("Testing creating new user POP", () => {

beforeEach('Go to page GAD register', () => {
        userCreate.navigate();
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
    
 it("Test1: should register user1", () => {
    // create user1
     userCreate.register(`${firstName1}`, `${lastName1}`, `${email1}`, `${password1}`);

 });
    it("Test2: should register user2", () => {
    // create user2
     userCreate.register(`${firstName2}`, `${lastName2}`, `${email2}`, `${password2}`);

    });
    it("Test3: should register user3", () => {
    // create user3
     userCreate.register(`${firstName3}`, `${lastName3}`, `${email3}`, `${password3}`);

 });
});