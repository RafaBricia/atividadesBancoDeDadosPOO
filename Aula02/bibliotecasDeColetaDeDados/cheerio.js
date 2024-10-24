// biblioteca que fornece api, e permite que selecione e manipule arquivos HTML, com dados em .js
// instalei a biblioteca com o comando: npm i cheerio


// importando biblioteca 

const cheerio = require('cheerio');


// construindo variável com estrutura de HTML

const html = `
<ul id="frutas">
    <li class="primeira">Uva<li>
    <li class="segunda">Laranja<li>
    <li class="terceira">Banana<li>
</ul>
`;

const procura = cheerio.load(html); // criando variável de procura com o método 'load' e passando o parametro

const conteudo = procura('#frutas .segunda').text(); // criando variável 'conteudo' que chama a variável 'procura'  no parametro colocamos o que estamos procurando

console.log(conteudo); // imprimindo no console