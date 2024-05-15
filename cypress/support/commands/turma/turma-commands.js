Cypress.Commands.add('TelasCadastrosTurma', (values) => {
  cy.log('PREENCHENDO: Guia do formulário');

  cy.log('GUIA: Informações Gerais');
  cy.get('#escola-form-item').click();
  cy.get('[placeholder="Pesquise uma unidade escolar"]').type(
    values?.unidadeEscolar,
  );
  cy.contains(values?.unidadeEscolar).click();
  cy.get('#etapa > select').select(values?.etapa, { force: true });
  cy.get('#nome-form-item').type(values?.nome);
  cy.get('#turno > select').select(values?.turno, { force: true });
  cy.get('#periodoInicial > div.flex.flex-row.items-center.gap-2 > input').type(
    values?.periodoInicial,
  );
  cy.get('#periodoFinal > div.flex.flex-row.items-center.gap-2 > input').type(
    values?.periodoFinal,
  );
  cy.get('#horarioInicial-form-item').type(values?.horaInicial);
  cy.get('#horarioFinal-form-item').type(values?.horaFinal);
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
