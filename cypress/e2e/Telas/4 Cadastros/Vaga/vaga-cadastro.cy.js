import { vagaFixtures as vaga } from '../../../../fixtures';

describe('INICIANDO TESTE', () => {
  it('FAZENDO: Login', () => {
    cy.commands('auth.Login', 'ADMINISTRADOR');
  });
  it('SELECIONANDO: Contexto de Secretaria de Educação', () => {
    cy.commands(
      'context.secretaria-educacao',
      vagaFixtures()?.secretariaEducacao,
    );
  });
  it('ACESSANDO: Cadastrar Vaga', () => {
    cy.visit('/dashboard/cadastro/gerar-vaga');
  });
  it('CADASTRANDO: Vagas', () => {
    cy.get(
      'body > div.relative.flex.min-h-screen.flex-col > div.flex-1 > div > div > main > div.flex.flex-row > div > div > span',
    ).should('contain', 'Cadastrar Vagas');
    cy.commands('telas.cadastros.vaga', vaga());
  });
});
