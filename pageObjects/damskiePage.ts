import {ElementFinder, element, by, } from 'protractor';
import protractor = require('protractor');
import {ElementArrayFinder} from "protractor";

    export class damskiePages {

        private firstProdukt: ElementArrayFinder;
        private shoeButton: ElementArrayFinder;
        private sizeOpen: ElementFinder;
        private sizeSelect: ElementArrayFinder;
        private cookieNoticeClose : ElementFinder;
        private addToBasketButton : ElementFinder;


        constructor() {
            this.firstProdukt        = element.all(by.css(".megamenu__item")).get(0);
            this.shoeButton          = element.all(by.css(".products-list__link")).get(0);
            this.sizeOpen            = element(by.css(".select2-selection__arrow"));
            this.sizeSelect          = element(by.css(".select2-results__option"));
            this.cookieNoticeClose   = element(by.css(".cookienotice__close"));
            this.addToBasketButton   = element(by.id("product-addtocart-button"));

        }

        damskiePageClick(): protractor.promise.Promise<void> {
            return this.firstProdukt.click();
        }

        shoeDetailsClick(): protractor.promise.Promise<void> {
            return this.shoeButton.click();
        }

        sizeClick(): protractor.promise.Promise<void> {
            return this.sizeOpen.click();
        }

        sizeFirstClick(): protractor.promise.Promise<void> {
            return this.sizeSelect.click();
        }
        cookieNoticeClick(): protractor.promise.Promise<void> {
            return this.cookieNoticeClose.click();
        }
        addButtonClick(): protractor.promise.Promise<void> {
            return this.addToBasketButton.click();
    }
    }