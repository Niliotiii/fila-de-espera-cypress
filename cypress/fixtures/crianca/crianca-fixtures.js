import {
  contatoFixtures as contato,
  responsavelFixtures as responsavel,
} from '../../fixtures';

const faker = require('faker-br');

export const criancaFixtures = {
  // Identificação
  nome: faker.name.findName(),
  cpf: faker.br.cpf({ format: true }),
  sexo: 'Masculino',
  dataNascimento: new Date(
    new Date().getFullYear() - Math.floor(Math.random() * 5) - 1,
    Math.floor(Math.random() * 12),
    Math.floor(Math.random() * 31) + 1,
  ).toLocaleDateString('pt-BR', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }),
  numeroSUS: '123456789012345',
  // Dados Residenciais
  endereco: {
    cep: '76909-836',
    numero: '3800',
    gerarLocalizacao: false,
  },
  //endereco: endereco(),

  // Filiação
  contato: contato,
  responsavel: responsavel,
};
