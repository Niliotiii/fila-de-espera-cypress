import formatCPF from '../../../helpers/format-cpf';

Cypress.Commands.add('TelasConsultasServidorVisualizar', (values) => {
  cy.log('CLICANDO: No Ícone de Olho');
  cy.contains('table tbody tr td:nth-child(1) div span', values.nome)
    .parents('tr')
    .within(() => {
      cy.get('td:nth-child(7) > div > button:nth-child(1)').click();
    });

  cy.wait(1000);

  // Identificação
  cy.contains(values.nome).should('exist');
  cy.contains(formatCPF(values.cpf)).should('exist');
  cy.contains(values.rg).should('exist');
  cy.contains(values.orgaoExpedidor).should('exist');
  cy.contains(values.dataNascimento).should('exist');
  cy.contains(values.sexo).should('exist');
  cy.contains(values.raca).should('exist');
  cy.contains(values.paisOrigem).should('exist');
  cy.contains(values.uf).should('exist');
  cy.contains(values.municipioNascimento).should('exist');
  cy.contains(values.nivelEscolaridade).should('exist');

  // Contatos
  cy.contains(values.contato.telefone).should('exist');
  cy.contains(values.contato.nomeContato).should('exist');
  cy.contains(values.contato.email).should('exist');

  // Usuário
  cy.contains(values.cargo).should('exist');
  cy.contains(values.nivelAcesso).should('exist');
  // cy.contains(values.situacaoCadastral).should('exist');
  cy.contains(formatCPF(values.cpf)).should('exist');
  // cy.contains(values.tipoVinculo).should('exist');
  // cy.contains(values.lotacaoVinculada).should('exist');

  cy.get(
    'body > div.relative.flex.min-h-screen.flex-col > div.flex-1 > div > div > main > div:nth-child(3) > section > div > div.flex.w-full.justify-end > button',
  ).click();
});
