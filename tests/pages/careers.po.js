const { until } = require('protractor');
const { BasePage } = require('./base.po');

class Careerspage extends BasePage {
    constructor(url) {
        super(url);
        this.keywordBut = by.xpath('//*[@id="new_form_job_search_1445745853_copy-keyword"]');
        this.findBut = by.xpath('/html/body/div[2]/main/div[1]/div[2]/section/div[2]/div[4]/div/section/form/button');
        this.result = by.css('.search-result__item');
        this.logo = by.xpath('/html/body/div[2]/div[2]/div[2]/div/div/header/div/a');
    }
    async getResultAmount() {
        return await element.all(this.result).count();
    }

    async clickFind() {
        await this.click(this.findBut);
        await browser.wait(() => until.elementLocated(this.result), 2000);
    }

    async clickHomepage() {
        await this.click(this.logo);
        await browser.sleep(1000);
    }
}

module.exports = { Careerspage };