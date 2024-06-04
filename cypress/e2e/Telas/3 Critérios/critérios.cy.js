import { gerenciarCriteriosFixtures } from '../../../fixtures/gerenciar-criterios/gerenciar-criterios-fixtures';

describe('INICIANDO TESTE', () => {
  it('FAZENDO: Login', () => {
    cy.commands('auth.Login', 'ADMINISTRADOR');
  });
  it('SELECIONANDO: Contexto', () => {
    cy.commands('context-sem-unidade-escolar');
  });
  it('ACESSANDO: Gerenciar Critérios', () => {
    cy.visit('/dashboard/criterios/gerenciar-criterios');
  });

  gerenciarCriteriosFixtures?.criterios.forEach((criterio, index) => {
    it(`CADASTRANDO: ${index + 1}° Critério`, () => {
      cy.commands('telas.gerenciar-criterios.cadastrar', criterio);
    });
  });

  gerenciarCriteriosFixtures?.criterios.forEach((criterio, index) => {
    it(`CONSULTANDO: ${index + 1}° Critério`, () => {
      cy.commands('telas.gerenciar-criterios.consultar', criterio);
    });
  });
  it(`VISUALIZANDO: Todos os Critérios`, () => {
    cy.commands('telas.gerenciar-criterios.visualizar');
  });
  it(`EDITANDO: Todos os Critérios`, () => {
    cy.commands('telas.gerenciar-criterios.editar');
  });
  it(`DELETANDO: 3.1° Critério`, () => {
    cy.commands('telas.gerenciar-criterios.deletar');
  });
});
