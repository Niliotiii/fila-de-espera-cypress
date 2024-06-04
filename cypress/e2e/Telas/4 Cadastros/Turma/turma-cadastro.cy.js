import { turmaFixtures as turma } from '../../../../fixtures';

describe('INICIANDO TESTE', () => {
  it('FAZENDO: Login', () => {
    cy.commands('auth.Login', 'ADMINISTRADOR');
  });
  it('SELECIONANDO: Contexto', () => {
    cy.commands('context');
  });
  it('ACESSANDO: Cadastrar Turmas', () => {
    cy.visit('/dashboard/cadastro/turma');
  });
  it('CADASTRANDO: Turma', () => {
    cy.get(
      'body > div.relative.flex.min-h-screen.flex-col > div.flex-1 > div > div > main > div.flex.flex-row > div > div > span',
    ).should('contain', 'Cadastrar Turmas');
    cy.commands('telas.cadastros.turma', turma);
  });
});
