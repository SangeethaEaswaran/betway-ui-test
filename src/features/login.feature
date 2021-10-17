Feature: As a QA, I would like to verify all negative scenarios for login

  Scenario Outline: Select ‘Sign in’, and enter as many negative scenarios as possible. Verify that a error message is displayed and the text that it contains is as expected.
    Given I am on the BBC sign-in page
    When I login with <username> and <password>
    Then I should see an error <message> on <input>
    Examples:
      | username           | password               | input    | message                                                                                               |
      | svps297@gmail.com1 | S@SuperSecretPassword! | username | Sorry, we can’t find an account with that email. You can register for a new account or get help here. |
      | tomsmith           |                        | password | Something's missing. Please check and try again.                                                      |
      |                    | SuperSecretPassword!   | username | Something's missing. Please check and try again.                                                      |
      | a@b.c              | password@123!          | username | Sorry, that email doesn’t look right. Please check it's a proper email.                               |
      | tomsmith           | !@£$%^&*!%()           | password | Sorry, that password isn't valid. Please include a letter.                                            |
      | tomsmith           | 12345678               | password | Sorry, that password isn't valid. Please include a letter.                                            |
      | tomsmith           | Sup                    | password | Sorry, that password is too short. It needs to be eight characters or more.                           |
#     | tomsmith | SuperSecretPassword! | accountLocked | Sorry, your account is locked|
#      | svps297@gmail.com | SuperSecretPassword! | password |That's not the right password for that account|

