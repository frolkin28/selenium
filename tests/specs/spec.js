const { Given, Then, When, setDefaultTimeout } = require('@cucumber/cucumber');
const { expect } = require('chai');

const { Homepage } = require('../pages/homepage.po');
const { Careerspage } = require('../pages/careers.po');
const { Servicespage } = require('../pages/services.po');

setDefaultTimeout(60 * 1000);

const Home = new Homepage('https://www.epam.com');
const Careers = new Careerspage('https://www.epam.com/careers');
const Services = new Servicespage('https://www.epam.com/services');

// ==== Scenario 1

Given('I am on english version of home page', async function () {
    await Home.getPage();
    await Home.click(Home.acceptcookBut);
});


When('I select indian language in navbar', async function () {
    await Home.ChangeLang();
});

Then('Page reloads on indian version', async function () {
    const in_url = await Home.getCurrentUrl();
    expect(in_url).to.be.contains('in');
    await Home.close();
});


// ==== Scenario 2

Given('I am on the Home page', async function () {
    await Home.getPage();
    await Home.click(Home.acceptcookBut);
});


When('I click on Insights button inside navbar', async function () {
    await Home.goInsights();
});


Then('I go to Insights page', async function () {
    const insights_url = await Home.getCurrentUrl();
    expect(insights_url).to.be.equals('https://www.epam.com/insights');
    await Home.close();
});


// ===== Scenario 3

When('I find and click on Contact Us button', async function () {
    await Home.click(Home.contactBut);
});


Then('I go to Contacts page', async function () {
    const contact_url = await Home.getCurrentUrl();
    expect(contact_url).to.be.equals('https://www.epam.com/about/who-we-are/contact');
    await Home.close();
});


// === Scenario 4

Given('I am on Careers page', async function () {
    await Careers.getPage();
});

When('I enter developer into search fields', async function () {
    await Careers.sendKey('Developer', Careers.keywordBut);
    await Careers.clickFind(Careers.findBut);
});

Then('I see avaliable vacancies', async function () {
    const result = await Careers.getResultAmount();
    expect(result).to.be.gte(0);
    await Home.close();
});


// ==== Scenario 5


When('I click on search button and enter test', async function () {
    await Home.search("test");
});


Then('I get a search result', async function () {
    const result = await Home.getSearchResultCount();
    expect(result).to.be.gte(0);
    await Home.close();
});


// ===== Scenatio 6

When('I click on epam logo', async function () {
    // await browser.sleep(100000);
    await Careers.clickHomepage();
});

Then('I go to epam home page', async function () {
    const cur_url = await Careers.getCurrentUrl();
    expect(cur_url).to.be.equals('https://www.epam.com/');
    await Home.close();
});


// === Scenario 7


When('I drag mouse to the button', async function () {
    await Home.moveToContactUs();
});


Then('Button color changed', async function () {
    const color = await Home.getButtonColor();
    expect(color).to.be.equals('rgba(255, 255, 255, 1)');
    await Home.close();
});


// === Scenario 8

Given('I am on the Service page', async function () {
    await Services.getPage();
});



When('Scroll to services block', async function () {
    await Services.scrollTo();
});


Then('Five avaliable service presents', async function () {
    const servicesAmount = await Services.getServicesAmount();
    expect(servicesAmount).to.be.equals(5);
    await Services.close();
});