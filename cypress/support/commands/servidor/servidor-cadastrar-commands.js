Cypress.Commands.add('TelasCadastrosServidor', (values) => {
  cy.log('PREENCHENDO: Guias do formulário');

  cy.log('GUIA: Identificação');
  cy.get('#pessoa\\.nome-form-item').clear().type(values.nome);
  cy.get('#pessoa\\.cpf-form-item').clear().type(values.cpf);
  cy.get('#pessoa\\.rg-form-item').clear().type(values.rg);
  cy.get('#pessoa\\.orgaoExpRg-form-item').clear().type(values.orgaoExpedidor);
  cy.get(
    '#pessoa\\.dataNascimento > div.flex.flex-row.items-center.gap-2 > input',
  )
    .clear()
    .type(values.dataNascimento);
  cy.get('#pessoa\\.sexo > select').select(values.sexo, { force: true });
  cy.get('#pessoa\\.raca > select').select(values.raca, { force: true });
  cy.get('#pessoa\\.paisNascimento-form-item').click();
  cy.get('[placeholder="Pesquise um local..."]')
    .clear()
    .type(values.paisOrigem);
  cy.contains(values.paisOrigem).click();
  cy.get('button').contains('Próximo').click();
  cy.get('#pessoa\\.ufNascimento-form-item').click();
  cy.get('[placeholder="Pesquise um local..."]').clear().type(values.uf);
  cy.contains(values.uf).click();
  cy.get('#pessoa\\.municipioNascimento-form-item').click();
  cy.get('[placeholder="Pesquise um local..."]')
    .clear()
    .type(values.municipioNascimento);
  cy.contains(values.municipioNascimento).click();
  cy.get('#nivelEscolaridade > select').select(values.nivelEscolaridade, {
    force: true,
  });
  cy.get(
    '#pessoa\\.foto > div.mt-4.flex.items-center.justify-start > button',
  ).click();
  cy.get('#input-file-upload').attachFile('assets/images/batman.png');
  cy.get('button').contains('Salvar').click();
  cy.get('button').contains('Próximo').click();

  cy.log('GUIA: Contatos');
  cy.commands('contato', values.contato);
  cy.get('button').contains('Próximo').click();

  cy.log('GUIA: Vínculo ao usuário');
  if (!values.perfil) {
    cy.get('#usuario\\.nivelAcesso > select').select(values.nivelAcesso, {
      force: true,
    });
    cy.get('#cargo > select').select(values.cargo, { force: true });
  } else {
    cy.get('#usuario\\.nivelAcesso').click();
    cy.get('body').type('{enter}');
    cy.get('#cargo').click();
    cy.get('body').type('{enter}');
  }

  cy.get('#usuario\\.situacaoCadastral > select').select(
    values.situacaoCadastral,
    { force: true },
  );

  cy.get('body').then(($body) => {
    if ($body.find('span:contains("Selecione uma Secretaria")').length > 0) {
      cy.log('Seletor "Selecione uma Unidade Escolar" encontrada');
      cy.get('#instituicaoId-form-item').click();
      cy.get('[placeholder="Pesquise uma secretaria.."]')
        .clear()
        .type(values.lotacaoVinculada);
      cy.wait(5000);
      cy.get('body').type('{enter}{esc}');
    } else {
      cy.log('Seletor "Selecione uma Unidade Escolar" NÃO encontrada');
      if (
        $body.find('span:contains("Selecione uma Unidade Escolar")').length > 0
      ) {
        cy.log('Seletor "Selecione uma Unidade Escolar" encontrada');
        cy.get('#instituicaoId-form-item').click();
        cy.get('[placeholder="Pesquise uma unidade escolar"]')
          .clear()
          .type(values.lotacaoVinculada);
        cy.wait(5000);
        cy.get('body').type('{enter}{esc}');
      } else {
        cy.log('Seletor "Selecione uma Unidade Escolar" NÃO encontrada');
        cy.get('body').type('{enter}{esc}');
      }
    }
  });
  cy.get('button').contains('Salvar').click();

  cy.contains('Servidor cadastrado(a) com sucesso!').should('exist');
});
