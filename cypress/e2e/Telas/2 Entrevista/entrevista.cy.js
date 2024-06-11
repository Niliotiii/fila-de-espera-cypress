import { entrevistaFixtures as entrevista } from '../../../fixtures';

describe('INICIANDO TESTE', () => {
  it.only('FAZENDO: Login', () => {
    cy.commands('auth.Login', 'ADMINISTRADOR');
  });
  it.only('SELECIONANDO: Contexto', () => {
    cy.commands('context-sem-unidade-escolar');
  });
  it('ACESSANDO: Entrevistar Candidato', () => {
    cy.wait(500);
    cy.visit('/dashboard/entervista/entrevistar-candidato');
  });
  it('CADASTRANDO: Entrevista', () => {
    cy.commands('telas.entrevista.cadastrar', entrevista);
  });
  it.only('CONSULTANDO: Entrevista', () => {
    cy.commands('telas.entrevista.consultar');
  });
  it.only('VISUALIZANDO: Entrevista', () => {
    cy.commands('telas.entrevista.visualizar');
  });
  it.only('EDITANDO: Entrevista', () => {
    cy.commands('telas.entrevista.editar');
  });
  it.only('CONSULTANDO: Entrevista', () => {
    cy.commands('telas.entrevista.consultar');
  });
  it.only('VISUALIZANDO: Entrevista', () => {
    cy.commands('telas.entrevista.visualizar');
  });
});
