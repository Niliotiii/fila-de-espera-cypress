const faker = require('faker-br');

export const vagaFixtures = (escolherTurma = false) => {
  if (escolherTurma) {
    return {
      secretariaEducacao: 'SEMED Ji-Paraná',
      unidadeEscolar: 'IFRO - CAMPUS JI-PARANA',
      anoLetivo: '2024',
      turma: 'Turma Teste 89582 - Pré/Jardim II – 5 anos a 5 anos e 11 meses - Integral',
      quantidadeVagas: '5',
      escolherTurma: true,
    };
  }

  return {
    secretariaEducacao: 'SEMED Ji-Paraná',
    unidadeEscolar: 'IFRO - CAMPUS JI-PARANA',
    anoLetivo: '2024',
    quantidadeVagas: '5',
    escolherTurma: false,
  };
};
