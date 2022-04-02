Feature: To test the financing feature

    Scenario: To verify that the user is navigated to the financing site
        Given the user is in homepage
        When user searches for a car with brand "Audi" and model "A1"
        And sorting the car based upon lowest price in ascending order
        And click on start request button on the first car displayed in the list
        And filling request form and submitting it
            | salutation | firstName | lastName | email                | phoneNumber | tradeCar | businessCustomer |
            | Herr       | test      | user     | testuser@yopmail.com | 4657847654  | 2        | Facebook         |
        Then application should redirect the user to "https://instamotion.bankelf.de/apps/afos/kalkulation"