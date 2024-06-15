Cypress.Commands.add('PerfilPortal-agendamento', (crianca) => {
  cy.log('ACESSANDO: Realizar Agendamento');
  cy.visit('/agendamento/agendar');

  cy.log('CADASTRANDO: Agendamento');
  cy.get('.h-24 > .flex > .text-lg').should('contain', 'Realizar Agendamento');
  cy.commands('cadastro.portal-agendamento', crianca);
  // DESCOMENTAR
  /*
  cy.log('ACESSANDO: Consultar Agendamento');
  cy.visit('/agendamento/consultar');

  cy.log('CONSULTANDO: Agendamento');
  cy.get('.h-24 > .flex > .text-lg').should('contain', 'Consultar Agendamento');
  cy.commands('consulta.portal-agendamento', crianca);

  cy.log('EDITANDO: Agendamento');
  cy.get('.h-24 > .flex > .text-lg').should('contain', 'Consultar Agendamento');
  cy.commands('consulta.portal-agendamento.deletar', crianca);
  */
});
