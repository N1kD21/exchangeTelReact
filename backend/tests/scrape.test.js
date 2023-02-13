'use strict';

const scrape = require('../lib/scrape.js');

test('there is a new flavor idea', async () => {
    // is res define
    expect(await scrape()).toBeDefined();
});

test('there is a new flavor idea', () => {
    //is it array?
    //expect(scrape()).toHaveLength();
});
