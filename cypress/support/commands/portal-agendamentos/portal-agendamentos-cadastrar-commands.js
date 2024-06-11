Cypress.Commands.add('CadastroPortalAgendamento', (crianca) => {
  cy.log('PREENCHENDO: Guias do formulário');

  cy.log('GUIA: Local e horário');
  cy.wait(2000);
  // cy.get('#municipio\\.id-form-item > span').then(($dom) => {
  //   crianca.agendamento.municipio = $dom.text();
  //   cy.log(crianca.agendamento.municipio);
  // });
  // cy.get('#secretariaMunicipal\\.id-form-item > span').then(($dom) => {
  //   crianca.agendamento.localAtendimento = $dom.text();
  //   cy.log($dom.text());
  // });
  // crianca.agendamento.data = 'data';
  cy.get('[style="min-width: 100%; display: table;"] > .px-4 > :nth-child(1)')
    .click()
    .then(($dom) => {
      crianca.agendamento.horario = $dom.text();
      cy.log($dom.text());
    });
  cy.wait(2000);
  cy.get('button').contains('Próximo').click();

  cy.log('GUIA: Dados Pessoais');
  cy.get('#nomeCompleto-form-item').type(crianca.nome);
  cy.get('#cpf-form-item').clear().type(crianca.cpf);
  cy.get('#dataNascimento > div.flex.flex-row.items-center.gap-2 > input')
    .clear()
    .type(crianca.dataNascimento);
  cy.get('#responsavelNomeCompleto-form-item').type(crianca.responsavel.nome);
  cy.get('#responsavelCpf-form-item').clear().type(crianca.responsavel.cpf);
  cy.get('#telefone-form-item').type(crianca.contato.telefone);
  cy.get('#email-form-item').type(crianca.contato.email);
  cy.get('button').contains('Próximo').click();

  cy.log('GUIA: Confirmação');
  cy.wait(2000);
  // cy.contains(crianca.agendamento.municipio).should('exist');
  // cy.contains(crianca.agendamento.localAtendimento).should('exist');
  // cy.contains(crianca.agendamento.data).should('exist')
  // cy.contains(crianca.agendamento.horario).should('exist');
  cy.contains(crianca.nome).should('exist');
  cy.contains(crianca.cpf).should('exist');
  cy.contains(crianca.dataNascimento).should('exist');
  cy.contains(crianca.responsavel.nome).should('exist');
  cy.contains(crianca.responsavel.cpf).should('exist');
  // cy.contains(crianca.contato.telefone).should('exist');
  cy.contains(crianca.contato.email).should('exist');
  cy.get('button').contains('Confirmar').click();
  cy.get('.grid > .font-semibold').should(
    'contain',
    'Agendamento realizado com sucesso!',
  );
});
