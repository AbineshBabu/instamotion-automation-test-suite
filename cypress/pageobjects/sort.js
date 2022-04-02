export class Sort {

    elements = {
        "sortButton":()=> cy.xpath("(//div[@id='__next']/div/div/div/div/div/div/div/button)[1]"),
        "lowestPrice":()=> cy.xpath("(//div[@id='__next']/div/div/div/div/div/div/div/ul/li[1])[1]")
    }

    clickOnSortButton() {
        this.elements.sortButton().click();
        return this;
    }

    sortByLowestPrice() {
        this.elements.lowestPrice().click();
    }
}