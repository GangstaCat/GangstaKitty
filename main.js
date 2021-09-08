console.log(process.version)

//variables
const { Client, Intents, Collection } = require("discord.js");
const bot = new Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES
  ]
});

const prefix = '+';

const fs = require('fs');


bot.commands = new Collection();

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
bot.on("messageCreate", async message => {
  if (!message.content.toLowerCase().startsWith(prefix.toLowerCase()) || message.author.bot) return;
  const args = message.content.slice(prefix.length).trim().split(/ +/),
    commandName = args.shift().toLowerCase();

  let command = bot.commands.get(commandName) || bot.commands.find(cmd => cmd.data.aliases.includes(commandName));
  if (command) {
    try {
      await command.run(bot, message, args);
    } catch (e) {
      message.channel.send({ content: "an error occured while trying to execute that command <a:confuzzled:860924268370722846>" })
      console.error(`${message.guild.name} - #${message.channel.name} - ${message.channel.id}-${message.id}\n"${message.content}"\n`, e.stack);
    }
  }
}


  //the bot login. crucial for getting the bot online
  , bot.login("ODQ3NzQzMDEyODUxMjg2MDI3.YLCgNA.snyhHtuTwGbmEl4RCZC0g_2Xnh0"));