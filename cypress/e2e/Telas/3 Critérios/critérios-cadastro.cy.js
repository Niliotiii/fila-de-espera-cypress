import { gerenciarCriteriosFixtures } from '../../../fixtures/gerenciar-criterios/gerenciar-criterios-fixtures';

describe('INICIANDO TESTE', () => {
  it('FAZENDO: Login', () => {
    cy.commands('auth.Login', 'ADMINISTRADOR');
  });
  it('SELECIONANDO: Contexto de Secretaria de Educação', () => {
    cy.commands(
      'context.secretaria-educacao',
      gerenciarCriteriosFixtures?.secretariaEducacao,
    );
  });
  it('ACESSANDO: Gerenciar Critérios', () => {
    cy.visit('/dashboard/criterios/gerenciar-criterios');
  });
  it('CADASTRANDO: 1° Critério', () => {
    cy.commands(
      'telas.gerenciar-criterios',
      gerenciarCriteriosFixtures?.criterio1,
    );
  });
  it('CADASTRANDO: 2° Critério', () => {
    cy.commands(
      'telas.gerenciar-criterios',
      gerenciarCriteriosFixtures?.criterio2,
    );
  });
});
