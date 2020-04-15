const puppeteer = require('puppeteer');

const SEARCH_INPUT = '#Geral > div > div > span:nth-child(3) > label > input';
const SEARCH_BUTTON = '#Geral > div > div > div.btnform > input';
const CEP_COLUMN = 'body > div.back > div.tabs > div:nth-child(2) > div > div > div.column2 > div.content > div.ctrlcontent > table > tbody > tr > td:nth-child(4)';
const NEXT_BUTTON = 'body > div.back > div.tabs > div:nth-child(2) > div > div > div.column2 > div.content > div.ctrlcontent > div:nth-child(11) > a';

const getCeps = async (page, ceps = []) => {
  await page.waitForSelector(CEP_COLUMN);

  const pageCeps = await page.evaluate((CEP_COLUMN) => {
    const ceps = document.querySelectorAll(CEP_COLUMN);
    return Array.from(ceps).map((cep) => cep.innerHTML.replace('-', ''));
  }, CEP_COLUMN);

  ceps.push(...pageCeps);

  if (await page.$(NEXT_BUTTON) !== null) {
    await page.click(NEXT_BUTTON);
    await page.waitFor(2000);
    return getCeps(page, ceps);
  }

  return ceps;
};

module.exports = async (address) => {
  let browser;
  let page;

  try {
    browser = await puppeteer.launch({ headless: true });
    page = await browser.newPage();

    await page.goto('http://www.buscacep.correios.com.br/sistemas/buscacep/buscaCepEndereco.cfm', { waitUntil: 'networkidle2' });
    await page.focus(SEARCH_INPUT);
    await page.keyboard.type(address);
    await page.click(SEARCH_BUTTON);
  
    const ceps = await getCeps(page);
  
    return ceps;
  } finally {
    if (page) await page.close();
    if (browser) await browser.close();
  }
};
