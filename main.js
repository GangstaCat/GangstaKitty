//variables
const { Client, Intents, Collection, MessageEmbed } = require("discord.js");
const bot = new Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MEMBERS
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
bot.on("ready", async () => {
  console.log('GangstaKitty is online!');
  bot.user.setActivity(`+help || eating code`, { type: 'LISTENING' })
});

bot.on("guildMemberAdd", guildMember => {
  if (guildMember.guild.id === "914151815749181471") {
    const embed = new MessageEmbed()
      .setColor("007DFF")
      .setTitle(`Welcome ${guildMember.user.tag}!`)
      .setDescription("Welcome to this awesome server")
      .setThumbnail(guildMember.user.displayAvatarURL({ dynamic: true }))
    const memberRole = guildMember.guild.roles.cache.get("914152245799579648")
    guildMember.guild.channels.cache.get("914151816386727948").send({ embeds: [embed] })
    guildMember.roles.add(memberRole)
  }
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
      message.channel.send({ content: "an error occured while executing that command" })
      console.error(`${message.guild.name} - #${message.channel.name} - ${message.channel.id}-${message.id}\n"${message.content}"\n`, e.stack);
    }
  }
});


//triggers
bot.on("messageCreate", m => {
  if (m.author.bot) return; if (m.content === "Gangsta") { m.channel.send({ content: "https://cdn.discordapp.com/attachments/856832353409302538/889431236693614642/GangstaCat.png" }) }
});
bot.on("messageCreate", m => {
  if (m.author.bot) return; if (m.content === "stfu") { m.channel.send({ content: "https://cdn.discordapp.com/attachments/553322925395017732/739837616014491698/video0.mp4" }) }
});

bot.login("OTM4ODA4Njc3NTc2NjE4MDA0.Yfvrtg.i_9z7LpGFNkcYVLuZDfNB-1ns_c")