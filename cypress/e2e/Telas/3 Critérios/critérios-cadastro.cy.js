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

  gerenciarCriteriosFixtures?.criterios.forEach((criterio, index) => {
    it(`CADASTRANDO: ${index + 1}° Critério`, () => {
      cy.commands('telas.gerenciar-criterios', criterio);
    });
  });
});
