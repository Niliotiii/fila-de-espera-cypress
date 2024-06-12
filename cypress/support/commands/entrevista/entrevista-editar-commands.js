import { contextFixtures as context } from '../../../fixtures/context/context-fixtures';
const faker = require('faker-br');

Cypress.Commands.add('TelasEntrevistaEditar', (values) => {
  // novos values
  values.tipoResponsavel = 'ULTIMA OPÇÃO';
  values.nomeResponsavel = 'Marcia Machado Teste';
  values.cpfResponsavel = faker.br.cpf({ format: true });
  values.dataNascimentoResponsavel = new Date(
    new Date().getFullYear() - Math.floor(Math.random() * 5) - 1,
    Math.floor(Math.random() * 12),
    Math.floor(Math.random() * 31) + 1,
  ).toLocaleDateString('pt-BR', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });
  values.sexoResponsavel = 'PRIMEIRA OPÇÃO';
  values.estadoCivilResponsavel = 'PRIMEIRA OPÇÃO';
  cy.wait(2000);

  cy.commands('utils.entrevista.search-item', {
    ...context,
    type: 'editar',
  });

  cy.log('PREENCHENDO: Guias do formulário');

  cy.log('GUIA: Identificação');
  cy.get('button').contains('Próximo').click();

  cy.log('GUIA: Entrevista');
  cy.get('#tipoResponsavel-form-item').click();
  cy.get('body').type('{downarrow}{downarrow}{enter}');
  cy.get('[name="nomeResponsavel"]').clear().type(values.nomeResponsavel);
  cy.get('[name="cpfResponsavel"]').clear().type(values.cpfResponsavel);
  cy.get(
    '#dataNascimentoResponsavel > div.flex.flex-row.items-center.gap-2 > input',
  )
    .clear()
    .type(values.dataNascimentoResponsavel);
  cy.get('#parentescoResponsavel-form-item').click();
  cy.get('body').type('{enter}');
  cy.get('#sexoResponsavel-form-item').click();
  cy.get('body').type('{enter}');
  cy.get('#estadoCivilResponsavel-form-item').click();
  cy.get('body').type('{enter}');
  cy.get('button').contains('Próximo').click();

  cy.log('GUIA: Unidade de Preferência');
  cy.get('button').contains('Próximo').click();

  cy.log('GUIA: Critérios');
  cy.get('div[role="radiogroup"]').each(($radioGroup) => {
    cy.wrap($radioGroup)
      .find('button[role="radio"]')
      .each(($button) => {
        cy.wrap($button).then(($btn) => {
          const value = $btn.attr('value');
          if (value === 'false') {
            cy.wrap($btn).click();
          }
        });
      });
  });
  cy.get('div[role="radiogroup"]')
    .first()
    .within(() => {
      cy.get('button[role="radio"]').each(($button) => {
        cy.wrap($button).then(($btn) => {
          const value = $btn.attr('value');
          if (value === 'true') {
            cy.wrap($btn).click();
          }
        });
      });
    });

  cy.get(
    '#arquivo0 > div.mt-4.flex.items-center.justify-start > button.rounded-md.text-sm.font-medium.transition-colors.focus-visible\\:outline-none.focus-visible\\:ring-2.focus-visible\\:primary\\/80.focus-visible\\:ring-offset-2.disabled\\:opacity-50.disabled\\:pointer-events-none.ring-offset-background.hover\\:bg-accent.hover\\:text-accent-foreground.flex.h-max.max-h-\\[125px\\].items-start.justify-start.p-2',
  ).click();
  cy.get('#input-file-upload').attachFile(values.arquivo);
  cy.wait(500);
  cy.get('button').contains('Salvar').click();
  cy.get('body').type('{esc}');
  cy.get('button').contains('Próximo').click();

  cy.log('GUIA: Dados Complementares');
  cy.get('#membrosEderecoCrianca-form-item').click();
  cy.get('body').type('{downarrow}{enter}');
  cy.get('#membrosContribuintesRenda-form-item').click();
  cy.get('body').type('{downarrow}{enter}');
  cy.get('button').contains('Salvar').click();

  cy.wait(2000);
  cy.contains('Entrevista editada com sucesso!').should('exist');
});
