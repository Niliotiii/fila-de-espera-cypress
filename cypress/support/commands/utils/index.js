Cypress.Commands.add('selectVerification', (selector, selector2, valor) => {
  cy.get(selector).then(($select) => {
    const primeiraOpcao = $select.find('option:first');
    const primeiraOpcaoVal = primeiraOpcao.val();
    const primeiraOpcaoText = primeiraOpcao.text().trim();

    if (primeiraOpcaoVal === valor || primeiraOpcaoText === valor) {
      cy.get(selector2).click();
      cy.wait(500);
      cy.get('body').type('{enter}');
    } else {
      cy.get(selector).select(valor, { force: true });
    }
  });
});
