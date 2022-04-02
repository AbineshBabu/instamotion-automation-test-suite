/// <reference types="cypress" />

import { Filter } from "../../pageobjects/filter";
import { AllCars } from "../../pageobjects/allCars";
import { Utility } from "../../utility/utility";

const filter = new Filter();
const allcars = new AllCars();
const utility = new Utility();

describe("To test the filter functionality", () => {
  beforeEach(() => {
    cy.open();
  });

  it("To verify that the application responds with appropirate result based on filter conditions", () => {
    cy.fixture("filterCars").then((testData) => {

      //click on all cars
      allcars.navigateToAllCars();
      filter.clickOnFilterButton();

      //filter option //Basic
      // Brand
      filter.selectBrand(testData.brand);

      //model
      filter.selectModel(testData.model);

      // vehicle type
      filter.selectVehicleType(testData.VehicleType);

      // status
      filter.selectCarStatus(testData.status);

      // rate
      filter.selectRate(testData.rate.from, testData.rate.until);

      // Registration
      filter.selectRegistration(testData.registration.from,testData.registration.until);

      // Kilometer
      filter.selectKilometer(testData.kilometer.from,testData.kilometer.until);

      // fuel
      filter.selectFuelType(testData.fuel);

      // Performance
      filter.selectPerformance(testData.performance.from,testData.performance.until);

      // circuit
      filter.selectCircuit(testData.circuit);

      // doors
      filter.selectDoors(testData.doors);

      // seat
      filter.selectSeat(testData.seat);

      // emission class
      filter.selectEmission(testData.emissionClass);

      // Exterior Colour
      filter.selectExteriorColour(testData.exteriorColour);

      // Interior Colour
      filter.selectInteriorColour(testData.interiorColour);

      // click on search button     
      filter.clickOnSearchButton();

      //clicking on first car   
      allcars.clickOnTheFirstCar();

      // verifying kilometers
      allcars.getKilometer().then((value) => {
        var km = utility.getKilometerMetric(value.text());
        var kmFrom = utility.getTestdataKilomterValue(testData.kilometer.from);
        var kmUntil = utility.getTestdataKilomterValue(testData.kilometer.until);

        expect(km).within(kmFrom, kmUntil);
      });

      // verifying horse power
      allcars.getHorsePower().then((value) => {
        var ps = utility.getPsMetric(value.text());
        var psFrom = utility.getTestdataPsValue(testData.performance.from);
        var psUntil = utility.getTestdataPsValue(testData.performance.until);

        expect(ps).within(psFrom, psUntil);
      });

      // verifying fuel type
      allcars.getFuelType().then((value) => {
        expect(value.text()).to.equal(testData.fuel);
      });

      // verifying circuit type
      allcars.getCircuitType().then((value) => {
        expect(value.text()).to.equal(testData.circuit);
      });

      // verifying monthly price
      allcars.getMonthlyPrice().then((value) => {
        var price = utility.getMonthlyPriceMetric(value.text());
        var priceFrom = utility.getTestdataMonthlyPriceValue(testData.rate.from);
        var priceUntil = utility.getTestdataMonthlyPriceValue(testData.rate.until);

        expect(price).within(priceFrom, priceUntil);
      });

    });
  });

});
