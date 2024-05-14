import { credencial } from '../../../../fixtures/credencial'
import crianca from '../../../../fixtures/crianca'
import endereco from '../../../../fixtures/endereco'
import { responsavel, responsavel2 } from '../../../../fixtures/responsavel'

const username = credencial.usuario
const password = credencial.senha

const criancaNome = crianca.nome
const criancaCPF = crianca.cpf
const criancaDataNascimento = crianca.dataNascimento

const enderecoCEP = endereco.cep
const enderecoLogradouro = endereco.logradouro
const enderecoNumero = endereco.numero
const enderecoBairro = endereco.bairro
const enderecoComplemento = endereco.complemento
const enderecoCidade = endereco.cidade
const enderecoDistrito = endereco.distrito
const enderecoSubDistrito = endereco.subDistrito

const responsavelNome = responsavel.nome
const responsavelCPF = responsavel.cpf
const responsavelDataNascimento = responsavel.dataNascimento
const responsavelTelefone = responsavel.telefone
const responsavelEmail = responsavel.email

const responsavel2Nome = responsavel2.nome
const responsavel2CPF = responsavel2.cpf
const responsavel2DataNascimento = responsavel2.dataNascimento

describe('Cadastro de Criança', () => {
    it('FAZENDO: Login', () => {
        cy.login(username, password)
    })
    it('ACESSANDO: Cadastro de Criança', () => {
        cy.visit('/dashboard/cadastro/criancas')
        cy.wait(500)
        cy.get('body > div.relative.flex.min-h-screen.flex-col > div.flex-1 > div > div > main > div.flex.flex-row > div > div > span').should('contain', 'Cadastrar Criança')
        cy.wait(500)

        cy.crianca(
            criancaNome,
            criancaCPF,
            criancaDataNascimento,
            enderecoCEP,
            enderecoLogradouro,
            enderecoNumero,
            enderecoBairro,
            enderecoComplemento,
            enderecoCidade,
            enderecoDistrito,
            enderecoSubDistrito,
            responsavelNome,
            responsavelCPF,
            responsavelDataNascimento,
            responsavelTelefone,
            responsavelEmail,
            responsavel2Nome,
            responsavel2CPF,
            responsavel2DataNascimento,
        )
    })
})