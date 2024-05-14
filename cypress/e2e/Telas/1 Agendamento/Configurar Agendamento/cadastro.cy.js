import { configurarAgendamentoFixtures } from "../../../../fixtures"

describe('INICIANDO TESTE', () => {
  it('FAZENDO: Login', () => {
    cy.commands('auth.Login', 'ADMINISTRADOR')
  })
  /*it('DEFININDO: Contexto de Secretaria de Educação', () => {
    cy.wait(500)
    cy.commands('context.secretaria-educacao')
  })*/
  it.only('ACESSANDO: Gerenciar Agendamentos', () => {
    cy.wait(500)
    cy.visit('/dashboard/agendamento/gerenciar-agendamentos')
  })
  it('CADASTRANDO: Gerenciar Agendamento', () => {
    cy.commands('telas.agendamento.configurar-agendamento', configurarAgendamentoFixtures)
  })
}) 