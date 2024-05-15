import { turmaFixtures as turma } from '../../../../fixtures';

describe('INICIANDO TESTE', () => {
  it('FAZENDO: Login', () => {
    cy.commands('auth.Login', 'ADMINISTRADOR');
  });
  it('SELECIONANDO: Contexto de Secretaria de Educação', () => {
    cy.commands('context.secretaria-educacao', turma?.secretariaEducacao);
  });
  it('ACESSANDO: Cadastrar Turmas', () => {
    cy.visit('/dashboard/cadastro/turma');
    cy.get(
      'body > div.relative.flex.min-h-screen.flex-col > div.flex-1 > div > div > main > div.flex.flex-row > div > div > span',
    ).should('contain', 'Cadastrar Turmas');
  });

  it('CADASTRANDO: Turma', () => {
    cy.commands('telas.cadastros.turma', turma);
  });
});
