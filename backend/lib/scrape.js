'use strict';
const puppeteer = require('puppeteer');
const formation = require('./formation.js');

const scrape = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // open web page 
  await page.goto('https://minfin.com.ua/currency/auction/usd/buy/kiev/');

  //open lock data from page by click
  await page.evaluate(()=> {
    const rrr = document.querySelectorAll('.phoneNumber');
    rrr.forEach( e => e.click());
  });

  // take data from page by selector
/*
  const funSelector = async (e) => {
    await page.$$eval(e, options => {
      return options.map(option => option.textContent);
    })
  };
*/
  const someContent2 = async (e) => {
    const res = await page.$$eval(e, options => {
      return options.map(option => option.innerHTML);
    })
    return res; 
  }

  const res = await formation(await someContent2('.CardWrapper')); // take all card from web site 
  console.log(res);
  

  // close brower when we are done
  await browser.close();
  return someContent2;
};


module.exports = scrape;