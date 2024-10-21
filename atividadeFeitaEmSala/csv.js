// instalar csv
// npm install csv-writer csv-parser

// importar biblioteca

const csvWriter = require('csv-writer').createObjectCsvWriter;
 
// Criando lista de alunos para posteriormente converter essa lista em .js para .csv


const alunos = [
    {
        nome: "João Marcos",
        idade: 21,
        notas: [85,90,92]
    },
    {
        nome:"Jaqueline",
        idade: 22,
        notas: [88,91,95]
    }
];

// Leitura de dados no formato .csv

const writer = csvWriter({
    path: 'alunos.csv',
    header: [
        {id: 'nome', title:'Nome'},
        {id: 'idade', title:'Idade'},
        {id: 'notas', title: 'Notas'}
    ]
});

// Converter dados para .csv

const converte = alunos.map(aluno => ({
    nome: aluno.nome,
    idade: aluno.idade,
    notas: aluno.notas.join(', ')
}));

// Salvar os dados em csv

writer.writeRecords(converte).then(() => {
    console.log('Arquivo CSV criado com sucesso.');
});
