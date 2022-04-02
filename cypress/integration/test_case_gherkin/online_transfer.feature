# Implementation for this test case is provided
Feature: To test online transfer feature

    Scenario: To verify that user is able to place online transfer option successfully
        Given the user is in homepage
        When user searches for a car with brand "Audi" and model "A1"
        And sorting the car based upon lowest price in ascending order
        And click on start request button on the first car displayed in the list
        And filling request form and submitting it
            | phoneNumber | firstName | lastName | email                | tradeCar | howyouknowUs | modeOfCommunication |
            | 7689547321  | test      | user     | testuser@yopmail.com | 2        | Facebook     | email               |
        Then application should display a pop up with message as "Deine Nachricht wurde erfolgreich gesendet"