import {
  configurarAgendamentoFixtures as configuracaoAgendamento,
  criancaFixtures as crianca,
  entrevistaFixtures as entrevista,
  unidadeEscolarFixtures as escola,
  gerenciarCriteriosFixtures as gerenciarCriterios,
  secretariaEducacaoFixtures as secretaria,
  servidorFixtures as servidor,
  turmaFixtures as turma,
  vagaFixtures as vaga,
} from '../../fixtures';

turma.perfil = true;
vaga.perfil = true;

configuracaoAgendamento.secretariaEducacao = secretaria.nomeFantasia;
configuracaoAgendamento.secretariaEducacaoRazaoSocial =
  'Secretaria de Educação Editada';
escola.secretariaEducacao = 'Secretaria de Educação Editada';
vaga.turma = `Turma Editada - ${turma.etapa} - ${turma.turno}`;

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

  it.only('FLUXO: SERVIDOR (ADMINISTRADOR) ', () => {
    cy.commands('perfil.servidor', servidor);
  });

  //

  // Fluxo de Secretaria de Educação - Cadastrar, Consultar, Visualizar, Editar
  it.only('ACESSANDO: Cadastrar Secretaria de Educação', () => {
    cy.visit('/dashboard/cadastro/secretaria');
  });
  it.only('CADASTRANDO: Secretaria de Educação', () => {
    cy.get(
      'body > div.relative.flex.min-h-screen.flex-col > div.flex-1 > div > div > main > div.flex.flex-row > div > div > span',
    ).contains('Cadastrar Secretaria de Educação');
    cy.commands('telas.cadastros.secretaria-educacao', secretaria);
  });
  it('CONSULTANDO: Secretaria de Educação', () => {
    cy.get(
      'body > div.relative.flex.min-h-screen.flex-col > div.flex-1 > div > div > main > div.flex.flex-row > div > div > span',
    ).contains('Consultar Secretarias de Educação');
    cy.commands('telas.consultas.secretaria-educacao', secretaria);
  });
  it('VISUALIZANDO: Secretaria de Educação', () => {
    cy.get(
      'body > div.relative.flex.min-h-screen.flex-col > div.flex-1 > div > div > main > div.flex.flex-row > div > div > span',
    ).contains('Consultar Secretarias de Educação');
    cy.commands('telas.consultas.secretaria-educacao.visualizar', secretaria);
  });
  it('CONSULTANDO: Secretaria de Educação', () => {
    cy.get(
      'body > div.relative.flex.min-h-screen.flex-col > div.flex-1 > div > div > main > div.flex.flex-row > div > div > span',
    ).contains('Consultar Secretarias de Educação');
    cy.commands('telas.consultas.secretaria-educacao', secretaria);
  });
  it('EDITANDO: Secretaria de Educação', () => {
    cy.get(
      'body > div.relative.flex.min-h-screen.flex-col > div.flex-1 > div > div > main > div.flex.flex-row > div > div > span',
    ).contains('Consultar Secretarias de Educação');
    cy.commands('telas.consultas.secretaria-educacao.editar', secretaria);
  });
  // Apartir desse ponto secretaria já foi alterado
  it('CONSULTANDO: Secretaria de Educação', () => {
    cy.get(
      'body > div.relative.flex.min-h-screen.flex-col > div.flex-1 > div > div > main > div.flex.flex-row > div > div > span',
    ).contains('Consultar Secretarias de Educação');
    cy.commands('telas.consultas.secretaria-educacao', secretaria);
  });
  it('VISUALIZANDO: Secretaria de Educação', () => {
    cy.get(
      'body > div.relative.flex.min-h-screen.flex-col > div.flex-1 > div > div > main > div.flex.flex-row > div > div > span',
    ).contains('Consultar Secretarias de Educação');
    cy.commands('telas.consultas.secretaria-educacao.visualizar', secretaria);
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

  // Fluxo de Configurar Agenda - Cadastrar, Consultar, Visualizar, Editar
  it('CADASTRANDO: Gerenciar Agendamento', () => {
    cy.visit('/dashboard/agendamento/gerenciar-agendamentos');
    cy.commands(
      'telas.configurar-agendamento.cadastrar',
      configuracaoAgendamento,
    );
  });
  it('CONSULTANDO: Gerenciar Agendamentos', () => {
    cy.commands(
      'telas.configurar-agendamento.consultar',
      configuracaoAgendamento,
    );
  });
  it('VISUALIZANDO: Gerenciar Agendamentos', () => {
    cy.commands(
      'telas.configurar-agendamento.visualizar',
      configuracaoAgendamento,
    );
  });
  it('EDITANDO: Gerenciar Agendamentos', () => {
    cy.commands('telas.configurar-agendamento.editar', configuracaoAgendamento);
  });
  it('CONSULTANDO: Gerenciar Agendamentos', () => {
    cy.commands(
      'telas.configurar-agendamento.consultar',
      configuracaoAgendamento,
    );
  });
  it('VISUALIZANDO: Gerenciar Agendamentos', () => {
    cy.commands(
      'telas.configurar-agendamento.visualizar',
      configuracaoAgendamento,
    );
  });

  //

  // Fluxo de Gerenciar Critérios - Cadastrar, Consultar, Visualizar, Editar
  it('ACESSANDO: Gerenciar Critérios', () => {
    cy.visit('/dashboard/criterios/gerenciar-criterios');
  });
  gerenciarCriterios?.criterios.forEach((criterio, index) => {
    it(`CADASTRANDO: ${index + 1}° Critério`, () => {
      cy.commands('telas.gerenciar-criterios.cadastrar', criterio);
    });
  });
  gerenciarCriterios?.criterios.forEach((criterio, index) => {
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

  //

  // Fluxo de Unidade Escolar - Cadastrar, Consultar, Visualizar, Editar
  it('ACESSANDO: Cadastrar Secretaria de Educação', () => {
    cy.visit('/dashboard/cadastro/unidade-escolar');
  });
  it('CADASTRANDO: Unidade Escolar', () => {
    cy.get(
      'body > div.relative.flex.min-h-screen.flex-col > div.flex-1 > div > div > main > div.flex.flex-row > div > div > span',
    ).should('contain', 'Cadastrar Unidade Escolar');
    cy.commands('telas.cadastros.unidade-escolar', escola);
  });
  it('CONSULTANDO: Unidade Escolar', () => {
    cy.get(
      'body > div.relative.flex.min-h-screen.flex-col > div.flex-1 > div > div > main > div.flex.flex-row > div > div > span',
    ).should('contain', 'Consultar Unidades Escolares');
    cy.commands('telas.consultas.unidade-escolar', escola);
  });
  it('VISUALIZANDO: Unidade Escolar', () => {
    cy.get(
      'body > div.relative.flex.min-h-screen.flex-col > div.flex-1 > div > div > main > div.flex.flex-row > div > div > span',
    ).should('contain', 'Consultar Unidades Escolares');
    cy.commands('telas.consultas.unidade-escolar.visualizar', escola);
  });
  it('CONSULTANDO: Unidade Escolar', () => {
    cy.get(
      'body > div.relative.flex.min-h-screen.flex-col > div.flex-1 > div > div > main > div.flex.flex-row > div > div > span',
    ).should('contain', 'Consultar Unidades Escolares');
    cy.commands('telas.consultas.unidade-escolar', escola);
  });
  it('EDITANDO: Unidade Escolar', () => {
    cy.get(
      'body > div.relative.flex.min-h-screen.flex-col > div.flex-1 > div > div > main > div.flex.flex-row > div > div > span',
    ).should('contain', 'Consultar Unidades Escolares');
    cy.commands('telas.consultas.unidade-escolar.editar', escola);
  });
  // Apartir desse ponto escola já foi alterado
  it('CONSULTANDO: Unidade Escolar', () => {
    cy.get(
      'body > div.relative.flex.min-h-screen.flex-col > div.flex-1 > div > div > main > div.flex.flex-row > div > div > span',
    ).should('contain', 'Consultar Unidades Escolares');
    cy.commands('telas.consultas.unidade-escolar', escola);
  });
  it('VISUALIZANDO: Unidade Escolar', () => {
    cy.get(
      'body > div.relative.flex.min-h-screen.flex-col > div.flex-1 > div > div > main > div.flex.flex-row > div > div > span',
    ).should('contain', 'Consultar Unidades Escolares');
    cy.commands('telas.consultas.unidade-escolar.visualizar', escola);
  });

  // // Fluxo de Portal de Agendamento - Cadastrar, Consultar
  // it('ACESSANDO: Realizar Agendamento', () => {
  //   cy.visit('/agendamento/agendar');
  // });

  // it('CADASTRANDO: Agendamento', () => {
  //   cy.get('.h-24 > .flex > .text-lg').should(
  //     'contain',
  //     'Realizar Agendamento',
  //   );
  //   cy.commands('cadastro.portal.agendamento', crianca);
  // });

  // it('ACESSANDO: Consultar Agendamento', () => {
  //   cy.visit('/agendamento/consultar');
  // });

  // it('CONSULTANDO: Agendamento', () => {
  //   cy.get('.h-24 > .flex > .text-lg').should(
  //     'contain',
  //     'Consultar Agendamento',
  //   );
  //   cy.commands('consulta.portal.agendamento', crianca);
  // });

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
