Cypress.Commands.add('CadastroPortal-agendamento', (values) => {
  cy.log('PREENCHENDO: Guias do formulário');

  cy.log('GUIA: Local e horário');
  cy.wait(2000);
  if (values.perfil) {
    cy.get('#municipio\\.id-form-item').click();
    cy.get('[placeholder="Pesquise um local..."]')
      .clear()
      .type(values.agendamento.municipio);
    cy.contains(values.agendamento.municipio).click();
    cy.get('#secretariaMunicipal\\.id-form-item').click();
    cy.get('[placeholder="Pesquise um local..."]')
      .clear()
      .type(values.agendamento.localAtendimento);
    cy.contains(values.agendamento.localAtendimento).click();
  } else {
    cy.get('#municipio\\.id-form-item > span').then(async ($dom) => {
      values.agendamento.municipio = $dom.text();
      cy.log(values.agendamento.municipio);
    });
    cy.get('#secretariaMunicipal\\.id-form-item > span').then(async ($dom) => {
      values.agendamento.localAtendimento = $dom.text();
      cy.log(values.agendamento.localAtendimento);
    });
  }
  // values.agendamento.data = 'data';
  cy.get('[style="min-width: 100%; display: table;"] > .px-4 > :nth-child(1)')
    .click()
    .then(($dom) => {
      values.agendamento.horario = $dom.text();
      cy.log(values.agendamento.horario);
    });
  cy.wait(2000);
  cy.get('button').contains('Próximo').click();

  cy.log('GUIA: Dados Pessoais');
  cy.get('#nomeCompleto-form-item').type(values.nome);
  cy.get('#cpf-form-item').clear().type(values.cpf);
  cy.get('#dataNascimento > div.flex.flex-row.items-center.gap-2 > input')
    .clear()
    .type(values.dataNascimento);
  cy.get('#responsavelNomeCompleto-form-item').type(values.responsavel.nome);
  cy.get('#responsavelCpf-form-item').clear().type(values.responsavel.cpf);
  cy.get('#telefone-form-item').type(values.contato.telefone);
  cy.get('#email-form-item').type(values.contato.email);
  cy.get('button').contains('Próximo').click();

  cy.log('GUIA: Confirmação');
  cy.wait(2000);
  cy.then(() => {
    cy.contains(values.agendamento.municipio).should('exist');
    cy.contains(values.agendamento.localAtendimento).should('exist');
    // cy.contains(values.agendamento.data).should('exist')
    cy.contains(values.agendamento.horario).should('exist');
    cy.contains(values.nome).should('exist');
    cy.contains(values.cpf).should('exist');
    cy.contains(values.dataNascimento).should('exist');
    cy.contains(values.responsavel.nome).should('exist');
    cy.contains(values.responsavel.cpf).should('exist');
    // cy.contains(values.contato.telefone).should('exist');
    cy.contains(values.contato.email).should('exist');
  });
  cy.get('button').contains('Confirmar').click();
  cy.get('.grid > .font-semibold').should(
    'contain',
    'Agendamento realizado com sucesso!',
  );
});
