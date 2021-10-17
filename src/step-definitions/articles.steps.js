const {Given, When, Then} = require('@wdio/cucumber-framework');

const fixturePage = require('../pages/fixtures.page');
const articlesPage = require('../pages/articles.page');

Given(/^I search all articles related to (.*)$/, async (searchKeyword) => {
    console.log('searchKeyword', searchKeyword);
    await fixturePage.searchArticles(searchKeyword);
    await articlesPage.verifyArticlesSearchResult();

});

When(/^I should see the first and last headings of the sports news page$/, async () => {
    await articlesPage.displayFirstAndLastHeading();
});
