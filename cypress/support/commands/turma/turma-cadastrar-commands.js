Cypress.Commands.add('TelasCadastrosTurma', (values) => {
  cy.log('PREENCHENDO: Guia do formulário');

  cy.log('GUIA: Informações Gerais');
  if (values.perfil !== 'GESTOR DE CRECHE') {
    cy.get('#escola-form-item').click();
    cy.get('[placeholder="Pesquise uma unidade escolar"]')
      .clear()
      .type(values?.unidadeEscolar);
    cy.contains(values?.unidadeEscolar).click();
  }
  cy.get('#etapa > select').select(values.etapa, { force: true });
  cy.get('#nome-form-item').clear().type(values.nome);
  cy.get('#turno > select').select(values.turno, { force: true });
  cy.get('#periodoInicial > div.flex.flex-row.items-center.gap-2 > input')
    .clear()
    .type(values?.periodoInicial);
  cy.get('#periodoFinal > div.flex.flex-row.items-center.gap-2 > input')
    .clear()
    .type(values?.periodoFinal);
  cy.get('#horarioInicial-form-item').clear().type(values?.horaInicial);
  cy.get('#horarioFinal-form-item').clear().type(values?.horaFinal);
  values?.diasFuncionamento.forEach((dia) => {
    cy.get('#diasSemana')
      .contains(dia)
      .siblings('#diasSemana-form-item')
      .click();
  });
  cy.get('#tipoTurma > select').select(values?.tipoTurma, { force: true });
  cy.get('button').contains('Salvar').click();

  cy.contains('Turma cadastrada com sucesso!').should('exist');
});
