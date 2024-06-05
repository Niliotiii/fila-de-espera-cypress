Cypress.Commands.add('TelasConsultasTurmaEditar', (values) => {
  cy.log('CLICANDO: No Ícone de Lápis');
  cy.contains('table tbody tr td:nth-child(5) div span', values.nome)
    .parents('tr')
    .within(() => {
      cy.get('td:nth-child(8) > div > button:nth-child(2)').click();
    });

  values.nome = 'Turma Editada';

  cy.log('GUIA: Informações Gerais');
  cy.get('#nome-form-item').clear().type(values.nome);
  cy.get('button').contains('Salvar').click();
  cy.contains('Turma editada com sucesso').should('exist');
});
