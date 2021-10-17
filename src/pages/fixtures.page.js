const fixturesLocators = require('../locators/fixturesLocators');
const articlesLocators = require('../locators/articlesLocators');
const assert = require("assert");
const {config} = require('../../wdio.conf');

class FixturesPage {

    async launchUrl() {
        await browser.url(config.baseUrl);
        await expect(browser).toHaveTitle('Scores & Fixtures - Football - BBC Sport');
    }

    async selectSignInButton() {
        console.log('inside selectSignInButton');
        const myElem = await $(fixturesLocators.Sign_In_Link)
        await myElem.click();
        await expect(browser).toHaveTitle('BBC – Sign in');
    }

    async displayAllTeamNamesWithMatchToday() {
        const matches = await $$(fixturesLocators.Team_Name_Span)
        if (matches.length === 0) {
            console.log('No matches for today!!');
        } else {
            for (const match of matches) {
                console.log('match==> ', await match.index);
                console.log('text==>', await match.getText());
            }
        }
    }

    async searchArticles(searchKeyword) {
        const myElem = await $(fixturesLocators.Search_Input)
        await myElem.setValue(searchKeyword);
        await $(articlesLocators.Search_Button).click();
    }
}

module.exports = new FixturesPage();
