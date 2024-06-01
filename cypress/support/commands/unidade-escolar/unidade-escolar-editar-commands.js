Cypress.Commands.add('TelasConsultasUnidade-escolarEditar', (values) => {
  cy.log('CLICANDO: No Ícone de Lápis');
  cy.contains('table tbody tr td:nth-child(1) div span', values.razaoSocial)
    .parents('tr')
    .within(() => {
      cy.get('td:nth-child(6) > div > button:nth-child(2)').click();
    });

  values.razaoSocial = 'Unidade Escolar Editada';
  values.endereco.bairro = 'Bairro Editado';
  values.contato.email = 'emaileditato@gmail.com';

  cy.log('GUIA: Identificação');
  cy.get('[name="razaoSocial"]').clear().type(values.razaoSocial);
  cy.get('button').contains('Próximo').click();

  cy.log('GUIA: Endereço');
  cy.get('#bairro-form-item').clear().type(values.endereco.bairro);
  cy.get('button').contains('Próximo').click();

  cy.log('GUIA: Contatos');
  cy.get('[name="emails.0.email"]').clear().type(values.contato.email);
  cy.get('button').contains('Salvar').click();
  cy.contains('Unidade Escolar editada com sucesso').should('exist');
});
