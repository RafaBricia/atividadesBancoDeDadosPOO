// // importando biblioteca fs - usada para manipular, criar e remover arquivos 

const fs = require('fs');


// // criando lista em formato de .JSON de dados

// const jsonDados = [
//     {"id": 101, "nome": "Laptop", 
//         "detalhes":{"marca":"Dell", "preço": 1500}
//     },
//     {"id": 102, "nome": "Smartphone", 
//         "detalhes":{"marca":"Samsung", "preço": 700}
//     },
//     {"id": 103, "nome": "Tablet"
//     }
// ];


// // criando o arquivo 'produtos.json', e gravar usando a funcionalidade para transcrevé-lo para string JSON, null é função de substituição opcional chamada replacer, define o que será filtrado ou alterado nas propriedades incluídas no arquivo JSON. E 2 é a identação do arquivo JSON

// fs.writeFileSync('produtos.json', JSON.stringify(jsonDados, null,2));
// console.log('Arquivo JSON gerado com sucesso!');


// escrevendo no arquivo através da função dreadFle da biblioteca fs

// fs.readFile('produtos.json','utf8',(err,data) =>{
//     if(err) throw err;
//     const produtos = JSON.parse(data);

//     produtos.forEach(produto => {
//         console.log(`ID: ${produto.id}, Nome: ${produto.nome}`);
//         if(produto.detalhes){
//             console.log(`Marca: ${produto.detalhes.marca}, Preço: ${produto.detalhes.preço}`);
//         }
//     });
// });