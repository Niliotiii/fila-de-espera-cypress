Cypress.Commands.add('TelasConsultasCriancaDelete', (values) => {
  cy.log('DELETANDO: Criança');

  cy.log('CLICANDO: No Ícone de Lixeira');
  cy.contains('table tbody tr td:nth-child(1) div span', values.nome)
    .parents('tr')
    .within(() => {
      cy.get('td:nth-child(5) div div button').click();
    });

  cy.log('CONFIRMANDO: Dados do Registro');
  cy.contains('Confirma excluir registro?').should('exist');
  cy.contains(values.nome).should('exist');
  cy.contains('Essa ação não poderá ser desfeita').should('exist');

  cy.log('CLICANDO: No Botão de Deletar');
  cy.contains('Deletar').click();
  cy.contains('Criança deletada com sucesso').should('exist');
});
