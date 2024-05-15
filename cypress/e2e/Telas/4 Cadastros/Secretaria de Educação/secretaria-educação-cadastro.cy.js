import { secretariaEducacaoFixtures } from "../../../../fixtures"

describe('INICIANDO TESTE', () => {
  it('FAZENDO: Login', () => {
    cy.commands('auth.Login', 'ADMINISTRADOR')
  })
  it('ACESSANDO: Cadastrar Secretaria de Educação', () => {
    cy.wait(500)
    cy.visit('/dashboard/cadastro/secretaria')
  })
  it('CADASTRANDO: Secretaria de Educação', () => {
    cy.commands('telas.cadastros.secretaria-educacao', secretariaEducacaoFixtures)
  })
});