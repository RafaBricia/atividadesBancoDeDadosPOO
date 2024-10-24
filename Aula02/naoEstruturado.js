const fs = require('fs');

// const logData = `
// INFO - Login do usuário criado com sucesso
// ERROR - Falha na conexão com  base de dados
// DEBUG - Requisição de depuração do arquivo
// `;

// fs.writeFileSync('log.txt', logData.trim());
// console.log('Arquivo de log gerado com sucesso!');

fs.readFile('log.txt', 'utf8', (err,data) => {
    if (err) throw err;
    const log = data.trim().split('\n');

    log.forEach(entry => {
        const regex = /^(\w+) - (.*)$/;
        const match = entry.match(regex);

        if(match){
            const [nivel, mensagem] = match;
            console.log(`Nível: ${nivel}` );
            console.log(`Mensagem: ${mensagem}`);
            console.log('---');
        }
    });
});