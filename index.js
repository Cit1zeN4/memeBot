const { Telegraf } = require("telegraf");
const dotenv = require("dotenv");
const isGroup = require("./src/isGroup");
const storeMessage = require("./src/storeMessage");
const isMessageWithImage = require("./src/isMessageWithImage");
const isMessageFromAdmin = require("./src/isMessageFromAdmin");
const prepareMediaGroupData = require("./src/prepareMediaGroupData");
const getPhotoNumbersArray = require("./src/getPhotoNumbersArray");
const getWinnerUsername = require("./src/getWinnerUsername");

let db = [];
let poll;

dotenv.config();

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.telegram.getMe().then((botInfo) => {
  bot.options.username = botInfo.username;
});

bot.start((ctx) =>
  ctx.reply(
    "Привет, скинь мне мем (обязательно картинкой " +
      "и только одной фотографией за одно сообщение)." +
      "каждая новая картинка которую ты скинешь заменяет ту что ты скинул ранее."
  )
);

bot.command("begin", async (ctx) => {
  const message = ctx.message;
  if (isGroup(message)) {
    if (isMessageFromAdmin(message)) {
      if (db.length >= 2) {
        await ctx.replyWithMediaGroup(prepareMediaGroupData(db));
        poll = await ctx.replyWithPoll(
          "Голосуйте за фото",
          getPhotoNumbersArray(db)
        );
      } else ctx.reply("Слишком мало, мемов чтобы начать конкурс");
    } else ctx.reply(`Я подчиняюсь только ${process.env.ADMIN_USERNAME}`);
  }
});

bot.command("end", async (ctx) => {
  const pollResult = await ctx.stopPoll(poll.message_id);
  const winner = getWinnerUsername(pollResult, db);
  ctx.reply(`@${winner} получает титул короля мемов`);
});

bot.on("message", (ctx) => {
  const message = ctx.message;
  if (!isGroup(message)) {
    if (isMessageWithImage(message)) {
      storeMessage(message, db);
      ctx.reply("Я сохранил твой мем, но не гарантирую тебе победы");
    } else ctx.reply("Отправь мне мем картинкой еблан");
  }
});

bot.launch().then(() => console.log("Bot started"));
