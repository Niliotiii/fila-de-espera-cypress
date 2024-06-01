import { unidadeEscolarFixtures as escola } from '../../../../fixtures';

describe('INICIANDO TESTE', () => {
  it('FAZENDO: Login', () => {
    cy.commands('auth.Login', 'ADMINISTRADOR');
  });

  it('SELECIONANDO: Contexto de Secretaria de Educação', () => {
    cy.commands('context-sem-unidade-escolar');
  });

  it('ACESSANDO: Cadastrar Secretaria de Educação', () => {
    cy.visit('/dashboard/cadastro/unidade-escolar');
  });

  it('CADASTRANDO: Unidade Escolar', () => {
    cy.get(
      'body > div.relative.flex.min-h-screen.flex-col > div.flex-1 > div > div > main > div.flex.flex-row > div > div > span',
    ).should('contain', 'Cadastrar Unidade Escolar');
    cy.commands('telas.cadastros.unidade-escolar', escola);
  });

  it('CONSULTANDO: Unidade Escolar', () => {
    cy.get(
      'body > div.relative.flex.min-h-screen.flex-col > div.flex-1 > div > div > main > div.flex.flex-row > div > div > span',
    ).should('contain', 'Consultar Unidades Escolares');
    cy.commands('telas.consultas.unidade-escolar', escola);
  });

  it('VISUALIZANDO: Unidade Escolar', () => {
    cy.get(
      'body > div.relative.flex.min-h-screen.flex-col > div.flex-1 > div > div > main > div.flex.flex-row > div > div > span',
    ).should('contain', 'Consultar Unidades Escolares');
    cy.commands('telas.consultas.unidade-escolar.visualizar', escola);
  });

  it('CONSULTANDO: Unidade Escolar', () => {
    cy.get(
      'body > div.relative.flex.min-h-screen.flex-col > div.flex-1 > div > div > main > div.flex.flex-row > div > div > span',
    ).should('contain', 'Consultar Unidades Escolares');
    cy.commands('telas.consultas.unidade-escolar', escola);
  });

  it('EDITANDO: Unidade Escolar', () => {
    cy.get(
      'body > div.relative.flex.min-h-screen.flex-col > div.flex-1 > div > div > main > div.flex.flex-row > div > div > span',
    ).should('contain', 'Consultar Unidades Escolares');
    cy.commands('telas.consultas.unidade-escolar.editar', escola);
  });
  // Apartir desse ponto escola já foi alterado

  it('CONSULTANDO: Unidade Escolar', () => {
    cy.get(
      'body > div.relative.flex.min-h-screen.flex-col > div.flex-1 > div > div > main > div.flex.flex-row > div > div > span',
    ).should('contain', 'Consultar Unidades Escolares');
    cy.commands('telas.consultas.unidade-escolar', escola);
  });

  it('VISUALIZANDO: Unidade Escolar', () => {
    cy.get(
      'body > div.relative.flex.min-h-screen.flex-col > div.flex-1 > div > div > main > div.flex.flex-row > div > div > span',
    ).should('contain', 'Consultar Unidades Escolares');
    cy.commands('telas.consultas.unidade-escolar.visualizar', escola);
  });

  it('CONSULTANDO: Unidade Escolar', () => {
    cy.get(
      'body > div.relative.flex.min-h-screen.flex-col > div.flex-1 > div > div > main > div.flex.flex-row > div > div > span',
    ).should('contain', 'Consultar Unidades Escolares');
    cy.commands('telas.consultas.unidade-escolar', escola);
  });

  it('DELETANDO: Unidade Escolar', () => {
    cy.get(
      'body > div.relative.flex.min-h-screen.flex-col > div.flex-1 > div > div > main > div.flex.flex-row > div > div > span',
    ).should('contain', 'Consultar Unidades Escolares');
    cy.commands('telas.consultas.unidade-escolar.deletar', escola);
  });
});
