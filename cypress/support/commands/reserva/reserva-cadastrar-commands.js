Cypress.Commands.add('TelasReservaCadastrar', (values) => {
  cy.log('PREENCHENDO: Filtro de busca');
  cy.selectVerification('#etapa > select', '#etapa-form-item', values?.etapa);
  cy.selectVerification('#turno > select', '#turno-form-item', values?.turno);
  cy.get(
    'body > div.relative.flex.min-h-screen.flex-col > div.flex-1 > div > div > main > div:nth-child(3) > div > div > form > div.-mb-10.ml-5.grid.grid-cols-12.items-start.justify-center.gap-7 > div.flex-rows.relative.flex.w-full.items-center.col-span-12.undefined > input',
  ).type(values.nomeCrianca);
  cy.wait(1000);

  cy.contains('tr', values?.nomeCrianca).within(() => {
    cy.contains('button', 'Fazer contato').click();
  });

  cy.log('PREENCHENDO: CONTATO');
  cy.get('#nomeContato-form-item').type(values.nomeContato);
  cy.selectVerification(
    '#resultadoLigacao > select',
    '#resultadoLigacao-form-item',
    values?.resultadoContato,
  );
  cy.get('#obersevacoesContato-form-item > textarea').type(
    values.observacoesContato,
  );
  cy.get('#tipoContato-form-item').click();
  cy.get('body').type('{enter}');
  cy.get('button').contains('Cadastrar').click();
  cy.contains('Contato registrado com sucesso!').should('exist');

  cy.contains('tr', values?.nomeCrianca).within(() => {
    cy.contains('button', 'Reservar vaga').click();
  });

  cy.wait(3000);
  cy.log('PREENCHENDO: RESERVA');
  let found = false;
  cy.get('tbody tr')
    .each(($row) => {
      cy.wrap($row).within(() => {
        cy.get('td')
          .eq(0)
          .then(($school) => {
            if (found) return;
            if ($school.text().trim() === values?.unidadeEscolar) {
              cy.get('td')
                .eq(4)
                .then(($status) => {
                  if ($status.text().trim() === 'Livre') {
                    found = true;
                    cy.get('td').eq(5).find('button[role="checkbox"]').click();
                  } else {
                    cy.log(
                      'Nenhuma vaga livre encontrada para a escola: ' +
                        values?.unidadeEscolar,
                    );
                  }
                });
            }
          });
      });
    })
    .then(() => {
      if (found) {
        cy.wait(1000);
        cy.get(
          'body > div.relative.flex.min-h-screen.flex-col > div.flex-1 > div > div > main > div:nth-child(3) > section > div > div.mt-14.flex.flex-row.justify-end > button',
        ).click();
        cy.contains('Vaga reservada com sucesso!').should('exist');
      }
    });
});
