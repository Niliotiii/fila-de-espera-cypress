Cypress.Commands.add('TelasCadastrosVaga', (values) => {
  cy.log('PREENCHENDO: Guia do formulário');

  cy.log('GUIA: Informações Gerais');
  cy.get('#anoLetivo > select').select(values?.anoLetivo, { force: true });
  cy.get('#escola-form-item').click();
  cy.get('[placeholder="Pesquise uma unidade escolar"]').type(
    values?.unidadeEscolar,
  );
  cy.contains(values?.unidadeEscolar).click();
  if (values?.escolherTurma) {
    cy.get('#turma > select').select(values?.turma, { force: true });
  } else {
    cy.get('#turma-form-item').click();
    cy.wait(500);
    cy.get('body').type('{enter}');
  }
  cy.get('#quantidadeVagas-form-item').type(values?.quantidadeVagas);
  cy.get('button').contains('Salvar').click();

  cy.contains('Vaga cadastrada com sucesso!').should('exist');
});
