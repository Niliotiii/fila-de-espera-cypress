Cypress.Commands.add('PerfilUnidade-escolar', (escola) => {
  cy.log('ACESSANDO: Cadastrar Secretaria de Educação');
  cy.visit('/dashboard/cadastro/unidade-escolar');

  cy.log('CADASTRANDO: Unidade Escolar');
  cy.get(
    'body > div.relative.flex.min-h-screen.flex-col > div.flex-1 > div > div > main > div.flex.flex-row > div > div > span',
  ).should('contain', 'Cadastrar Unidade Escolar');
  cy.commands('telas.cadastros.unidade-escolar', escola);

  cy.log('CONSULTANDO: Unidade Escolar');
  cy.get(
    'body > div.relative.flex.min-h-screen.flex-col > div.flex-1 > div > div > main > div.flex.flex-row > div > div > span',
  ).should('contain', 'Consultar Unidades Escolares');
  cy.commands('telas.consultas.unidade-escolar', escola);

  cy.log('VISUALIZANDO: Unidade Escolar');
  cy.get(
    'body > div.relative.flex.min-h-screen.flex-col > div.flex-1 > div > div > main > div.flex.flex-row > div > div > span',
  ).should('contain', 'Consultar Unidades Escolares');
  cy.commands('telas.consultas.unidade-escolar.visualizar', escola);

  cy.log('CONSULTANDO: Unidade Escolar');
  cy.get(
    'body > div.relative.flex.min-h-screen.flex-col > div.flex-1 > div > div > main > div.flex.flex-row > div > div > span',
  ).should('contain', 'Consultar Unidades Escolares');
  cy.commands('telas.consultas.unidade-escolar', escola);

  cy.log('EDITANDO: Unidade Escolar');
  cy.get(
    'body > div.relative.flex.min-h-screen.flex-col > div.flex-1 > div > div > main > div.flex.flex-row > div > div > span',
  ).should('contain', 'Consultar Unidades Escolares');
  cy.commands('telas.consultas.unidade-escolar.editar', escola);
  // Apartir desse ponto escola já foi alterado

  cy.log('CONSULTANDO: Unidade Escolar');
  cy.get(
    'body > div.relative.flex.min-h-screen.flex-col > div.flex-1 > div > div > main > div.flex.flex-row > div > div > span',
  ).should('contain', 'Consultar Unidades Escolares');
  cy.commands('telas.consultas.unidade-escolar', escola);

  cy.log('VISUALIZANDO: Unidade Escolar');
  cy.get(
    'body > div.relative.flex.min-h-screen.flex-col > div.flex-1 > div > div > main > div.flex.flex-row > div > div > span',
  ).should('contain', 'Consultar Unidades Escolares');
  cy.commands('telas.consultas.unidade-escolar.visualizar', escola);
});
