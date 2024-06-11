Cypress.Commands.add('UtilsReservaSearch-item', (values) => {
  const childrenSelector =
    'body > div.relative.flex.min-h-screen.flex-col > div.flex-1 > div > div > main > div:nth-child(3) > div > div > form > div.ml-5.grid.grid-cols-10.items-start.justify-center.gap-7.space-y-2 > div.flex-rows.relative.flex.w-full.items-center.col-span-3.undefined > input';
  cy.log('PESQUISANDO: Reserva de Vaga');
  cy.get(childrenSelector).type(values.nomeCrianca);
  cy.wait(2000);
  switch (values.type) {
    case 'visualizar':
      cy.log('CLICANDO: No Ícone de Olho');
      cy.get(
        'body > div.relative.flex.min-h-screen.flex-col > div.flex-1 > div > div > main > div:nth-child(3) > div > div > form > div.mt-8.space-y-4 > div.w-full.overflow-auto > table > tbody > tr:nth-child(1) > td:nth-child(6) > div > button.inline-flex.items-center.justify-center.rounded-md.text-sm.font-medium.transition-colors.focus-visible\\:outline-none.focus-visible\\:ring-2.focus-visible\\:primary\\/80.focus-visible\\:ring-offset-2.disabled\\:opacity-50.disabled\\:pointer-events-none.ring-offset-background.hover\\:bg-accent.hover\\:text-accent-foreground.h-6.w-6.bg-\\[\\#4FC779\\]\\/20.p-0.text-center',
      ).click();
      break;
    case 'deletar':
      cy.log('CLICANDO: No Ícone de Lixeira');
      cy.get(
        'body > div.relative.flex.min-h-screen.flex-col > div.flex-1 > div > div > main > div:nth-child(3) > div > div > form > div.mt-8.space-y-4 > div.w-full.overflow-auto > table > tbody > tr:nth-child(1) > td:nth-child(6) > div > div > button',
      ).click();
  }

  cy.wait(2000);
});
