const faker = require('faker');

export const responsavel2Fixtures = {
    nome: faker.name.findName(),
    cpf: faker.br.cpf({ format: true }),
    dataNascimento: new Date(
        new Date().getFullYear() - Math.floor(Math.random() * 23) - 18,
        Math.floor(Math.random() * 12),
        Math.floor(Math.random() * 31) + 1
    ).toLocaleDateString('pt-BR', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    }),
    telefone: faker.phone.phoneNumber('(##) #####-####'),
    email: faker.internet.email(),
    formats: faker.phone.phoneFormats('(##) #####-####'),
};