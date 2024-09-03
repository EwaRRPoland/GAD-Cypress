import { Login } from "../../pages/Login";
import { HomePage } from "../../pages/HomePage";
// data users

import { user1Data } from '../../support/data/apiDataUsers';
import { user2Data } from '../../support/data/apiDataUsers';
import { user3Data } from '../../support/data/apiDataUsers';

const loginPage = new Login();
const homePage = new HomePage();

describe("Testing user deletion POP", () => {

beforeEach('Go to page GAD login', () => {
        loginPage.navigate();
});
  
// it("Test1: should delete user1", () => {
//     // login
//     loginPage.login(`${user1Data.email}`, `${user1Data.password}`);
//   });

// it("Test2: should delete user2", () => {
//     // login
//     loginPage.login(`${user2Data.email}`, `${user2Data.password}`);
// });
  
// it("Test3: should delete user3", () => {
//     // login
//     loginPage.login(`${user3Data.email}`, `${user3Data.password}`);
// });
    
    
    // it("Test4: should delete user3", () => {
    // // login
    // loginPage.login(`${user1DataPATCH.email}`, `${user1DataPATCH.password}`);
    // });
    // it("Test5: should delete user3", () => {
    // // login
    // loginPage.login(`${user2DataPATCH.email}`, `${user2DataPATCH.password}`);
    // });
    it("Test6: should delete user3", () => {
    // login
    loginPage.login(`${user3DataPATCH.email}`, `${user3DataPATCH.password}`);
});
  
afterEach('delete user', ()=> {
    homePage.deleteUser();
  })
});