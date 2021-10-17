const {Given, When, Then} = require('@wdio/cucumber-framework');

const fixturePage = require('../pages/fixtures.page');
const loginPage = require('../pages/login.page');

Given(/^I am on the BBC (sign-in|scores-fixtures) page$/, async (page) => {
    await fixturePage.launchUrl();
    if (page === "sign-in")
        await fixturePage.selectSignInButton();
});

When(/^I login with (.*) and (.*)$/, async (username, password) => {
    await loginPage.login(username, password);
});

Then(/^I should see an error (.*) on (.*)$/, async (errorMessage, inputField) => {
    await loginPage.validateErrorMessage(errorMessage, inputField);
});
