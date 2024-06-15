const faker = require('faker-br');
const nome = faker.name.findName('Secretaria Teste');
const nomeEscola = faker.name.findName('Escola Teste');

export const contextFixtures = {
  secretariaEducacao: nome,
  secretariaEducacaoRazaoSocial: nome,
  unidadeEscolar: nomeEscola,
  cpfCrianca: '227.580.532-09',
  cpfResponsavel: '918.901.306-99',
  nomeCrianca: 'Cláudio Geraldo Benjamin Peixoto', // `Criança Teste ${faker.random.number()}`
  etapa: 'Maternal I – 2 anos a 2 anos e 11 meses',
  turno: 'Vespertino',
  nomeTurma: `Turma Teste ${faker.random.number()}`,
};
