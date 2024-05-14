
Cypress.Commands.add('SectionsCadastrosSecretaria-educacao', (values) => {

  cy.log('PREENCHENDO: Guias do formulário')

  cy.log('GUIA: Identificação')
  cy.get('[name="razaoSocial"]').type(values?.razaoSocial || '');
  cy.get('[name="nomeFantasia"]').type(values?.nomeFantasia)
  cy.get('[name="cnpj"]').type(values?.cnpj)
  cy.get('[name="decreto"]').type(values?.decreto)
  cy.get('[name="naturezaJuridica"]').type(values?.naturezaJuridica)
  cy.get('[name="secretario"]').type(values?.secretario)
  cy.get('[name="prefeito"]').type(values?.prefeito)
  cy.get('#vincEnteFederativo > select').select(values?.vincEnteFederativo, { force: true });
  cy.get('[placeholder="DD/MM/AAAA"]').type(values?.dataCriacao)
  cy.get('button').contains('Próximo').click()

  cy.log('GUIA: Endereço')
  cy.commands('endereco', values)
  cy.get('button').contains('Próximo').click()

  cy.log('GUIA: Contato')
  cy.commands('contato', values)
  cy.get('button').contains('Salvar').click()
  
}) 