Cypress.Commands.add('PerfilReserva', (reserva) => {
  cy.log('ACESSANDO: Fila de Espera');
  cy.wait(2000);
  cy.visit('/dashboard/fila-de-espera');

  cy.log('CADASTRANDO: Reserva');
  cy.commands('telas.reserva.cadastrar', reserva);
  // DESCOMENTAR
  /*
    cy.commands('telas.reserva.consultar', reserva);

    cy.commands('telas.reserva.visualizar', reserva);
  */
});
