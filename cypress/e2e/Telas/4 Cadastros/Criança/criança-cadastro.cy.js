import { criancaFixtures } from '../../../../fixtures';

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
    cy.commands('telas.cadastros.crianca', criancaFixtures);
  });
  it('CONSULTANDO: Criança', () => {
    cy.get(
      'body > div.relative.flex.min-h-screen.flex-col > div.flex-1 > div > div > main > div.flex.flex-row > div > div > span',
    ).contains('Consultar Criança');
    cy.commands('telas.consultas.crianca', criancaFixtures);
  });
  it('DELETANDO: Criança', () => {
    cy.get(
      'body > div.relative.flex.min-h-screen.flex-col > div.flex-1 > div > div > main > div.flex.flex-row > div > div > span',
    ).contains('Consultar Criança');
    cy.commands('telas.consultas.crianca.delete', criancaFixtures);
  });
});
