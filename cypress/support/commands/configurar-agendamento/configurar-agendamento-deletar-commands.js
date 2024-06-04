Cypress.Commands.add('TelasConfigurar-agendamentoDeletar', (values) => {
  cy.wait(2000);

  cy.commands('utils.configurar-agendamento.search-item', {
    ...values,
    type: 'deletar',
  });

  cy.contains(values.secretariaEducacaoRazaoSocial).should('exist');
  cy.get('#aceite-form-item').click();
  cy.get('button').contains('Deletar').click();
  cy.wait(1000);
  cy.contains('Agendamento deletado com sucesso!').should('exist');
});
