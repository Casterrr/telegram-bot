require('dotenv-safe').config();
const { Telegraf } = require('telegraf')
 
const bot = new Telegraf(process.env.BOT_TOKEN);

bot.telegram.sendMessage(process.env.CHAT_ID, 'Olha a mensagem!');

bot.start((ctx) => ctx.reply('Welcome'));
bot.help((ctx) => ctx.reply('Send me a sticker'));
bot.on('sticker', (ctx) => ctx.reply('👍'));
bot.on.
bot.hears('hi', (ctx) => ctx.reply('Hey there'));
bot.launch();

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));