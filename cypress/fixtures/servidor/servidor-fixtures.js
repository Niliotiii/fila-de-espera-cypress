import { contatoFixtures as contato } from '../contato/contato-fixtures';
import { contextFixtures as context } from '../context/context-fixtures';

const faker = require('faker-br');

export const servidorFixtures = {
  // Identificação
  lotacaoVinculada: context.secretariaEducacao,
  nome: faker.name.findName(),
  cpf: faker.br.cpf({ format: true }),
  rg: faker.br.rg(),
  orgaoExpedidor: 'SSP/RO',
  dataNascimento: new Date(
    new Date().getFullYear() - Math.floor(Math.random() * 23) - 18,
    Math.floor(Math.random() * 12),
    Math.floor(Math.random() * 31) + 1,
  ).toLocaleDateString('pt-BR', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }),
  sexo: 'Masculino',
  raca: 'Parda',
  paisOrigem: 'Brasil',
  uf: 'RO',
  municipioNascimento: 'Porto Velho',
  nivelEscolaridade: 'Doutorado',
  // Usuário
  tipoVinculo: 'Secretaria Municipal',
  nivelAcesso: 'Administrador Municipal',
  cargo: 'Gestor da Central de Vagas',
  situacaoCadastral: 'Ativa',
  // Contato
  contato: contato,
};
