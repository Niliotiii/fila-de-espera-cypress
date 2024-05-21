Cypress.Commands.add('TelasEntrevista', (values) => {
  cy.log('PREENCHENDO: Guias do formulário');

  cy.log('GUIA: Identificação');
  cy.get('[name="cpfCrianca"]').type(values?.cpfCrianca);
  cy.wait(2000);
  cy.get('button').contains('Próximo').click();

  cy.log('GUIA: Entrevista');
  cy.get('#tipoResponsavel-form-item').click();
  cy.get('body').type('{enter}');
  cy.get('button').contains('Próximo').click();

  cy.log('GUIA: Unidade de Preferência');
  cy.get('#etapa-form-item').click();
  cy.get('body').type('{enter}');
  cy.get('#preferenciaTurno-form-item').click();
  cy.get('body').type('{enter}');
  cy.get('#preferenciaUnidade-form-item').click();
  cy.get('[placeholder="Pesquise uma unidade escolar"]').type(
    values.preferenciaUnidadeEscolar1,
  );
  cy.wait(500);
  cy.get('body').type('{enter}{esc}');
  cy.get('#preferenciaUnidade2-form-item').click();
  cy.wait(500);
  cy.get('body').type('{enter}{esc}');

  cy.get('button').contains('Próximo').click();

  // cy.get('button').contains('Salvar').click();

  // cy.contains('Secretaria cadastrada com sucesso!').should('exist');
});
