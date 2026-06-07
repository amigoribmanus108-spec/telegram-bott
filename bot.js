const { Telegraf } = require('telegraf');
require('dotenv').config();

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) => {
  ctx.reply(`👋 স্বাগতম ${ctx.from.first_name}! আমি Dustu বট।`);
});

bot.help((ctx) => {
  ctx.reply(`
/start - শুরু করুন
/help - সাহায্য
/ping - পিং টেস্ট
/hello - সালাম
/time - সময়
/joke - জোক
  `);
});

bot.command('ping', (ctx) => {
  ctx.reply('🏓 পং!');
});

bot.command('hello', (ctx) => {
  ctx.reply(`👋 আস্সালামু আলাইকুম ${ctx.from.first_name}!`);
});

bot.command('time', (ctx) => {
  const now = new Date();
  ctx.reply(`⏰ সময়: ${now.toLocaleString('bn-BD')}`);
});

bot.command('joke', (ctx) => {
  const jokes = [
    '🎭 প্রোগ্রামার কেন ঘুমায়? কম্পিউটার থেক করে!',
    '💻 বাগ কি? ভুল কোড!'
  ];
  ctx.reply(jokes[Math.floor(Math.random() * jokes.length)]);
});

bot.on('text', (ctx) => {
  const msg = ctx.message.text.toLowerCase();
  if (msg.includes('হাই')) {
    ctx.reply('👋 হাই! কেমন আছেন?');
  }
});

bot.launch();
console.log('✅ বট চালু হয়েছে!');

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
