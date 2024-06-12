Cypress.Commands.add('PerfilCrianca', (crianca) => {
  cy.log('ACESSANDO: Cadastrar Criança');
  cy.visit('/dashboard/cadastro/criancas');
  cy.wait(1000);

  cy.log('CADASTRANDO: Ciança');
  cy.get(
    'body > div.relative.flex.min-h-screen.flex-col > div.flex-1 > div > div > main > div.flex.flex-row > div > div > span',
  ).contains('Cadastrar Criança');
  cy.commands('telas.cadastros.crianca', crianca);

  cy.log('CONSULTANDO: Criança');
  cy.get(
    'body > div.relative.flex.min-h-screen.flex-col > div.flex-1 > div > div > main > div.flex.flex-row > div > div > span',
  ).contains('Consultar Crianças');
  cy.commands('telas.consultas.crianca', crianca);

  cy.log('VISUALIZANDO: Criança');
  cy.get(
    'body > div.relative.flex.min-h-screen.flex-col > div.flex-1 > div > div > main > div.flex.flex-row > div > div > span',
  ).contains('Consultar Crianças');
  cy.commands('telas.consultas.crianca.visualizar', crianca);

  cy.log('CONSULTANDO: Criança');
  cy.get(
    'body > div.relative.flex.min-h-screen.flex-col > div.flex-1 > div > div > main > div.flex.flex-row > div > div > span',
  ).contains('Consultar Crianças');
  cy.commands('telas.consultas.crianca', crianca);

  cy.log('EDITANDO: Criança');
  cy.get(
    'body > div.relative.flex.min-h-screen.flex-col > div.flex-1 > div > div > main > div.flex.flex-row > div > div > span',
  ).contains('Consultar Crianças');
  cy.commands('telas.consultas.crianca.editar', crianca);

  cy.log('CONSULTANDO: Criança');
  cy.get(
    'body > div.relative.flex.min-h-screen.flex-col > div.flex-1 > div > div > main > div.flex.flex-row > div > div > span',
  ).contains('Consultar Crianças');
  cy.commands('telas.consultas.crianca', crianca);

  cy.log('VISUALIZANDO: Criança');
  cy.get(
    'body > div.relative.flex.min-h-screen.flex-col > div.flex-1 > div > div > main > div.flex.flex-row > div > div > span',
  ).contains('Consultar Crianças');
  cy.commands('telas.consultas.crianca.visualizar', crianca);

  cy.log('CONSULTANDO: Criança');
  cy.get(
    'body > div.relative.flex.min-h-screen.flex-col > div.flex-1 > div > div > main > div.flex.flex-row > div > div > span',
  ).contains('Consultar Crianças');
  cy.commands('telas.consultas.crianca', crianca);
});
