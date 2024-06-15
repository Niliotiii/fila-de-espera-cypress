import {
  configurarAgendamentoFixtures as configuracaoAgendamento,
  criancaFixtures as crianca,
  entrevistaFixtures as entrevista,
  unidadeEscolarFixtures as escola,
  gerenciarCriteriosFixtures as gerenciarCriterios,
  reservaFixtures as reserva,
  secretariaEducacaoFixtures as secretaria,
  servidorFixtures as servidor,
  turmaFixtures as turma,
  vagaFixtures as vaga,
} from '../../fixtures';

// ---- TROCA PARA FLUXO DE ATENDENTE DE SECRETARIA ---- //

configuracaoAgendamento.secretariaEducacao = secretaria.nomeFantasia;
configuracaoAgendamento.secretariaEducacaoRazaoSocial =
  'Secretaria de Educação Editada';

escola.secretariaEducacao = 'Secretaria de Educação Editada';

// ---- TROCA PARA FLUXO DE GESTOR DE CRECHE ---- //

vaga.turma = 'PRIMEIRA OPCAO';
turma.perfil = true;
vaga.perfil = true;

// ---- TROCA PARA FLUXO DE USUÁRIO ---- //

crianca.agendamento = {
  municipio: secretaria.endereco.cidade,
  localAtendimento: secretaria.razaoSocial,
};

// ---- TROCA PARA FLUXO DE ATENDENTE SECRETARIA ---- //

crianca.perfil = true;
entrevista.cpfCrianca = crianca.cpf;
entrevista.preferenciaUnidadeEscolar1 = escola.nomeFantasia;
(reserva.secretariaEducacao = secretaria.nomeFantasia),
  (reserva.unidadeEscolar = escola.nomeFantasia);
reserva.nomeCrianca = crianca.nome;

// ---------------------------------------------------------------------------- //
const administradorMunicipal = {
  perfil: true,
  role: 'ADMINISTRADOR MUNICIPAL',
  nome: 'Danilo Saiter da Silva',
  cpf: '034.424.442-33',
  nivelAcesso: 'Administrador Municipal',
  cargo: 'Gestor da Central de Vagas',
  lotacaoVinculada: secretaria.nomeFantasia,
};

const gestorCreche = {
  perfil: true,
  role: 'GESTOR DE CRECHE',
  nome: 'Danilo Saiter da Silva',
  cpf: '034.424.442-33',
  nivelAcesso: 'Gestor de Creche',
  cargo: 'Diretor(a)',
  lotacaoVinculada: escola.nomeFantasia,
};

const atendenteSecretaria = {
  perfil: true,
  role: 'ATENDENTE DE SECRETARIA',
  nome: 'Danilo Saiter da Silva',
  cpf: '034.424.442-33',
  nivelAcesso: 'Atendente Secretaria',
  cargo: 'Atendente',
  lotacaoVinculada: secretaria.nomeFantasia,
};
// ---------------------------------------------------------------------------- //

describe('INICIANDO TESTE', () => {
  // ------------------------ FLUXO DE ADMINISTRADOR ------------------------ //

  it('FAZENDO: LOGIN (ADMINISTRADOR)', () => {
    cy.commands('auth.Login', 'ADMINISTRADOR');
  });

  it('FLUXO: SECRETARIA EDUCAÇÃO', () => {
    cy.commands('perfil.secretaria-educacao', secretaria);
  });

  it('FLUXO: SERVIDOR', () => {
    cy.commands('perfil.servidor', servidor);
  });

  // ------------------------ FLUXO DE ADMINISTRADOR MUNICIPAL ------------------------ //

  it('TROCANDO-ACESSO: (ADMINISTRADOR MUNICIPAL)', () => {
    cy.commands('perfil.troca-acesso', administradorMunicipal);
  });

  it('FLUXO: CONFIGURAR AGENDAMENTO', () => {
    cy.commands('perfil.configurar-agendamento', configuracaoAgendamento);
  });

  it('FLUXO: GERENCIAR CRITÉRIOS', () => {
    cy.commands('perfil.gerenciar-criterios', gerenciarCriterios);
  });

  it('FLUXO: UNIDADE ESCOLAR', () => {
    cy.commands('perfil.unidade-escolar', escola);
  });

  // ------------------------ FLUXO DO USUÁRIO ------------------------ //

  it('FLUXO: PORTAL AGENDAMENTO ', () => {
    cy.commands('perfil.portal-agendamento', crianca);
  });

  // ------------------------ FLUXO DE GESTOR DE CRECHE ------------------------ //

  it('TROCANDO-ACESSO: (GESTOR DE CRECHE)', () => {
    cy.commands('perfil.troca-acesso', gestorCreche);
  });
  it('FLUXO: TURMA', () => {
    cy.commands('perfil.turma', turma);
  });
  it('FLUXO: VAGA', () => {
    cy.commands('perfil.vaga', vaga);
  });

  // ------------------------ FLUXO DE ATENDENTE SECRETARIA ------------------------ //

  it('FAZENDO: LOGIN (ADMINISTRADOR)', () => {
    cy.commands('auth.Login', 'ADMINISTRADOR');
  });

  it('TROCANDO-ACESSO: (ATENDENTE SECRETARIA)', () => {
    cy.commands('perfil.troca-acesso', atendenteSecretaria);
  });

  it('SELECIONANDO: Contexto', () => {
    cy.commands('context.escola');
  });

  it('FLUXO: CRIANÇA', () => {
    cy.commands('perfil.crianca', crianca);
  });
  it('FLUXO: ENTREVISTA', () => {
    cy.commands('perfil.entrevista', entrevista);
  });
  it('FLUXO: RESERVA DE VAGA', () => {
    cy.commands('perfil.reserva', reserva);
  });
});
