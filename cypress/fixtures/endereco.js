const faker = require('faker-br');

let endereco = {
    cep: faker.address.zipCode('#####-###'),
    numero: faker.random.number(),
    bairro: faker.address.county(),
    complemento: faker.address.direction(),
    logradouro: faker.address.streetName(),
    cidade: 'Ouro Preto do Oeste',
    distrito: Math.random() < 0.5 ? 'Ouro Preto do Oeste' : 'Rondominas',
    subDistrito: ''
}

export default endereco