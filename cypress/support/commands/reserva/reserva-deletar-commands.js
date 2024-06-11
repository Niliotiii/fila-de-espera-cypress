Cypress.Commands.add('TelasReservaDeletar', (values) => {
  cy.wait(2000);

  cy.commands('utils.reserva.search-item', {
    ...values,
    type: 'deletar',
  });

  cy.contains(values.nomeCrianca).should('exist');
  cy.get('button').contains('Deletar').click();
});
