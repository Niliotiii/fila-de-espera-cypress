import { secretariaEducacaoFixtures } from "../../../../fixtures"

describe('INICIANDO TESTE', () => {
  it('FAZENDO: Login', () => {
    cy.login('ADMINISTRADOR')
  })
  it('ACESSANDO: Cadastrar Secretaria de Educação', () => {
    cy.wait(500)
    cy.visit('/dashboard/cadastro/secretaria')
  })
  it('CADASTRO DE SECRETARIA', () => {
    cy.commands('sections.cadastros.secretaria-educacao', secretariaEducacaoFixtures)
  })
}) 