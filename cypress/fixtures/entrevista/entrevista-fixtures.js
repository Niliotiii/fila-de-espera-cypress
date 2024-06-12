import { contextFixtures as context } from '../context/context-fixtures';

const faker = require('faker-br');

export const entrevistaFixtures = {
  // Identificação
  cpfCrianca: context.cpfCrianca,
  // Entrvistador
  tipoResponsavel: 'PRIMEIRA OPÇÃO',
  nomeResponsavel: '',
  cpfResponsavel: '',
  dataNascimentoResponsavel: '',
  sexoResponsavel: '',
  estadoCivilResponsavel: '',
  // Unidade Preferência
  etapa: 'Berçário - menor que 2 anos',
  turno: 'Matutino',
  preferenciaUnidadeEscolar1: context.unidadeEscolar,
  preferenciaUnidadeEscolar2: 'PRIMEIRA OPÇÃO',
  // Critérios
  arquivo: 'assets/files/comprovante-1.pdf',
  // Dados Complementares
  membrosEderecoCrianca: 'PRIMEIRA OPÇÃO',
  membrosContribuintesRenda: 'PRIMEIRA OPÇÃO',
  valorRendaFamiliar: '120000',
};
