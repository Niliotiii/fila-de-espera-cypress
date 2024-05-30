Cypress.Commands.add(
  'TelasConsultasSecretaria-educacaoVisualizar',
  (values) => {
    cy.log('CLICANDO: No Ícone de Olho');
    cy.contains(
      'table tbody tr:nth-child(1) td:nth-child(1) div span',
      values.razaoSocial,
    )
      .parents('tr')
      .within(() => {
        cy.get('td:nth-child(7) > div > button:nth-child(1)').click();
      });

    cy.wait(1000);

    // Identificação
    cy.contains(values.razaoSocial).should('exist');
    cy.contains(values.nomeFantasia).should('exist');
    cy.contains(values.cnpj).should('exist');
    cy.contains(values.decreto).should('exist');
    cy.contains(values.naturezaJuridica).should('exist');
    cy.contains(values.secretario).should('exist');
    cy.contains(values.vincEnteFederativo).should('exist');
    cy.contains(values.prefeito).should('exist');
    cy.contains(values.dataCriacao).should('exist');

    // Endereço
    cy.contains(values.endereco.cep).should('exist');
    cy.contains(values.endereco.logradouro).should('exist');
    cy.contains(values.endereco.numero).should('exist');
    cy.contains(values.endereco.bairro).should('exist');
    cy.contains(values.endereco.cidade).should('exist');
    cy.contains(values.endereco.distrito).should('exist');

    // Contatos
    cy.contains(values.contato.telefone).should('exist');
    cy.contains(values.contato.nomeContato).should('exist');
    cy.contains(values.contato.email).should('exist');

    cy.get('#details-page > div.flex.w-full.justify-end > button').click();
  },
);
