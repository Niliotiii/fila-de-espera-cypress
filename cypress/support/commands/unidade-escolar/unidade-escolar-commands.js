Cypress.Commands.add('TelasCadastrosUnidade-escolar', (values) => {

    cy.log('PREENCHENDO: Guias do formulário')

    cy.log('SELECIONANDO: contexto de Secretaria de Educação')
    cy.commands('context.secretaria-educacao', values)

    cy.log('GUIA: Identificação')
    cy.get('#razaoSocial-form-item').type(values?.razaoSocial)
    cy.get('#nomeFantasia-form-item').type(values?.nomeFantasia)
    cy.get('#tipoEscola > select').select(values?.tipo, { force: true })
    cy.get('#cnpjEscola-form-item').type(values?.cnpj)
    cy.get('#dataCriacao > div.flex.flex-row.items-center.gap-2 > input').type(values?.dataCriacao)
    cy.get('#denominacaoEscola-form-item').type(values?.denominacao)
    cy.get('#autorizacaoFuncionamento-form-item').type(values?.autorizacaoFuncionamento)
    cy.get('#situacaoFuncionamento > select').select(values?.situacaoFuncionamento, { force: true })
    cy.get('#codigoInep-form-item').type(values?.codigoInep)
    cy.get('#dependenciaAdministrativa > select').select(values?.dependenciaAdministrativa, { force: true })
    cy.get('#conveniadaPoderPublico > select').select(values?.convenioPublico, { force: true })
    cy.get('button').contains('Próximo').click()

    cy.log('GUIA: Endereço')
    cy.commands('endereco', values.endereco)
    cy.get('button').contains('Próximo').click()

    cy.log('GUIA: Contato')
    cy.commands('contato', values.contato)
    cy.get('button').contains('Salvar').click()
    
    cy.contains('Unidade Escolar cadastrada com sucesso!').should('exist')

}) 