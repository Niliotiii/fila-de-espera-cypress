import {
  contatoFixtures as contato,
  enderecoFixtures as endereco,
} from '../../fixtures';

const faker = require('faker-br');
const nome = faker.name.findName('Escola Teste');

export const unidadeEscolarFixtures = {
  // Identificação
  razaoSocial: nome,
  nomeFantasia: nome,
  tipo: 'Creche',
  cnpj: faker.br.cnpj({ format: true }),
  dataCriacao: new Date(
    new Date().getFullYear() - Math.floor(Math.random() * 23) - 25,
    Math.floor(Math.random() * 12),
    Math.floor(Math.random() * 31) + 1,
  ).toLocaleDateString('pt-BR', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }),
  denominacao: Math.floor(Math.random() * 10000),
  autorizacaoFuncionamento: Math.floor(Math.random() * 10000),
  situacaoFuncionamento: 'Em atividade',
  codigoInep: Math.floor(Math.random() * 10000),
  dependenciaAdministrativa: 'Privada',
  convenioPublico: 'Não tem convênio',
  secretariaEducacao: 'Secretária Municipal de Educação Ji-Paraná',
  // Endereço
  endereco: endereco(true),
  // Contato
  contato: contato,
};
