import './commands/login-commands'
import './commands/portal-agendamento-commands.js'
import './commands/secretaria-educacao-commands'


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