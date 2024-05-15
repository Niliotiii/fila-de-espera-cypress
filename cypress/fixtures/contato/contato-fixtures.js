const faker = require('faker-br');

export const contatoFixtures = {
    telefone: faker.phone.phoneNumber(),
    nomeContato: faker.name.findName(),
    email: faker.internet.email(),
};