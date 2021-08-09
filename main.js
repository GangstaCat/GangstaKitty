//variables
const Discord = require("discord.js");

const bot = new Discord.Client();

const prefix = '+';

const fs = require('fs');

bot.commands = new Discord.Collection();

//file reader
let [categoryCount, totalCommandCount] = [0, 0];
for (let folder of fs.readdirSync("./commands/")) {
  console.log(`Loading category ${++categoryCount}: ${folder}`);
  let commandCount = 0;
  for (let file of fs.readdirSync(`./commands/${folder}/`).filter(file => file.endsWith(".js"))) {
    let command = require(`./commands/${folder}/${file}`);
    bot.commands.set(command.data.name, command);
    console.log(`(${++totalCommandCount}) ${categoryCount}-${++commandCount}: ${file}`);
  }
}

//online log and presence
bot.on("ready", () => {
  console.log('GangstaKitty is online!');
  bot.user.setActivity('with GangstaCat. +help', { type: 'PLAYING' })
});

//command handler
bot.on("message", async msg => {
  if (!msg.content.toLowerCase().startsWith(prefix.toLowerCase()) || msg.author.bot) return;
  const args = msg.content.slice(prefix.length).trim().split(/ +/),
    commandName = args.shift().toLowerCase();

  let command = bot.commands.get(commandName) || bot.commands.find(cmd => cmd.data.aliases.includes(commandName));

  if (command) {
    try {
      await command.run(bot, msg, args);
    } catch (e) {
      msg.channel.send("an error occured while trying to execute that command <a:confuzzled:860924268370722846>")
      console.error(`${msg.guild.name} - #${msg.channel.name} - ${msg.channel.id}-${msg.id}\n"${msg.content}"\n`, e.stack);
    }
  }
}

  //the bot login. crucial for getting the bot online
  , bot.login(process.env.token));