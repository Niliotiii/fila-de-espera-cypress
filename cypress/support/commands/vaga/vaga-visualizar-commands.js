import extractEtapaTurma from '../../../helpers/extract-etapa-turma';
import extractNameTurma from '../../../helpers/extract-name-turma';
import extractTurnoTurma from '../../../helpers/extract-turno-turma';

Cypress.Commands.add('TelasConsultasVagaVisualizar', (values) => {
  for (let i = 1; i <= values.quantidadeVagas; i++) {
    cy.log('CLICANDO: No Ícone de Olho');
    cy.get(
      `table > tbody > tr:nth-child(${i}) > td:nth-child(7) > div > button`,
    ).click();

    cy.wait(1000);

    // Informações Gerais
    cy.contains(values.dataHora).should('exist');
    cy.contains(values.servidor).should('exist');
    cy.contains(values.anoLetivo).should('exist');
    cy.contains(values.unidadeEscolar).should('exist');
    cy.contains(extractEtapaTurma(values.turma)).should('exist');
    cy.contains(extractTurnoTurma(values.turma)).should('exist');
    cy.contains(extractNameTurma(values.turma)).should('exist');

    cy.get('#details-page > div.flex.w-full.justify-end > button').click();
  }
});
