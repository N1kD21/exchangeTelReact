'use strict';

const scrape = require('../lib/scrape.js');


const routes = async () => {
    const res = await scrape();
    require('./db.js')(res);
    return res;
}


module.exports = routes;