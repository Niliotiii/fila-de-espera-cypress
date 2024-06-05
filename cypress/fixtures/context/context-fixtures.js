const faker = require('faker-br');

export const contextFixtures = {
  secretariaEducacao: 'SEMED Ji-Paraná',
  secretariaEducacaoRazaoSocial: 'SEMED Ji-Paraná',
  unidadeEscolar: 'EMEIEF PAULO FREIRE 1',
  cpfCrianca: '144.369.754-01',
  nomeCrianca: 'Ana Maria', // `Criança Teste ${faker.random.number()}`
  etapa: 'Maternal I – 2 anos a 2 anos e 11 meses',
  turno: 'Vespertino',
  nomeTurma: `Turma Teste ${faker.random.number()}`,
};
