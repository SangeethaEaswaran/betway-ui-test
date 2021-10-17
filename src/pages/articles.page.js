const articlesLocators = require('../locators/articlesLocators');
const assert = require("assert");
const {config} = require('../../wdio.conf');

class ArticlesPage {

    async verifyArticlesSearchResult() {
        console.log('inside verifyArticlesResult');
        const searchResults = await $(articlesLocators.Search_Results_List);
        await searchResults.isExisting();
        await searchResults.isDisplayed();
    }

    async displayFirstAndLastHeading() {
        console.log('inside displayFirstAndLastHeading');
        let firstHeading, lastHeading;
        const searchResults = await $$(articlesLocators.Search_Results_List);
        const searchResultsLength = searchResults.length;
        for (const elem of searchResults) {
            if (elem.index === 0) {
                firstHeading = await elem.getText();
                continue;
            }
            if (elem.index === (searchResultsLength - 1)) {
                lastHeading = await elem.getText();
                continue;
            }
        }
        console.log('First news heading  ==>', firstHeading);
        console.log('Last news heading ==> ', lastHeading);
    }
}

module.exports = new ArticlesPage();
