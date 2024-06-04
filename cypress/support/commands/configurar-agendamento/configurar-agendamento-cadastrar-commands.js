Cypress.Commands.add('TelasConfigurar-agendamentoCadastrar', (values) => {
  cy.wait(2000);

  cy.log('PREENCHENDO: Guias do formulário');

  cy.log('GUIA: Informações Gerais');
  cy.get('#intervaloEntrevista > select').select(values?.intervaloEntrevista, {
    force: true,
  });
  cy.get('#numeroAtendimentoIntervalo > select').select(
    values?.numeroAtendimentoIntervalo,
    { force: true },
  );
  cy.get('#horarioFimMatutino > select').select(values?.horarioFimMatutino, {
    force: true,
  });
  cy.get('#horarioFimVespertino > select').select(
    values?.horarioFimVespertino,
    { force: true },
  );

  cy.get('body').then(($body) => {
    cy.wait(2000);
    if (
      $body.find('Sua secretária já realizou a configuração de agendamento')
        .length > 0
    ) {
      cy.log('⚠️ Agendamento já configurado!');
    } else {
      cy.get('button').contains('Salvar').click();
      cy.wait(2000);
      cy.contains('Agendamento cadastrado com sucesso!').should('exist');
    }
  });
});
