const faker = require('faker-br');
const nome = `Turma Teste ${faker.random.number()}`;

const secretariaEducacao = context?.secretariaEducacao;

export const turmaFixtures = {
  secretariaEducacao: 'SEMED Ji-Paraná',
  unidadeEscolar: 'IFRO - CAMPUS JI-PARANA',
  etapa: 'Pré/Jardim II – 5 anos a 5 anos e 11 meses',
  nome: nome,
  turno: 'Integral',
  periodoInicial: '01/01/2024',
  periodoFinal: '31/12/2024',
  horaInicial: '07:00',
  horaFinal: '17:00',
  diasFuncionamento: ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta'],
  tipoTurma: 'Hibrido',
  situacao: 'Ativa',
  anoLetivo: '2024',
};
