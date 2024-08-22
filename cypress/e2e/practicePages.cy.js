import { StartPage } from "../pages/StartPage";

const startPage = new StartPage();

describe("Go to Practice pages GAD POP", () => {

 beforeEach('Go to Practice pages GAD', () => {
        startPage.navigate();
});  
  
it("Test1: Go to Practice pages without login", () => {
    startPage.practicePages();
});
});