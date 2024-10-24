const fs = require('fs');
const csv = require('csv-parser'); // leitura de dados no formato .csv

// const csvDados = `id,nome,email
// 1,João,joao@example.com
// 2,Maria,maria@example.com
// 3,Carlos,carlos@example.com`

// fs.writeFileSync('dados.csv', csvDados);
// console.log('Arquivo CSV gerado com sucesso!')



// acessando o arquivo .csv para ler ou escrever de forma assíncrona  createReadStream
// conecta a stream de leitura à processamento  .pipe
//

fs.createReadStream('dados.csv') // chamando função
    .pipe(csv()) // conectando a stream a biblioteca csv()
    .on('data', (row) => { //
        console.log(`ID: ${row.id}, Nome: ${row.nome}, Email: ${row.email}`); //
    })
    .on('end', () => { //
        console.log('Arquivo CSV processado com sucesso!'); // mensagem de verificação para saber se esta correto
    });

 