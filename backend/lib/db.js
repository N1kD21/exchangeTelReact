'use strict';
const mongoose  = require('mongoose');
const pswd      = require('../../conf/env.js').pswdDB;
const dbURI        = `mongodb+srv://nikoladmit21:${pswd}@cluster0.uqntjne.mongodb.net/?retryWrites=true&w=majority`;
const Card      = require('../models/cards.js');


const dbFun = async (arg) => {
    mongoose.set('strictQuery', false)
    console.log('10. ', arg);
    
    mongoose 
        .connect(dbURI)
        .then((res) => console.log('Connect to DB'))
        .catch((error) => console.log(error))
    
   arg.forEach(e => {
    const card = Card(e);
    card
         .save()
         .then((res) => console.log(res))
         .catch((error) => console.log(error))     
   });
}

module.exports = dbFun;