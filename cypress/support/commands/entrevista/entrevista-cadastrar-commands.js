Cypress.Commands.add('TelasEntrevistaCadastrar', (values) => {
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

  if (values?.preferenciaUnidade2) {
    cy.get('#preferenciaUnidade2-form-item').click();
    cy.wait(500);
    cy.get('[placeholder="Pesquise uma unidade escolar"]').type(
      values?.preferenciaUnidade2,
    );
    cy.wait(4000);
    cy.get('body').type('{enter}{esc}');
  } else {
    cy.get('#preferenciaUnidade2-form-item').click();
    cy.wait(4000);
    cy.get('body').type('{enter}{esc}');
  }
  cy.wait(2000);
  cy.get('button').contains('Próximo').click();

  cy.log('GUIA: Critérios');
  cy.get('div[role="radiogroup"]').each(($radioGroup) => {
    cy.wrap($radioGroup)
      .find('button[role="radio"]')
      .each(($button) => {
        cy.wrap($button).then(($btn) => {
          const value = $btn.attr('value');
          if (value === 'false') {
            cy.wrap($btn).click();
          }
        });
      });
  });
  /*
  cy.get('div[role="radiogroup"]')
    .first()
    .within(() => {
      cy.get('button[role="radio"]').each(($button) => {
        cy.wrap($button).then(($btn) => {
          const value = $btn.attr('value');
          if (value === 'true') { 
            cy.wrap($btn).click();
          }
        });
      });
    });

  cy.get(
    ' #arquivo7 > div.mt-4.flex.items-center.justify-start > button',
  ).click();

  cy.get('#input-file-upload').attachFile(values.arquivo);
  cy.wait(500);
 
  cy.get('button').contains('Salvar').click();
  cy.get('body').type('{esc}');
   */
  cy.get('button').contains('Próximo').click();

  cy.log('GUIA: Dados Complementares');
  cy.get('#membrosEderecoCrianca-form-item').click();
  cy.get('body').type('{enter}');
  cy.get('#membrosContribuintesRenda-form-item').click();
  cy.get('body').type('{enter}');
  cy.get('#valorRendaFamiliar-form-item').type(values?.valorRendaFamiliar);
  cy.get('button').contains('Salvar').click();

  cy.wait(2000);
  cy.contains('Entrevista cadastrada com sucesso!').should('exist');
});
