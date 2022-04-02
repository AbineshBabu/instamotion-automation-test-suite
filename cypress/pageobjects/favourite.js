export class Favourite {
    
    elements = {
        "favouriteCount":()=> cy.xpath("//div[@id='__next']/div/header/div/div[3]/a/span"),
        "removeCar":()=> cy.xpath("(//a/div/div)[1]"),
        "addCars":()=> cy.xpath("//div[contains(text(),'Auto hinzufügen')]")
    }

    favouriteIcon() {
        return this.elements.favouriteCount();
    }
    
    clickOnFavouriteIcon() {
        return this.elements.favouriteCount().click();
    }

    removeFromFavourite(count) {
        for (let i = 1; i <= count; i++) {
            this.elements.removeCar().click();
        }
    }

    addCars() {
        return this.elements.addCars().click();
    }
}