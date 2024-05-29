import { contextFixtures as context } from '../context/context-fixtures';

export const vagaFixtures = () => {
  return {
    secretariaEducacao: context.secretariaEducacao,
    unidadeEscolar: context.unidadeEscolar,
    anoLetivo: '2024',
    turma: `${context.nomeTurma} - ${context.etapa} - ${context.turno}`,
    quantidadeVagas: '1',
  };
};
