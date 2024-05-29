import { reservaFixtures as reserva } from '../../../fixtures/reserva/reserva-fixtures';

describe('INICIANDO TESTE', () => {
  it('FAZENDO: Login', () => {
    cy.commands('auth.Login', 'ADMINISTRADOR');
  });
  it('SELECIONANDO: Contexto', () => {
    cy.commands('context');
  });
  it('ACESSANDO: Fila de Espera', () => {
    cy.wait(500);
    cy.visit('/dashboard/fila-de-espera');
  });
  it('CADASTRANDO: Reserva', () => {
    cy.commands('telas.reserva', reserva);
  });
});
