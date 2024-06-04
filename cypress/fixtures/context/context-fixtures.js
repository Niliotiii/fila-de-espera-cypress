const faker = require('faker-br');

export const contextFixtures = {
  secretariaEducacao: 'Secretaria Teste Barros',
  secretariaEducacaoRazaoSocial: 'Secretaria Teste Batista',
  unidadeEscolar: 'EMEIEF PAULO FREIRE 1',
  cpfCrianca: '144.369.754-01',
  nomeCrianca: 'Ana Maria', // `Criança Teste ${faker.random.number()}`
  etapa: 'Berçário – menores de 2 anos',
  turno: 'Vespertino',
  nomeTurma: `Turma Teste ${faker.random.number()}`,
};
