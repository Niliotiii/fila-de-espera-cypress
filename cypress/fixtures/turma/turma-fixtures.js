import { contextFixtures as context } from '../context/context-fixtures';

export const turmaFixtures = {
  secretariaEducacao: context.secretariaEducacao,
  unidadeEscolar: context.unidadeEscolar,
  etapa: context.etapa,
  nome: context.nomeTurma,
  turno: context.turno,
  periodoInicial: '01/01/2024',
  periodoFinal: '31/12/2024',
  horaInicial: '07:00',
  horaFinal: '17:00',
  diasFuncionamento: ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta'],
  tipoTurma: 'Hibrido',
  situacao: 'Ativa',
  anoLetivo: '2024',
};
