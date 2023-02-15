'use strict';

const cheerio = require('cheerio');

const formation = (arr) => {
    arr.forEach( (e, i) => {
        const $ = cheerio.load(e);
        let str1 = $('.point-currency').text();
        // put data in object
        arr[i] = {
            phone: $('.phoneNumber').text().replace(' ', ''),
            rates: {
                sale: str1.slice(0, 5),
                purchase: str1.slice(6, 11),
            },
            define: str1.slice(11),
            subway: $('.subway').text(),
            text_address: $('.text-address').text(),
            publication_time: $('.point-interactions').text(),
        };
    });
    return arr;
};



module.exports = formation;