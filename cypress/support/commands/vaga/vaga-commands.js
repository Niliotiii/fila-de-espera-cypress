Cypress.Commands.add('TelasCadastrosVaga', (values) => {
  cy.log('PREENCHENDO: Guia do formulário');

  cy.log('GUIA: Informações Gerais');
  cy.get('#anoLetivo > select').select(values?.anoLetivo, { force: true });

  cy.selectVerification('#turma > select', '#turma-form-item', values?.turma);

  cy.get('#quantidadeVagas-form-item').type(values?.quantidadeVagas);
  cy.get('button').contains('Salvar').click();

  cy.contains('Vaga cadastrada com sucesso!').should('exist');
});
