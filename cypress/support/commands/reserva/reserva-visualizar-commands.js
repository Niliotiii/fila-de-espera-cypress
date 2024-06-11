import { contextFixtures as context } from '../../../fixtures/context/context-fixtures';

Cypress.Commands.add('TelasReservaVisualizar', (values) => {
  cy.wait(2000);

  cy.commands('utils.reserva.search-item', {
    ...values,
    type: 'visualizar',
  });

  cy.log('VISUALIZANDO: Informações Gerais');
  cy.contains(values.nomeCrianca).should('exist');
  cy.contains(context.cpfCrianca).should('exist');
  cy.contains(context.cpfResponsavel).should('exist');
  cy.contains(context.unidadeEscolar).should('exist');
  cy.contains(context.turno).should('exist');
  cy.contains(context.etapa).should('exist');
  cy.contains(context.nomeTurma).should('exist');

  cy.get('button').contains('Anterior').click();
});
