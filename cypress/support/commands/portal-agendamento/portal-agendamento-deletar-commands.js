Cypress.Commands.add('ConsultaPortal-agendamentoDeletar', (values) => {
  // Clique em Cancelar
  cy.log('CLICANDO: No Ícone de Lixeira');
  cy.get('table tbody tr td:nth-child(5) div div button').click();

  cy.log('CONFIRMANDO: Dados do Registro');
  cy.contains('Deseja cancelar este agendamento?').should('exist');
  cy.contains('Essa ação não poderá ser desfeita').should('exist');

  cy.log('CLICANDO: No Botão de Cancelar');
  cy.contains('Cancelar').click();

  // Clique em Deletar
  cy.log('CLICANDO: No Ícone de Lixeira');
  cy.get('table tbody tr td:nth-child(5) div div button').click();

  cy.log('CONFIRMANDO: Dados do Registro');
  cy.contains('Deseja cancelar este agendamento?').should('exist');
  cy.contains('Essa ação não poderá ser desfeita').should('exist');

  cy.log('CLICANDO: No Botão de Deletar');
  cy.contains('Deletar').click();
  cy.contains('Agendamento cancelado com sucesso').should('exist');
});
