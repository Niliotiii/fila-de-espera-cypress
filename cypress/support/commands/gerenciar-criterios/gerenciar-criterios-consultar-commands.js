Cypress.Commands.add('TelasGerenciar-criteriosConsultar', (values) => {
  const childrenSelector =
    'body > div.relative.flex.min-h-screen.flex-col > div.flex-1 > div > div > main > div:nth-child(3) > div > div > form > div.-mb-10.ml-5.grid.grid-cols-10.items-start.justify-center.gap-7 > div.flex-rows.relative.flex.w-full.items-center.col-span-3.undefined > input';
  const colunas = [
    {
      nomeColuna: 'Critério',
      valorColuna: values.gruposPreferenciais,
    },
    {
      nomeColuna: 'Exigir Comprovacão',
      valorColuna: values.exigirComprovacao === 'true' ? 'Sim' : 'Não',
    },
  ];

  cy.log('ACESSANDO: Gerenciar Critérios');
  cy.visit('/dashboard/criterios/consultar-criterios');

  cy.wait(2000);

  cy.log('PESQUISANDO: Critério');

  colunas.forEach((coluna) => {
    cy.log(`PESQUISA: Por ${coluna.nomeColuna}`);
    cy.get(childrenSelector).type(coluna.valorColuna);
    cy.wait(1000);
    cy.contains(values.gruposPreferenciais).should('exist');
    cy.get(childrenSelector).clear();
  });
});
