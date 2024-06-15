import {
  contatoFixtures as contato,
  enderecoFixtures as endereco,
} from '../../fixtures';
import { contextFixtures as context } from '../context/context-fixtures';

const faker = require('faker-br');

export const secretariaEducacaoFixtures = {
  // Identificação
  razaoSocial: context.secretariaEducacaoRazaoSocial,
  nomeFantasia: context.secretariaEducacao,
  cnpj: faker.br.cnpj({ format: true }),
  decreto: Math.floor(Math.random() * 10000) || '',
  naturezaJuridica: 'Órgão Público do Poder Executivo Municipal',
  secretario: faker.name.findName() || '',
  prefeito: faker.name.findName() || '',
  vincEnteFederativo: 'Federal',
  dataCriacao:
    new Date(
      new Date().getFullYear() - Math.floor(Math.random() * 5) - 1,
      Math.floor(Math.random() * 12),
      Math.floor(Math.random() * 31) + 1,
    ).toLocaleDateString('pt-BR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    }) || '',
  // Endereço
  endereco: endereco(true),
  // Contato
  contato: contato,
};
