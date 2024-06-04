Cypress.Commands.add('TelasConfigurar-agendamentoConsultar', (values) => {
  const childrenSelector =
    'body > div.relative.flex.min-h-screen.flex-col > div.flex-1 > div > div > main > div:nth-child(3) > div > div > form > div.ml-5.flex.flex-col.items-start.justify-center.gap-7.sm\\:grid.sm\\:grid-cols-10 > div.flex-rows.relative.flex.w-full.items-center.col-span-3.undefined > input';

  const colunas = [
    {
      nomeColuna: 'Secretaria de Educação',
      valorColuna: values.secretariaEducacao,
    },
    { nomeColuna: 'Intervalo', valorColuna: values.intervaloEntrevista },
    {
      nomeColuna: 'N° de atendimentos',
      valorColuna: values.numeroAtendimentoIntervalo,
    },
    { nomeColuna: 'Horário Matutino', valorColuna: values.horarioFimMatutino },
    {
      nomeColuna: 'Horário Vespertino',
      valorColuna: values.horarioFimVespertino,
    },
  ];

  cy.wait(2000);

  cy.log('PESQUISANDO: Configuração de Agendamento');

  colunas.forEach((coluna) => {
    cy.log(`PESQUISA: Por ${coluna.nomeColuna}`);
    cy.get(childrenSelector).type(coluna.valorColuna);
    cy.wait(1000);
    cy.contains(values.secretariaEducacaoRazaoSocial).should('exist');
    cy.get(childrenSelector).clear();
  });
});
