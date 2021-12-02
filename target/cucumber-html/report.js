$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/feature/Login.feature");
formatter.feature({
  "name": "Swag Lab Test",
  "description": "  I want to use this template for my feature file",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@TestFeatures"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Positive Login Functionality",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "User has opened swaglabs web application",
  "keyword": "Given "
});
formatter.step({
  "name": "User has entered correct \"\u003cUsername\u003e\" and \"\u003cPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User click on Login Button",
  "keyword": "And "
});
formatter.step({
  "name": "Validating if that user has been  navigated to product page",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Username",
        "Password"
      ]
    },
    {
      "cells": [
        "standard_user",
        "secret_sauce"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Positive Login Functionality",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TestFeatures"
    },
    {
      "name": "@Regression"
    },
    {
      "name": "@Sanity"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User has opened swaglabs web application",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefs.user_has_opened_swaglabs_web_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has entered correct \"standard_user\" and \"secret_sauce\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDefs.user_has_entered_correct_something_and_something(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Login Button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefs.user_click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Validating if that user has been  navigated to product page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefs.validating_if_that_user_has_been_navigated_to_product_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Negative Login Functionality",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "User has opened swaglabs web application",
  "keyword": "Given "
});
formatter.step({
  "name": "User has entered wrong \"\u003cUsername\u003e\" and \"\u003cPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User click on Login Button",
  "keyword": "And "
});
formatter.step({
  "name": "Validating if that user has been  getting as \"\u003cError\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Username",
        "Password",
        "Error"
      ]
    },
    {
      "cells": [
        "locked_out_user",
        "random_pass",
        "Epic sadface: Username and password do not match any user in this service"
      ]
    },
    {
      "cells": [
        "problem_user",
        "random_pass",
        "Epic sadface: Username and password do not match any user in this service"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Negative Login Functionality",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TestFeatures"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User has opened swaglabs web application",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefs.user_has_opened_swaglabs_web_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has entered wrong \"locked_out_user\" and \"random_pass\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDefs.user_has_entered_wrong_something_and_something(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Login Button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefs.user_click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Validating if that user has been  getting as \"Epic sadface: Username and password do not match any user in this service\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefs.validating_if_that_user_has_been_getting_as_something(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Negative Login Functionality",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@TestFeatures"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User has opened swaglabs web application",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefs.user_has_opened_swaglabs_web_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has entered wrong \"problem_user\" and \"random_pass\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDefs.user_has_entered_wrong_something_and_something(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Login Button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefs.user_click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Validating if that user has been  getting as \"Epic sadface: Username and password do not match any user in this service\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefs.validating_if_that_user_has_been_getting_as_something(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/java/feature/product.feature");
formatter.feature({
  "name": "Products Add to cart test",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@ProductTest"
    }
  ]
});
formatter.scenarioOutline({
  "name": "User is able to add product on product page",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "User has entered correct \"\u003cUsername\u003e\" and \"\u003cPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User click on Login Button",
  "keyword": "And "
});
formatter.step({
  "name": "Validating if that user has been  navigated to product and click on add product \"\u003cProduct\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "Validating if that user has added a product to product page",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Username",
        "Password",
        "Product"
      ]
    },
    {
      "cells": [
        "standard_user",
        "secret_sauce",
        "Sauce Labs Backpack"
      ]
    }
  ]
});
formatter.background({
  "name": "Open login page",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User has opened swaglabs web application",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefs.user_has_opened_swaglabs_web_application()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User is able to add product on product page",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@ProductTest"
    },
    {
      "name": "@Regression"
    },
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "User has entered correct \"standard_user\" and \"secret_sauce\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDefs.user_has_entered_correct_something_and_something(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Login Button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefs.user_click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Validating if that user has been  navigated to product and click on add product \"Sauce Labs Backpack\"",
  "keyword": "Then "
});
formatter.match({
  "location": "ProductStepDefs.validating_if_that_user_has_been_navigated_to_product_and_click_on_add_product_something(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Validating if that user has added a product to product page",
  "keyword": "Then "
});
formatter.match({
  "location": "ProductStepDefs.validating_if_that_user_has_added_a_product_to_product_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});