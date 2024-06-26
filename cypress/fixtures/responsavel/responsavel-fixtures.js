const faker = require('faker-br');

export const responsavelFixtures = {
  nome: faker.name.findName(),
  cpf: faker.br.cpf({ format: true }),
  parentesco: 'Pai',
  dataNascimento: new Date(
    new Date().getFullYear() - Math.floor(Math.random() * 23) - 18,
    Math.floor(Math.random() * 12),
    Math.floor(Math.random() * 31) + 1,
  ).toLocaleDateString('pt-BR', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }),
  paisOrigem: 'Brasil',
  registroNacionalEstrangeiro: 'RNE123',
  protocoloRefugiado: 'PR123',
  sexo: 'Outro',
  estadoCivil: 'Outro',
  profissao: 'Aeronauta',
  cepLocalTrabalho: faker.address.zipCode('#####-###'),
};
