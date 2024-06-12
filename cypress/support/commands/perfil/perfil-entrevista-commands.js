Cypress.Commands.add('PerfilEntrevista', (entrevista) => {
  cy.log('ACESSANDO: Entrevistar Candidato');
  cy.wait(1000);
  cy.visit('/dashboard/entervista/entrevistar-candidato');

  cy.log('CADASTRANDO: Entrevista');
  cy.commands('telas.entrevista.cadastrar', entrevista);

  cy.log('CONSULTANDO: Entrevista');
  cy.commands('telas.entrevista.consultar');

  cy.log('VISUALIZANDO: Entrevista');
  cy.commands('telas.entrevista.visualizar');

  cy.log('EDITANDO: Entrevista');
  cy.commands('telas.entrevista.editar', entrevista);

  cy.log('CONSULTANDO: Entrevista');
  cy.commands('telas.entrevista.consultar');

  cy.log('VISUALIZANDO: Entrevista');
  cy.commands('telas.entrevista.visualizar');
});
