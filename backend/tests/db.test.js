'use strict';

//const dbFun   = require('../lib/db.js');
const pswd    = require('../../conf/env.js').pswdDB;
const dbURI   = `mongodb+srv://nikoladmit21:${pswd}@cluster0.uqntjne.mongodb.net/?retryWrites=true&w=majority`;
const dbName  = 'test';

/*
test('there is a new flavor idea', async () => {
    // is res define
    expect(await dbFun()).toBeDefined();
});
*/

const {MongoClient} = require('mongodb');

describe('insert', () => {
  let connection;
  let db;

  // connect to mongo and take DB in variable
  beforeAll(async () => {
    connection = await MongoClient.connect(dbURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    db = await connection.db(dbName);
  });

  afterAll(async () => {
    await connection.close();
  });

  it('should insert a doc into collection', async () => {
    //take collection from db
    const cards = db.collection('cards');
    //create example card to find it in collection
    const mockCard = {_id: '63ef6cc5c2a9e6c761806f5d', subway: 'Олимпийская'};
    
    const insertedUser = await cards.findOne({_id: '63ef6cc5c2a9e6c761806f5d'});
    expect(insertedUser).toEqual(mockCard);
  });
});