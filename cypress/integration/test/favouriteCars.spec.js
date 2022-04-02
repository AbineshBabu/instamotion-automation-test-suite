/// <reference types="cypress" />

import { AllCars } from "../../pageobjects/allCars";
import { Favourite } from "../../pageobjects/favourite";

const allcars = new AllCars();
const favourite =new Favourite()

describe("To test the favourite feature", () => {
  beforeEach(() => {
    cy.open();
  });

  it("To verify that user is able to add, remove and re-add cars to the favourites list", () => {
    cy.fixture("favouriteCars").then((testData) => {

      // navigating to all cars  
      allcars.navigateToAllCars();

      // Adding 5 favourite cars
      allcars.clickOnFavouriteIcon(testData.favouritesToAdd);

      // verifying number of favourite count
      favourite.favouriteIcon().then((value) => {
        expect(value.text()).to.equal(testData.favouritesToAdd.toString());
      });

      // navigating to favourites tab
      favourite.clickOnFavouriteIcon();

      // removing favourite of first 2 cars and asserting the favourites count
      favourite.removeFromFavourite(testData.favouritesToRemove);

      // verfying count after removing
      favourite.favouriteIcon().then((value) => {
        expect(value.text()).to.equal((testData.favouritesToAdd - testData.favouritesToRemove).toString());
      });

      // clicks on add cars in favourite page
      favourite.addCars();

      // adding car from the list
      allcars.clickOnFavouriteIconReadd(testData.favouritesToReadd);

      // verifying the favourite count after adding car
      favourite.favouriteIcon().then((value) => {
        expect(value.text()).to.equal(((testData.favouritesToAdd - testData.favouritesToRemove)+testData.favouritesToReadd).toString());
      });
    });
  });
});
