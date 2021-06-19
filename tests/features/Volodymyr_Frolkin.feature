Feature: EPAM website
  Testing functionality of different pages

  Scenario: Changing language to indian
    Given I am on english version of home page
    When I select indian language in navbar
    Then Page reloads on indian version


  Scenario: Going to Insights page
    Given I am on the Home page
    When I click on Insights button inside navbar
    Then I go to Insights page

  Scenario: Going to Contacts page
    Given I am on the Home page
    When I find and click on Contact Us button
    Then I go to Contacts page


  Scenario: Searching developer vacancy
    Given I am on Careers page
    When I enter developer into search fields
    Then I see avaliable vacancies


  Scenario: Searching for test phrase
    Given I am on the Home page
    When I click on search button and enter test
    Then I get a search result


  Scenario: Coming back to home page from careers by clicking on logo
    Given I am on Careers page
    When I click on epam logo
    Then I go to epam home page


  Scenario: Button change color on hover
    Given I am on the Home page
    When I drag mouse to the button
    Then Button color changed


  Scenario: Five services presents on services page
    Given I am on the Service page
    When Scroll to services block
    Then Five avaliable service presents