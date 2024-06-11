import { contextFixtures as context } from '../context/context-fixtures';

export const vagaFixtures = {
  dataHora: '00/00/0000 às 00:00',
  servidor: 'servidor',
  status: 'Livre',
  secretariaEducacao: context.secretariaEducacao,
  unidadeEscolar: context.unidadeEscolar,
  anoLetivo: '2024',
  turma: `${context.nomeTurma} - ${context.etapa} - ${context.turno}`,
  quantidadeVagas: '3',
};
