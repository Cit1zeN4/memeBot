const { Telegraf } = require("telegraf");
const dotenv = require("dotenv");
dotenv.config();

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.telegram.getMe().then((botInfo) => {
  bot.options.username = botInfo.username;
  console.log(botInfo);
});

bot.start((ctx) => ctx.reply("hello bro"));

bot.command("gg", (ctx) => ctx.reply("gg"));
bot.launch().then(() => console.log("Bot started"));
