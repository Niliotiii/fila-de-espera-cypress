Cypress.Commands.add('PerfilSecretaria-educacao', (secretaria) => {
  cy.log('ACESSANDO: Cadastrar Secretaria de Educação');
  cy.visit('/dashboard/cadastro/secretaria');

  cy.log('CADASTRANDO: Secretaria de Educação');
  cy.get(
    'body > div.relative.flex.min-h-screen.flex-col > div.flex-1 > div > div > main > div.flex.flex-row > div > div > span',
  ).contains('Cadastrar Secretaria de Educação');
  cy.commands('telas.cadastros.secretaria-educacao', secretaria);
  // DESCOMENTAR
  /*
  cy.log('CONSULTANDO: Secretaria de Educação');
  cy.get(
    'body > div.relative.flex.min-h-screen.flex-col > div.flex-1 > div > div > main > div.flex.flex-row > div > div > span',
  ).contains('Consultar Secretarias de Educação');
  cy.commands('telas.consultas.secretaria-educacao', secretaria);

  cy.log('VISUALIZANDO: Secretaria de Educação');
  cy.get(
    'body > div.relative.flex.min-h-screen.flex-col > div.flex-1 > div > div > main > div.flex.flex-row > div > div > span',
  ).contains('Consultar Secretarias de Educação');
  cy.commands('telas.consultas.secretaria-educacao.visualizar', secretaria);

  cy.log('CONSULTANDO: Secretaria de Educação');
  cy.get(
    'body > div.relative.flex.min-h-screen.flex-col > div.flex-1 > div > div > main > div.flex.flex-row > div > div > span',
  ).contains('Consultar Secretarias de Educação');
  cy.commands('telas.consultas.secretaria-educacao', secretaria);

  cy.log('EDITANDO: Secretaria de Educação');
  cy.get(
    'body > div.relative.flex.min-h-screen.flex-col > div.flex-1 > div > div > main > div.flex.flex-row > div > div > span',
  ).contains('Consultar Secretarias de Educação');
  cy.commands('telas.consultas.secretaria-educacao.editar', secretaria);
  // Apartir desse ponto secretaria já foi alterado

  cy.log('CONSULTANDO: Secretaria de Educação');
  cy.get(
    'body > div.relative.flex.min-h-screen.flex-col > div.flex-1 > div > div > main > div.flex.flex-row > div > div > span',
  ).contains('Consultar Secretarias de Educação');
  cy.commands('telas.consultas.secretaria-educacao', secretaria);

  cy.log('VISUALIZANDO: Secretaria de Educação');
  cy.get(
    'body > div.relative.flex.min-h-screen.flex-col > div.flex-1 > div > div > main > div.flex.flex-row > div > div > span',
  ).contains('Consultar Secretarias de Educação');
  cy.commands('telas.consultas.secretaria-educacao.visualizar', secretaria);
  */
});
