Cypress.Commands.add('TelasCadastrosSecretaria-educacao', (values) => {
  cy.log('PREENCHENDO: Guias do formulário');

  cy.log('GUIA: Identificação');
  cy.get('[name="razaoSocial"]').clear().type(values.razaoSocial);
  cy.get('[name="nomeFantasia"]').clear().type(values.nomeFantasia);
  cy.get('[name="cnpj"]').clear().type(values.cnpj);
  cy.get('[name="decreto"]').clear().type(values.decreto);
  cy.get('[name="naturezaJuridica"]').clear().type(values.naturezaJuridica);
  cy.get('[name="secretario"]').clear().type(values.secretario);
  cy.get('[name="prefeito"]').clear().type(values.prefeito);
  cy.get('#vincEnteFederativo > select').select(values.vincEnteFederativo, {
    force: true,
  });
  cy.get('[placeholder="DD/MM/AAAA"]').clear().type(values.dataCriacao);
  cy.get('button').contains('Próximo').click();

  cy.log('GUIA: Endereço');
  cy.commands('endereco', values.endereco);
  cy.get('button').contains('Próximo').click();

  cy.log('GUIA: Contato');
  cy.commands('contato', values.contato);
  cy.get('button').contains('Salvar').click();

  cy.contains('Secretaria cadastrada com sucesso!').should('exist');
});
