import { configurarAgendamentoFixtures as configuracaoAgendamento } from '../../../../fixtures';

describe('INICIANDO TESTE', () => {
  it('FAZENDO: Login', () => {
    cy.commands('auth.Login', 'ADMINISTRADOR');
  });
  it('SELECIONANDO: Contexto', () => {
    cy.commands('context-sem-unidade-escolar');
  });
  it('CADASTRANDO: Gerenciar Agendamento', () => {
    cy.visit('/dashboard/agendamento/gerenciar-agendamentos');
    cy.commands(
      'telas.configurar-agendamento.cadastrar',
      configuracaoAgendamento,
    );
  });
  it('CONSULTANDO: Gerenciar Agendamentos', () => {
    cy.commands(
      'telas.configurar-agendamento.consultar',
      configuracaoAgendamento,
    );
  });
  it('VISUALIZANDO: Gerenciar Agendamentos', () => {
    cy.commands(
      'telas.configurar-agendamento.visualizar',
      configuracaoAgendamento,
    );
  });
  it('EDITANDO: Gerenciar Agendamentos', () => {
    cy.commands('telas.configurar-agendamento.editar', configuracaoAgendamento);
  });

  it('CONSULTANDO: Gerenciar Agendamentos', () => {
    cy.commands(
      'telas.configurar-agendamento.consultar',
      configuracaoAgendamento,
    );
  });

  it('VISUALIZANDO: Gerenciar Agendamentos', () => {
    cy.commands(
      'telas.configurar-agendamento.visualizar',
      configuracaoAgendamento,
    );
  });

  it('DELETAR: Gerenciar Agendamentos', () => {
    cy.commands(
      'telas.configurar-agendamento.deletar',
      configuracaoAgendamento,
    );
  });
});
