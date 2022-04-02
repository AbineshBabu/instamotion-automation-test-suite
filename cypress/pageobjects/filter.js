export class Filter {

    elements = {
        "filterButton":()=> cy.xpath("//div[@id='__next']/div/div/div/div/div/button",{timeout:20000}),
        "searchButton":()=> cy.xpath("//div/div[4]/button"),
        "brand":()=> cy.xpath("//div[@aria-labelledby='downshift-20-label']/div/div"),
        "brandDropdwon":(value)=> cy.xpath(`//ul[@id='downshift-20-menu']/li/div[contains(text(),'${value}')]`),
        "vehicleType":()=> cy.xpath("//div[@aria-labelledby='downshift-22-label']/div/div"),
        "vehicleTypeDropdown":(value)=>  cy.xpath(`//ul[@id='downshift-22-menu']/li/div[contains(text(),'${value}')]`),
        "model":()=> cy.xpath("//div[@aria-labelledby='downshift-21-label']/div/div"),
        "modelDropdown":(value)=> cy.xpath(`//ul[@id='downshift-21-menu']/li/div[contains(text(),'${value}')]`),
        "status":()=> cy.xpath("//div[@aria-labelledby='downshift-23-label']/div/div"),
        "statusDropdown":(value)=> cy.xpath(`//ul[@id='downshift-23-menu']/li/div[contains(text(),'${value}')]`), 
        "rateFrom":()=> cy.xpath("//div[@aria-labelledby='downshift-24-label']/div/button"),
        "rateFromDropdown":(value)=> cy.xpath(`(//ul[@id='downshift-24-menu']/li[contains(text(),'${value}')])[1]`),
        "rateUntil":()=> cy.xpath("//div[@aria-labelledby='downshift-25-label']/div/button"),
        "rateUntilDropdown":(value)=> cy.xpath(`(//ul[@id='downshift-25-menu']/li[contains(text(),'${value}')])[1]`),
        "registrationFrom":()=> cy.xpath("//div[@aria-labelledby='downshift-26-label']/div/button"),
        "registrationFromDropdown":(value)=> cy.xpath(`//ul[@id='downshift-26-menu']/li[contains(text(),'${value}')]`),
        "registrationUntil":()=> cy.xpath("//div[@aria-labelledby='downshift-27-label']/div/button"),
        "registrationUntilDropdown":(value)=> cy.xpath(`//ul[@id='downshift-27-menu']/li[contains(text(),'${value}')]`),
        "kilometerFrom":()=> cy.xpath("//div[@aria-labelledby='downshift-28-label']/div/button"),
        "kilometerFromDropdown":(value)=> cy.xpath(`(//ul[@id='downshift-28-menu']/li[contains(text(),'${value}')])[1]`),
        "kilometerUntil":()=> cy.xpath("//div[@aria-labelledby='downshift-29-label']/div/button"),
        "kilometerUntilDropdown":(value)=> cy.xpath(`//ul[@id='downshift-29-menu']/li[contains(text(),'${value}')]`),
        "fuelType":()=> cy.xpath("//div[@aria-labelledby='downshift-30-label']/div/div"),
        "fuelTypeDropdown":(value)=> cy.xpath(`(//ul[@id='downshift-30-menu']/li/div[contains(text(),'${value}')])[2]`),
        "performanceFrom":()=> cy.xpath("//div[@aria-labelledby='downshift-31-label']/div/button"),
        "performanceFromDropdown":(value)=> cy.xpath(`(//ul[@id='downshift-31-menu']/li[contains(text(),'${value}')])[1]`),
        "performanceUntil":()=> cy.xpath("//div[@aria-labelledby='downshift-32-label']/div/button"),
        "performanceUntilDropdown":(value)=> cy.xpath(`//ul[@id='downshift-32-menu']/li[contains(text(),'${value}')]`),
        "circuit":()=> cy.xpath("//div[@aria-labelledby='downshift-33-label']/div/div"),
        "circuitDropdown":(value)=> cy.xpath(`//ul[@id='downshift-33-menu']/li/div[contains(text(),'${value}')]`),
        "doors":()=> cy.xpath("//div[@aria-labelledby='downshift-34-label']/div/div"),
        "doorsDropdown":(value)=> cy.xpath(`//ul[@id='downshift-34-menu']/li/div[contains(text(),'${value}')]`),
        "seat":()=> cy.xpath("//div[@aria-labelledby='downshift-35-label']/div/div"),
        "seatDropdown":(value)=> cy.xpath(`//ul[@id='downshift-35-menu']/li/div[contains(text(),'${value}')]`),
        "emission":()=> cy.xpath("//div[@aria-labelledby='downshift-36-label']/div/div"),
        "emissionDropdown":(value)=> cy.xpath(`//ul[@id='downshift-36-menu']/li/div[contains(text(),'${value}')]`),
        "exterior":()=> cy.xpath("//div[@aria-labelledby='downshift-37-label']/div/div"),
        "exteriorDropdown":(value)=> cy.xpath(`//ul[@id='downshift-37-menu']/li/div[contains(text(),'${value}')]`),
        "interior":()=> cy.xpath("//div[@aria-labelledby='downshift-38-label']/div/div"),
        "interiorDropdown":(value)=> cy.xpath(`//ul[@id='downshift-38-menu']/li/div[contains(text(),'${value}')]`)
    }

    clickOnFilterButton() {
        this.elements.filterButton().click();
    }

    selectBrand(brandName) {
        this.elements.brand().click();
        this.elements.brandDropdwon(brandName).click();
        cy.wait(2000);
    }

    selectModel(modelName) {
        this.elements.model().click();
        this.elements.modelDropdown(modelName).click();
    }

    selectVehicleType(vehicleType) {
        this.elements.vehicleType().click();
        this.elements.vehicleTypeDropdown(vehicleType).click();
    }

    selectCarStatus(status) {
        this.elements.status().click();
        this.elements.statusDropdown(status).click();
    }

    selectRate(from,until) {
        this.elements.rateFrom().click();
        this.elements.rateFromDropdown(from).click();

        this.elements.rateUntil().click();
        this.elements.rateUntilDropdown(until).click();
    }

    selectRegistration(from,until) {
        this.elements.registrationFrom().click();
        this.elements.registrationFromDropdown(from).click();

        this.elements.registrationUntil().click();
        this.elements.registrationUntilDropdown(until).click();
    }

    selectKilometer(from,until) {
        this.elements.kilometerFrom().click();
        this.elements.kilometerFromDropdown(from).click();

        this.elements.kilometerUntil().click();
        this.elements.kilometerUntilDropdown(until).click();
    }

    selectFuelType(fuelType) {
        this.elements.fuelType().click();
        this.elements.fuelTypeDropdown(fuelType).click();
    }
    
    selectPerformance(from,until) {
        this.elements.performanceFrom().click();
        this.elements.performanceFromDropdown(from).click();

        this.elements.performanceUntil().click();
        this.elements.performanceUntilDropdown(until).click();
    }

    selectCircuit(circuitType) {
        this.elements.circuit().click();
        this.elements.circuitDropdown(circuitType).click();
    }

    selectDoors(doorCount) {
        this.elements.doors().click();
        this.elements.doorsDropdown(doorCount).click();
    }

    selectSeat(seatCount) {
        this.elements.seat().click();
        this.elements.seatDropdown(seatCount).click();
    }

    selectEmission(emissionType) {
        this.elements.emission().click();
        this.elements.emissionDropdown(emissionType).click();
    }

    selectExteriorColour(colour) {
        this.elements.exterior().click();
        this.elements.exteriorDropdown(colour).click();
    }

    selectInteriorColour(colour) {
        this.elements.interior().click();
        this.elements.interiorDropdown(colour).click();
    }

    clickOnSearchButton() {
        this.elements.searchButton().click();
    }
}