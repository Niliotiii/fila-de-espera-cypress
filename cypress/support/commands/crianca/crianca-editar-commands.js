Cypress.Commands.add('TelasConsultasCriancaEditar', (values) => {
  cy.log('CLICANDO: No Ícone de Lápis');
  cy.contains('table tbody tr td:nth-child(1) div span', values.nome)
    .parents('tr')
    .within(() => {
      cy.get('td:nth-child(5) > div > button:nth-child(2)').click();
    });

  values.nome = 'Criança Editada';
  values.endereco.bairro = 'Bairro Editado';
  values.responsavel.nome = 'Responsável Editado';
  values.contato.email = 'emaileditato@gmail.com';

  cy.log('GUIA: Identificação');
  cy.get('#nome-form-item').clear().type(values.nome);
  cy.get('button').contains('Próximo').click();

  cy.log('GUIA: Dados Residenciais');
  cy.get('#bairro-form-item').clear().type(values.endereco.bairro);
  cy.get('button').contains('Próximo').click();

  cy.log('GUIA: Filiação');
  cy.get('#responsavel\\.nomeRes-form-item')
    .clear()
    .type(values.responsavel.nome);
  cy.get('button').contains('Próximo').click();

  cy.log('GUIA: Contatos');
  cy.get('[name="emails.0.email"]').clear().type(values.contato.email);
  cy.get('button').contains('Salvar').click();
  cy.contains('Cadastro da criança editado com sucesso').should('exist');
});
