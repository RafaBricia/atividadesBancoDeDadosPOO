// A biblioteca JSDOM manipula HTML e simula o ambiente de navegação no NODE.js
// É necessário ter NODE.js instalado
// E instalar 'npm i jsdom


// importando a biblioteca JSOM

const {JSDOM} = require('jsdom');


// estruturando a variável 'html' que será manipulada posteriormente

const html = `
    <html>
        <body>
            <p>Maicon + Rafa = s2</p>
        </body>
    </html>
`;


const dom = new JSDOM(html); // criando variável 'dom', que está transcrevendo JSOM (criado mais acima) que esta escrito em HTML para JSDOM.

const paragrafo = dom.window.document.querySelector("p").textContent; // criando variável 'paragrafo' onde a função é "pegar" o conteúdo de um elemento presente no HTML.


console.log(paragrafo); // imprimindo no console a variável criada