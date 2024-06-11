import {
  turmaFixtures as turma,
  vagaFixtures as vaga,
} from '../../../../fixtures';

describe('INICIANDO TESTE', () => {
  it('FAZENDO: Login', () => {
    cy.commands('auth.Login', 'ADMINISTRADOR');
  });

  it('SELECIONANDO: Contexto', () => {
    cy.commands('context-sem-unidade-escolar');
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

  it('ACESSANDO: Cadastrar Vagas', () => {
    cy.visit('/dashboard/cadastro/gerar-vaga');
  });

  it('CADASTRANDO: Vagas', () => {
    cy.get(
      'body > div.relative.flex.min-h-screen.flex-col > div.flex-1 > div > div > main > div.flex.flex-row > div > div > span',
    ).should('contain', 'Cadastrar Vagas');
    cy.commands('telas.cadastros.vaga', vaga);
  });

  it('CONSULTANDO: Vagas', () => {
    cy.get(
      'body > div.relative.flex.min-h-screen.flex-col > div.flex-1 > div > div > main > div.flex.flex-row > div > div > span',
    ).contains('Consultar Vagas');
    cy.commands('telas.consultas.vaga', vaga);
  });

  it('VISUALIZANDO: Vagas', () => {
    cy.get(
      'body > div.relative.flex.min-h-screen.flex-col > div.flex-1 > div > div > main > div.flex.flex-row > div > div > span',
    ).contains('Consultar Vagas');
    cy.commands('telas.consultas.vaga.visualizar', vaga);
  });

  it('DELETANDO: Vagas', () => {
    cy.get(
      'body > div.relative.flex.min-h-screen.flex-col > div.flex-1 > div > div > main > div.flex.flex-row > div > div > span',
    ).contains('Consultar Vagas');
    cy.commands('telas.consultas.vaga.deletar', vaga);
  });

  it('ACESSANDO: Consultar Turmas', () => {
    cy.visit('/dashboard/consulta/turma');
  });

  it('CONSULTANDO: Turma', () => {
    cy.get(
      'body > div.relative.flex.min-h-screen.flex-col > div.flex-1 > div > div > main > div.flex.flex-row > div > div > span',
    ).should('contain', 'Consultar Turmas');
    cy.commands('telas.consultas.turma', turma);
  });

  it('DELETANDO: Turma', () => {
    cy.get(
      'body > div.relative.flex.min-h-screen.flex-col > div.flex-1 > div > div > main > div.flex.flex-row > div > div > span',
    ).should('contain', 'Consultar Turmas');
    cy.commands('telas.consultas.turma.deletar', turma);
  });
});
