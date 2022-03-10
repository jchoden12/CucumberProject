$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("TecgfiosLogin.feature");
formatter.feature({
  "line": 1,
  "name": "Techfios bank and cash New Account Functionality",
  "description": "",
  "id": "techfios-bank-and-cash-new-account-functionality",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "User should be able to login with valid credentials and open a new account",
  "description": "",
  "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials-and-open-a-new-account",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@scenarioHW"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User is on the techfios login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User enters the \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enters the password \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User clicks on login",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User should land on Dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User clicks on bankCash",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User clicks on newAccount",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User enters accountTitle \"\u003caccountTitle\u003e\" in accounts page",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User enters description \"\u003cdescription\u003e\" in accounts page",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User enters initialBalance \"\u003cinitialBalance\u003e\" in accounts page",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User enters accountNumber \"\u003caccountNumber\u003e\" in accounts page",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User enters contactPerson \"\u003ccontactPerson\u003e\" in accounts page",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User enters Phone \"\u003cPhone\u003e\" in accounts page",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User enters internetBankingURL \"\u003cinternetBankingURL\u003e\" in accounts page",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User clicks on submitButton",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User clicks on newAccount",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User should be able to validate account created successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 23,
  "name": "",
  "description": "",
  "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials-and-open-a-new-account;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "accountTitle",
        "description",
        "initialBalance",
        "accountNumber",
        "contactPerson",
        "phone",
        "internetBankingURL"
      ],
      "line": 24,
      "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials-and-open-a-new-account;;1"
    },
    {
      "cells": [
        "demo@techfios.com",
        "abc123",
        "Serra",
        "Lalala",
        "500",
        "25252525",
        "PeterS",
        "258125110",
        "xyz@nybanking.com"
      ],
      "line": 25,
      "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials-and-open-a-new-account;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 25,
  "name": "User should be able to login with valid credentials and open a new account",
  "description": "",
  "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials-and-open-a-new-account;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@scenarioHW"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User is on the techfios login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User enters the \"demo@techfios.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enters the password \"abc123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User clicks on login",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User should land on Dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User clicks on bankCash",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User clicks on newAccount",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User enters accountTitle \"Serra\" in accounts page",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User enters description \"Lalala\" in accounts page",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User enters initialBalance \"500\" in accounts page",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User enters accountNumber \"25252525\" in accounts page",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User enters contactPerson \"PeterS\" in accounts page",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User enters Phone \"\u003cPhone\u003e\" in accounts page",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User enters internetBankingURL \"xyz@nybanking.com\" in accounts page",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User clicks on submitButton",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User clicks on newAccount",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User should be able to validate account created successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "TechfiosStepDefination.user_is_on_the_techfios_login_page()"
});
formatter.result({
  "duration": 3663308700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "demo@techfios.com",
      "offset": 17
    }
  ],
  "location": "TechfiosStepDefination.user_enters_username_as(String)"
});
formatter.result({
  "duration": 3082260700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 26
    }
  ],
  "location": "TechfiosStepDefination.user_enters_password(String)"
});
formatter.result({
  "duration": 3061082400,
  "status": "passed"
});
formatter.match({
  "location": "TechfiosStepDefination.User_clicks_on_login_button()"
});
formatter.result({
  "duration": 4848587000,
  "status": "passed"
});
formatter.match({
  "location": "TechfiosStepDefination.user_should_land_on_Dashboard_page()"
});
formatter.result({
  "duration": 2952200,
  "status": "passed"
});
formatter.match({
  "location": "TechfiosStepDefination.user_clicks_on_bankCash()"
});
formatter.result({
  "duration": 43789800,
  "status": "passed"
});
formatter.match({
  "location": "TechfiosStepDefination.user_clicks_on_newAccount()"
});
formatter.result({
  "duration": 555960000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Serra",
      "offset": 26
    }
  ],
  "location": "TechfiosStepDefination.user_enters_accountTitle(String)"
});
formatter.result({
  "duration": 3065750000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Lalala",
      "offset": 25
    }
  ],
  "location": "TechfiosStepDefination.user_enters_description(String)"
});
formatter.result({
  "duration": 3067183600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "500",
      "offset": 28
    }
  ],
  "location": "TechfiosStepDefination.user_enters_initialBalance(String)"
});
formatter.result({
  "duration": 3067290200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "25252525",
      "offset": 27
    }
  ],
  "location": "TechfiosStepDefination.user_enters_accountNumber(String)"
});
formatter.result({
  "duration": 3112787700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "PeterS",
      "offset": 27
    }
  ],
  "location": "TechfiosStepDefination.user_enters_contactPerson(String)"
});
formatter.result({
  "duration": 3073043500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cPhone\u003e",
      "offset": 19
    }
  ],
  "location": "TechfiosStepDefination.user_enters_phone(String)"
});
formatter.result({
  "duration": 54651300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "xyz@nybanking.com",
      "offset": 32
    }
  ],
  "location": "TechfiosStepDefination.user_enters_internetBankingURL(String)"
});
formatter.result({
  "duration": 48681900,
  "status": "passed"
});
formatter.match({
  "location": "TechfiosStepDefination.user_clicks_on_submitButton()"
});
formatter.result({
  "duration": 4274789300,
  "status": "passed"
});
formatter.match({
  "location": "TechfiosStepDefination.user_clicks_on_newAccount()"
});
formatter.result({
  "duration": 591997200,
  "status": "passed"
});
formatter.match({
  "location": "TechfiosStepDefination.user_should_be_able_to_validate_account_created_successfully()"
});
formatter.result({
  "duration": 667150300,
  "status": "passed"
});
});