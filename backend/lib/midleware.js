'use strict';

const scrape = require('../lib/scrape.js');


const routes = async (who) => {
    const res = await scrape();
    if (who === '594504840'){
        require('./db.js')(res);
    } 
    return res;
}


module.exports = routes;