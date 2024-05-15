import { unidadeEscolarFixtures } from "../../../../fixtures"

describe('INICIANDO TESTE', () => {
    it('FAZENDO: Login', () => {
        cy.commands('auth.Login', 'ADMINISTRADOR')
    })
    it('ACESSANDO: Cadastrar Secretaria de Educação', () => {
        cy.wait(500)
        cy.visit('/dashboard/cadastro/unidade-escolar')
        cy.wait(500)
        cy.get('body > div.relative.flex.min-h-screen.flex-col > div.flex-1 > div > div > main > div.flex.flex-row > div > div > span').should('contain', 'Cadastrar Unidade Escolar')
        cy.wait(500)
    })
    it('CADASTRANDO: Unidade Escolar', () => {
        cy.commands('telas.cadastros.unidade-escolar', unidadeEscolarFixtures)
    })
});