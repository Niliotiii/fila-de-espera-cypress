Cypress.Commands.add('TelasReservaConsultar', (values) => {
  const childrenSelector =
    'body > div.relative.flex.min-h-screen.flex-col > div.flex-1 > div > div > main > div:nth-child(3) > div > div > form > div.ml-5.grid.grid-cols-10.items-start.justify-center.gap-7.space-y-2 > div.flex-rows.relative.flex.w-full.items-center.col-span-3.undefined > input';
  const colunas = [
    {
      nomeColuna: 'Nome Criança',
      valorColuna: values?.nomeCrianca,
    },
  ];

  cy.log('ACESSANDO: Consultar Reservas de Vagas');
  cy.visit('/dashboard/consulta/reserva-vaga');

  cy.wait(2000);

  cy.log('PESQUISANDO: Reserva');

  colunas.forEach((coluna) => {
    cy.log(`PESQUISA: Por ${coluna.nomeColuna}`);
    cy.get(childrenSelector).type(coluna.valorColuna);
    cy.wait(2000);
    cy.get(childrenSelector).clear();
  });
});
