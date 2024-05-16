import { criancaFixtures } from "../../../../fixtures";

describe("INICIANDO TESTE", () => {
  it("FAZENDO: Login", () => {
    cy.commands("auth.Login", "ADMINISTRADOR");
  });
  it("ACESSANDO: Cadastrar Criança", () => {
    cy.visit("/dashboard/cadastro/criancas");
  });
  it("CADASTRANDO: Ciança", () => {
    cy.commands("telas.cadastros.crianca", criancaFixtures);
  });
});
