import crianca from '../../../fixtures/crianca'
import endereco from '../../../fixtures/endereco'
import { responsavel } from '../../../fixtures/responsavel'

const criancaNome = crianca.nome
const criancaCPF = crianca.cpf
const criancaDataNascimento = crianca.dataNascimento

const enderecoCidade = endereco.cidade

const responsavelNome = responsavel.nome
const responsavelCPF = responsavel.cpf
const responsavelTelefone = responsavel.telefone
const responsavelEmail = responsavel.email

describe('Perfil Gestor de Creche', () => {
  describe('FAZENDO: Agendamento', () => {
    it('ACESSANDO: "Portal de Agendamento de Fila de Creches"', () => {
      cy.visit('/agendamento/agendar')
      cy.wait(500)
      cy.get('.h-24 > .flex > .text-lg').should('contain', 'Realizar Agendamento')
      cy.wait(500)
      
      cy.portalAgendamento(
        criancaNome,
        criancaCPF,
        criancaDataNascimento,
        enderecoCidade,
        responsavelNome,
        responsavelCPF,
        responsavelTelefone,
        responsavelEmail
      )
    })
  })
})