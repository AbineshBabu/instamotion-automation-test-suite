# Implementation for this test case is provided
Feature: To test the favourite feature

    Scenario: To verify that user is able to add, remove and re-add cars to the favourites list
        Given the user is in homepage
        When user navigates to all cars page
        And user clicks on favourite icon on first five cars
            |favouritesToAdd|
            |5|
        Then application should display the favourite count as "5"
        When user navigates to favourite tab
        And user removes cars from favourite list
            |favouritesToRemove|
            |2|
        Then application should display the favourite count as "3"
        When user click on add car button
        And user re-add cars to favourite list
            |favouritesToReadd|
            |1|
        Then application should display the favourite count as "4"