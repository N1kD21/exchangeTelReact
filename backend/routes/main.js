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
            let files = fs.readdirSync(base + path).map( (item) => {
                const isDir = fs.lstatSync(base + path + '/' + item).isDirectory();
                let size = 0;

                if(!isDir) size = fs.statSync(base + path + '/' + item);
                const sz = () => {
                    let s = 0;
                    if (size.size !== 0 && size.size !== null && size.size !== undefined) s = size.size;
                    return s;
                }
                return {
                    name: item,
                    dir: isDir,
                    size: sz(),
                };
            })
            res.json({
                path: path,
                result: true,
                files: files
            });
        }
    })
}