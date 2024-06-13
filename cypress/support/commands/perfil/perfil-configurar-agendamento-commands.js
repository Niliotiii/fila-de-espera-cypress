Cypress.Commands.add(
  'PerfilConfigurar-agendamento',
  (configuracaoAgendamento) => {
    cy.log('ACESSANDO: Gerenciar Agendamento');
    cy.visit('/dashboard/agendamento/gerenciar-agendamentos');

    cy.log('CADASTRANDO: Gerenciar Agendamento');
    cy.commands(
      'telas.configurar-agendamento.cadastrar',
      configuracaoAgendamento,
    );

    cy.log('CONSULTANDO: Gerenciar Agendamento');
    cy.commands(
      'telas.configurar-agendamento.consultar',
      configuracaoAgendamento,
    );

    cy.log('VISUALIZANDO: Gerenciar Agendamento');
    cy.commands(
      'telas.configurar-agendamento.visualizar',
      configuracaoAgendamento,
    );

    cy.log('EDITANDO: Gerenciar Agendamento');
    cy.commands('telas.configurar-agendamento.editar', configuracaoAgendamento);

    cy.log('CONSULTANDO: Gerenciar Agendamento');
    cy.commands(
      'telas.configurar-agendamento.consultar',
      configuracaoAgendamento,
    );

    cy.log('VISUALIZANDO: Gerenciar Agendamento');
    cy.commands(
      'telas.configurar-agendamento.visualizar',
      configuracaoAgendamento,
    );
  },
);
