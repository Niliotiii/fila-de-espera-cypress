Cypress.Commands.add('TelasGerenciar-criteriosEditar', () => {
  cy.wait(2000);

  cy.get('[role="checkbox"]').first().click();

  cy.get('[class="cursor-pointer truncate text-center"]').first().click();
});
