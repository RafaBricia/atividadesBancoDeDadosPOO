
const fs = require('fs');
const csvWriter = require('csv-writer').createObjectCsvWriter;
const csvParser = require('csv-parser');

const estudantes = [
    "Maria",
    "João",
    "Ana",
    "Carlos",
    "Fernanda"
];

const conteudoCSV = 'estudantes\n' + estudantes.join('\n');

fs.writeFile('estudantes.csv', conteudoCSV, () => {
    console.log('Arquivo estudantes.csv criado com sucesso!');
});

const questoes = [
    "Qual a capital da França?",
    "Quem escreveu 'Romeu e Julieta'?",
    "Quanto é 4*9?",
    "Quais são os 5 reinos da biologia?",
    "Em que ano o Brasil sofreu um ataque a democracia e foi instaurado a ditadura? E em que ano o Brasil voltou a ser democrático?",
    "Por quantos estados o Brasil é formado?"
]

function sortearQuestao(estudantes) {
    return estudantes.map(estudante => {
        const indexAleatorio = Math.floor(Math.random() * questoes.length);
        const questao = questoes.splice(indexAleatorio, 1)[0];
        return { estudante, questao };
    });
}

function lerEstudantesDeCSV(caminho,callback) {
    const estudantes = [];
    fs.createReadStream(caminho)
    .pipe(csvParser())
    .on('data',(row) => estudantes.push(row.estudantes))
    .on('end',() => callback(estudantes));
}

function salvarArquivoTXT(dados, caminho) {
    const conteudo = dados.map(item => `${item.estudante}:${item.questao}`).join('\n');
    fs.writeFileSync(caminho, conteudo)
}

const writer = csvWriter({
    path: 'questoes.csv',
    header: [
        {
            id: 'estudante', title: 'Estudante'
        },
        {
            id: 'questao', title: 'Questao'
        }
    ]
});

lerEstudantesDeCSV('estudantes.csv',(estudante) =>{
    const dadosSorteados = sortearQuestao(estudantes);
    
    writer.writeRecords(dadosSorteados).then(() => {
        console.log('Arquivo CSV criado com sucesso!');
    })

    salvarArquivoTXT(dadosSorteados,'resultado.txt');
    console.log('Arquivo txt criado com sucesso!');
});

