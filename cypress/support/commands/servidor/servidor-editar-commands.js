Cypress.Commands.add('TelasConsultasServidorEditar', (values) => {
  cy.log('CLICANDO: No Ícone de Lápis');
  cy.contains('table tbody tr td:nth-child(1) div span', values.nome)
    .parents('tr')
    .within(() => {
      cy.get('td:nth-child(7) > div > button:nth-child(2)').click();
    });

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
});
