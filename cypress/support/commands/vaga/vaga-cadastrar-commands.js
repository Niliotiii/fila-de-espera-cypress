Cypress.Commands.add('TelasCadastrosVaga', (values) => {
  cy.log('PREENCHENDO: Guia do formulário');

  cy.log('GUIA: Informações Gerais');
  cy.get('#dataHoraVaga-form-item').invoke('val').then((valor) => {
    values.dataHora = valor;
  });
  cy.get('#servidor-form-item').invoke('val').then((valor) => {
    values.servidor = valor;
  });
  cy.get('#anoLetivo > select').select(values.anoLetivo, { force: true });
  // cy.get('#escola-form-item').click();
  // cy.get('[placeholder="Pesquise uma unidade escolar"]')
  //   .clear()
  //   .type(values?.unidadeEscolar);
  // cy.contains(values?.unidadeEscolar).click();
  cy.get('#turma > select').select(values.turma, { force: true });
  cy.get('#quantidadeVagas-form-item').clear().type(values.quantidadeVagas);
  cy.get('button').contains('Salvar').click();

  cy.contains('Vaga cadastrada com sucesso!').should('exist');
});
