import formatCNPJ from '../../../helpers/format-cnpj';

Cypress.Commands.add('TelasConsultasUnidade-escolarVisualizar', (values) => {
  cy.log('CLICANDO: No Ícone de Olho');
  cy.contains('table tbody tr td:nth-child(1) div span', values.razaoSocial)
    .parents('tr')
    .within(() => {
      cy.get('td:nth-child(6) > div > button:nth-child(1)').click();
    });
  cy.wait(1000);

  // Identificação
  cy.contains(values.razaoSocial).should('exist');
  cy.contains(values.nomeFantasia).should('exist');
  cy.contains(formatCNPJ(values.cnpj)).should('exist');
  cy.contains(values.dataCriacao).should('exist');
  cy.contains(values.tipo).should('exist');
  cy.contains(values.denominacao).should('exist');
  cy.contains(values.autorizacaoFuncionamento).should('exist');
  cy.contains(values.situacaoFuncionamento).should('exist');
  cy.contains(values.codigoInep).should('exist');
  cy.contains(values.secretariaEducacao).should('exist');
  cy.contains(values.dependenciaAdministrativa).should('exist');
  cy.contains(values.convenioPublico).should('exist');

  // Endereço
  cy.contains(values.endereco.cep).should('exist');
  cy.contains(values.endereco.logradouro).should('exist');
  cy.contains(values.endereco.numero).should('exist');
  cy.contains(values.endereco.bairro).should('exist');
  cy.contains(values.endereco.cidade).should('exist');
  cy.contains(values.endereco.distrito).should('exist');
  //   cy.contains(values.endereco.zona).should('exist');
  cy.contains(values.endereco.localizacaoDiferenciada).should('exist');

  // Contatos
  cy.contains(values.contato.telefone).should('exist');
  cy.contains(values.contato.nomeContato).should('exist');
  cy.contains(values.contato.email).should('exist');

  cy.get(
    'body > div.relative.flex.min-h-screen.flex-col > div.flex-1 > div > div > main > div:nth-child(3) > section > div > div.flex.w-full.justify-end > button',
  ).click();
});
