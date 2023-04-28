const TelegramBot = require('node-telegram-bot-api');
const ENV = require('../../conf/env.js');

const midleware = require('../lib/midleware.js');

// replace the value below with the Telegram token you receive from @BotFather
const token = ENV.tokenTelegramBot;

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});

// Listen for any kind of message. There are different kinds of
// messages.
bot.on('message', async (msg) => {
  const chatId  = msg.chat.id;
  
  const resp    = await midleware(chatId); // the captured "whatever"
  // send a message to the chat acknowledging receipt of their message
  resp.forEach((e) => {

    bot.sendMessage(chatId, `  phone: ${e.phone},
    rates: { sale: ${e.rates.sale}, purchase: ${e.rates.purchase} },
    define: ${e.define},
    subway: ${e.subway},
    text_address: ${e.text_address},
    publication_time: ${e.publication_time}
    `);
  })

});