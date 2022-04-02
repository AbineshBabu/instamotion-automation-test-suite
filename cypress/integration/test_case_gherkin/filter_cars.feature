# Implementation for this test case is provided
Feature: To test the filter functionality

    Scenario: To verify that the application responds with appropirate result based on filter conditions
        Given the user is in homepage
        When user navigates to all cars page
        And filtering cars based upon conditions
            | brand | model | vehicle_type | status         | price_from | price_until | registration_from | registration_until | kilometer_from | kilomter_until | fuel   | performance_from | performance_until | circuit   | doors    | seat | emission_class | exterior_colour | interior_colour |
            | Audi  | A1    | Kleinwagen   | Gebrauchtwagen | 10 €       | 200 €       | 2017              | 2021               | 5.000 km       | 45.000 km      | Benzin | 20 PS            | 160 PS            | Automatik | Beliebig | 5    | Euro 6         | Blau            | Schwarz         |
        And click on search button and clicking on the first car displayed in the list
        Then application should display price range
            | price_from | price_until |
            | 10 €       | 200 €       |
        And application should display kilometer range
            | kilometer_from | kilometer_until |
            | 5.000 km       | 45.000 km       |
        And application should display performance range
            | performance_from | performance_until |
            | 20 PS            | 160 PS            |
        And application should display fuel type
            | fuel   |
            | Benzin |
        And application should display circuit
            | circuit   |
            | Automatik |

