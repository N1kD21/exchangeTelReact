'use strict';

const fs = require('fs');

module.exports = function (app){
    const checkPath = path => fs.lstatSync(path).isDirectory && fs.existsSync(path);
    app.get('/', (req,res) => {
        //res.end('main');
        const base  = './files/';
        let path    = '';
        if('path' in req.query){
            path = req.query.path;
        }

        if (checkPath(base + path)) {
            let files = fs.readdirSync(base + path);
            res.json(files);
        }
    })
}