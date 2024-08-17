import { Login } from "../pages/Login";
import { CreateUser, Users } from "../pages/Users";

const loginPage = new Login();
const userCreate = new CreateUser();

describe("Testing creating new user POP", () => {

beforeEach('Go to page GAD register', () => {
        userCreate.navigate();
});
    
 it("Test1: should register with lamambadaLambada@gmail.com", () => {
    // create user1
     userCreate.register('Annaa', 'Labaa', 'lamambadaLambada@gmail.com', '1234567890');

 });
    it("Test2: should register with testowyqa@qa.team", () => {
    // create user2
     userCreate.register('Ola', 'Baa', 'testowyqa@qa.team', 'pierduleczka1258-8');

    });
    it("Test3: should register with helikopter56@gmail.com", () => {
    // create user3
     userCreate.register('Viola', 'Sass', 'helikopter56@gmail.com', '1232645897890');

 });
});