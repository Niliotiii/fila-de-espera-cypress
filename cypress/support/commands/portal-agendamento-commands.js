Cypress.Commands.add('portalAgendamento', (
    criancaNome,
    criancaCPF,
    criancaDataNascimento,
    enderecoCidade,
    responsavelNome,
    responsavelCPF,
    responsavelTelefone,
    responsavelEmail
) => {
    cy.log('PREENCHENDO dados da guia "Local e horário"')
    cy.wait(1000)
    cy.get('#municipio\\.id-form-item').click()
    cy.get('[placeholder="Pesquise um local..."]').clear().type(enderecoCidade)
    cy.wait(500)
    cy.contains(enderecoCidade).click()
    cy.contains(enderecoCidade).click()
    cy.get('[style="min-width: 100%; display: table;"] > .px-4 > :nth-child(1)').click()

    cy.log('CLICANDO no botão "Próximo"')
    cy.wait(500)
    cy.get('button').contains('Próximo').click()
    cy.wait(500)

    cy.log('PREENCHENDO dados da guia "Dados Pessoais"')
    cy.wait(500)
    cy.get('#nomeCompleto-form-item').type(criancaNome)
    cy.get('#cpf-form-item').clear().type(criancaCPF)
    cy.get('#dataNascimento > div.flex.flex-row.items-center.gap-2 > input').clear().type(criancaDataNascimento)
    cy.get('#responsavelNomeCompleto-form-item').type(responsavelNome)
    cy.get('#responsavelCpf-form-item').clear().type(responsavelCPF)
    cy.get('#telefone-form-item').type(responsavelTelefone)
    cy.get('#email-form-item').type(responsavelEmail)

    cy.log('CLICANDO no botão "Próximo"')
    cy.wait(500)
    cy.get('button').contains('Próximo').click()
    cy.wait(500)

    cy.log('PREENCHENDO dados da guia "Confirmação"')
    cy.wait(500)
    cy.contains(enderecoCidade).should('exist')
    cy.contains(criancaNome).should('exist')
    cy.contains(criancaCPF).should('exist')
    cy.contains(criancaDataNascimento).should('exist')
    cy.contains(responsavelNome).should('exist')
    cy.contains(responsavelCPF).should('exist')
    cy.contains(responsavelTelefone).should('exist')
    cy.contains(responsavelEmail).should('exist')

    cy.log('CONFIRMANDO "Agendamento"')
    cy.wait(500)
    cy.get('button').contains('Confirmar').click()
    cy.get('.grid > .font-semibold').should('contain', 'Agendamento realizado com sucesso!')
})