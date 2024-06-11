Cypress.Commands.add('TelasConsultasTurma', (values) => {
  cy.log('PESQUISANDO: Turma');

  cy.log('PESQUISA: Por Turno');
  cy.get(
    'body > div.relative.flex.min-h-screen.flex-col > div.flex-1 > div > div > main > div:nth-child(3) > div > div > form > div.-mb-10.ml-5.grid.grid-cols-10.items-start.justify-center.gap-7 > div.flex-rows.relative.flex.w-full.items-center.col-span-3.undefined > input',
  ).type(values.turno);
  cy.wait(1000);
  cy.contains(values.nome).should('exist');
  cy.get(
    'body > div.relative.flex.min-h-screen.flex-col > div.flex-1 > div > div > main > div:nth-child(3) > div > div > form > div.-mb-10.ml-5.grid.grid-cols-10.items-start.justify-center.gap-7 > div.flex-rows.relative.flex.w-full.items-center.col-span-3.undefined > input',
  ).clear();
  cy.wait(1000);

  cy.log('PESQUISA: Etapa');
  cy.get(
    'body > div.relative.flex.min-h-screen.flex-col > div.flex-1 > div > div > main > div:nth-child(3) > div > div > form > div.-mb-10.ml-5.grid.grid-cols-10.items-start.justify-center.gap-7 > div.flex-rows.relative.flex.w-full.items-center.col-span-3.undefined > input',
  ).type(values.etapa);
  cy.wait(1000);
  cy.contains(values.nome).should('exist');
  cy.get(
    'body > div.relative.flex.min-h-screen.flex-col > div.flex-1 > div > div > main > div:nth-child(3) > div > div > form > div.-mb-10.ml-5.grid.grid-cols-10.items-start.justify-center.gap-7 > div.flex-rows.relative.flex.w-full.items-center.col-span-3.undefined > input',
  ).clear();
  cy.wait(1000);

  //   cy.log('PESQUISA: Por Unidade Escolar');
  //   cy.get(
  //     'body > div.relative.flex.min-h-screen.flex-col > div.flex-1 > div > div > main > div:nth-child(3) > div > div > form > div.-mb-10.ml-5.grid.grid-cols-10.items-start.justify-center.gap-7 > div.flex-rows.relative.flex.w-full.items-center.col-span-3.undefined > input',
  //   ).type(values.unidadeEscolar);
  //   cy.wait(1000);
  //   cy.contains(values.nome).should('exist');
  //   cy.get(
  //     'body > div.relative.flex.min-h-screen.flex-col > div.flex-1 > div > div > main > div:nth-child(3) > div > div > form > div.-mb-10.ml-5.grid.grid-cols-10.items-start.justify-center.gap-7 > div.flex-rows.relative.flex.w-full.items-center.col-span-3.undefined > input',
  //   ).clear();
  //   cy.wait(1000);

  cy.log('PESQUISA: Por Turma');
  cy.get(
    'body > div.relative.flex.min-h-screen.flex-col > div.flex-1 > div > div > main > div:nth-child(3) > div > div > form > div.-mb-10.ml-5.grid.grid-cols-10.items-start.justify-center.gap-7 > div.flex-rows.relative.flex.w-full.items-center.col-span-3.undefined > input',
  ).type(values.nome);
  cy.wait(1000);
  cy.contains(values.nome).should('exist');
});
