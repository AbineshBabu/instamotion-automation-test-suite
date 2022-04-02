export class Homepage {

    elements = {
        "brand":()=> cy.xpath("(//div[@id='__next']/div[2]/div[2]/div/div[1]/div)[1]"),
        "brandDropdwon":(value)=> cy.xpath(`//div[@id='__next']/div[2]/div[2]/div/ul/li/div[contains(text(),'${value}')]`),
        "model":()=> cy.xpath("//div[@id='__next']/div[2]/div[2]/div[2]/div/div"),
        "modelDropdown":(value)=> cy.xpath(`//div[@id='__next']/div[2]/div[2]/div[2]/ul/li/div[contains(text(),'${value}')]`),
        "searchButton":()=> cy.get('[data-testid="landing-search-button"]')
    }

    chooseBrand(brandName) {
        this.elements.brand().click();
        this.elements.brandDropdwon(brandName).click();
    }

    chooseModel(modelName) {
        this.elements.model().click();
        this.elements.modelDropdown(modelName).click();
    }

    searchButton() {
        this.elements.searchButton().click();
    }

    searchCar(brandName,modelName) {
        cy.wait(1000);
        this.chooseBrand(brandName);
        cy.wait(1000);
        this.chooseModel(modelName);
        this.searchButton();
    }
    
}