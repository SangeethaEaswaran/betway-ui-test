const { Then } = require('@wdio/cucumber-framework');

const fixturePage = require('../pages/fixtures.page');

Then(/^I should see all the team names with a match today$/, async () => {
    await fixturePage.displayAllTeamNamesWithMatchToday();
});

