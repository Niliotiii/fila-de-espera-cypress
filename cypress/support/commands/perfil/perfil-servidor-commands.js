Cypress.Commands.add('PerfilServidor', (servidor) => {
  cy.log('ACESSANDO: Cadastrar Servidores');
  cy.visit('/dashboard/cadastro/servidor');
  cy.wait(1000);

  cy.log('CADASTRANDO: Servidor');
  cy.get(
    'body > div.relative.flex.min-h-screen.flex-col > div.flex-1 > div > div > main > div.flex.flex-row > div > div > span',
  ).contains('Cadastrar Servidores');
  cy.commands('telas.cadastros.servidor', servidor);

  cy.log('CONSULTANDO: Servidor');
  cy.get(
    'body > div.relative.flex.min-h-screen.flex-col > div.flex-1 > div > div > main > div.flex.flex-row > div > div > span',
  ).contains('Consultar Servidores');
  cy.commands('telas.consultas.servidor', servidor);

  cy.log('VISUALIZANDO: Servidor');
  cy.get(
    'body > div.relative.flex.min-h-screen.flex-col > div.flex-1 > div > div > main > div.flex.flex-row > div > div > span',
  ).contains('Consultar Servidores');
  cy.commands('telas.consultas.servidor.visualizar', servidor);

  cy.log('CONSULTANDO: Servidor');
  cy.get(
    'body > div.relative.flex.min-h-screen.flex-col > div.flex-1 > div > div > main > div.flex.flex-row > div > div > span',
  ).contains('Consultar Servidores');
  cy.commands('telas.consultas.servidor', servidor);

  cy.log('EDITANDO: Servidor');
  cy.get(
    'body > div.relative.flex.min-h-screen.flex-col > div.flex-1 > div > div > main > div.flex.flex-row > div > div > span',
  ).contains('Consultar Servidores');
  cy.commands('telas.consultas.servidor.editar', servidor);

  cy.log('CONSULTANDO: Servidor');
  cy.get(
    'body > div.relative.flex.min-h-screen.flex-col > div.flex-1 > div > div > main > div.flex.flex-row > div > div > span',
  ).contains('Consultar Servidores');
  cy.commands('telas.consultas.servidor', servidor);

  cy.log('VISUALIZANDO: Servidor');
  cy.get(
    'body > div.relative.flex.min-h-screen.flex-col > div.flex-1 > div > div > main > div.flex.flex-row > div > div > span',
  ).contains('Consultar Servidores');
  cy.commands('telas.consultas.servidor.visualizar', servidor);

  cy.log('CONSULTANDO: Servidor');
  cy.get(
    'body > div.relative.flex.min-h-screen.flex-col > div.flex-1 > div > div > main > div.flex.flex-row > div > div > span',
  ).contains('Consultar Servidores');
  cy.commands('telas.consultas.servidor', servidor);
});
