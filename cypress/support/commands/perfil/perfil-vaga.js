Cypress.Commands.add('PerfilVaga', (vaga) => {
  cy.log(vaga.turma);
  cy.log('ACESSANDO: Cadastrar Vagas');
  cy.visit('/dashboard/cadastro/gerar-vaga');

  cy.log('CADASTRANDO: Vagas');
  cy.get(
    'body > div.relative.flex.min-h-screen.flex-col > div.flex-1 > div > div > main > div.flex.flex-row > div > div > span',
  ).should('contain', 'Cadastrar Vagas');
  cy.commands('telas.cadastros.vaga', vaga);
  // DESCOMENTAR
  /*
  cy.log('CONSULTANDO: Vagas');
  cy.get(
    'body > div.relative.flex.min-h-screen.flex-col > div.flex-1 > div > div > main > div.flex.flex-row > div > div > span',
  ).contains('Consultar Vagas');
  cy.commands('telas.consultas.vaga', vaga);

  cy.log('VISUALIZANDO: Vagas');
  cy.get(
    'body > div.relative.flex.min-h-screen.flex-col > div.flex-1 > div > div > main > div.flex.flex-row > div > div > span',
  ).contains('Consultar Vagas');
  cy.commands('telas.consultas.vaga.visualizar', vaga);
  */
});
