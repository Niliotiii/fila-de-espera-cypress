Cypress.Commands.add('TelasConfigurar-agendamentoVisualizar', (values) => {
  cy.wait(2000);

  cy.commands('utils.configurar-agendamento.search-item', {
    ...values,
    type: 'visualizar',
  });

  cy.log('VISUALIZANDO: Informações Gerais');
  cy.contains(values.secretariaEducacaoRazaoSocial).should('exist');
  cy.contains(values.numeroAtendimentoIntervalo).should('exist');
  cy.contains(values.horarioFimMatutino.replace(':', 'h')).should('exist');
  cy.contains(values.horarioFimVespertino.replace(':', 'h')).should('exist');

  cy.get('button').contains('Anterior').click();
});
