import {ElementFinder, element, by} from 'protractor';
import protractor = require('protractor');
import {ElementArrayFinder} from "protractor";

export class loginPages {
    private loginButton : ElementArrayFinder;
    private usernameBox: ElementFinder;
    private passwordBox: ElementFinder;
    private buttonLogin: ElementFinder;

    constructor () {
        this.loginButton = element.all(by.css(".header-top-bar__item")).get(4);
        this.usernameBox = element(by.css(".required-entry"));
        this.passwordBox = element(by.css(".validate-password"));
        this.buttonLogin = element(by.buttonText("Logowanie"));
    }
    loginClick (): protractor.promise.Promise<void> {
        return this.loginButton.click();
    }
    loginAction(login: string, password:string): protractor.promise.Promise<void>{
        this.usernameBox.sendKeys(login);
        this.passwordBox.sendKeys(password);
        return this.buttonLogin.click();
    }
}