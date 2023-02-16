'use strict';
const mongoose  = require('mongoose');
const pswd      = require('../../conf/env.js').pswdDB;
const db = `mongodb+srv://nikoladmit21:${pswd}@cluster0.uqntjne.mongodb.net/?retryWrites=true&w=majority`;

const dbFun = async (arg) => {
    let res = '';
    mongoose.set('strictQuery', false)
    mongoose 
        .connect(db)
        .then((res) => {
            res = 'Connect to DB';            
            console.log('Connect to DB')
        })
        .catch((error) => console.log(error))
    return res;
}


module.exports = dbFun;