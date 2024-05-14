const faker = require('faker-br');

export const secretariaEducacaoFixtures = {
    // Identificação
    razaoSocial: 'Secretaria de Educação de Teste',
    nomeFantasia: 'Secretaria Teste',
    cnpj: faker.br.cnpj({ format: true }),
    decreto: Math.floor(Math.random() * 10000) || '',
    naturezaJuridica: ' Órgão Público do Poder Executivo Municipal' || '',
    secretario: faker.name.findName() || '',
    prefeito: faker.name.findName() || '',
    vincEnteFederativo: 'Federal',
    dataCriacao: new Date(
        new Date().getFullYear() - Math.floor(Math.random() * 5) - 1,
        Math.floor(Math.random() * 12), 
        Math.floor(Math.random() * 31) + 1 
    ).toLocaleDateString('pt-BR', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    }) || '',
    // Endereço 
    cep: '76909-836',
    numero: '3800',
    // Contato
    telefone: faker.phone.phoneNumber()  || '',
    nomeContato: faker.name.findName()  || '',
    email: faker.internet.email()  || '',
}
