//variables
require("dotenv").config();
const { Client, Intents, Collection } = require("discord.js");
const bot = new Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES
  ]
});

const prefix = '+';

const { MessageActionRow, MessageButton } = require('discord.js');

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
  console.log("All commands loaded. Going online");
}

//online log and presence
bot.on("ready", () => {
  console.log('GangstaKitty is online!');
  bot.user.setActivity(`+help. suffering`, { type: 'STREAMING', url: "https://twitch.tv/gangstacatttv" })
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
      message.channel.send({ content: "an error occured while executing that command <a:confuzzled:860924268370722846>" })
      console.error(`${message.guild.name} - #${message.channel.name} - ${message.channel.id}-${message.id}\n"${message.content}"\n`, e.stack);
    }
  }
}

  , bot.on("interactionCreate", async interaction => {
    if (!interaction.isCommand()) return;

    const command = client.commands.get(interaction.commandName);

    if (!command) return;

    try {
      await command.execute(interaction);
    } catch (error) {
      console.error(error);
      await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
    }

  })

  //triggers
  , bot.on("messageCreate", m => {
    if (m.author.bot) return; if (m.content == "Gangsta") { m.channel.send({ content: "https://cdn.discordapp.com/attachments/856832353409302538/889431236693614642/GangstaCat.png" }) }
  })
  , bot.on("messageCreate", m => {
    if (m.author.bot) return; if (m.content == "stfu") { m.channel.send({ content: "https://cdn.discordapp.com/attachments/553322925395017732/739837616014491698/video0.mp4" }) }
  })
  ,
  //buttons

  // bot.on('interactionCreate', async interaction => {
  // 	if (!interaction.isCommand()) return;

  // 	if (interaction.commandName === 'ping') {
  // 		const row = new MessageActionRow()
  // 			.addComponents(
  // 				new MessageButton()
  // 					.setCustomId('primary')
  // 					.setLabel('Primary')
  // 					.setStyle('PRIMARY'),
  // 			);

  // 		await interaction.reply({ content: 'Pong!', components: [row] });
  // 	}
  // }))


  //the bot login. crucial for getting the bot online
  // bot.login(process.env.token))
  bot.login(process.env.token))