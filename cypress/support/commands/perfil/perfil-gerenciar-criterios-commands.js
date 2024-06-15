Cypress.Commands.add('PerfilGerenciar-criterios', (gerenciarCriterios) => {
  cy.log('ACESSANDO: Gerenciar Critérios');
  cy.visit('/dashboard/criterios/gerenciar-criterios');
  cy.wait(3000);

  gerenciarCriterios?.criterios.forEach((criterio, index) => {
    cy.log(`CADASTRANDO: ${index + 1}° Critério`);
    cy.commands('telas.gerenciar-criterios.cadastrar', criterio);
  });
  // DESCOMENTAR
  /*
  gerenciarCriterios?.criterios.forEach((criterio, index) => {
    cy.log(`CONSULTANDO: ${index + 1}° Critério`);
    cy.commands('telas.gerenciar-criterios.consultar', criterio);
  });

  cy.log('VISUALIZANDO: Todos os Critérios');
  cy.commands('telas.gerenciar-criterios.visualizar');

  cy.log('EDITANDO: Todos os Critérios');
  cy.commands('telas.gerenciar-criterios.editar');
  */
});
