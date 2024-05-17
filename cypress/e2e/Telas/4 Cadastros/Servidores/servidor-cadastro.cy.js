import { servidorFixtures as servidor } from "../../../../fixtures";

describe("INICIANDO TESTE", () => {
  it("FAZENDO: Login", () => {
    cy.commands("auth.Login", "ADMINISTRADOR");
  });
  it("ACESSANDO: Cadastrar Servidores", () => {
    cy.visit("/dashboard/cadastro/servidor");
  });
  it("CADASTRANDO: Servidor", () => {
    cy.commands("telas.cadastros.servidor", servidor);
  });
});
