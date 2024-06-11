import { contextFixtures as context } from '../../../fixtures/context/context-fixtures';

Cypress.Commands.add('TelasEntrevistaEditar', () => {
  // novos values
  //values.numeroAtendimentoIntervalo = '3';

  cy.wait(2000);

  cy.commands('utils.configurar-agendamento.search-item', {
    ...context,
    type: 'editar',
  });

  /*cy.log('PREENCHENDO: Guias do formulário');

  cy.log('GUIA: Informações Gerais');
  cy.get('#numeroAtendimentoIntervalo > select').select(
    values?.numeroAtendimentoIntervalo,
    { force: true },
  );

  cy.get('button').contains('Salvar').click();
  cy.get('#aceite-form-item').click();
  cy.get('button').contains('Confirmar Edição').click();
  cy.wait(2000);
  cy.contains('Agendamento editado com sucesso!').should('exist');*/
});
