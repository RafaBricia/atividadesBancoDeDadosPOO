const csv = require('csv-parser');
const fs = require('fs');
const writer = require('csv-writer').createObjectWriter;

const alunos = [{
    "nome": "Rafaela",
    "notas": [8.7, 9.7, 10],
    "cursos": "sistemas de informação"
},
{
    "nome": "Maicon",
    "notas": [9.5, 10, 8.1],
    "cursos": "sistemas de informação"
},
{
    "nome": "Bianca",
    "notas": [8.6, 7.9, 8.9],
    "cursos": "fisioterapia"
},
{
    "nome": "Gustavo",
    "notas": [9.1, 7.9, 8.2],
    "cursos": "informática"
},
]