import { entrevistaFixtures as entrevista } from '../../../fixtures';

describe('INICIANDO TESTE', () => {
  it('FAZENDO: Login', () => {
    cy.commands('auth.Login', 'ADMINISTRADOR');
  });
  it('SELECIONANDO: Contexto', () => {
    cy.commands('context-sem-unidade-escolar');
  });
  it.only('ACESSANDO: Entrevistar Candidato', () => {
    cy.wait(500);
    cy.visit('/dashboard/entervista/entrevistar-candidato');
  });
  it('CADASTRANDO: Entrevista', () => {
    cy.commands('telas.entrevista.cadastrar', entrevista);
  });
  it('CONSULTANDO: Entrevista', () => {
    cy.commands('telas.entrevista.consultar');
  });
  it('VISUALIZANDO: Entrevista', () => {
    cy.commands('telas.entrevista.visualizar');
  });
  it('EDITANDO: Entrevista', () => {
    cy.commands('telas.entrevista.editar', entrevista);
  });
  it('CONSULTANDO: Entrevista', () => {
    cy.commands('telas.entrevista.consultar');
  });
  it('VISUALIZANDO: Entrevista', () => {
    cy.commands('telas.entrevista.visualizar');
  });
});
