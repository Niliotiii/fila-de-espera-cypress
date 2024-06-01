Cypress.Commands.add('TelasConsultasUnidade-escolarDeletar', (values) => {
  // Clique em Cancelar
  cy.log('CLICANDO: No Ícone de Lixeira');
  cy.contains('table tbody tr td:nth-child(1) div span', values.razaoSocial)
    .parents('tr')
    .within(() => {
      cy.get('td:nth-child(6) div div button').click();
    });

  cy.log('CONFIRMANDO: Dados do Registro');
  cy.contains('Confirma excluir registro?').should('exist');
  cy.contains(values.razaoSocial).should('exist');
  cy.contains('Essa ação não poderá ser desfeita').should('exist');

  cy.log('CLICANDO: No Botão de Cancelar');
  cy.contains('Cancelar').click();

  // Clique em Deletar
  cy.log('CLICANDO: No Ícone de Lixeira');
  cy.contains('table tbody tr td:nth-child(1) div span', values.razaoSocial)
    .parents('tr')
    .within(() => {
      cy.get('td:nth-child(6) div div button').click();
    });

  cy.log('CONFIRMANDO: Dados do Registro');
  cy.contains('Confirma excluir registro?').should('exist');
  cy.contains(values.razaoSocial).should('exist');
  cy.contains('Essa ação não poderá ser desfeita').should('exist');

  cy.log('CLICANDO: No Botão de Deletar');
  cy.contains('Deletar').click();
  cy.contains('Unidade Escolar deletada com sucesso').should('exist');
});
