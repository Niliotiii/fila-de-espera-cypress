Cypress.Commands.add('crianca', (
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
) => {
    cy.log('PREENCHENDO dados da guia "Identificação"')
    cy.wait(500)
    cy.get('#nome-form-item').clear().type(criancaNome)
    cy.get('#cpf-form-item').clear().type(criancaCPF)
    cy.get('#sexo > select').select('Masculino', { force: true })
    // cy.get('#sexo').find('select').then(select => {
    //     const options = select.find('option')
    //     const randomIndex = Math.floor(Math.random() * options.length)
    //     const randomOptionValue = options[randomIndex].value
    //     cy.get('#sexo').find('select').select(randomOptionValue, { force: true })
    //     cy.get('#sexo').find('select').should('have.value', randomOptionValue)
    // })
    cy.get('#dataNascimento').clear().type(criancaDataNascimento)
    cy.get('#numeroSUS-form-item').clear().type('123456789012345')

    cy.log('CLICANDO no botão "Próximo"')
    cy.wait(500)
    cy.get('button').contains('Próximo').click()
    cy.wait(500)

    cy.log('PREENCHENDO dados da guia "Dados Residenciais"')
    cy.wait(500)
    cy.get('#cep-form-item > input').clear().type(enderecoCEP)
    cy.get('#logradouro-form-item').clear().type(enderecoLogradouro)
    cy.get('#numero-form-item').clear().type(enderecoNumero)
    cy.get('#bairro-form-item').clear().type(enderecoBairro)
    cy.get('#complemento-form-item').clear().type(enderecoComplemento)
    cy.get('#cidade\\.id-form-item > span').click()
    cy.get('[placeholder="Pesquise um local..."]').clear().type(enderecoCidade)
    cy.wait(500)
    cy.contains(enderecoCidade).click()
    cy.wait(500)
    cy.get('#distrito\\.id-form-item').click()
    cy.get('[placeholder="Pesquise um local..."]').clear().type(enderecoDistrito)
    cy.wait(500)
    cy.contains(enderecoDistrito).click()
    cy.wait(500)
    // cy.get('#subDistrito\\.id-form-item').click()
    // cy.get('[placeholder="Pesquise um local..."]').clear().type(enderecoSubDistrito)
    // cy.wait(500)
    // cy.contains(enderecoSubDistrito).click()

    cy.log('CLICANDO no botão "Próximo"')
    cy.wait(500)
    cy.get('button').contains('Próximo').click()
    cy.wait(500)

    cy.log('PREENCHENDO dados da guia "Filiação"')
    cy.wait(500)
    cy.get('#responsavel\\.parentesco > select').select('Pai', { force: true })
    // cy.get('#responsavel\\.parentesco').find('select').then(select => {
    //     const options = select.find('option')
    //     const randomIndex = Math.floor(Math.random() * options.length)
    //     const randomOptionValue = options[randomIndex].value
    //     cy.get('#responsavel\\.parentesco').find('select').should('have.value', randomOptionValue)
    //     cy.get('#responsavel\\.sexoRes-form-item').find('select').should('have.value', randomOptionValue)
    // })
    cy.get('#responsavel\\.nomeRes-form-item').clear().type(responsavelNome)
    cy.get('#responsavel\\.cpfRes-form-item').clear().type(responsavelCPF)
    cy.get('#responsavel\\.dataNascimentoRes > div.flex.flex-row.items-center.gap-2 > input').clear().type(responsavelDataNascimento)
    cy.get('#responsavel\\.nacionalidadeRes-form-item').click()
    cy.get('[placeholder="Pesquise um local..."]').clear().type('Brasil')
    cy.get('[data-value="76_brasil"]').click()
    cy.get('#responsavel\\.sexoRes > select').select('Masculino', { force: true })
    // cy.get('#responsavel\\.sexoRes-form-item').find('select').then(select => {
    //     const options = select.find('option')
    //     const randomIndex = Math.floor(Math.random() * options.length)
    //     const randomOptionValue = options[randomIndex].value
    //     cy.get('#responsavel\\.sexoRes-form-item').find('select').select(randomOptionValue, { force: true })
    //     cy.get('#responsavel\\.sexoRes-form-item').find('select').should('have.value', randomOptionValue)
    // })
    cy.get('#responsavel\\.estadoCivil > select').select('Outro', { force: true })
    // cy.get('#responsavel\\.estadoCivil').find('select').then(select => {
    //     const options = select.find('option')
    //     const randomIndex = Math.floor(Math.random() * options.length)
    //     const randomOptionValue = options[randomIndex].value
    //     cy.get('#responsavel\\.estadoCivil').find('select').select(randomOptionValue, { force: true })
    //     cy.get('#responsavel\\.estadoCivil').find('select').should('have.value', randomOptionValue)
    // })
    cy.get(':nth-child(1) > #responsavel\\.exerceAtividadeProfissional-form-item').click()
    cy.get('#responsavel\\.profissao-form-item > span').click()
    cy.get('[placeholder="Pesquise por uma profissão..."]').clear().type('Aeronauta')
    cy.get('[data-value="aeronauta"]').click()
    cy.get(':nth-child(1) > #responsavel\\.resideCrianca-form-item').click()
    cy.get(':nth-child(2) > #responsavel\\.falecido-form-item').click()
    cy.get('#responsavel2\\.parentesco > select').select('Pai', { force: true })
    // cy.get('#responsavel2\\.parentesco').find('select').then(select => {
    //     const options = select.find('option')
    //     const randomIndex = Math.floor(Math.random() * options.length)
    //     const randomOptionValue = options[randomIndex].value
    //     cy.get('#responsavel2\\.parentesco').find('select').should('have.value', randomOptionValue)
    //     cy.get('#responsavel2\\.sexoRes-form-item').find('select').should('have.value', randomOptionValue)
    // })
    cy.get('#responsavel2\\.nomeRes-form-item').clear().type(responsavel2Nome)
    cy.get('#responsavel2\\.cpfRes-form-item').clear().type(responsavel2CPF)
    cy.get('#responsavel2\\.dataNascimentoRes > div.flex.flex-row.items-center.gap-2 > input').clear().type(responsavel2DataNascimento)
    cy.get('#responsavel2\\.nacionalidadeRes-form-item').click()
    cy.get('[placeholder="Pesquise um local..."]').clear().type('Brasil')
    cy.get('[data-value="76_brasil"]').click()
    cy.get('#responsavel2\\.sexoRes > select').select('Masculino', { force: true })
    // cy.get('#responsavel2\\.sexoRes-form-item').find('select').then(select => {
    //     const options = select.find('option')
    //     const randomIndex = Math.floor(Math.random() * options.length)
    //     const randomOptionValue = options[randomIndex].value
    //     cy.get('#responsavel2\\.sexoRes-form-item').find('select').select(randomOptionValue, { force: true })
    //     cy.get('#responsavel2\\.sexoRes-form-item').find('select').should('have.value', randomOptionValue)
    // })
    cy.get('#responsavel2\\.estadoCivil > select').select('Outro', { force: true })
    // cy.get('#responsavel2\\.estadoCivil').find('select').then(select => {
    //     const options = select.find('option')
    //     const randomIndex = Math.floor(Math.random() * options.length)
    //     const randomOptionValue = options[randomIndex].value
    //     cy.get('#responsavel2\\.estadoCivil').find('select').select(randomOptionValue, { force: true })
    //     cy.get('#responsavel2\\.estadoCivil').find('select').should('have.value', randomOptionValue)
    // })
    cy.get(':nth-child(1) > #responsavel2\\.exerceAtividadeProfissional-form-item').click()
    cy.get('#responsavel2\\.profissao-form-item > span').click()
    cy.get('[placeholder="Pesquise por uma profissão..."]').clear().type('Aeronauta')
    cy.get('[data-value="aeronauta"]').click()
    cy.get(':nth-child(1) > #responsavel2\\.resideCrianca-form-item').click()
    cy.get(':nth-child(2) > #responsavel2\\.falecido-form-item').click()

    cy.log('CLICANDO no botão "Próximo"')
    cy.wait(500)
    cy.get('button').contains('Próximo').click()
    cy.wait(500)

    cy.log('PREENCHENDO dados da guia "Contatos"')
    cy.wait(500)
    cy.get('#telefones\\.0\\.numero-form-item').clear().type(responsavelTelefone)

    cy.get('#telefones\\.0\\.tipo > select').select('Telefone celular', { force: true })
    // cy.get('#telefones\\.0\\.tipo').find('select').then(select => {
    //     const options = select.find('option')
    //     const randomIndex = Math.floor(Math.random() * options.length)
    //     const randomOptionValue = options[randomIndex].value
    //     cy.get('#telefones\\.0\\.tipo').find('select').select(randomOptionValue, { force: true })
    //     cy.get('#telefones\\.0\\.tipo').find('select').should('have.value', randomOptionValue)
    // })
    cy.get('#telefones\\.0\\.contatoPreferencial-form-item').clear().type(responsavelNome)
    cy.get('#emails\\.0\\.email-form-item').clear().type(responsavelEmail)

    cy.log('CLICANDO no botão "Salvar"')
    cy.wait(500)
    cy.get('button').contains('Salvar').click()
    cy.wait(500)
    cy.contains('Dados da criança cadastrados com sucesso').should('exist')
});