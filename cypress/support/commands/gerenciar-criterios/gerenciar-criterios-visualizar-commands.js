Cypress.Commands.add('TelasGerenciar-criteriosVisualizar', () => {
  cy.log('ACESSANDO: Gerenciar Critérios');
  cy.visit('/dashboard/criterios/consultar-criterios');

  cy.get(
    'body > div.relative.flex.min-h-screen.flex-col > div.flex-1 > div > div > main > div:nth-child(3) > div > div > form > div.mt-8.space-y-4 > div.w-full.overflow-auto > table > tbody > tr:nth-child(1) > td:nth-child(5) > div > button',
  ).click();
});
