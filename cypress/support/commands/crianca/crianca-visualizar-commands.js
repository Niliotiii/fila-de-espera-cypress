Cypress.Commands.add('TelasConsultasCriancaVisualizar', (values) => {
  cy.log('CLICANDO: No Ícone de Olho');
  cy.contains('table tbody tr td:nth-child(1) div span', values.nome)
    .parents('tr')
    .within(() => {
      cy.get('td:nth-child(5) > div > button:nth-child(1)').click();
    });

  cy.wait(1000);

  // Identificação
  cy.contains(values.nome).should('exist');
  cy.contains(values.cpf).should('exist');
  cy.contains(values.sexo).should('exist');
  cy.contains(values.dataNascimento).should('exist');
  cy.contains(values.numeroSUS).should('exist');
  cy.contains(values.paisOrigem).should('exist');
  cy.contains(values.registroNacionalEstrangeiro).should('exist');
  cy.contains(values.protocoloRefugiado).should('exist');

  // Dados Residenciais
  cy.contains(values.endereco.cep).should('exist');
  cy.contains(values.endereco.logradouro).should('exist');
  cy.contains(values.endereco.numero).should('exist');
  cy.contains(values.endereco.bairro).should('exist');
  cy.contains(values.endereco.cidade).should('exist');
  cy.contains(values.endereco.distrito).should('exist');
  cy.contains(values.endereco.numeroUnidadeConsumidora).should('exist');
  cy.contains(values.endereco.numeroMatriculaIPTU).should('exist');

  // Filiação
  // responsavel
  cy.contains(values.responsavel.nome).should('exist');
  cy.contains(values.responsavel.cpf).should('exist');
  cy.contains(values.responsavel.dataNascimento).should('exist');
  cy.contains(values.responsavel.paisOrigem).should('exist');
  cy.contains(values.responsavel.registroNacionalEstrangeiro).should('exist');
  cy.contains(values.responsavel.protocoloRefugiado).should('exist');
  cy.contains(values.responsavel.sexo).should('exist');
  cy.contains(values.responsavel.parentesco).should('exist');
  cy.contains(values.responsavel.estadoCivil).should('exist');
  cy.contains(values.responsavel.profissao).should('exist');
  cy.contains(values.responsavel.cepLocalTrabalho).should('exist');
  // reponsavel2
  cy.contains(values.responsavel2.nome).should('exist');
  cy.contains(values.responsavel2.cpf).should('exist');
  cy.contains(values.responsavel2.dataNascimento).should('exist');
  cy.contains(values.responsavel2.paisOrigem).should('exist');
  cy.contains(values.responsavel2.registroNacionalEstrangeiro).should('exist');
  cy.contains(values.responsavel2.protocoloRefugiado).should('exist');
  cy.contains(values.responsavel2.sexo).should('exist');
  cy.contains(values.responsavel2.parentesco).should('exist');
  cy.contains(values.responsavel2.estadoCivil).should('exist');
  cy.contains(values.responsavel2.profissao).should('exist');
  cy.contains(values.responsavel2.cepLocalTrabalho).should('exist');

  // Contatos
  cy.contains(values.contato.telefone).should('exist');
  cy.contains(values.contato.nomeContato).should('exist');
  cy.contains(values.contato.email).should('exist');

  cy.get('#details-page > div.flex.w-full.justify-end > button').click();
});
