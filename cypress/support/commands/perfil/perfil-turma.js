Cypress.Commands.add('PerfilTurma', (turma) => {
  cy.log('ACESSANDO: Cadastrar Turmas');
  cy.visit('/dashboard/cadastro/turma');

  cy.log('CADASTRANDO: Turma');
  cy.get(
    'body > div.relative.flex.min-h-screen.flex-col > div.flex-1 > div > div > main > div.flex.flex-row > div > div > span',
  ).should('contain', 'Cadastrar Turmas');
  cy.commands('telas.cadastros.turma', turma);
  // DESCOMENTAR
  /*
  cy.log('CONSULTANDO: Turma');
  cy.get(
    'body > div.relative.flex.min-h-screen.flex-col > div.flex-1 > div > div > main > div.flex.flex-row > div > div > span',
  ).should('contain', 'Consultar Turmas');
  cy.commands('telas.consultas.turma', turma);

  cy.log('VISUALIZANDO: Turma');
  cy.get(
    'body > div.relative.flex.min-h-screen.flex-col > div.flex-1 > div > div > main > div.flex.flex-row > div > div > span',
  ).should('contain', 'Consultar Turmas');
  cy.commands('telas.consultas.turma.visualizar', turma);

  cy.log('CONSULTANDO: Turma');
  cy.get(
    'body > div.relative.flex.min-h-screen.flex-col > div.flex-1 > div > div > main > div.flex.flex-row > div > div > span',
  ).should('contain', 'Consultar Turmas');
  cy.commands('telas.consultas.turma', turma);

  cy.log('EDITANDO: Turma');
  cy.get(
    'body > div.relative.flex.min-h-screen.flex-col > div.flex-1 > div > div > main > div.flex.flex-row > div > div > span',
  ).should('contain', 'Consultar Turmas');
  cy.commands('telas.consultas.turma.editar', turma);

  cy.log('CONSULTANDO: Turma');
  cy.get(
    'body > div.relative.flex.min-h-screen.flex-col > div.flex-1 > div > div > main > div.flex.flex-row > div > div > span',
  ).should('contain', 'Consultar Turmas');
  cy.commands('telas.consultas.turma', turma);

  cy.log('VISUALIZANDO: Turma');
  cy.get(
    'body > div.relative.flex.min-h-screen.flex-col > div.flex-1 > div > div > main > div.flex.flex-row > div > div > span',
  ).should('contain', 'Consultar Turmas');
  cy.commands('telas.consultas.turma.visualizar', turma);*/
});
