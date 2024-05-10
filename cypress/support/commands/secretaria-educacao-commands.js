
Cypress.Commands.add('SectionsCadastrosSecretaria-educacao', () => {
  cy.log('PREENCHENDO: Guias do formulário')
  cy.log('GUIA: Identificação')
  cy.get('[name="razaoSocial"]').clear().type('Secretaria de Educação de Teste')
  cy.get('[name="nomeFantasia"]').clear().type('Secretaria de Educação de Teste')
  cy.get('[name="cnpj"]').clear().type('12345678901234')
  cy.get('[name="decreto"]').clear().type('Secretaria de Educação de Teste')
  cy.get('[name="naturezaJuridica"]').clear().type('Secretaria de Educação de Teste')
  })