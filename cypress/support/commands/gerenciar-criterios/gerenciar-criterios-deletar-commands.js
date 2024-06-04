Cypress.Commands.add('TelasGerenciar-criteriosDeletar', () => {
  cy.wait(2000);

  cy.get(
    '[class="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:primary/80 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:bg-accent hover:text-accent-foreground h-6 w-6 bg-[#F68686]/20 p-0 text-center"]',
  )
    .first()
    .click();
  cy.get('button').contains('Deletar').click();
  cy.contains('Critério removido!').should('exist');
});
