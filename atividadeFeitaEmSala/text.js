// instalar node
// instalar package
// 

const fs = require('fs');


// CRIANDO ARQUIVO COM SEU FORMATO, E SEU RESPECTIVO CONTEÚDO

// fs.writeFile(NOME DO ARQUIVO A SER CRIADO, CONTEÚDO A SER CRIADO, () => {
//     console.log('Arquivo de texto criado com sucesso.');
// });

fs.writeFile('lista.txt', 'Lista de compras', () => {
    console.log('Arquivo de texto criado com sucesso.');
});


// ADICIONANDO MAIS CONTEÚDO NO ARQUIVO DIRECIONADO

// fs.appendFile(NOME DO ARQUIVO A SER MODIFICADO, O CONTEÚDO A SER ADICIONADO, () => {
//     console.log('Texto adicionado com sucesso no arquivo respectivo.');
// });

fs.appendFile('lista.txt', '\nFrutas', () => {
    console.log('Texto adicionado com sucesso no arquivo respectivo.');
});


// RENOMEANDO ARQUIVO

// fs.rename(NOME ATUAL DO ARQUIVO + SEU FORMATO, NOVO NOME DO ARQUIVO + SEU FORMATO, () =>{
//     console.log('Arquivo renomeado com sucesso.');
// });

fs.rename('lista.txt', 'Frutas.txt', () => {
    console.log('Arquivo renomeado com sucesso.');
});


// REMOVER ARQUIVO

// fs.unlink(NOME ATUAL DO ARQUIVO + SEU FORMATO, () =>{
//     console.log('Arquivo deletado com sucesso.');
// });

fs.unlink('Frutas.txt', () => {
    console.log('Arquivo deletado com sucesso.');
});


//


