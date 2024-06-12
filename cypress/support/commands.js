import 'cypress-file-upload';
import './commands/configurar-agendamento';
import './commands/entrevista';
import './commands/gerenciar-criterios';
import './commands/perfil';
import './commands/reserva';

import './commands/auth/auth-login-commands.js';
import './commands/contato/contato-commands.js';
import './commands/context/context-commands.js';
import './commands/crianca/crianca-cadastrar-commands.js';
import './commands/crianca/crianca-consultar-commands.js';
import './commands/crianca/crianca-deletar-commands.js';
import './commands/crianca/crianca-editar-commands.js';
import './commands/crianca/crianca-visualizar-commands.js';
import './commands/endereco/endereco-commands.js';
import './commands/portal-agendamentos/portal-agendamentos-cadastrar-commands.js';
import './commands/portal-agendamentos/portal-agendamentos-consultar-commands.js';
import './commands/portal-agendamentos/portal-agendamentos-deletar-commands.js';
import './commands/secretaria-educacao/secretaria-educacao-cadastrar-commands.js';
import './commands/secretaria-educacao/secretaria-educacao-consultar-commands.js';
import './commands/secretaria-educacao/secretaria-educacao-deletar-commands.js';
import './commands/secretaria-educacao/secretaria-educacao-editar-commands.js';
import './commands/secretaria-educacao/secretaria-educacao-visualizar-commands.js';
import './commands/servidor/servidor-cadastrar-commands.js';
import './commands/servidor/servidor-consultar-commands.js';
import './commands/servidor/servidor-deletar-commands.js';
import './commands/servidor/servidor-editar-commands.js';
import './commands/servidor/servidor-visualizar-commands.js';
import './commands/turma/turma-cadastrar-commands.js';
import './commands/turma/turma-consultar-commands.js';
import './commands/turma/turma-deletar-commands.js';
import './commands/turma/turma-editar-commands.js';
import './commands/turma/turma-visualizar-commands.js';
import './commands/unidade-escolar/unidade-escolar-cadastrar-commands.js';
import './commands/unidade-escolar/unidade-escolar-consultar-commands.js';
import './commands/unidade-escolar/unidade-escolar-deletar-commands.js';
import './commands/unidade-escolar/unidade-escolar-editar-commands.js';
import './commands/unidade-escolar/unidade-escolar-visualizar-commands.js';
import './commands/utils/index.js';
import './commands/vaga/vaga-cadastrar-commands.js';
import './commands/vaga/vaga-consultar-commands.js';
import './commands/vaga/vaga-deletar-commands.js';
import './commands/vaga/vaga-visualizar-commands.js';

Cypress.Commands.add('commands', (key, params) => {
  const command = key
    .split('.')
    .map((item) => item.charAt(0).toUpperCase() + item.slice(1))
    .join('');
  if (params) {
    return cy[command](params);
  } else {
    cy.log(command);
    return cy?.[command]?.();
  }
});
