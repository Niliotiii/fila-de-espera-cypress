import { unidadeEscolarFixtures } from "../../../../fixtures";

describe("INICIANDO TESTE", () => {
  it("FAZENDO: Login", () => {
    cy.commands("auth.Login", "ADMINISTRADOR");
  });
  it("SELECIONANDO: Contexto de Secretaria de Educação", () => {
    cy.commands(
      "context.secretaria-educacao",
      unidadeEscolarFixtures?.secretariaEducacao,
    );
  });
  it("ACESSANDO: Cadastrar Secretaria de Educação", () => {
    cy.visit("/dashboard/cadastro/unidade-escolar");
    cy.get(
      "body > div.relative.flex.min-h-screen.flex-col > div.flex-1 > div > div > main > div.flex.flex-row > div > div > span",
    ).should("contain", "Cadastrar Unidade Escolar");
  });

  it("CADASTRANDO: Unidade Escolar", () => {
    cy.commands("telas.cadastros.unidade-escolar", unidadeEscolarFixtures);
  });
});
