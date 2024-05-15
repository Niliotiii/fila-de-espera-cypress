Cypress.Commands.add('Endereco', (values) => {
  if (values?.gerarLocalizacao) {
    cy.get('#cep-form-item > input').clear().type(values?.cep);
    cy.get('#logradouro-form-item').clear().type(values?.logradouro);
    cy.get('#numero-form-item').clear().type(values?.numero);
    cy.get('#bairro-form-item').clear().type(values?.bairro);
    cy.get('#complemento-form-item').clear().type(values?.complemento);
    cy.get('#cidade\\.id-form-item > span').click();
    cy.get('[placeholder="Pesquise um local..."]').clear().type(values?.cidade);
    cy.wait(1000);
    cy.contains(values?.cidade).click();
    cy.wait(1000);
    cy.get('#distrito\\.id-form-item').click();
    cy.get('[placeholder="Pesquise um local..."]')
      .clear()
      .type(values?.distrito);
    cy.wait(1000);
    cy.contains(values?.distrito).click();
    cy.wait(1000);

    cy.get('#zona > select').select(values?.zona, { force: true });
    cy.get('#localizacaoDiferenciada > select').select(
      values?.localizacaoDiferenciada,
      { force: true },
    );
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
