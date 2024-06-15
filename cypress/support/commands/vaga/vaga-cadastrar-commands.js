Cypress.Commands.add('TelasCadastrosVaga', (values) => {
  cy.log('PREENCHENDO: Guia do formulário');

  cy.log('GUIA: Informações Gerais');
  cy.get('#dataHoraVaga-form-item')
    .invoke('val')
    .then((valor) => {
      values.dataHora = valor;
    });
  cy.get('#servidor-form-item')
    .invoke('val')
    .then((valor) => {
      values.servidor = valor;
    });
  cy.get('#anoLetivo > select').select(values.anoLetivo, { force: true });

  cy.log(values.turma);
  if (values.turma === 'PRIMEIRA OPCAO') {
    cy.get('#turma-form-item').click();
    cy.wait(3000);
    cy.get('body').type('{enter}');
  } else {
    cy.selectVerification('#turma > select', '#turma-form-item', values.turma);
  }
  cy.get('#quantidadeVagas-form-item').clear().type(values.quantidadeVagas);
  cy.get('button').contains('Salvar').click();

  cy.contains('Vaga cadastrada com sucesso!').should('exist');
});
