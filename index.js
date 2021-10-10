const { Telegraf } = require("telegraf");

const bot = new Telegraf(process.env.BOT_TOKEN);
bot.start((ctx) => ctx.reply("hello bro"));
bot.launch().then(() => console.log("Bot started"));
