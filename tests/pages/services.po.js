const { BasePage } = require('./base.po');

class Servicespage extends BasePage {
    constructor(url) {
        super(url);
        this.block = by.xpath('/html/body/div[2]/main/div[1]/div[2]/section/div[2]/div/div');
        this.servicesItem = by.css('.rollover-tiles__block');
    }

    async scrollTo() {
        await browser.executeScript("scroll(0,400)");
    }

    async getServicesAmount() {
        return await element.all(this.servicesItem).count();
    }
}

module.exports = { Servicespage };