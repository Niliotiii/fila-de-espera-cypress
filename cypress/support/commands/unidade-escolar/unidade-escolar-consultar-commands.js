import formatCNPJ from '../../../helpers/format-cnpj';

Cypress.Commands.add('TelasConsultasUnidade-escolar', (values) => {
  cy.log('PESQUISANDO: Unidade Escolar');

  cy.log('PESQUISA: Por Cidade');
  cy.get(
    'body > div.relative.flex.min-h-screen.flex-col > div.flex-1 > div > div > main > div:nth-child(3) > div > div > form > div.-mb-10.ml-5.grid.grid-cols-10.items-start.justify-center.gap-7 > div.flex-rows.relative.flex.w-full.items-center.col-span-3.undefined > input',
  ).type(values.endereco.cidade);
  cy.wait(1000);
  cy.contains(values.cnpj).should('exist');
  cy.get(
    'body > div.relative.flex.min-h-screen.flex-col > div.flex-1 > div > div > main > div:nth-child(3) > div > div > form > div.-mb-10.ml-5.grid.grid-cols-10.items-start.justify-center.gap-7 > div.flex-rows.relative.flex.w-full.items-center.col-span-3.undefined > input',
  ).clear();
  cy.wait(1000);

  //   cy.log('PESQUISA: Por Secretaria');
  //   cy.get(
  //     'body > div.relative.flex.min-h-screen.flex-col > div.flex-1 > div > div > main > div:nth-child(3) > div > div > form > div.-mb-10.ml-5.grid.grid-cols-10.items-start.justify-center.gap-7 > div.flex-rows.relative.flex.w-full.items-center.col-span-3.undefined > input',
  //   ).type(values.secretariaEducacao);
  //   cy.wait(1000);
  //   cy.contains(values.cnpj).should('exist');
  //   cy.get(
  //     'body > div.relative.flex.min-h-screen.flex-col > div.flex-1 > div > div > main > div:nth-child(3) > div > div > form > div.-mb-10.ml-5.grid.grid-cols-10.items-start.justify-center.gap-7 > div.flex-rows.relative.flex.w-full.items-center.col-span-3.undefined > input',
  //   ).clear();
  //   cy.wait(1000);

  cy.log('PESQUISA: Por Razão Social');
  cy.get(
    'body > div.relative.flex.min-h-screen.flex-col > div.flex-1 > div > div > main > div:nth-child(3) > div > div > form > div.-mb-10.ml-5.grid.grid-cols-10.items-start.justify-center.gap-7 > div.flex-rows.relative.flex.w-full.items-center.col-span-3.undefined > input',
  ).type(values.razaoSocial);
  cy.wait(1000);
  cy.contains(values.cnpj).should('exist');
  cy.get(
    'body > div.relative.flex.min-h-screen.flex-col > div.flex-1 > div > div > main > div:nth-child(3) > div > div > form > div.-mb-10.ml-5.grid.grid-cols-10.items-start.justify-center.gap-7 > div.flex-rows.relative.flex.w-full.items-center.col-span-3.undefined > input',
  ).clear();
  cy.wait(1000);

  cy.log('PESQUISA: Por CNPJ');
  cy.get(
    'body > div.relative.flex.min-h-screen.flex-col > div.flex-1 > div > div > main > div:nth-child(3) > div > div > form > div.-mb-10.ml-5.grid.grid-cols-10.items-start.justify-center.gap-7 > div.flex-rows.relative.flex.w-full.items-center.col-span-3.undefined > input',
  ).type(formatCNPJ(values.cnpj));
  cy.wait(1000);
  cy.contains(values.cnpj).should('exist');
});
