# Instamotion Automation Test Suite

A Cypress Automation Test Framework with Mocha to validate the critical business features of instamotion.com application.

## Table of contents

* Getting started
  * Prerequisites
  * Installation
  * Folder Structure
  
* How to run the tests
  * Test execution
  
### Prerequisites

- [Node.js](https://nodejs.org/) v14.15.5 - should be installed in the machine.


### Installation

 1) Clone the repository using below steps,

 ```sh
 git clone https://github.com/pravin3016/cypress-automation.git
 cd cypress-bdd-automation
 ```

 2) Install dependencies:

 ```sh
 npm install
 ```
 
### Folder Structure

- `fixtures` - To maintain the test/mock data.
- `integration` - To maintain all the test cases in Gherkin syntax and Mocha spec files. 
- `pageobjects` - To maintain page elements and page actions.
- `plugins` - To maintain the events listeners. Logs the events.
- `support` - To maintain reusable scripts.
- `utility` - To maintain helper functions.
- `cypress.json` - Cypress configurations. Override default values

## How to run the tests

  ### Test execution
 - `npm run test` - To execute all the test cases developed in Mocha.
 - `npm run test-favouriteCars` - To execute the test cases specific to Favorite cars functionality.
 - `npm run test-filterCars` - To execute the test cases specific to filtering functionality.
 -  `npm run test-onlineTransfer` - To execute the test cases specific to online transfer functionality.
 
### HTML report with screenshots

   - HTML Report will be generated inside the following folder,
   `cypress/report/index.html_DATE_OF_EXECUTION.html`
