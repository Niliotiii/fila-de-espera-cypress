Cypress.Commands.add('TelasCadastrosCrianca', (values) => {
  cy.log('PREENCHENDO: Guias do formulário');

  cy.log('GUIA: Identificação');
  cy.get('#nome-form-item').clear().type(values.nome);
  cy.get('#cpf-form-item').clear().type(values.cpf);
  cy.get('#sexo > select').select(values.sexo, { force: true });
  cy.get('#dataNascimento').clear().type(values.dataNascimento);
  cy.get('#numeroSUS-form-item').clear().type(values.numeroSUS);
  cy.get('button').contains('Próximo').click();

  cy.log('GUIA: Dados Residenciais');
  cy.commands('endereco', values.endereco);
  cy.get('button').contains('Próximo').click();

  cy.log('GUIA: Filiação');
  cy.get('#responsavel\\.parentesco > select').select(
    values.responsavel.parentesco,
    { force: true },
  );
  cy.get('#responsavel\\.nomeRes-form-item')
    .clear()
    .type(values.responsavel.nome);
  cy.get('#responsavel\\.cpfRes-form-item')
    .clear()
    .type(values.responsavel.cpf);
  cy.get(
    '#responsavel\\.dataNascimentoRes > div.flex.flex-row.items-center.gap-2 > input',
  )
    .clear()
    .type(values.responsavel.dataNascimento);
  cy.get('#responsavel\\.nacionalidadeRes-form-item').click();
  cy.get('[placeholder="Pesquise um local..."]').clear().type('Brasil');
  cy.get('[data-value="76_brasil"]').click();
  cy.get('#responsavel\\.sexoRes > select').select('Masculino', {
    force: true,
  });
  cy.get('#responsavel\\.estadoCivil > select').select('Outro', {
    force: true,
  });

  /*
  cy.get(
    ":nth-child(1) > #responsavel\\.exerceAtividadeProfissional-form-item",
  ).click();
  cy.get("#responsavel\\.profissao-form-item > span").click();
  cy.get('[placeholder="Pesquise por uma profissão..."]')
    .clear()
    .type("Aeronauta");
  cy.get('[data-value="aeronauta"]').click();
  cy.get(":nth-child(1) > #responsavel\\.resideCrianca-form-item").click();
  cy.get(":nth-child(2) > #responsavel\\.falecido-form-item").click();
  cy.get("#responsavel2\\.parentesco > select").select("Pai", { force: true });
 
  cy.get("#responsavel2\\.nomeRes-form-item").clear().type(responsavel2Nome);
  cy.get("#responsavel2\\.cpfRes-form-item").clear().type(responsavel2CPF);
  cy.get(
    "#responsavel2\\.dataNascimentoRes > div.flex.flex-row.items-center.gap-2 > input",
  )
    .clear()
    .type(responsavel2DataNascimento);
  cy.get("#responsavel2\\.nacionalidadeRes-form-item").click();
  cy.get('[placeholder="Pesquise um local..."]').clear().type("Brasil");
  cy.get('[data-value="76_brasil"]').click();
  cy.get("#responsavel2\\.sexoRes > select").select("Masculino", {
    force: true,
  });
  // cy.get('#responsavel2\\.sexoRes-form-item').find('select').then(select => {
  //     const options = select.find('option')
  //     const randomIndex = Math.floor(Math.random() * options.length)
  //     const randomOptionValue = options[randomIndex].value
  //     cy.get('#responsavel2\\.sexoRes-form-item').find('select').select(randomOptionValue, { force: true })
  //     cy.get('#responsavel2\\.sexoRes-form-item').find('select').should('have.value', randomOptionValue)
  // })
  cy.get("#responsavel2\\.estadoCivil > select").select("Outro", {
    force: true,
  });
  // cy.get('#responsavel2\\.estadoCivil').find('select').then(select => {
  //     const options = select.find('option')
  //     const randomIndex = Math.floor(Math.random() * options.length)
  //     const randomOptionValue = options[randomIndex].value
  //     cy.get('#responsavel2\\.estadoCivil').find('select').select(randomOptionValue, { force: true })
  //     cy.get('#responsavel2\\.estadoCivil').find('select').should('have.value', randomOptionValue)
  // })
  cy.get(
    ":nth-child(1) > #responsavel2\\.exerceAtividadeProfissional-form-item",
  ).click();
  cy.get("#responsavel2\\.profissao-form-item > span").click();
  cy.get('[placeholder="Pesquise por uma profissão..."]')
    .clear()
    .type("Aeronauta");
  cy.get('[data-value="aeronauta"]').click();
  cy.get(":nth-child(1) > #responsavel2\\.resideCrianca-form-item").click();
  cy.get(":nth-child(2) > #responsavel2\\.falecido-form-item").click();

  cy.log('CLICANDO no botão "Próximo"');
  cy.wait(500);
  cy.get("button").contains("Próximo").click();
  cy.wait(500);

  cy.log('PREENCHENDO dados da guia "Contatos"');
  cy.wait(500);
  cy.get("#telefones\\.0\\.numero-form-item").clear().type(responsavelTelefone);

  cy.get("#telefones\\.0\\.tipo > select").select("Telefone celular", {
    force: true,
  });
  // cy.get('#telefones\\.0\\.tipo').find('select').then(select => {
  //     const options = select.find('option')
  //     const randomIndex = Math.floor(Math.random() * options.length)
  //     const randomOptionValue = options[randomIndex].value
  //     cy.get('#telefones\\.0\\.tipo').find('select').select(randomOptionValue, { force: true })
  //     cy.get('#telefones\\.0\\.tipo').find('select').should('have.value', randomOptionValue)
  // })
  cy.get("#telefones\\.0\\.contatoPreferencial-form-item")
    .clear()
    .type(responsavelNome);
  cy.get("#emails\\.0\\.email-form-item").clear().type(responsavelEmail);

  cy.log('CLICANDO no botão "Salvar"');
  cy.wait(500);
  cy.get("button").contains("Salvar").click();
  cy.wait(500);
  cy.contains("Dados da criança cadastrados com sucesso").should("exist");*/
});

/*
  // cy.get('#responsavel\\.parentesco').find('select').then(select => {
  //     const options = select.find('option')
  //     const randomIndex = Math.floor(Math.random() * options.length)
  //     const randomOptionValue = options[randomIndex].value
  //     cy.get('#responsavel\\.parentesco').find('select').should('have.value', randomOptionValue)
  //     cy.get('#responsavel\\.sexoRes-form-item').find('select').should('have.value', randomOptionValue)
  // })

   // cy.get('#responsavel\\.sexoRes-form-item').find('select').then(select => {
  //     const options = select.find('option')
  //     const randomIndex = Math.floor(Math.random() * options.length)
  //     const randomOptionValue = options[randomIndex].value
  //     cy.get('#responsavel\\.sexoRes-form-item').find('select').select(randomOptionValue, { force: true })
  //     cy.get('#responsavel\\.sexoRes-form-item').find('select').should('have.value', randomOptionValue)
  // })
 
  // cy.get('#responsavel\\.estadoCivil').find('select').then(select => {
  //     const options = select.find('option')
  //     const randomIndex = Math.floor(Math.random() * options.length)
  //     const randomOptionValue = options[randomIndex].value
  //     cy.get('#responsavel\\.estadoCivil').find('select').select(randomOptionValue, { force: true })
  //     cy.get('#responsavel\\.estadoCivil').find('select').should('have.value', randomOptionValue)
  // })

   // cy.get('#responsavel2\\.parentesco').find('select').then(select => {
  //     const options = select.find('option')
  //     const randomIndex = Math.floor(Math.random() * options.length)
  //     const randomOptionValue = options[randomIndex].value
  //     cy.get('#responsavel2\\.parentesco').find('select').should('have.value', randomOptionValue)
  //     cy.get('#responsavel2\\.sexoRes-form-item').find('select').should('have.value', randomOptionValue)
  // })

*/
