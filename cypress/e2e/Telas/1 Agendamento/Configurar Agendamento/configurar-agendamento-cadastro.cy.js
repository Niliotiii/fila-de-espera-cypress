import { configurarAgendamentoFixtures } from "../../../../fixtures";

describe("INICIANDO TESTE", () => {
  it("FAZENDO: Login", () => {
    cy.commands("auth.Login", "ADMINISTRADOR");
  });
  it("SELECIONANDO: Contexto de Secretaria de Educação", () => {
    cy.commands(
      "context.secretaria-educacao",
      configurarAgendamentoFixtures?.secretariaEducacao,
    );
  });
  it("ACESSANDO: Configurar Agenda", () => {
    cy.visit("/dashboard/agendamento/gerenciar-agendamentos");
  });
  it("CADASTRANDO: Gerenciar Agendamento", () => {
    cy.commands(
      "telas.agendamento.configurar-agendamento",
      configurarAgendamentoFixtures,
    );
  });
});
