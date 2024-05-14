Cypress.Commands.add('ContextSecretaria-educacao', () => {

  // preciso que de 12 tabs para chegar no campo de busca
  cy.get('#radix-:rh:').click();

  cy.wait(500)
   
})