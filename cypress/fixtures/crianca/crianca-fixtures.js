const faker = require('faker-br');

export const criancaFixtures = {
    nome: faker.name.findName(),
    cpf: faker.br.cpf({ format: true }),
    dataNascimento: new Date(
        new Date().getFullYear() - Math.floor(Math.random() * 5) - 1,
        Math.floor(Math.random() * 12), // Meses de 0 a 11
        Math.floor(Math.random() * 31) + 1 // Dias de 1 a 31
    ).toLocaleDateString('pt-BR', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    }),
};