const fs = require('fs');

// importando biblioteca de captura e manipulação

const cheerio = require('cheerio');

const html = `
<div id="equipe">

    <h1>Equipe de NoSQL:</h1>

        <p>Rafaela</p>
        <p>Wictor</p>
        <p>Carlos</p>
        <p>Lucas</p>
        <p>Jeffersson</p>
        <p>Caio</p>

</div>
`;

const procura = cheerio.load(html);

const div = procura('#equipe').text();
const titulo = procura('#equipe h1').text();
const paragrafo = procura('#equipe p').text();

const resultado = `${div} ${titulo}\n${paragrafo}`;
fs.writeFileSync('resultadoCheerio.csv', resultado, 'utf8');

console.log(resultado);
