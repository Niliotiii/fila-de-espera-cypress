import { servidorFixtures as servidor } from '../../../../fixtures';

describe('INICIANDO TESTE', () => {
  it('FAZENDO: Login', () => {
    cy.commands('auth.Login', 'ADMINISTRADOR');
  });

  it('ACESSANDO: Cadastrar Servidores', () => {
    cy.visit('/dashboard/cadastro/servidor');
  });

  it('CADASTRANDO: Servidor', () => {
    cy.get(
      'body > div.relative.flex.min-h-screen.flex-col > div.flex-1 > div > div > main > div.flex.flex-row > div > div > span',
    ).contains('Cadastrar Servidores');
    cy.commands('telas.cadastros.servidor', servidor);
  });

  it('CONSULTANDO: Servidor', () => {
    cy.get(
      'body > div.relative.flex.min-h-screen.flex-col > div.flex-1 > div > div > main > div.flex.flex-row > div > div > span',
    ).contains('Consultar Servidores');
    cy.commands('telas.consultas.servidor', servidor);
  });

  it('VISUALIZANDO: Servidor', () => {
    cy.get(
      'body > div.relative.flex.min-h-screen.flex-col > div.flex-1 > div > div > main > div.flex.flex-row > div > div > span',
    ).contains('Consultar Servidores');
    cy.commands('telas.consultas.servidor.visualizar', servidor);
  });

  it('CONSULTANDO: Servidor', () => {
    cy.get(
      'body > div.relative.flex.min-h-screen.flex-col > div.flex-1 > div > div > main > div.flex.flex-row > div > div > span',
    ).contains('Consultar Servidores');
    cy.commands('telas.consultas.servidor', servidor);
  });

  it('EDITANDO: Servidor', () => {
    cy.get(
      'body > div.relative.flex.min-h-screen.flex-col > div.flex-1 > div > div > main > div.flex.flex-row > div > div > span',
    ).contains('Consultar Servidores');
    cy.commands('telas.consultas.servidor.editar', servidor);
  });
  // Apartir desse ponto servidor já foi alterado

  it('CONSULTANDO: Servidor', () => {
    cy.get(
      'body > div.relative.flex.min-h-screen.flex-col > div.flex-1 > div > div > main > div.flex.flex-row > div > div > span',
    ).contains('Consultar Servidores');
    cy.commands('telas.consultas.servidor', servidor);
  });

  it('VISUALIZANDO: Servidor', () => {
    cy.get(
      'body > div.relative.flex.min-h-screen.flex-col > div.flex-1 > div > div > main > div.flex.flex-row > div > div > span',
    ).contains('Consultar Servidores');
    cy.commands('telas.consultas.servidor.visualizar', servidor);
  });

  it('CONSULTANDO: Servidor', () => {
    cy.get(
      'body > div.relative.flex.min-h-screen.flex-col > div.flex-1 > div > div > main > div.flex.flex-row > div > div > span',
    ).contains('Consultar Servidores');
    cy.commands('telas.consultas.servidor', servidor);
  });

  it('DELETANDO: Servidor', () => {
    cy.get(
      'body > div.relative.flex.min-h-screen.flex-col > div.flex-1 > div > div > main > div.flex.flex-row > div > div > span',
    ).contains('Consultar Servidores');
    cy.commands('telas.consultas.servidor.deletar', servidor);
  });
});
