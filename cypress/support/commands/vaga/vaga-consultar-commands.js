import extractNameTurma from '../../../helpers/extract-name-turma';

Cypress.Commands.add('TelasConsultasVaga', (values) => {
  cy.log('PESQUISANDO: Turma');

  cy.log('FILTRANDO: Por Ano Letivo');
  cy.get('#anoLetivo > select').select(values.anoLetivo, { force: true });
  cy.wait(1000);

  // cy.log('FILTRANDO: Por Unidade Escolar');
  // cy.get('#escola-form-item').click();
  // cy.get('[placeholder="Pesquise uma unidade escolar"]')
  //   .clear()
  //   .type(values?.unidadeEscolar);
  // cy.contains(values?.unidadeEscolar).click();
  // cy.wait(1000);

  cy.log('FILTRANDO: Por Turma');
  cy.get('#turma > select').select(extractNameTurma(values.turma), {
    force: true,
  });
  cy.wait(1000);

  cy.log('FILTRANDO: Por Status');
  if (values.status === 'Livre') {
    cy.get('#ativa')
      .contains(values.status)
      .siblings('#ativa-form-item')
      .click();
  } else if (values.status === 'Ocupada') {
    cy.get('#ativa')
      .contains(values.status)
      .siblings('#ativa-form-item')
      .click();
  }

  cy.get(
    'body div.relative.flex.min-h-screen.flex-col div.flex-1 div div main div:nth-child(3) div div form div.mt-8.space-y-4 div.w-full.overflow-auto table tbody tr td',
  )
    .filter(`:contains(${extractNameTurma(values.turma)})`)
    .should('have.length', values.quantidadeVagas);
});
