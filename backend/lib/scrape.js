'use strict';

const puppeteer = require('puppeteer');
const formation = require('./formation.js');

const scrape = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // open web page 
  await page.goto('https://minfin.com.ua/currency/auction/usd/buy/kiev/');

  //open lock data from page by click
  page.evaluate(()=> {
    const rrr = document.querySelectorAll('.phoneNumber');
    rrr.forEach( e => e.click());
  });

  // take data from page by selector
  const contentOfPage = async (e) => {
    return await page.$$eval(e, options => options.map(option => option.innerHTML))
  }

  const res = await formation(await contentOfPage('.CardWrapper')); // take all card from web site 

  // close brower when we are done
  browser.close();
  return res;
};


module.exports = scrape;