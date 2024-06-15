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
  it.only('CADASTRANDO: Reserva', () => {
    cy.commands('telas.reserva.cadastrar', reserva);
  });
  it('CONSULTANDO: Reserva', () => {
    cy.commands('telas.reserva.consultar', reserva);
  });
  it('VISUALIZANDO: Reserva', () => {
    cy.commands('telas.reserva.visualizar', reserva);
  });
  it('DELETAR: Reserva', () => {
    cy.commands('telas.reserva.deletar', reserva);
  });
});
