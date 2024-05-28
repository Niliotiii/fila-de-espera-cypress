import formatCPF from '../../../helpers/format-cpf';

Cypress.Commands.add('TelasConsultasCrianca', (values) => {
  cy.log('PESQUISANDO: Criança');

  cy.log('PESQUISA: Por Responsável');
  cy.get(
    'body > div.relative.flex.min-h-screen.flex-col > div.flex-1 > div > div > main > div:nth-child(3) > div > div > form > div.-mb-10.ml-5.grid.grid-cols-10.items-start.justify-center.gap-7 > div.flex-rows.relative.flex.w-full.items-center.col-span-3.undefined > input',
  ).type(values.responsavel.nome);
  cy.wait(1000);
  cy.contains(values.cpf).should('exist');
  cy.get(
    'body > div.relative.flex.min-h-screen.flex-col > div.flex-1 > div > div > main > div:nth-child(3) > div > div > form > div.-mb-10.ml-5.grid.grid-cols-10.items-start.justify-center.gap-7 > div.flex-rows.relative.flex.w-full.items-center.col-span-3.undefined > input',
  ).clear();
  cy.wait(1000);

  cy.log('PESQUISA: Por Responsável 2');
  cy.get(
    'body > div.relative.flex.min-h-screen.flex-col > div.flex-1 > div > div > main > div:nth-child(3) > div > div > form > div.-mb-10.ml-5.grid.grid-cols-10.items-start.justify-center.gap-7 > div.flex-rows.relative.flex.w-full.items-center.col-span-3.undefined > input',
  ).type(values.responsavel2.nome);
  cy.wait(1000);
  cy.contains(values.cpf).should('exist');
  cy.get(
    'body > div.relative.flex.min-h-screen.flex-col > div.flex-1 > div > div > main > div:nth-child(3) > div > div > form > div.-mb-10.ml-5.grid.grid-cols-10.items-start.justify-center.gap-7 > div.flex-rows.relative.flex.w-full.items-center.col-span-3.undefined > input',
  ).clear();
  cy.wait(1000);

  // cy.log('PESQUISA: Por Contato');
  // cy.get(
  //   'body > div.relative.flex.min-h-screen.flex-col > div.flex-1 > div > div > main > div:nth-child(3) > div > div > form > div.-mb-10.ml-5.grid.grid-cols-10.items-start.justify-center.gap-7 > div.flex-rows.relative.flex.w-full.items-center.col-span-3.undefined > input',
  // ).type(values.contato.telefone);
  // cy.wait(1000);
  // cy.contains(values.cpf).should('exist');
  // cy.get(
  //   'body > div.relative.flex.min-h-screen.flex-col > div.flex-1 > div > div > main > div:nth-child(3) > div > div > form > div.-mb-10.ml-5.grid.grid-cols-10.items-start.justify-center.gap-7 > div.flex-rows.relative.flex.w-full.items-center.col-span-3.undefined > input',
  // ).clear();
  // cy.wait(1000);

  cy.log('PESQUISA: Por Nome');
  cy.get(
    'body > div.relative.flex.min-h-screen.flex-col > div.flex-1 > div > div > main > div:nth-child(3) > div > div > form > div.-mb-10.ml-5.grid.grid-cols-10.items-start.justify-center.gap-7 > div.flex-rows.relative.flex.w-full.items-center.col-span-3.undefined > input',
  ).type(values.nome);
  cy.wait(1000);
  cy.contains(values.cpf).should('exist');
  cy.get(
    'body > div.relative.flex.min-h-screen.flex-col > div.flex-1 > div > div > main > div:nth-child(3) > div > div > form > div.-mb-10.ml-5.grid.grid-cols-10.items-start.justify-center.gap-7 > div.flex-rows.relative.flex.w-full.items-center.col-span-3.undefined > input',
  ).clear();
  cy.wait(1000);

  cy.log('PESQUISA: Por CPF');
  cy.get(
    'body > div.relative.flex.min-h-screen.flex-col > div.flex-1 > div > div > main > div:nth-child(3) > div > div > form > div.-mb-10.ml-5.grid.grid-cols-10.items-start.justify-center.gap-7 > div.flex-rows.relative.flex.w-full.items-center.col-span-3.undefined > input',
  ).type(formatCPF(values.cpf));
  cy.wait(1000);
  cy.contains(values.cpf).should('exist');
});
