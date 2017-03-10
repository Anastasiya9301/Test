import protractor = require("protractor");
import {browser, element, by, By, $, $$, ExpectedConditions} from 'protractor';
import {loginPages} from "./pageObjects/loginPage";
import {damskiePages} from "./pageObjects/damskiePage";
import {dzieciecePages} from "./pageObjects/dzieciecePage";
import {passwordWrongs} from "./pageObjects/user2";

describe("protractor with typescript typings", () => {
  beforeEach(() => {
    browser.get("https://www.eobuwie.com.pl/");

  });

  it(" metoda obiektu LoginPage", () => {
          browser.ignoreSynchronization = true;
          let loginPage = new loginPages();
          loginPage.loginClick();
          loginPage.loginAction(browser.params.user.username, browser.params.user.password);
  });

  it("metoda obiektu damskiePage", () =>{
      browser.ignoreSynchronization = true;
          let damskiePage = new damskiePages();
          damskiePage.damskiePageClick();
          damskiePage.shoeDetailsClick();
          damskiePage.sizeClick();
          damskiePage.sizeFirstClick();
          damskiePage.cookieNoticeClick();
          browser.sleep(1000);
          damskiePage. addButtonClick();
          browser.sleep(2000);
  });
    it("metoda obiektu dzieciecePage", () =>{
        browser.ignoreSynchronization = true;
        let dzieciecePage = new dzieciecePages();
        dzieciecePage.dziecieceClick();
        dzieciecePage.selectFirstClick();
        dzieciecePage.sizeDzieciezeClick();
        dzieciecePage.sizeDziecieceClick();
        dzieciecePage.addToDziecieceButtonClick();
        dzieciecePage.deleteClick();
        dzieciecePage.deleteOtherClick();
        dzieciecePage.logeOutClick();
        browser.sleep(2000);
    });
//     it ("metoda obiektu lastPage",() =>{
//        browser.ignoreSynchronization = true;
//        let lastPage = new lastPages();
//        lastPage.deleteClick();
//        lastPage.deleteOtherClick();
//        lastPage.logeOutClick();
//        })


    it(" metoda obiektu userEmpty", () => {
        browser.ignoreSynchronization = true;
        let passwordWrong = new passwordWrongs();
        passwordWrong.loginClick();
        passwordWrong.loginAction(browser.params.user2.username, browser.params.user2.password);
        browser.sleep(2000)
    });
});
