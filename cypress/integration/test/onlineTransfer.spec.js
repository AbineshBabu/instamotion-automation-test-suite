/// <reference types="cypress" />

import { Homepage } from "../../pageobjects/homePage";
import { Sort } from "../../pageobjects/sort";
import { AllCars } from "../../pageobjects/allCars";
import { Utility } from "../../utility/utility";

const homepage = new Homepage();
const sort = new Sort();
const allcars = new AllCars();
const utility = new Utility();

describe("To test online transfer feature", () => {
  beforeEach(() => {
    cy.open();
  });

  it("To verify that user is able to place online transfer option successfully", () => {
    cy.fixture("onlineTransfer").then((testData) => {

      //searching the car in homepage
      homepage.searchCar(testData.search.brand, testData.search.model);

      //sort the filtered car by lowest price
      sort.clickOnSortButton().sortByLowestPrice();

      //veifying lowest price
      allcars.getFirstCarMonthlyPrice().then((value)=>{
            var firstCarPrice=utility.getMonthlyPriceMetric(value.text()); 
          allcars.getOtherCarMonthlyPrice().then((value1)=>{
            var otherCarPrice=utility.getMonthlyPriceMetric(value1.text());
            expect(firstCarPrice).is.lessThan(otherCarPrice);
          });         
      });

      // clicking on the first car and sending request and choosing online transfer
      allcars
        .clickOnTheFirstCar()
        .startRequest()
        .onlineTransfer()
        .clickOnFurtherButton();

      //entering details
      allcars.fillStartRequestForm(
        testData.form.phoneNumber,
        testData.form.firstname,
        testData.form.surname,
        testData.form.email,
        testData.form.tradeCar,
        testData.form.howYouKnowUs,
        testData.form.modeOfCommunication
      );

      //verifying the success message   
      allcars.elements.successMessage().then((value) => {
        expect(value.text()).equal(testData.successMessage);
      });
    });
  });

});
