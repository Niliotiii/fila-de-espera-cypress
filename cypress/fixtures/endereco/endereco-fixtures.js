const faker = require('faker-br');

export const enderecoFixtures = (gerarLocalizacao = false) => {
  if (gerarLocalizacao) {
    return {
      cep: faker.address.zipCode('#####-###'),
      numero: faker.random.number(4),
      bairro: faker.address.county(),
      complemento: faker.address.direction(),
      logradouro: faker.address.streetName(),
      cidade: 'Ouro Preto do Oeste',
      distrito: Math.random() < 0.5 ? 'Rondominas' : 'Rondominas',
      subDistrito: '',
      zona: 'Urbana',
      localizacaoDiferenciada: 'Não está em área de localização diferenciada',
      numeroUnidadeConsumidora: '123321',
      numeroMatriculaIPTU: '456654',
      gerarLocalizacao: true,
    };
  }

  return {
    cep: '76909-836',
    numero: '3800',
    gerarLocalizacao: false,
  };
};
