import { contextFixtures as context } from '../../../fixtures/context/context-fixtures';

Cypress.Commands.add('TelasEntrevistaConsultar', () => {
  const childrenSelector =
    'body > div.relative.flex.min-h-screen.flex-col > div.flex-1 > div > div > main > div:nth-child(3) > div > div > form > div.ml-5.flex.flex-col.items-start.justify-center.gap-7.space-y-2.sm\\:grid.sm\\:grid-cols-10 > div.flex-rows.relative.flex.w-full.items-center.col-span-3.top-2 > input';
  const colunas = [
    {
      nomeColuna: 'Nome da Criança',
      valorColuna: context.nomeCrianca,
    },
    {
      nomeColuna: 'CPF da Criança',
      valorColuna: context.cpfCrianca,
    },
    {
      nomeColuna: 'Etapa',
      valorColuna: context.etapa,
    },
    {
      nomeColuna: 'Turno',
      valorColuna: context.turno,
    },
  ];

  cy.log('ACESSANDO: Consultar Entrevista');
  cy.visit('/dashboard/entervista/consultar-entrevista');

  cy.wait(2000);

  cy.log('PESQUISANDO: Entrevista');

  colunas.forEach((coluna) => {
    cy.log(`PESQUISA: Por ${coluna.nomeColuna}`);
    cy.get(childrenSelector).type(coluna.valorColuna);
    cy.wait(2000);
    cy.contains(context.nomeCrianca).should('exist');
    cy.get(childrenSelector).clear();
  });
});
