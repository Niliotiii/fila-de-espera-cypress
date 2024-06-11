import {
  servidorFixtures as servidor,
  turmaFixtures as turma,
  vagaFixtures as vaga,
} from '../../../fixtures';
servidor.nivelAcesso = 'Gestor de Creche';
servidor.cargo = 'Técnico em Educação';
servidor.tipoVinculo = 'Unidade Escolar';
servidor.perfil = 'GESTOR DE CRECHE';
turma.perfil = 'GESTOR DE CRECHE';
vaga.perfil = 'GESTOR DE CRECHE';
vaga.turma = `Turma Editada - ${turma.etapa} - ${turma.turno}`;

describe('PERFIL: Gestor de Creche', () => {
  // Login
  it('FAZENDO: Login', () => {
    cy.commands('auth.Login', 'GESTOR DE CRECHE');
  });

  // Fluxo de Servidor - Cadastrar, Consultar, Visualizar, Editar, Deletar
  it('ACESSANDO: Cadastrar Servidores', () => {
    cy.visit('/dashboard/cadastro/servidor');
  });
  it('CADASTRANDO: Servidor', () => {
    cy.get(
      'body > div.relative.flex.min-h-screen.flex-col > div.flex-1 > div > div > main > div.flex.flex-row > div > div > span',
    ).contains('Cadastrar Servidores');
    cy.commands('telas.cadastros.servidor', servidor);
  });
  it('CONSULTANDO: Servidor', () => {
    cy.get(
      'body > div.relative.flex.min-h-screen.flex-col > div.flex-1 > div > div > main > div.flex.flex-row > div > div > span',
    ).contains('Consultar Servidores');
    cy.commands('telas.consultas.servidor', servidor);
  });
  it('VISUALIZANDO: Servidor', () => {
    cy.get(
      'body > div.relative.flex.min-h-screen.flex-col > div.flex-1 > div > div > main > div.flex.flex-row > div > div > span',
    ).contains('Consultar Servidores');
    cy.commands('telas.consultas.servidor.visualizar', servidor);
  });
  it('CONSULTANDO: Servidor', () => {
    cy.get(
      'body > div.relative.flex.min-h-screen.flex-col > div.flex-1 > div > div > main > div.flex.flex-row > div > div > span',
    ).contains('Consultar Servidores');
    cy.commands('telas.consultas.servidor', servidor);
  });
  it('EDITANDO: Servidor', () => {
    cy.get(
      'body > div.relative.flex.min-h-screen.flex-col > div.flex-1 > div > div > main > div.flex.flex-row > div > div > span',
    ).contains('Consultar Servidores');
    cy.commands('telas.consultas.servidor.editar', servidor);
  });
  // Apartir desse ponto servidor já foi alterado
  it('CONSULTANDO: Servidor', () => {
    cy.get(
      'body > div.relative.flex.min-h-screen.flex-col > div.flex-1 > div > div > main > div.flex.flex-row > div > div > span',
    ).contains('Consultar Servidores');
    cy.commands('telas.consultas.servidor', servidor);
  });
  it('VISUALIZANDO: Servidor', () => {
    cy.get(
      'body > div.relative.flex.min-h-screen.flex-col > div.flex-1 > div > div > main > div.flex.flex-row > div > div > span',
    ).contains('Consultar Servidores');
    cy.commands('telas.consultas.servidor.visualizar', servidor);
  });
  it('CONSULTANDO: Servidor', () => {
    cy.get(
      'body > div.relative.flex.min-h-screen.flex-col > div.flex-1 > div > div > main > div.flex.flex-row > div > div > span',
    ).contains('Consultar Servidores');
    cy.commands('telas.consultas.servidor', servidor);
  });
  it('DELETANDO: Servidor', () => {
    cy.wait(5000);
    cy.get(
      'body > div.relative.flex.min-h-screen.flex-col > div.flex-1 > div > div > main > div.flex.flex-row > div > div > span',
    ).contains('Consultar Servidores');
    cy.commands('telas.consultas.servidor.deletar', servidor);
  });

  // Fluxo de Turma - Cadastrar, Consultar, Visualizar, Editar
  it('ACESSANDO: Cadastrar Turmas', () => {
    cy.visit('/dashboard/cadastro/turma');
  });
  it('CADASTRANDO: Turma', () => {
    cy.get(
      'body > div.relative.flex.min-h-screen.flex-col > div.flex-1 > div > div > main > div.flex.flex-row > div > div > span',
    ).should('contain', 'Cadastrar Turmas');
    cy.commands('telas.cadastros.turma', turma);
  });
  it('CONSULTANDO: Turma', () => {
    cy.get(
      'body > div.relative.flex.min-h-screen.flex-col > div.flex-1 > div > div > main > div.flex.flex-row > div > div > span',
    ).should('contain', 'Consultar Turmas');
    cy.commands('telas.consultas.turma', turma);
  });
  it('VISUALIZANDO: Turma', () => {
    cy.get(
      'body > div.relative.flex.min-h-screen.flex-col > div.flex-1 > div > div > main > div.flex.flex-row > div > div > span',
    ).should('contain', 'Consultar Turmas');
    cy.commands('telas.consultas.turma.visualizar', turma);
  });
  it('CONSULTANDO: Turma', () => {
    cy.get(
      'body > div.relative.flex.min-h-screen.flex-col > div.flex-1 > div > div > main > div.flex.flex-row > div > div > span',
    ).should('contain', 'Consultar Turmas');
    cy.commands('telas.consultas.turma', turma);
  });
  it('EDITANDO: Turma', () => {
    cy.get(
      'body > div.relative.flex.min-h-screen.flex-col > div.flex-1 > div > div > main > div.flex.flex-row > div > div > span',
    ).should('contain', 'Consultar Turmas');
    cy.commands('telas.consultas.turma.editar', turma);
  });
  // Apartir desse ponto turma já foi alterado
  it('CONSULTANDO: Turma', () => {
    cy.get(
      'body > div.relative.flex.min-h-screen.flex-col > div.flex-1 > div > div > main > div.flex.flex-row > div > div > span',
    ).should('contain', 'Consultar Turmas');
    cy.commands('telas.consultas.turma', turma);
  });
  it('VISUALIZANDO: Turma', () => {
    cy.get(
      'body > div.relative.flex.min-h-screen.flex-col > div.flex-1 > div > div > main > div.flex.flex-row > div > div > span',
    ).should('contain', 'Consultar Turmas');
    cy.commands('telas.consultas.turma.visualizar', turma);
  });

  //Fluxo de Vagas - Cadastrar, Consultar, Visualizar, Editar, Deletar
  it('ACESSANDO: Cadastrar Vagas', () => {
    cy.visit('/dashboard/cadastro/gerar-vaga');
  });
  it('CADASTRANDO: Vagas', () => {
    cy.get(
      'body > div.relative.flex.min-h-screen.flex-col > div.flex-1 > div > div > main > div.flex.flex-row > div > div > span',
    ).should('contain', 'Cadastrar Vagas');
    cy.commands('telas.cadastros.vaga', vaga);
  });
  it('CONSULTANDO: Vagas', () => {
    cy.get(
      'body > div.relative.flex.min-h-screen.flex-col > div.flex-1 > div > div > main > div.flex.flex-row > div > div > span',
    ).contains('Consultar Vagas');
    cy.commands('telas.consultas.vaga', vaga);
  });
  it('VISUALIZANDO: Vagas', () => {
    cy.get(
      'body > div.relative.flex.min-h-screen.flex-col > div.flex-1 > div > div > main > div.flex.flex-row > div > div > span',
    ).contains('Consultar Vagas');
    cy.commands('telas.consultas.vaga.visualizar', vaga);
  });
  it('DELETANDO: Vagas', () => {
    cy.wait(5000);
    cy.get(
      'body > div.relative.flex.min-h-screen.flex-col > div.flex-1 > div > div > main > div.flex.flex-row > div > div > span',
    ).contains('Consultar Vagas');
    cy.commands('telas.consultas.vaga.deletar', vaga);
  });

  //Fluxo de Turma - Deletar
  it('ACESSANDO: Cadastrar Turmas', () => {
    cy.visit('/dashboard/consulta/turma');
  });
  it('CONSULTANDO: Turma', () => {
    cy.get(
      'body > div.relative.flex.min-h-screen.flex-col > div.flex-1 > div > div > main > div.flex.flex-row > div > div > span',
    ).should('contain', 'Consultar Turmas');
    cy.commands('telas.consultas.turma', turma);
  });
  it('DELETANDO: Turma', () => {
    cy.wait(5000);
    cy.get(
      'body > div.relative.flex.min-h-screen.flex-col > div.flex-1 > div > div > main > div.flex.flex-row > div > div > span',
    ).should('contain', 'Consultar Turmas');
    cy.commands('telas.consultas.turma.deletar', turma);
  });
});
