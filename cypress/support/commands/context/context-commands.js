import { contextFixtures as context } from '../../../fixtures/context/context-fixtures';

const testeSecretariaEducacao = () => {
  cy.log('Selecionando Secretaria de Educação');
  cy.get(
    '[class="items-center justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:primary/80 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:text-accent-foreground px-3 rounded-md relative flex h-10 cursor-pointer gap-2 hover:bg-muted focus:bg-muted"]',
  ).click();
  cy.get('#secretaria-form-item').click();
  cy.get('[placeholder="Pesquise uma secretaria.."]').type(
    context.secretariaEducacao,
  );
  cy.wait(1500);
  cy.get(
    '[class="relative flex select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-all duration-200 aria-selected:bg-primary aria-selected:text-primary-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 cursor-pointer"]',
  ).click();
  cy.get(
    '[class="items-center justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:primary/80 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:text-accent-foreground px-3 rounded-md relative flex h-10 cursor-pointer gap-2 hover:bg-muted focus:bg-muted"]',
  ).click({ force: true });
};

Cypress.Commands.add('ContextEscola', () => {
  cy.log('Selecionando Unidade Escolar');
  cy.visit('/dashboard/fila-de-espera');
  cy.get('#escola-form-item').click();
  cy.get('[placeholder="Pesquise uma unidade escolar"]').type(
    context.unidadeEscolar,
  );
  cy.wait(1000);
  cy.get('body').type('{enter}');
});

Cypress.Commands.add('Context', () => {
  testeSecretariaEducacao();

  cy.log('Selecionando Unidade Escolar');
  cy.visit('/dashboard/fila-de-espera');
  cy.get('#escola-form-item').click();
  cy.get('[placeholder="Pesquise uma unidade escolar"]').type(
    context.unidadeEscolar,
  );
  cy.wait(1000);
  cy.get('body').type('{enter}');
});

Cypress.Commands.add('Context-sem-unidade-escolar', () => {
  testeSecretariaEducacao();
});
