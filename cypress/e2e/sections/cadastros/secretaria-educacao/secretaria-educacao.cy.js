
describe('INICIANDO TESTE', () => {
  it('FAZENDO: Login', () => {
    cy.login('05814521279', 'Wall1!2@3#yson')
  })
  it('ACESSANDO: Cadastrar Secretaria de Educação', () => {
    cy.wait(500)
    cy.visit('/dashboard/cadastro/secretaria')
  })
  it('CADASTRO DE SECRETARIA', () => {
    cy.commands('sections.cadastros.secretaria-educacao')
  })
})