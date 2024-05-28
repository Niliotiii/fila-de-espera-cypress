Cypress.Commands.add('Contato', (values) => {
  cy.get('[name="telefones.0.numero"]').clear().type(values.telefone);
  cy.get('[name="telefones.0.contatoPreferencial"]')
    .clear()
    .type(values.nomeContato);
  cy.get('[name="emails.0.email"]').clear().type(values.email);
});
