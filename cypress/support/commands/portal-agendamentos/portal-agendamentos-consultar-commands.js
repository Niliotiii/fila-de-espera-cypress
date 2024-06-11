Cypress.Commands.add('ConsultaPortalAgendamento', (values) => {
  cy.log('PESQUISANDO: Agendamento');

  cy.log('PESQUISA: Por CPF');
  cy.get(
    '#cpfInput',
  ).type(values.cpf);
  cy.get('button').contains('Buscar').click();
  cy.wait(1000);
  cy.contains(values.cpf).should('exist');
});
