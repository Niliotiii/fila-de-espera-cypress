
Cypress.Commands.add('Endereco', (values) => {

  cy.get('[name="cep"]').type(values?.cep || '');
  cy.get('[name="numero"]').type(values?.numero || '');
  
  cy.get('button').contains('Selecione um distrito').click()
  cy.get('body').type('{enter}');
  cy.get('body').type('{esc}');
}) 