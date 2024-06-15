Cypress.Commands.add('TelasConsultasServidorEditar', (values) => {
  cy.log('CLICANDO: No Ícone de Lápis');
  cy.contains('table tbody tr td:nth-child(1) div span', values.nome)
    .parents('tr')
    .within(() => {
      cy.get('td:nth-child(7) > div > button:nth-child(2)').click();
    });

  if (
    values.role === 'ADMINISTRADOR MUNICIPAL' ||
    values.role === 'GESTOR DE CRECHE' ||
    values.role === 'ATENDENTE DE SECRETARIA'
  ) {
    cy.log('GUIA: Identificação');
    cy.get('button').contains('Próximo').click();

    cy.log('GUIA: Contatos');
    cy.get('button').contains('Próximo').click();

    cy.log('GUIA: Vínculo ao usuário');
    cy.get('#usuario\\.nivelAcesso > select').select(values.nivelAcesso, {
      force: true,
    });
    cy.get('#cargo > select').select(values.cargo, { force: true });
    cy.get('body').then(($body) => {
      if (
        $body.find('#instituicaoId-form-item > div > div svg.lucide-x').length >
        0
      ) {
        cy.get('#instituicaoId-form-item > div > div').click();
      } else {
        // O elemento não existe, continue sem falhar o teste
        cy.log('Elemento não encontrado, continuando o teste...');
      }
    });
    cy.wait(2000);
    cy.get('body').then(($body) => {
      if ($body.find('span:contains("Selecione uma Secretaria")').length > 0) {
        cy.log('Seletor "Selecione uma Unidade Escolar" encontrada');
        cy.get('#instituicaoId-form-item').click();
        cy.get('[placeholder="Pesquise uma secretaria.."]')
          .clear()
          .type(values.lotacaoVinculada);
        cy.wait(3000);
        cy.get('body').type('{enter}{esc}');
      } else {
        cy.log('Seletor "Selecione uma Unidade Escolar" NÃO encontrada');
        if (
          $body.find('span:contains("Selecione uma Unidade Escolar")').length >
          0
        ) {
          cy.log('Seletor "Selecione uma Unidade Escolar" encontrada');
          cy.get('#instituicaoId-form-item').click();
          cy.get('[placeholder="Pesquise uma unidade escolar"]')
            .clear()
            .type(values.lotacaoVinculada);
          cy.wait(3000);
          cy.get('body').type('{enter}{esc}');
        } else {
          cy.log('Seletor "Selecione uma Unidade Escolar" NÃO encontrada');
        }
      }
    });
    cy.wait(3000);
    cy.get('button').contains('Salvar').click();
    cy.contains('Servidor editado com sucesso').should('exist');
  } else {
    values.nome = 'Servidor Editado';
    values.contato.email = 'emaileditato@gmail.com';
    values.nivelAcesso = 'Atendente Secretaria';
    values.cargo = 'Atendente';

    cy.log('GUIA: Identificação');
    cy.get('#pessoa\\.nome-form-item').clear().type(values.nome);
    cy.get('button').contains('Próximo').click();

    cy.log('GUIA: Contatos');
    cy.get('[name="emails.0.email"]').clear().type(values.contato.email);
    cy.get('button').contains('Próximo').click();

    cy.log('GUIA: Vínculo ao usuário');
    cy.get('#usuario\\.nivelAcesso > select').select(values.nivelAcesso, {
      force: true,
    });
    cy.get('#cargo > select').select(values.cargo, { force: true });
    cy.get('button').contains('Salvar').click();
    cy.contains('Servidor editado com sucesso').should('exist');
  }
});
