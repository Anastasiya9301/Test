import protractor = require('protractor');
import {ElementFinder, element, by, } from 'protractor';
import {ElementArrayFinder} from "protractor";

    export class dzieciecePages {
        private dziecieceButton: ElementArrayFinder;
        private selectFirstProduct: ElementFinder;
        private sizeDziecieceOpen: ElementArrayFinder;
        private sizeDziecieceSelect: ElementArrayFinder;
        private addToBasketDziecieceButton: ElementFinder;
       private deleteProduct: ElementArrayFinder;
       private deleteOtherProduct : ElementArrayFinder;
       private logeOut : ElementArrayFinder;

        constructor() {
            this.dziecieceButton = element.all(by.css(".megamenu__item-link")).get(2);
            this.selectFirstProduct = element(by.css(".products-list__name-first"));
            this.sizeDziecieceOpen = element(by.css(".select2-selection__arrow"));
            this.sizeDziecieceSelect = element(by.css(".select2-results__option"));
            this.addToBasketDziecieceButton = element(by.id("product-addtocart-button"));
            this.deleteProduct = element.all(by.css(".cart-item__remove")).get(1);
            this.deleteOtherProduct = element.all(by.css(".cart-item__remove"));
            this.logeOut        = element.all(by.css(".header-top-bar__item")).get(6);
        }


        dziecieceClick(): protractor.promise.Promise<void> {
            return this.dziecieceButton.click();
        }

        selectFirstClick(): protractor.promise.Promise<void> {
            return this.selectFirstProduct.click();
        }

        sizeDzieciezeClick(): protractor.promise.Promise<void> {
            return this.sizeDziecieceOpen.click();
        }

        sizeDziecieceClick(): protractor.promise.Promise<void> {
            return this.sizeDziecieceSelect.click();
        }

        addToDziecieceButtonClick(): protractor.promise.Promise<void> {
            return this.addToBasketDziecieceButton.click();
        }

        deleteClick(): protractor.promise.Promise<void> {
            return this.deleteProduct.click();
        }
        deleteOtherClick(): protractor.promise.Promise<void> {
            return this.deleteOtherProduct.click();
        }
        logeOutClick(): protractor.promise.Promise<void> {
            return this.logeOut.click();
        }
    }
