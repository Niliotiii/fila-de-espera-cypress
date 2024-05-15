Cypress.Commands.add("TelasAgendamentoConfigurar-agendamento", (values) => {
  cy.log("PREENCHENDO: Guias do formulário");

  cy.log("GUIA: Informações Gerais");
  cy.get("#intervaloEntrevista > select").select(values?.intervaloEntrevista, {
    force: true,
  });
  cy.get("#numeroAtendimentoIntervalo > select").select(
    values?.numeroAtendimentoIntervalo,
    { force: true },
  );
  cy.get("#horarioFimMatutino > select").select(values?.horarioFimMatutino, {
    force: true,
  });
  cy.get("#horarioFimVespertino > select").select(
    values?.horarioFimVespertino,
    { force: true },
  );

  cy.contains("Sua secretária já realizou a configuração de agendamento").then(
    ($element) => {
      if ($element.length) {
        cy.log("⚠️ Agendamento já configurado!");
      } else {
        cy.get("button").contains("Salvar").click();
        cy.contains("Agendamento configurado com sucesso!").should("exist");
      }
    },
  );
});
