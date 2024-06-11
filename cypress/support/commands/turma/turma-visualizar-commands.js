Cypress.Commands.add('TelasConsultasTurmaVisualizar', (values) => {
  cy.log('CLICANDO: No Ícone de Olho');
  cy.contains('table tbody tr td:nth-child(5) div span', values.nome)
    .parents('tr')
    .within(() => {
      cy.get('td:nth-child(8) > div > button:nth-child(1)').click();
    });

  cy.wait(1000);

  // Informações Gerais
  cy.contains(values.nome).should('exist');
  cy.contains(values.etapa).should('exist');
  cy.contains(values.turno).should('exist');
  cy.contains(values.periodoInicial).should('exist');
  cy.contains(values.periodoFinal).should('exist');
  cy.contains(values.horaInicial).should('exist');
  cy.contains(values.horaFinal).should('exist');
  cy.contains(values.tipoTurma).should('exist');
  cy.contains(values.anoLetivo).should('exist');
  //   cy.contains(values.situacao).should('exist');
  values.diasFuncionamento.forEach((dia) => {
    cy.contains(dia).should('exist');
  });

  cy.get('#details-page > div.flex.w-full.justify-end > button').click();
});
