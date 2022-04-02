import { Utility } from "../utility/utility";
const utility = new Utility();

export class AllCars {
  elements = {
    menu: () => cy.xpath("(//div[@id='__next']/header/div/div[3]/div)[1]"),
    allCars: () => cy.xpath("(//a[contains(@href,'autos')])[2]"),
    firstCar: () => cy.xpath("(//a[@order='1'])[1][1]", { timeout: 40000 }),
    firstCarMonthlyPrice: (value) => value? cy.xpath(`//a[@order='${value}']/div/div[5]/div`): cy.xpath("//a[@order='1']/div/div[5]/div"),
    startRequest: () => cy.get(".Details__Container-yrg3im-0 > .sc-dnqmqq"),
    onlineTransfer: () =>cy.xpath("//span[contains(text(),'Online-Überweisung')]"),
    furtherButton: () => cy.get(".sc-dnqmqq"),
    startRequestForm: {
      phoneNumber: () => cy.xpath("//div[@class='sc-dqBHgY zzmyq']/input"),
      firstname: () => cy.get(".eNhahd > :nth-child(1) > .sc-hwwEjo > .sc-dqBHgY > .sc-gxMtzJ"),
      surname: () => cy.get(":nth-child(2) > .sc-hwwEjo > .sc-dqBHgY > .sc-gxMtzJ"),
      email: () => cy.get(":nth-child(3) > .sc-hwwEjo > .sc-dqBHgY > .sc-gxMtzJ"),
      tradeCar: () => cy.get(":nth-child(11) > :nth-child(1) > .sc-jnlKLf > .sc-bbmXgH > .sc-gGBfsJ"),
      howYouKnowUs: () => cy.get(":nth-child(2) > .sc-jnlKLf > .sc-bbmXgH > .sc-gGBfsJ"),
      modeOfCommunication: () => cy.get(":nth-child(12) > :nth-child(1) > .sc-jnlKLf > .sc-bbmXgH > .sc-gGBfsJ"),
      receiveInfoOnCurrentCarsOffer: () => cy.xpath("//div[@class='ModalLead__CheckboxContainer-sc-1x4hd3r-14 kAWgRX']/label[1]"),
      termsAndCondition: () => cy.xpath( "//div[@class='ModalLead__CheckboxContainer-sc-1x4hd3r-14 kAWgRX']/label[2]"),
      sendButton: () => cy.get(".ModalLead__Wrapper-sc-1x4hd3r-0 > .sc-dnqmqq"),
      },
    successMessage: () => cy.get(".sc-dymIpo > h2", { timeout: 7700 }),
    monthlyPrice: () => cy.xpath("//span[contains(text(),'ab')]/parent::div", { timeout: 3000 }),
    kilometer: () => cy.xpath("//div[@id='mainContent']/div/div[3]/div/div/div[2]/span[2]"),
    horsePower: () => cy.xpath("//div[@id='mainContent']/div/div[3]/div/div/div[3]/span[2]"),
    fuelType: () => cy.xpath("//div[@id='mainContent']/div/div[3]/div/div/div[4]/span[2]"),
    circuitType: () => cy.xpath("//div[@id='mainContent']/div/div[3]/div/div/div[5]/span[2]"),
    favouriteIcon: (value) => cy.xpath(`(//a[@order='${value}']/div/div)[1]`),
  };

  navigateToAllCars() {
    this.elements.menu().click();
    this.elements.allCars().click({ force: true });
  }

  clickOnTheFirstCar() {
    this.elements.firstCar().click();
    return this;
  }

  clickOnFavouriteIcon(count) {
    for (let i = 1; i <= count + 1; i++) {
      if (i != 4) {
        this.elements.favouriteIcon(i).click();
      }
    }
  }

  clickOnFavouriteIconReadd(count) {
    for (let i = 1; i <= count; i++) {
      if (i != 4) {
        this.elements.favouriteIcon(i).click();
      }
    }
  }

  getFirstCarMonthlyPrice() {
    return this.elements.firstCarMonthlyPrice();
  }

  getOtherCarMonthlyPrice() {
    return this.elements.firstCarMonthlyPrice(5);
  }

  getMonthlyPrice() {
    return this.elements.monthlyPrice();
  }

  getKilometer() {
    return this.elements.kilometer();
  }

  getHorsePower() {
    return this.elements.horsePower();
  }

  getFuelType() {
    return this.elements.fuelType();
  }

  getCircuitType() {
    return this.elements.circuitType();
  }

  startRequest() {
    this.elements.startRequest().click();
    return this;
  }

  onlineTransfer() {
    this.elements.onlineTransfer().click();
    return this;
  }

  clickOnFurtherButton() {
    this.elements.furtherButton().click();
  }

  fillStartRequestForm(
    phoneNumber,
    firstname,
    surname,
    email,
    tradeCar,
    howYouKnowUs,
    modeOfCommunication
  ) {
    this.elements.startRequestForm.phoneNumber().type(phoneNumber);
    this.elements.startRequestForm.firstname().type(firstname);
    this.elements.startRequestForm.surname().type(surname);
    this.elements.startRequestForm.email().type(email);
    this.elements.startRequestForm.tradeCar().select(tradeCar);
    this.elements.startRequestForm.howYouKnowUs().select(howYouKnowUs);
    this.elements.startRequestForm
      .modeOfCommunication()
      .select(modeOfCommunication);
    this.elements.startRequestForm.receiveInfoOnCurrentCarsOffer().click();
    this.elements.startRequestForm.termsAndCondition().click();
    this.elements.startRequestForm.sendButton().click();
  }
}
