'use strict';

const jsdom = require('jsdom');
const { JSDOM } = jsdom;

const formation = (arr) => {
    let res = [];
    arr.forEach( async(e, i) => {
        const dom = new JSDOM(e);
        res[i] = await dom.window.document.querySelector('.phoneNumber').textContent;
    });
    return res;
};


module.exports = formation;