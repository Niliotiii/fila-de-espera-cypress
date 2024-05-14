import './commands/auth/auth-login-commands.js'
import './commands/endereco/endereco-commands.js'
import './commands/contato/contato-commands.js'
import './commands/portal-agendamento-commands.js'
import './commands/configurar-agendamento/configurar-agendamento-commands.js'
import './commands/secretaria-educacao/secretaria-educacao-commands'
import './commands/context/context-secretaria-educacao-commands.js'


Cypress.Commands.add('commands', (key, params) => {
  const command = key.split('.').map((item) => item.charAt(0).toUpperCase() + item.slice(1)).join('')

  if (params) {
    return cy[command](params)
   }
   else {
    cy.log(command)
     return cy?.[command]?.()
   }
})