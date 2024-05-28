Cypress.Commands.add('Endereco', (values) => {
  if (values?.gerarLocalizacao) {
    cy.get('#cep-form-item > input').clear().type(values.cep);
    cy.get('#logradouro-form-item').clear().type(values.logradouro);
    cy.get('#numero-form-item').clear().type(values.numero);
    cy.get('#bairro-form-item').clear().type(values.bairro);
    cy.get('#complemento-form-item').clear().type(values.complemento);
    cy.get('#cidade\\.id-form-item').click();
    cy.get('[placeholder="Pesquise um local..."]').clear().type(values.cidade);
    cy.wait(1000);
    cy.contains(values.cidade).click();
    cy.wait(1000);
    cy.get('#distrito\\.id-form-item').click();
    cy.get('[placeholder="Pesquise um local..."]')
      .clear()
      .type(values.distrito);
    cy.wait(1000);
    cy.contains(values.distrito).click();
    cy.wait(1000);

    cy.get('body').then(($body) => {
      if ($body.find('#zona:contains("Zona")').length > 0) {
        cy.get('#zona > select').select(values.zona, { force: true });
      }
      if (
        $body.find(
          '#localizacaoDiferenciada:contains("Localização diferenciada")',
        ).length > 0
      ) {
        cy.get('#localizacaoDiferenciada > select').select(
          values.localizacaoDiferenciada,
          { force: true },
        );
      }
      if (
        $body.find(
          '#numeroUnidadeConsumidora:contains("Número da Unidade Consumidora")',
        ).length > 0
      ) {
        cy.get('#numeroUnidadeConsumidora-form-item')
          .clear()
          .type(values?.numeroUnidadeConsumidora);
      }
      if (
        $body.find(
          '#numeroUnidadeMatriculaIPTU:contains("Número da matrícula do IPTU")',
        ).length > 0
      ) {
        cy.get('#numeroUnidadeMatriculaIPTU-form-item')
          .clear()
          .type(values?.numeroMatriculaIPTU);
      }
    });
  } else {
    cy.get('#cep-form-item > input').clear().type(values?.cep);
    cy.get('#numero-form-item').clear().type(values?.numero);
    cy.get('#distrito\\.id-form-item').click();
    cy.get('body').type('{enter}');
  }
});

/*
 * Caso seja usado uma cidade que contenha subdistrito, o código abaixo deve ser utilizado

    cy.get('#subDistrito\\.id-form-item').click()
    cy.get('[placeholder="Pesquise um local..."]').clear().type(values?.subDistrito)
    cy.wait(1000)
    cy.contains(values?.subDistrito).click()
    cy.wait(1000)
*/
