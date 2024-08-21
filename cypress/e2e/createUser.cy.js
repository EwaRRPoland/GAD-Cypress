import { Login } from "../pages/Login";
import { CreateUser, Users } from "../pages/Users";
// data users
import { firstName1, lastName1, email1, password1 } from '../support/data/dataUsers';
import { firstName2, lastName2, email2, password2 } from '../support/data/dataUsers';
import { firstName3, lastName3, email3, password3 } from '../support/data/dataUsers';

const loginPage = new Login();
const userCreate = new CreateUser();

describe("Testing creating new user POP", () => {

beforeEach('Go to page GAD register', () => {
        userCreate.navigate();
});
    
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