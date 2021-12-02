@ProductTest
Feature: Products Add to cart test

  Background: Open login page
    Given User has opened swaglabs web application

  @Regression @Sanity
  Scenario Outline: User is able to add product on product page
    When User has entered correct "<Username>" and "<Password>"
    And User click on Login Button
    Then Validating if that user has been  navigated to product and click on add product "<Product>"
    Then Validating if that user has added a product to product page

    Examples: 
      | Username      | Password     | Product             |
      | standard_user | secret_sauce | Sauce Labs Backpack |
