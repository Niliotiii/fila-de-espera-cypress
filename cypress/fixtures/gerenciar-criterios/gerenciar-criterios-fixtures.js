import { contextFixtures as context } from '../context/context-fixtures';

export const gerenciarCriteriosFixtures = {
  // Informações Gerais
  secretariaEducacao: context.secretariaEducacao,
  criterios: [
    {
      gruposPreferenciais: 'Criança possui deficiência?',
      tipo: 'C',
      exigirComprovacao: 'false',
    },
    {
      gruposPreferenciais: 'Criança mora com os avós?',
      tipo: 'C',
      exigirComprovacao: 'false',
    },
    {
      gruposPreferenciais: 'Criança mora com os tios?',
      tipo: 'C',
      exigirComprovacao: 'false',
    },
    {
      gruposPreferenciais: 'Criança possui mãe adolescente?',
      tipo: 'H',
      exigirComprovacao: 'true',
    },
  ],
};
