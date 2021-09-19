const { MessageEmbed } = require("discord.js")
module.exports.run = async (bot, message, args) => {
  // properties of the server
  const guildName = message.guild.name;
  const guildID = message.guild.id;
  const guildCreation = message.guild.createdAt;
  const guildDescription = message.guild.description;
  const guildMemberCount = message.guild.memberCount;
  const serverIcon = message.guild.iconURL({ dynamic: true })
  const guildChannels = message.guild.channels.cache.filter(channel => channel.type !== "GUILD_CATEGORY")
    .sort((a, b) => a.position - b.position)
    .map(channel => channel.toString())
    .join("\n");

  //embed for displaying all the properties
  const guildEmbed = new MessageEmbed()
    .setTitle(guildName)
    .setThumbnail(serverIcon)
    .setColor("#007DFF")
    .setDescription(`**Server Description:** ${guildDescription} \n**Server ID:** ${guildID} \n**Time created:** ${guildCreation} \n**Amount of members:** ${guildMemberCount} \n**Channels:** ${guildChannels}`)
    .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }));

  message.channel.send({ embeds: [guildEmbed] })
}

module.exports.data = {
  name: "serverinfo",
  description: "lists info about the server",
  category: "Info",
  aliases: ["si", "guildinfo", "gi"],
  usage: "serverinfo",
  examples: "serverinfo"
}