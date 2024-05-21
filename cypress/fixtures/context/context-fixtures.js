const faker = require('faker-br');

const nome = faker.name.findName('Secretaria Teste');

export const contextFixtures = {
  secretariaEducacao: 'SEMED Ji-Paraná',
  unidadeEscolar: 'EEEFM JANETE CLAIR',
  cpfCrianca: '144.369.754-01',
};
