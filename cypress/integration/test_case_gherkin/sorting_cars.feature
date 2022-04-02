Feature: To test the sorting functionality

    Scenario: To verify that the application responds with appropriate result based on sorting order
        Given the user is in homepage
        When user navigates to all cars page
        And user clicks on sort button
        And user clicks on "Highest Price/Rate" option
        Then application should display cars having highest car price first
        When user clicks on sort button
        And user clicks on "Top Performance"
        Then application should display cars having highest car performance first