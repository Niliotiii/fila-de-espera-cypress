Cypress.Commands.add('PerfilTroca-acesso', (values) => {
  cy.log('ACESSANDO: Consultar Servidores');
  cy.visit('/dashboard/consulta/servidor');

  cy.log('CONSULTANDO: Servidor');
  cy.get(
    'body > div.relative.flex.min-h-screen.flex-col > div.flex-1 > div > div > main > div.flex.flex-row > div > div > span',
  ).contains('Consultar Servidores');
  cy.commands('telas.consultas.servidor', values);

  cy.log('EDITANDO: Servidor');
  cy.get(
    'body > div.relative.flex.min-h-screen.flex-col > div.flex-1 > div > div > main > div.flex.flex-row > div > div > span',
  ).contains('Consultar Servidores');
  cy.commands('telas.consultas.servidor.editar', values);

  cy.wait(2000);
  cy.commands('auth.Login', 'AUX');
});
