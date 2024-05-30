import { criancaFixtures as crianca } from '../../../../fixtures';

describe('INICIANDO TESTE', () => {
  it('FAZENDO: Login', () => {
    cy.commands('auth.Login', 'ADMINISTRADOR');
  });

  it('ACESSANDO: Cadastrar Criança', () => {
    cy.visit('/dashboard/cadastro/criancas');
  });

  it('CADASTRANDO: Ciança', () => {
    cy.get(
      'body > div.relative.flex.min-h-screen.flex-col > div.flex-1 > div > div > main > div.flex.flex-row > div > div > span',
    ).contains('Cadastrar Criança');
    cy.commands('telas.cadastros.crianca', crianca);
  });

  it('CONSULTANDO: Criança', () => {
    cy.get(
      'body > div.relative.flex.min-h-screen.flex-col > div.flex-1 > div > div > main > div.flex.flex-row > div > div > span',
    ).contains('Consultar Crianças');
    cy.commands('telas.consultas.crianca', crianca);
  });

  it('VISUALIZANDO: Criança', () => {
    cy.get(
      'body > div.relative.flex.min-h-screen.flex-col > div.flex-1 > div > div > main > div.flex.flex-row > div > div > span',
    ).contains('Consultar Crianças');
    cy.commands('telas.consultas.crianca.visualizar', crianca);
  });

  it('CONSULTANDO: Criança', () => {
    cy.get(
      'body > div.relative.flex.min-h-screen.flex-col > div.flex-1 > div > div > main > div.flex.flex-row > div > div > span',
    ).contains('Consultar Crianças');
    cy.commands('telas.consultas.crianca', crianca);
  });

  it('EDITANDO: Criança', () => {
    cy.get(
      'body > div.relative.flex.min-h-screen.flex-col > div.flex-1 > div > div > main > div.flex.flex-row > div > div > span',
    ).contains('Consultar Crianças');
    cy.commands('telas.consultas.crianca.editar', crianca);
  });
  // Apartir desse ponto crianca já foi alterado

  it('CONSULTANDO: Criança', () => {
    cy.get(
      'body > div.relative.flex.min-h-screen.flex-col > div.flex-1 > div > div > main > div.flex.flex-row > div > div > span',
    ).contains('Consultar Crianças');
    cy.commands('telas.consultas.crianca', crianca);
  });

  it('VISUALIZANDO: Criança', () => {
    cy.get(
      'body > div.relative.flex.min-h-screen.flex-col > div.flex-1 > div > div > main > div.flex.flex-row > div > div > span',
    ).contains('Consultar Crianças');
    cy.commands('telas.consultas.crianca.visualizar', crianca);
  });

  it('CONSULTANDO: Criança', () => {
    cy.get(
      'body > div.relative.flex.min-h-screen.flex-col > div.flex-1 > div > div > main > div.flex.flex-row > div > div > span',
    ).contains('Consultar Crianças');
    cy.commands('telas.consultas.crianca', crianca);
  });

  it('DELETANDO: Criança', () => {
    cy.get(
      'body > div.relative.flex.min-h-screen.flex-col > div.flex-1 > div > div > main > div.flex.flex-row > div > div > span',
    ).contains('Consultar Crianças');
    cy.commands('telas.consultas.crianca.deletar', crianca);
  });
});
