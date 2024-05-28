import 'cypress-file-upload';
import './commands/agendamento/agendamento-commands.js';
import './commands/agendamento/configurar-agendamento-commands.js';
import './commands/auth/auth-login-commands.js';
import './commands/contato/contato-commands.js';
import './commands/context/context-commands.js';
import './commands/crianca/crianca-cadastrar-commands.js';
import './commands/crianca/crianca-consultar-commands.js';
import './commands/crianca/crianca-deletar-commands.js';
import './commands/crianca/crianca-editar-commands.js';
import './commands/crianca/crianca-visualizar-commands.js';
import './commands/endereco/endereco-commands.js';
import './commands/entrevista/entrevista-commands.js';
import './commands/gerenciar-criterios/gerenciar-criterios-commands.js';
import './commands/secretaria-educacao/secretaria-educacao-commands';
import './commands/servidor/servidor-cadastro-commands.js';
import './commands/servidor/servidor-consulta-commands.js';
import './commands/servidor/servidor-delete-commands.js';
import './commands/turma/turma-commands.js';
import './commands/unidade-escolar/unidade-escolar-commands.js';
import './commands/vaga/vaga-commands.js';

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
