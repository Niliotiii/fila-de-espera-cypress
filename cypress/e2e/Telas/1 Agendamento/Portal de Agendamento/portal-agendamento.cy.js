import { criancaFixtures as crianca } from '../../../../fixtures';

crianca.agendamento = {
  municipio: '',
  localAtendimento: '',
  data: '',
  horario: '',
};

describe('INICIANDO TESTE', () => {
  it('ACESSANDO: Realizar Agendamento', () => {
    cy.visit('/agendamento/agendar');
  });

  it('CADASTRANDO: Agendamento', () => {
    cy.get('.h-24 > .flex > .text-lg').should(
      'contain',
      'Realizar Agendamento',
    );
    cy.commands('cadastro.portal-agendamento', crianca);
  });

  it('ACESSANDO: Consultar Agendamento', () => {
    cy.visit('/agendamento/consultar');
  });

  it('CONSULTANDO: Agendamento', () => {
    cy.get('.h-24 > .flex > .text-lg').should(
      'contain',
      'Consultar Agendamento',
    );
    cy.commands('consulta.portal-agendamento', crianca);
  });

  it('DELETANDO: Agendamento', () => {
    cy.get('.h-24 > .flex > .text-lg').should(
      'contain',
      'Consultar Agendamento',
    );
    cy.commands('consulta.portal-agendamento.deletar', crianca);
  });
});
