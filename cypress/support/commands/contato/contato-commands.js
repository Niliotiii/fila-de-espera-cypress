
Cypress.Commands.add('Contato', (values) => {

  cy.get('[name="telefones.0.numero"]').type(values?.telefone || '');
  cy.get('[name="telefones.0.contatoPreferencial"]').type(values?.nomeContato || '');
  cy.get('[name="emails.0.email"]').type(values?.email || '');
  
}) 