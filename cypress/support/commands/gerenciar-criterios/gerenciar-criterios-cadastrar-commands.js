Cypress.Commands.add('TelasGerenciar-criteriosCadastrar', (values) => {
  cy.wait(2000);

  cy.log('ACESSANDO: Gerenciar Critérios');
  cy.visit('/dashboard/criterios/gerenciar-criterios');

  cy.log('GUIA: Informações Gerais');
  cy.get('[name="gruposPreferenciais"]')
    .clear()
    .type(values?.gruposPreferenciais);
  cy.get('#tipo-form-item').click();
  cy.get('body').type(`${values?.tipo === 'H' && '{downarrow}'}{enter}`);
  cy.get(`button[value="${values?.exigirComprovacao}"]`).click({ force: true });
  cy.get('button').contains('Adicionar').click();

  cy.contains('Critério adicionado!').should('exist');
});
