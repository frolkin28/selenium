const { BasePage } = require('./base.po');
const { until } = require('protractor');

class Homepage extends BasePage {
    constructor(url) {
        super(url);

        this.acceptcookBut = by.xpath('/html/body/div[1]/div[1]/div/div/div[2]/button');

        this.langBut = by.xpath('//*[@id="wrapper"]/div[2]/div[1]/header/div/ul/li[2]/div/button');
        this.inLang = by.xpath('/html/body/div[2]/div[2]/div[1]/header/div/ul/li[2]/div/nav/ul/li[2]/a');

        this.insightsBut = by.xpath('/html/body/div[2]/div[2]/div[1]/header/div/nav/ul/li[4]/span/a');

        this.magglassBut = by.xpath('//*[@id="wrapper"]/div[2]/div[1]/header/div/ul/li[3]/div/button');
        this.contactBut = by.xpath('/html/body/div[2]/main/div[1]/div[8]/section/div[2]/div[3]/div/a/span[1]');
        // this.HWDIBut = by.xpath('//*[@id="wrapper"]/div[2]/div[1]/header/div/nav/ul/li[2]/span/a');
        // this.ourworkBut = by.xpath('//*[@id="wrapper"]/div[2]/div[1]/header/div/nav/ul/li[3]');


        this.lookforStr = by.id("new_form_search");
        this.findBut = by.xpath('//*[@id="wrapper"]/div[2]/div[1]/header/div/ul/li[3]/div/div/form/button');
        this.result = by.css('.search-result__item');
        this.contactUsColor = 'rgb(118, 205, 216)';
        this.contactUs = by.xpath('/html/body/div[2]/div[2]/div[1]/header/div/ul/li[1]/a');
        // this.search_resDiv = by.xpath('//*[@id="main"]/div[1]/div/section/div/div[2]/section/div[1]');

        // this.dotBut = by.className('slider__dot bg-color-white');
        // this.learnmoreBut = by.xpath('//*[@id="main"]/div[1]/div[2]/section/div/div/div/div[1]/div/div[6]/div/div/div/div/div/div/div/div/div/div[3]/div/a');
    }

    async AcceptCookies() {
        await browser
            .findElement(this.acceptcookBut)
            .click();
    }

    async ChangeLang() {
        await browser.findElement(this.langBut).click();

        await browser.wait(() => until.elementLocated(this.inLang), 1000);

        await browser.findElement(this.inLang).click()

        await browser.sleep(2000); // wait for new page to load

    }

    async goInsights() {
        await browser
            .findElement(this.insightsBut)
            .click();
    }

    async search(word) {
        await browser.findElement(this.magglassBut).click();
        await browser.findElement(this.lookforStr).sendKeys(word);
        await browser.findElement(this.findBut).click();
        await browser.wait(() => until.elementLocated(this.result), 2000);

    }

    async getSearchResultCount() {
        return await element.all(this.result).count();
    }

    async clickOnInstagram() {
        await browser.findElement(this.insta).click();
        await browser.sleep(3000);
    }

    async moveToContactUs() {
        this.el = await element(this.contactUs);
        await browser.actions().mouseMove(this.el);
        // await browser.sleep(10000);
    }

    async getButtonColor() {
        return await this.el.getCssValue('color');
    }


}

module.exports = { Homepage };