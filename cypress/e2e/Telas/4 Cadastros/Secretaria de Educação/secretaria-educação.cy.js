import { secretariaEducacaoFixtures as secretaria } from '../../../../fixtures';

describe('INICIANDO TESTE', () => {
  it('FAZENDO: Login', () => {
    cy.commands('auth.Login', 'ADMINISTRADOR');
  });

  it('ACESSANDO: Cadastrar Secretaria de Educação', () => {
    cy.visit('/dashboard/cadastro/secretaria');
  });

  it('CADASTRANDO: Secretaria de Educação', () => {
    cy.get(
      'body > div.relative.flex.min-h-screen.flex-col > div.flex-1 > div > div > main > div.flex.flex-row > div > div > span',
    ).contains('Cadastrar Secretaria de Educação');
    cy.commands('telas.cadastros.secretaria-educacao', secretaria);
  });

  it('CONSULTANDO: Secretaria de Educação', () => {
    cy.get(
      'body > div.relative.flex.min-h-screen.flex-col > div.flex-1 > div > div > main > div.flex.flex-row > div > div > span',
    ).contains('Consultar Secretarias de Educação');
    cy.commands('telas.consultas.secretaria-educacao', secretaria);
  });

  it('VISUALIZANDO: Secretaria de Educação', () => {
    cy.get(
      'body > div.relative.flex.min-h-screen.flex-col > div.flex-1 > div > div > main > div.flex.flex-row > div > div > span',
    ).contains('Consultar Secretarias de Educação');
    cy.commands('telas.consultas.secretaria-educacao.visualizar', secretaria);
  });

  it('CONSULTANDO: Secretaria de Educação', () => {
    cy.get(
      'body > div.relative.flex.min-h-screen.flex-col > div.flex-1 > div > div > main > div.flex.flex-row > div > div > span',
    ).contains('Consultar Secretarias de Educação');
    cy.commands('telas.consultas.secretaria-educacao', secretaria);
  });

  it('EDITANDO: Secretaria de Educação', () => {
    cy.get(
      'body > div.relative.flex.min-h-screen.flex-col > div.flex-1 > div > div > main > div.flex.flex-row > div > div > span',
    ).contains('Consultar Secretarias de Educação');
    cy.commands('telas.consultas.secretaria-educacao.editar', secretaria);
  });
  // Apartir desse ponto secretaria já foi alterado

  it('CONSULTANDO: Secretaria de Educação', () => {
    cy.get(
      'body > div.relative.flex.min-h-screen.flex-col > div.flex-1 > div > div > main > div.flex.flex-row > div > div > span',
    ).contains('Consultar Secretarias de Educação');
    cy.commands('telas.consultas.secretaria-educacao', secretaria);
  });

  it('VISUALIZANDO: Secretaria de Educação', () => {
    cy.get(
      'body > div.relative.flex.min-h-screen.flex-col > div.flex-1 > div > div > main > div.flex.flex-row > div > div > span',
    ).contains('Consultar Secretarias de Educação');
    cy.commands('telas.consultas.secretaria-educacao.visualizar', secretaria);
  });

  it('CONSULTANDO: Secretaria de Educação', () => {
    cy.get(
      'body > div.relative.flex.min-h-screen.flex-col > div.flex-1 > div > div > main > div.flex.flex-row > div > div > span',
    ).contains('Consultar Secretarias de Educação');
    cy.commands('telas.consultas.secretaria-educacao', secretaria);
  });

  it('DELETANDO: Secretaria de Educação', () => {
    cy.get(
      'body > div.relative.flex.min-h-screen.flex-col > div.flex-1 > div > div > main > div.flex.flex-row > div > div > span',
    ).contains('Consultar Secretarias de Educação');
    cy.commands('telas.consultas.secretaria-educacao.deletar', secretaria);
  });
});
