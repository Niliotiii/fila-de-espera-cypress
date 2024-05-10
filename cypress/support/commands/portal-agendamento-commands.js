import { nameLogs } from '../../utils/name-logs'
import { textoVerificacao } from '../../fixtures/texto-verificacao'

const agendamento = {
    municipio: '',
    localAtendimento: '',
    data: '',
    horario: ''
}

Cypress.Commands.add('portalAgendamento', (crianca, responsavel, textoVerificacao) => {
    cy.visit('/agendamento/agendar')
    cy.wait(500)
    cy.get('.h-24 > .flex > .text-lg').should('contain', 'Realizar Agendamento')
    cy.wait(500)

    cy.log(nameLogs('preencher', 'dados da guia "Local e horário"'))
    cy.wait(1000)
    cy.get('#\\:r7\\:-form-item > .text-start').then(($dom) => {
        agendamento.municipio = $dom.text();
        cy.log($dom.text())
    })
    cy.get('#\\:rd\\:-form-item > .text-start').then(($dom) => {
        agendamento.localAtendimento = $dom.text();
        cy.log($dom.text())
    })
    agendamento.data = 'data'
    cy.get('[style="min-width: 100%; display: table;"] > .px-4 > :nth-child(1)').then(($dom) => {
        agendamento.horario = $dom.text();
        cy.log($dom.text())
    })

    cy.log(nameLogs('preencher', 'dados da guia "Dados Pessoais"'))
    cy.wait(500)
    cy.get('#\\:rg\\:-form-item').type(crianca.nome)
    cy.get('#\\:ri\\:-form-item').clear().type(crianca.cpf)
    cy.get('.flex-col > .flex-row > .flex').clear().type(crianca.dataNascimento)
    cy.get('#\\:rn\\:-form-item').type(responsavel.nome)
    cy.get('#\\:rp\\:-form-item').clear().type(responsavel.cpf)
    console.log(responsavel.telefone)
    cy.get('#\\:rr\\:-form-item').type(responsavel.telefone)
    cy.get('#\\:rt\\:-form-item').type(responsavel.email)
    cy.get('button').contains(textoVerificacao.proximo).click()
    cy.wait(500)
    cy.get('#radix-\\:rv\\: > div.flex.flex-col.space-y-1\\.5.text-center.sm\\:text-left > div').should('contain', 'Confirme os dados para continuar')
    
    cy.log(nameLogs('confirmar', 'dados da guia "Confirmação"'))
    cy.wait(500)
    cy.contains(agendamento.municipio).should('exist')
    cy.contains(agendamento.localAtendimento).should('exist')
    // cy.contains(agendamento.data).should('exist')
    cy.contains(agendamento.horario).should('exist')
    cy.contains(crianca.nome).should('exist')
    cy.contains(crianca.cpf).should('exist')
    cy.contains(crianca.dataNascimento).should('exist')
    cy.contains(responsavel.nome).should('exist')
    cy.contains(responsavel.cpf).should('exist')
    cy.contains(responsavel.telefone).should('exist')
    cy.contains(responsavel.email).should('exist')
    
    
    cy.log(nameLogs('finalizar', '"Agendamento"'))
    cy.wait(500)
    cy.get('button').contains(textoVerificacao.confirmar).click()
    cy.get('.grid > .font-semibold').should('contain', 'Agendamento realizado com sucesso!')
})