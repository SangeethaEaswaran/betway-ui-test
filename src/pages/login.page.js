const loginLocators = require('../locators/loginLocators');
const assert = require("assert");

class LoginPage {

    async login(username, password) {
        await $(loginLocators.Username_Input_Type).setValue(username);
        await $(loginLocators.Password_Input_Type).setValue(password);
        await $(loginLocators.Sign_In_Button).click();
    }

    async validateErrorMessage(errorMessage, inputField) {
        let errorSpan;
        switch (inputField) {
            case "username":
                errorSpan = await $(loginLocators.Username_Error_Message_Span);
                break;
            case "password":
                errorSpan = await $(loginLocators.Password_Error_Message_Span);
                break;
        }
        await errorSpan.isExisting();
        await errorSpan.isDisplayed();
        await expect(errorSpan).toHaveText(errorMessage);
    }

    async validateAccountLockedMessage(errorMessage, inputField) {
        let errorSpan;
        switch (inputField) {
            case "username":
                errorSpan = await $(loginLocators.Username_Error_Message_Span);
                break;
            case "password":
                errorSpan = await $(loginLocators.Password_Error_Message_Span);
                break;
        }
        await errorSpan.isExisting();
        await errorSpan.isDisplayed();
        await expect(errorSpan).toHaveText(errorMessage);
    }

}

module.exports = new LoginPage();
