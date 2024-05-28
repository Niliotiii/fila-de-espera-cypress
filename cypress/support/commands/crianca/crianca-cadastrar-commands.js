Cypress.Commands.add('TelasCadastrosCrianca', (values) => {
  cy.log('PREENCHENDO: Guias do formulário');

  cy.log('GUIA: Identificação');
  cy.get('#nome-form-item').clear().type(values.nome);
  cy.get('#cpf-form-item').clear().type(values.cpf);
  cy.get('#sexo > select').select(values.sexo, { force: true });
  cy.get('#dataNascimento').clear().type(values.dataNascimento);
  cy.get('#numeroSUS-form-item').clear().type(values.numeroSUS);
  cy.get('#paisOrigem-form-item').click();
  cy.get('[placeholder="Pesquise um local..."]')
    .clear()
    .type(values.paisOrigem);
  cy.contains(values.paisOrigem).click();
  cy.get('#registroNacionalEstrangeiro-form-item')
    .clear()
    .type(values.registroNacionalEstrangeiro);
  cy.get('#protocoloRefugio-form-item').clear().type(values.protocoloRefugiado);
  cy.get('button').contains('Próximo').click();

  cy.log('GUIA: Dados Residenciais');
  cy.commands('endereco', values.endereco);
  cy.get('button').contains('Próximo').click();

  cy.log('GUIA: Filiação');
  // responsavel
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
  cy.get('[placeholder="Pesquise um local..."]')
    .clear()
    .type(values.responsavel.paisOrigem);
  cy.contains(values.responsavel.paisOrigem).click();
  cy.get('#responsavel\\.registroNacionalEstrangeiroRes-form-item')
    .clear()
    .type(values.responsavel2.registroNacionalEstrangeiro);
  cy.get('#responsavel\\.protocoloRefugioRes-form-item')
    .clear()
    .type(values.responsavel2.protocoloRefugiado);
  cy.get('#responsavel\\.sexoRes > select').select(values.responsavel.sexo, {
    force: true,
  });
  cy.get('#responsavel\\.estadoCivil > select').select(
    values.responsavel.estadoCivil,
    {
      force: true,
    },
  );
  cy.get(
    ':nth-child(1) > #responsavel\\.exerceAtividadeProfissional-form-item',
  ).click();
  cy.get('#responsavel\\.profissao-form-item > span').click();
  cy.get('[placeholder="Pesquise por uma profissão..."]')
    .clear()
    .type(values.responsavel.profissao);
  cy.contains(values.responsavel.profissao).click();
  cy.get('#responsavel\\.cepLocalTrabalhoResponsavel-form-item')
    .clear()
    .type(values.responsavel.cepLocalTrabalho);
  cy.get(':nth-child(1) > #responsavel\\.resideCrianca-form-item').click();
  cy.get(':nth-child(2) > #responsavel\\.falecido-form-item').click();
  // responsavel2
  cy.get('#responsavel2\\.parentesco > select').select(
    values.responsavel2.parentesco,
    { force: true },
  );
  cy.get('#responsavel2\\.nomeRes-form-item')
    .clear()
    .type(values.responsavel2.nome);
  cy.get('#responsavel2\\.cpfRes-form-item')
    .clear()
    .type(values.responsavel2.cpf);
  cy.get(
    '#responsavel2\\.dataNascimentoRes > div.flex.flex-row.items-center.gap-2 > input',
  )
    .clear()
    .type(values.responsavel2.dataNascimento);
  cy.get('#responsavel2\\.nacionalidadeRes-form-item').click();
  cy.get('[placeholder="Pesquise um local..."]')
    .clear()
    .type(values.responsavel2.paisOrigem);
  cy.contains(values.responsavel2.paisOrigem).click();
  cy.get('#responsavel2\\.registroNacionalEstrangeiroRes-form-item')
    .clear()
    .type(values.responsavel2.registroNacionalEstrangeiro);
  cy.get('#responsavel2\\.protocoloRefugioRes-form-item')
    .clear()
    .type(values.responsavel2.protocoloRefugiado);
  cy.get('#responsavel2\\.sexoRes > select').select(values.responsavel2.sexo, {
    force: true,
  });
  cy.get('#responsavel2\\.estadoCivil > select').select(
    values.responsavel2.estadoCivil,
    {
      force: true,
    },
  );
  cy.get(
    ':nth-child(1) > #responsavel2\\.exerceAtividadeProfissional-form-item',
  ).click();
  cy.get('#responsavel2\\.profissao-form-item > span').click();
  cy.get('[placeholder="Pesquise por uma profissão..."]')
    .clear()
    .type(values.responsavel2.profissao);
  cy.contains(values.responsavel2.profissao).click();
  cy.get('#responsavel2\\.cepLocalTrabalhoResponsavel-form-item')
    .clear()
    .type(values.responsavel2.cepLocalTrabalho);
  cy.get(':nth-child(1) > #responsavel2\\.resideCrianca-form-item').click();
  cy.get(':nth-child(2) > #responsavel2\\.falecido-form-item').click();
  cy.get('button').contains('Próximo').click();

  cy.log('GUIA: Contatos');
  cy.commands('contato', values.contato);
  cy.get('button').contains('Salvar').click();
  cy.wait(1000);
  cy.get('button').contains('Cancelar').click();
  cy.contains('Dados da criança cadastrados com sucesso').should('exist');
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
