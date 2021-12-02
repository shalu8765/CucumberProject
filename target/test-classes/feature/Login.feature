@TestFeatures
Feature: Swag Lab Test
  I want to use this template for my feature file

  @Regression @Sanity
  Scenario Outline: Positive Login Functionality
    Given User has opened swaglabs web application
    When User has entered correct "<Username>" and "<Password>"
    And User click on Login Button
    Then Validating if that user has been  navigated to product page

    Examples: 
      | Username      | Password     |
      | standard_user | secret_sauce |

  @Regression
  Scenario Outline: Negative Login Functionality
    Given User has opened swaglabs web application
    When User has entered wrong "<Username>" and "<Password>"
    And User click on Login Button
    Then Validating if that user has been  getting as "<Error>"

    Examples: 
      | Username        | Password    | Error                                                                     |
      | locked_out_user | random_pass | Epic sadface: Username and password do not match any user in this service |
      | problem_user    | random_pass | Epic sadface: Username and password do not match any user in this service |