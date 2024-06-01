import formatCPF from '../../../helpers/format-cpf';

Cypress.Commands.add('TelasConsultasServidor', (values) => {
  cy.log('PESQUISANDO: Servidor');

  cy.log('PESQUISA: Por Vínculo');
  cy.get(
    'body > div.relative.flex.min-h-screen.flex-col > div.flex-1 > div > div > main > div:nth-child(3) > div > div > form > div.-mb-10.ml-5.grid.grid-cols-10.items-start.justify-center.gap-7 > div.flex-rows.relative.flex.w-full.items-center.col-span-3.undefined > input',
  ).type(values.tipoVinculo);
  cy.wait(1000);
  cy.contains(values.cpf).should('exist');
  cy.get(
    'body > div.relative.flex.min-h-screen.flex-col > div.flex-1 > div > div > main > div:nth-child(3) > div > div > form > div.-mb-10.ml-5.grid.grid-cols-10.items-start.justify-center.gap-7 > div.flex-rows.relative.flex.w-full.items-center.col-span-3.undefined > input',
  ).clear();
  cy.wait(1000);

  cy.log('PESQUISA: Por Cargo');
  cy.get(
    'body > div.relative.flex.min-h-screen.flex-col > div.flex-1 > div > div > main > div:nth-child(3) > div > div > form > div.-mb-10.ml-5.grid.grid-cols-10.items-start.justify-center.gap-7 > div.flex-rows.relative.flex.w-full.items-center.col-span-3.undefined > input',
  ).type(values.cargo);
  cy.wait(1000);
  cy.contains(values.cpf).should('exist');
  cy.get(
    'body > div.relative.flex.min-h-screen.flex-col > div.flex-1 > div > div > main > div:nth-child(3) > div > div > form > div.-mb-10.ml-5.grid.grid-cols-10.items-start.justify-center.gap-7 > div.flex-rows.relative.flex.w-full.items-center.col-span-3.undefined > input',
  ).clear();
  cy.wait(1000);

  cy.log('PESQUISA: Por Telefone');
  cy.get(
    'body > div.relative.flex.min-h-screen.flex-col > div.flex-1 > div > div > main > div:nth-child(3) > div > div > form > div.-mb-10.ml-5.grid.grid-cols-10.items-start.justify-center.gap-7 > div.flex-rows.relative.flex.w-full.items-center.col-span-3.undefined > input',
  ).type(values.contato.telefone);
  cy.wait(1000);
  cy.contains(values.cpf).should('exist');
  cy.get(
    'body > div.relative.flex.min-h-screen.flex-col > div.flex-1 > div > div > main > div:nth-child(3) > div > div > form > div.-mb-10.ml-5.grid.grid-cols-10.items-start.justify-center.gap-7 > div.flex-rows.relative.flex.w-full.items-center.col-span-3.undefined > input',
  ).clear();
  cy.wait(1000);

  cy.log('PESQUISA: Por Email');
  cy.get(
    'body > div.relative.flex.min-h-screen.flex-col > div.flex-1 > div > div > main > div:nth-child(3) > div > div > form > div.-mb-10.ml-5.grid.grid-cols-10.items-start.justify-center.gap-7 > div.flex-rows.relative.flex.w-full.items-center.col-span-3.undefined > input',
  ).type(values.contato.email);
  cy.wait(1000);
  cy.contains(values.cpf).should('exist');
  cy.get(
    'body > div.relative.flex.min-h-screen.flex-col > div.flex-1 > div > div > main > div:nth-child(3) > div > div > form > div.-mb-10.ml-5.grid.grid-cols-10.items-start.justify-center.gap-7 > div.flex-rows.relative.flex.w-full.items-center.col-span-3.undefined > input',
  ).clear();
  cy.wait(1000);

  cy.log('PESQUISA: Por Nome');
  cy.get(
    'body > div.relative.flex.min-h-screen.flex-col > div.flex-1 > div > div > main > div:nth-child(3) > div > div > form > div.-mb-10.ml-5.grid.grid-cols-10.items-start.justify-center.gap-7 > div.flex-rows.relative.flex.w-full.items-center.col-span-3.undefined > input',
  ).type(values.contato.email);
  cy.wait(1000);
  cy.contains(values.cpf).should('exist');
  cy.get(
    'body > div.relative.flex.min-h-screen.flex-col > div.flex-1 > div > div > main > div:nth-child(3) > div > div > form > div.-mb-10.ml-5.grid.grid-cols-10.items-start.justify-center.gap-7 > div.flex-rows.relative.flex.w-full.items-center.col-span-3.undefined > input',
  ).clear();
  cy.wait(1000);

  cy.log('PESQUISA: Por Usuário');
  cy.get(
    'body > div.relative.flex.min-h-screen.flex-col > div.flex-1 > div > div > main > div:nth-child(3) > div > div > form > div.-mb-10.ml-5.grid.grid-cols-10.items-start.justify-center.gap-7 > div.flex-rows.relative.flex.w-full.items-center.col-span-3.undefined > input',
  ).type(formatCPF(values.cpf));
  cy.wait(1000);
  cy.contains(values.cpf).should('exist');
});
