import {
  configurarAgendamentoFixtures as configuracaoAgendamento,
  criancaFixtures as crianca,
  unidadeEscolarFixtures as escola,
  gerenciarCriteriosFixtures as gerenciarCriterios,
  secretariaEducacaoFixtures as secretaria,
  servidorFixtures as servidor,
  turmaFixtures as turma,
  vagaFixtures as vaga,
} from '../../fixtures';

turma.perfil = true;
vaga.perfil = true;
crianca.perfil = true;

configuracaoAgendamento.secretariaEducacao = secretaria.nomeFantasia;
configuracaoAgendamento.secretariaEducacaoRazaoSocial =
  'Secretaria de Educação Editada';
escola.secretariaEducacao = 'Secretaria de Educação Editada';
vaga.turma = `Turma Editada - ${turma.etapa} - ${turma.turno}`;
crianca.agendamento = {
  municipio: secretaria.endereco.cidade,
  localAtendimento: secretaria.razaoSocial,
};

const administradorMunicipal = {
  perfil: true,
  role: 'ADMINISTRADOR MUNICIPAL',
  nome: 'Danilo Saiter da Silva',
  cpf: '034.424.442-33',
  nivelAcesso: 'Administrador Municipal',
  cargo: 'Gestor da Central de Vagas',
  lotacaoVinculada: secretaria.nomeFantasia,
};

describe('PERFIL: Gestor de Creche', () => {
  // Login como ADMINISTRADOR
  it.only('FAZENDO: LOGIN (ADMINISTRADOR)', () => {
    cy.commands('auth.Login', 'ADMINISTRADOR');
  });

  //

  it.only('FLUXO: SERVIDOR (ADMINISTRADOR) ', () => {
    cy.commands('perfil.servidor', servidor);
  });

  it.only('FLUXO: SECRETARIA EDUCAÇÃO (ADMINISTRADOR) ', () => {
    cy.commands('perfil.secretaria-educacao', secretaria);
  });

  //

  // Alterar o perfil AUX para ADMINISTRADOR MUNICIPAL
  it.only('ACESSANDO: Consultar Servidores', () => {
    cy.visit('/dashboard/consulta/servidor');
  });
  it.only('CONSULTANDO: Servidor', () => {
    cy.get(
      'body > div.relative.flex.min-h-screen.flex-col > div.flex-1 > div > div > main > div.flex.flex-row > div > div > span',
    ).contains('Consultar Servidores');
    cy.commands('telas.consultas.servidor', administradorMunicipal);
  });
  it.only('EDITANDO: Servidor', () => {
    cy.get(
      'body > div.relative.flex.min-h-screen.flex-col > div.flex-1 > div > div > main > div.flex.flex-row > div > div > span',
    ).contains('Consultar Servidores');
    cy.commands('telas.consultas.servidor.editar', administradorMunicipal);
  });

  //

  // Login como ADMINISTRADOR MUNICIPAL usando o perfil AUX
  it.only('FAZENDO: Login como ADMINISTRADOR MUNICIPAL', () => {
    cy.commands('auth.Login', 'AUX');
  });

  //

  it.only('FLUXO: CONFIGURAR AGENDAMENTO (ADMINISTRADOR MUNICIPAL) ', () => {
    cy.commands('perfil.configurar-agendamento', configuracaoAgendamento);
  });

  it.only('FLUXO: GERENCIAR CRITÉRIOS (ADMINISTRADOR MUNICIPAL) ', () => {
    cy.commands('perfil.gerenciar-criterios', gerenciarCriterios);
  });

  it.only('FLUXO: UNIDADE ESCOLAR (ADMINISTRADOR MUNICIPAL) ', () => {
    cy.commands('perfil.unidade-escolar', escola);
  });

  //

  it.only('FLUXO: PORTAL AGENDAMENTO ', () => {
    cy.commands('perfil.portal-agendamento', crianca);
  });

  // //
  // //
  // //
  // //
  // //
  // //

  // // Login
  // it('FAZENDO: Login', () => {
  //   cy.commands('auth.Login', 'AUX');
  // });

  // // Fluxo de Turma - Cadastrar, Consultar, Visualizar, Editar
  // it('ACESSANDO: Cadastrar Turmas', () => {
  //   cy.visit('/dashboard/cadastro/turma');
  // });
  // it('CADASTRANDO: Turma', () => {
  //   cy.get(
  //     'body > div.relative.flex.min-h-screen.flex-col > div.flex-1 > div > div > main > div.flex.flex-row > div > div > span',
  //   ).should('contain', 'Cadastrar Turmas');
  //   cy.commands('telas.cadastros.turma', turma);
  // });
  // it('CONSULTANDO: Turma', () => {
  //   cy.get(
  //     'body > div.relative.flex.min-h-screen.flex-col > div.flex-1 > div > div > main > div.flex.flex-row > div > div > span',
  //   ).should('contain', 'Consultar Turmas');
  //   cy.commands('telas.consultas.turma', turma);
  // });
  // it('VISUALIZANDO: Turma', () => {
  //   cy.get(
  //     'body > div.relative.flex.min-h-screen.flex-col > div.flex-1 > div > div > main > div.flex.flex-row > div > div > span',
  //   ).should('contain', 'Consultar Turmas');
  //   cy.commands('telas.consultas.turma.visualizar', turma);
  // });
  // it('CONSULTANDO: Turma', () => {
  //   cy.get(
  //     'body > div.relative.flex.min-h-screen.flex-col > div.flex-1 > div > div > main > div.flex.flex-row > div > div > span',
  //   ).should('contain', 'Consultar Turmas');
  //   cy.commands('telas.consultas.turma', turma);
  // });
  // it('EDITANDO: Turma', () => {
  //   cy.get(
  //     'body > div.relative.flex.min-h-screen.flex-col > div.flex-1 > div > div > main > div.flex.flex-row > div > div > span',
  //   ).should('contain', 'Consultar Turmas');
  //   cy.commands('telas.consultas.turma.editar', turma);
  // });
  // // Apartir desse ponto turma já foi alterado
  // it('CONSULTANDO: Turma', () => {
  //   cy.get(
  //     'body > div.relative.flex.min-h-screen.flex-col > div.flex-1 > div > div > main > div.flex.flex-row > div > div > span',
  //   ).should('contain', 'Consultar Turmas');
  //   cy.commands('telas.consultas.turma', turma);
  // });
  // it('VISUALIZANDO: Turma', () => {
  //   cy.get(
  //     'body > div.relative.flex.min-h-screen.flex-col > div.flex-1 > div > div > main > div.flex.flex-row > div > div > span',
  //   ).should('contain', 'Consultar Turmas');
  //   cy.commands('telas.consultas.turma.visualizar', turma);
  // });

  // //Fluxo de Vagas - Cadastrar, Consultar, Visualizar, Editar, Deletar
  // it('ACESSANDO: Cadastrar Vagas', () => {
  //   cy.visit('/dashboard/cadastro/gerar-vaga');
  // });
  // it('CADASTRANDO: Vagas', () => {
  //   cy.get(
  //     'body > div.relative.flex.min-h-screen.flex-col > div.flex-1 > div > div > main > div.flex.flex-row > div > div > span',
  //   ).should('contain', 'Cadastrar Vagas');
  //   cy.commands('telas.cadastros.vaga', vaga);
  // });
  // it('CONSULTANDO: Vagas', () => {
  //   cy.get(
  //     'body > div.relative.flex.min-h-screen.flex-col > div.flex-1 > div > div > main > div.flex.flex-row > div > div > span',
  //   ).contains('Consultar Vagas');
  //   cy.commands('telas.consultas.vaga', vaga);
  // });
  // it('VISUALIZANDO: Vagas', () => {
  //   cy.get(
  //     'body > div.relative.flex.min-h-screen.flex-col > div.flex-1 > div > div > main > div.flex.flex-row > div > div > span',
  //   ).contains('Consultar Vagas');
  //   cy.commands('telas.consultas.vaga.visualizar', vaga);
  // });
  // it('DELETANDO: Vagas', () => {
  //   cy.get(
  //     'body > div.relative.flex.min-h-screen.flex-col > div.flex-1 > div > div > main > div.flex.flex-row > div > div > span',
  //   ).contains('Consultar Vagas');
  //   cy.commands('telas.consultas.vaga.deletar', vaga);
  // });

  // //Fluxo de Turma - Deletar
  // it('ACESSANDO: Cadastrar Turmas', () => {
  //   cy.visit('/dashboard/consulta/turma');
  // });
  // it('CONSULTANDO: Turma', () => {
  //   cy.get(
  //     'body > div.relative.flex.min-h-screen.flex-col > div.flex-1 > div > div > main > div.flex.flex-row > div > div > span',
  //   ).should('contain', 'Consultar Turmas');
  //   cy.commands('telas.consultas.turma', turma);
  // });
  // it('DELETANDO: Turma', () => {
  //   cy.get(
  //     'body > div.relative.flex.min-h-screen.flex-col > div.flex-1 > div > div > main > div.flex.flex-row > div > div > span',
  //   ).should('contain', 'Consultar Turmas');
  //   cy.commands('telas.consultas.turma.deletar', turma);
  // });

  // //Fluxo para funções disponíveis apenas para consulta no perfil Gestor de Creche
  // // Consultar Critérios
  // it('ACESSANDO: Consultar Critérios', () => {
  //   cy.visit('/dashboard/criterios/consultar-criterios');
  //   cy.get(
  //     'body > div.relative.flex.min-h-screen.flex-col > div.flex-1 > div > div > main > div.flex.flex-row > div > div > span',
  //   ).should('contain', 'Consultar Critérios');
  // });
  // // Consultar Unidades Escolares
  // it('ACESSANDO: Consultar Critérios', () => {
  //   cy.visit('/dashboard/consulta/unidade-escolar');
  //   cy.get(
  //     'body > div.relative.flex.min-h-screen.flex-col > div.flex-1 > div > div > main > div.flex.flex-row > div > div > span',
  //   ).should('contain', 'Consultar Unidades Escolares');
  // });
  // // Consultar Reserva de Vagas
  // it('ACESSANDO: Consultar Critérios', () => {
  //   cy.visit('/dashboard/consulta/reserva-vaga');
  //   cy.get(
  //     'body > div.relative.flex.min-h-screen.flex-col > div.flex-1 > div > div > main > div.flex.flex-row > div > div > span',
  //   ).should('contain', 'Consultar Reservas de Vagas');
  // });
  // // Fila de Espera
  // it('ACESSANDO: Consultar Critérios', () => {
  //   cy.visit('/dashboard/consulta/fila-de-espera');
  //   cy.get(
  //     'body > div.relative.flex.min-h-screen.flex-col > div.flex-1 > div > div > main > div.flex.flex-row > div > div > span',
  //   ).should('contain', 'Fila de Espera');
  // });

  // --------------------------------------------------------
  it.only('FLUXO: CRIANÇA (ATENDENTE SECRETARIA)', () => {
    cy.commands('perfil.crianca', crianca);
  });
  it.only('FLUXO: ENTREVISTA (ATENDENTE )', () => {
    cy.commands('perfil.entrevista', entrevista);
  });
});
