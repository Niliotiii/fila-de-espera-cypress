import { contextFixtures as context } from '../../../fixtures/context/context-fixtures';

Cypress.Commands.add('TelasEntrevistaVisualizar', () => {
  cy.wait(2000);

  cy.commands('utils.entrevista.search-item', {
    ...context,
    type: 'visualizar',
  });

  cy.log('VISUALIZANDO: Informações Gerais');
  cy.contains(context.nomeCrianca).should('exist');
  cy.contains(context.cpfCrianca).should('exist');
  cy.contains(context.cpfResponsavel).should('exist');
  cy.contains(context.unidadeEscolar).should('exist');
  cy.contains(context.turno).should('exist');
  cy.contains(context.etapa).should('exist');

  cy.get('button').contains('Anterior').click();
});
