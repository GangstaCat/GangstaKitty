const fs = require('node:fs');
const path = require('node:path');

const { Client, Collection, GatewayIntentBits, ActivityType } = require("discord.js");
const dotenv = require("dotenv")
dotenv.config();


const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.DirectMessages
  ]
});

client.commands = new Collection();

const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
  const filePath = path.join(commandsPath, file);
  const command = require(filePath);
  client.commands.set(command.data.name, command);
}

client.once("ready", () => {
  console.log("bot is online")
  client.user.setActivity(`Guys i finally made slash commands!!!`, { type: ActivityType.Streaming, url: "https://gangstacat.net" })
})

client.on('interactionCreate', async interaction => {
  if (!interaction.isChatInputCommand()) return;

  const command = interaction.client.commands.get(interaction.commandName);

  if (!command) return;

  try {
    await command.execute(interaction);
  } catch (error) {
    console.error(error);
    await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
  }
});

client.on("guildMemberAdd", guildMember => {
  if (guildMember.guild.id === "914151815749181471") { // 914151815749181471
    const embed = new MessageEmbed()
      .setColor("007DFF")
      .setTitle(`Welcome ${guildMember.user.tag}!`)
      .setDescription("Welcome to this awesome server")
      .setThumbnail(guildMember.user.displayAvatarURL({ dynamic: true }))
    const memberRole = guildMember.guild.roles.cache.get("914152245799579648")
    guildMember.guild.channels.cache.get("914151816386727948").send({ embeds: [embed] }) // 914151816386727948
    guildMember.roles.add(memberRole)
    const memberVC = guildMember.guild.channels.cache.get("953561276322295820");
    memberVC.setName(`Member Count: ${guildMember.guild.memberCount}`);
  }
});

client.on("guildMemberRemove", guildMember => {
  if (guildMember.guild.id === "914151815749181471") {
    guildMember.guild.channels.cache.get("914151816386727948").send({ content: `${guildMember.user.tag} has left the server :(` })
    const memberVC = guildMember.guild.channels.cache.get("953561276322295820");
    memberVC.setName(`Member Count: ${guildMember.guild.memberCount}`);
  }
})

client.login(process.env.token)