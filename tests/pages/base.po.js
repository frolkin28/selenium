class BasePage {
    constructor(url) {
        this.url = url;
    }

    async getPage() {
        await browser.waitForAngularEnabled(false);
        await browser.get(this.url);
        await browser.manage().window().maximize();
    }


    async getCurrentUrl() {
        return await browser.getCurrentUrl();
    }

    async click(element) {
        await browser.findElement(element).click();
    }

    async close() {
        await browser.close();
    }

    async sendKey(word, element) {
        await browser
            .findElement(element)
            .sendKeys(word);
    }

};

module.exports = { BasePage };