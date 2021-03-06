const { MessageEmbed } = require("discord.js")
module.exports.run = async (bot, message, args) => {
  // properties of the server
  const guildName = message.guild.name;
  const guildID = message.guild.id;
  const guildCreation = message.guild.createdAt;
  const guildDescription = message.guild.description;
  const guildMemberCount = message.guild.memberCount;
  const guildIcon = message.guild.iconURL({ dynamic: true });
  const guildboosts = message.guild.premiumSubscriptionCount;
  const guildChannels = message.guild.channels.cache.size;
  const guildChannelsNoThreads = message.guild.channels.channelCountWithoutThreads;

  //embed for displaying all the properties
  const guildEmbed = new MessageEmbed()
    .setTitle(guildName)
    .setThumbnail(guildIcon)
    .setColor("#007DFF")
    .setDescription(`**Server Description:** ${guildDescription} \n**Server ID:** ${guildID} \n**Time created:** ${guildCreation} \n**Amount of boosts:** ${guildboosts}/14\n**Amount of members:** ${guildMemberCount}`)
    .addField("Channels", `Amount of channels: ${guildChannels} \nAmount of channels (Threads excluded): ${guildChannelsNoThreads}`)
    .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }));

  message.channel.send({ embeds: [guildEmbed] })
}

module.exports.data = {
  name: "serverinfo",
  description: "lists info about the server",
  category: "Info",
  aliases: "guildinfo",
  requires: "None",
  usage: "serverinfo",
  examples: "serverinfo"
}