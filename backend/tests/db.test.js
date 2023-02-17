'use strict';

const dbFun = require('../lib/db.js');

test('there is a new flavor idea', async () => {
    // is res define
    expect(await dbFun()).toBeDefined();
});
