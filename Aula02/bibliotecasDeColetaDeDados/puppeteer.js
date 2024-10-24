// interação e manipulação de HTML, páginas web completas, uso de api
// instalar npm i puppeteer


// importando biblioteca 

const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://google.com.br')

    const content = await page.$eval('div', el => el.textContent);

    console.log(content);

    await browser.close();
})();
