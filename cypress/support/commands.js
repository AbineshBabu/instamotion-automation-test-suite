Cypress.Commands.add('open',()=>{
    cy.visit('/')
    cy.get("#onetrust-accept-btn-handler").click()
})