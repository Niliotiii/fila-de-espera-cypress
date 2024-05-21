import { entrevistaFixtures as entrevista } from '../../../fixtures';

describe('INICIANDO TESTE', () => {
  it('FAZENDO: Login', () => {
    cy.commands('auth.Login', 'ADMINISTRADOR');
  });
  it('SELECIONANDO: Contexto', () => {
    cy.commands('context');
  });
  it('ACESSANDO: Entrevistar Candidato', () => {
    cy.wait(500);
    cy.visit('/dashboard/entervista/entrevistar-candidato');
  });
  it('CADASTRANDO: Entrevista', () => {
    cy.commands('telas.entrevista', entrevista);
  });
});
