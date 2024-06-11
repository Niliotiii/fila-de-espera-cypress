import extractNameTurma from '../../../helpers/extract-name-turma';

Cypress.Commands.add('TelasConsultasVagaDeletar', (values) => {
  cy.wait(3000);

  for (let i = values.quantidadeVagas; i >= 1; i--) {
    // Clique em Cancelar
    cy.log('CLICANDO: No Ícone de Lixeira');
    cy.contains(
      'table tbody tr td:nth-child(5) div span',
      extractNameTurma(values.turma),
    )
      .parents('tr')
      .within(() => {
        cy.get('td:nth-child(7) div div button').click();
      });

    cy.log('CONFIRMANDO: Dados do Registro');
    cy.contains('Confirma excluir registro?').should('exist');
    cy.contains(
      `Vaga na turma ${extractNameTurma(values.turma)} da escola ${values.unidadeEscolar}`,
    ).should('exist');
    cy.contains('Essa ação não poderá ser desfeita').should('exist');

    cy.log('CLICANDO: No Botão de Cancelar');
    cy.contains('Cancelar').click();

    // Clique em Deletar
    cy.log('CLICANDO: No Ícone de Lixeira');
    cy.contains(
      'table tbody tr td:nth-child(5) div span',
      extractNameTurma(values.turma),
    )
      .parents('tr')
      .within(() => {
        cy.get('td:nth-child(7) div div button').click();
      });

    cy.log('CONFIRMANDO: Dados do Registro');
    cy.contains('Confirma excluir registro?').should('exist');
    cy.contains(
      `Vaga na turma ${extractNameTurma(values.turma)} da escola ${values.unidadeEscolar}`,
    ).should('exist');
    cy.contains('Essa ação não poderá ser desfeita').should('exist');

    cy.log('CLICANDO: No Botão de Deletar');
    cy.contains('Deletar').click();
    cy.contains('Vaga deletada com sucesso').should('exist');

    cy.wait(1000);
  }
});
